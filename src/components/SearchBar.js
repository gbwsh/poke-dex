import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import allPokemonNames from "../allPokemonNames";

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
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value={searchText}
        className="text-black w-full"
      />
      <div className="inline-block relative w-full">
        <div
          className="absolute z-10 hover:block"
          onClick={() => setSearch("")}
        >
          {searchText &&
            options.slice(0, 10).map((pokemon) => (
              <Link
                key={pokemon}
                className="block bg-slate-700 hover:bg-slate-600"
                to={`/details/${pokemon}`}
              >
                {pokemon}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
