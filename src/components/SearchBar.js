import { useEffect, useState } from "react";
import allPokemonNames from "./allPokemonNames";

const SearchBar = () => {
  const [searchText, setSearch] = useState("");
  const [options, setOptions] = useState();

  const testF = () => {
    setOptions(
      allPokemonNames.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      )
    );
  };

  useEffect(() => {
    testF();
  }, [searchText]);

  return (
    <div>
      <input
        placeholder="Search fo' pokemon"
        onChange={(e) => setSearch(e.target.value)}
        value={searchText}
        className="text-black"
      />
      {options && options.map((pokemon) => <h3>{pokemon}</h3>)}
    </div>
  );
};

export default SearchBar;
