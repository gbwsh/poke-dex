import { Link } from "react-router-dom";
import capitalizeFirstLetter from "./capitalizeFirstLetter";

const PokemonList = ({ currentPokemonList }) => {
  return currentPokemonList ? (
    currentPokemonList.map((pokemon) => {
      return (
        <div key={pokemon.name} className="">
          <Link to={`/details/${pokemon.name}`} className="text-center">
            <h1 className="bg-sky-400 p-2 text-xl hover:bg-sky-500">
              {capitalizeFirstLetter(pokemon.name)}
            </h1>
          </Link>
        </div>
      );
    })
  ) : (
    <h1>loading pokemans...</h1>
  );
};

export default PokemonList;
