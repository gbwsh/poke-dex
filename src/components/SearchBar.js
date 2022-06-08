import { useState } from "react";

const SearchBar = ({ allPokemon }) => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = [];

  const autoComplete = (input) => {
    if (input === "") {
      return [];
    } else results = setResults(allPokemon.find(searchText));
  };

  return <input onChange={(e) => setSearchText(e.target.value)} />;
};

export default SearchBar;
