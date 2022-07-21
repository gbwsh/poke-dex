import { useEffect, useState } from "react";
import API_URL from "../Api";
import PokemonList from "./PokemonList";
import SearchBar from "./SearchBar";

const SearchPage = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const requestPokemon = async () => await fetch(API_URL + "?limit=20000");

  useEffect(() => {
    requestPokemon()
      .then((response) => response.json())
      .then((response) => {
        for (let pokemon of response.results) {
          setAllPokemon((oldArr) => [...oldArr, pokemon.name]);
        }
      });
  }, []);

  return <SearchBar allPokemon={allPokemon} />;
};

export default SearchPage;
