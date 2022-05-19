import { useEffect, useState } from "react";
import API_URL from "../Api";
import PokemonList from "./PokemonList";

const PokemonResults = () => {
  const [pokemonResults, setPokemonResults] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState(null);

  const requestPokemon = async () => await fetch(API_URL);

  useEffect(() => {
    requestPokemon()
      .then((response) => response.json())
      .then((response) => {
        setPokemonResults(response.results);
        setNextPage(response.next);
        setPrevPage(null);
      });
  }, []);

  async function requestPage(page) {
    if (page) {
      const res = await fetch(page);
      const json = await res.json();

      setPokemonResults(json.results);
      setNextPage(json.next);
      setPrevPage(json.previous);
    } else console.log("no more pages");
  }

  const logState = () => {
    console.log(nextPage, "next page");
    console.log(prevPage, "prevpage");
    console.log(pokemonResults, "pokemon results");
  };

  return (
    <div>
      <input type="number"></input>
      <button onClick={() => requestPage(prevPage)}>{"<"}</button>
      <button onClick={() => requestPage(nextPage)}>{">"}</button>
      <button onClick={logState}>Log state</button>
      <PokemonList pokemonResults={pokemonResults} />
    </div>
  );
};

export default PokemonResults;
