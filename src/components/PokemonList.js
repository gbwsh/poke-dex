import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import capitalizeFirstLetter from "./capitalizeFirstLetter";

const PokemonList = ({ currentPokemonList }) => {
  const { id } = useParams();
  const [clicked, setClicked] = useState(false);

  const useOutsideClick = (callback) => {
    const ref = useRef();

    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener("click", handleClick, true);

      return () => {
        document.removeEventListener("click", handleClick, true);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);

    return ref;
  };

  const handleClickOutside = () => {
    setClicked(false);
  };
  const ref = useOutsideClick(handleClickOutside);

  return currentPokemonList ? (
    currentPokemonList.map((pokemon) => {
      return (
        <div key={pokemon.name} ref={ref}>
          <Link
            to={`/details/${pokemon.name}`}
            className="text-center"
            onClick={() => setClicked(true)}
          >
            <h1 className="bg-[#ffffff] p-2 text-xl hover:bg-sky-500">
              {capitalizeFirstLetter(pokemon.name)}
            </h1>
            {pokemon.name === id && clicked ? <Outlet /> : <></>}
          </Link>
        </div>
      );
    })
  ) : (
    <h1>loading pokemans...</h1>
  );
};

export default PokemonList;
