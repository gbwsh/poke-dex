import { useEffect, useState } from "react";
import PokemonDetail from "./PokemonDetail";

const PokemonResults = () => {
  const [pokemonResults, setPokemonResults] = useState([]);
  // const [searchOffset, setSearchOffset] = useState(0);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  async function requestPokemon() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const json = await res.json();

    setPokemonResults(json.results);
    setNextPage(json.next);
    setPrevPage(null);
  }

  useEffect(() => {
    requestPokemon();
  }, []);

  async function requestNextPage() {
    if (nextPage) {
      const res = await fetch(nextPage);
      const json = await res.json();

      setPokemonResults(json.results);
      setNextPage(json.next);
      setPrevPage(json.previous);
    } else console.log("no more new pages");
  }

  async function requestPrevPage() {
    if (prevPage) {
      const res = await fetch(prevPage);
      const json = await res.json();

      setPokemonResults(json.results);
      setNextPage(json.next);
      setPrevPage(json.previous);
    } else console.log("no more prev pages");
  }

  const logState = () => {
    console.log(nextPage, "next page");
    console.log(prevPage, "prevpage");
    console.log(pokemonResults, "pokemon results");
  };

  return (
    <div>
      <input type="number"></input>
      <button onClick={requestPokemon}>Request Pokemon</button>
      <button onClick={requestNextPage}>Request next page</button>
      <button onClick={requestPrevPage}>Request prev page</button>
      <button onClick={logState}>Log state</button>
      {pokemonResults.map((pokemon) => (
        <div key={pokemon.name}>
          <h2>{pokemon.name}</h2>
          <h3>{pokemon.url}</h3>
        </div>
      ))}
    </div>
  );
};

export default PokemonResults;
