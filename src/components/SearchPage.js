import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import API_URL from "../Api";
import PokemonList from "./PokemonList";
import SearchBar from "./SearchBar";

const SearchPage = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [currentPokemonList, setCurrentPokemonList] = useOutletContext();
  const requestPokemon = async () => await fetch(API_URL + "?limit=20000");

  useEffect(() => {
    requestPokemon()
      .then((response) => response.json())
      .then((response) => {
        for (let pokemon of response.results) {
          setCurrentPokemonList([...currentPokemonList, pokemon.name]);
        }
      });
  }, []);

  return currentPokemonList ? (
    <SearchBar allPokemon={currentPokemonList} />
  ) : (
    <h1>loading</h1>
  );
};

export default SearchPage;
