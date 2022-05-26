import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import API_URL from "../Api";
import PokemonList from "./PokemonList";

const PokemonResults = () => {
  const [pokemonResults, setPokemonResults] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState(null);

  const requestPokemon = async () => await fetch(API_URL);

  let navigate = useNavigate();

  useEffect(() => {
    homePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const homePage = () => {
    requestPokemon()
      .then((response) => response.json())
      .then((response) => {
        setPokemonResults(response.results);
        setNextPage(response.next);
        setPrevPage(null);
      });
  };

  async function requestPage(page) {
    if (page) {
      const res = await fetch(page);
      const json = await res.json();

      setPokemonResults(json.results);
      setNextPage(json.next);
      setPrevPage(json.previous);
    } else console.log("no more pages");
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomPokemon = () => {
    navigate(`../details/${getRandomInt(898)}`, { replace: true });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-900 text-center text-red-50 w-full flex justify-center">
        <button className="w-auto" onClick={() => requestPage(prevPage)}>
          {"<"}
        </button>
        <button onClick={(e) => homePage()}>Home</button>
        <button onClick={() => requestPage(nextPage)}>{">"}</button>
        <div>
          <button onClick={randomPokemon}>Random Pokemon</button>
        </div>
      </div>
      <div className="bg-gray-800 w-full grid xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
        <PokemonList pokemonResults={pokemonResults} />
      </div>
      <Outlet />
    </div>
  );
};

export default PokemonResults;
