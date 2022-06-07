import { Link } from "react-router-dom";
import capitalizeFirstLetter from "./capitalizeFirstLetter";

const PokemonList = ({ pokemonResults }) => {
  return pokemonResults ? (
    pokemonResults.map((pokemon) => {
      return (
        <div className="flex">
          {/* <div className="w-24"> */}
          <Link
            to={`/details/${pokemon.name}`}
            key={pokemon.name}
            className="text-center w-full"
          >
            <h1 className="bg-sky-400 p-2 text-xl">
              {capitalizeFirstLetter(pokemon.name)}
            </h1>
          </Link>
          {/* </div> */}
        </div>
      );
    })
  ) : (
    <h1>loading pokemans...</h1>
  );
};

export default PokemonList;
