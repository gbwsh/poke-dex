import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../Api";
import PokemonList from "./PokemonList";

const PokemonResults = () => {
  const [pokemonResults, setPokemonResults] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState(null);

  const requestPokemon = async () => await fetch(API_URL);

  useEffect(() => {
    homePage();
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

  return (
    <div>
      <button onClick={() => requestPage(prevPage)}>{"<"}</button>
      <button onClick={(e) => homePage()}>Home</button>
      <button onClick={() => requestPage(nextPage)}>{">"}</button>
      <Link to={`/details/${getRandomInt(898)}`}>
        <button>Random Pokemon</button>
      </Link>
      <PokemonList pokemonResults={pokemonResults} />
    </div>
  );
};

export default PokemonResults;
