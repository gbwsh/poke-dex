import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import allPokemonNames from "../allPokemonNames";

const SearchBar = ({ allPokemon }) => {
  const [searchText, setSearch] = useState("");
  const [options, setOptions] = useState();

  const testF = () => {
    setOptions(
      allPokemon.filter(
        (suggestion) =>
          suggestion.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      )
    );
  };

  useEffect(() => {
    testF();
  }, [searchText]);

  console.log(allPokemon);

  return options ? (
    <div>
      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value={searchText}
        className="text-black w-full"
      />
      <div className="inline-block w-full">
        <div className="z-10 hover:block" onClick={() => setSearch("")}>
          {searchText &&
            options.map((pokemon) => (
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
  ) : (
    <h1>loading</h1>
  );
};

export default SearchBar;
