import { Link, useOutletContext } from "react-router-dom";
import capitalizeFirstLetter from "./capitalizeFirstLetter";

const PokemonList = () => {
  const [currentPokemonList, setCurrentPokemonList] = useOutletContext();
  return currentPokemonList ? (
    currentPokemonList.map((pokemon) => {
      return (
        <div className="m-auto" key={pokemon.name}>
          <Link to={`/details/${pokemon.name}`} className="text-center">
            <h1 className="bg-[#fafafa] hover:bg-[#f0f0f0] p-2 text-xl aspect-square w-48">
              {capitalizeFirstLetter(pokemon.name)}
            </h1>
          </Link>
        </div>
      );
    })
  ) : (
    <>
      <h1>loading pokemans...</h1>
      <button onClick={() => console.log(currentPokemonList)}>log</button>
    </>
  );
};

// const PokemonList = () => <h1>hello</h1>;

export default PokemonList;
