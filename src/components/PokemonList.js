import { Link } from "react-router-dom";
import capitalizeFirstLetter from "./capitalizeFirstLetter";

const PokemonList = ({ currentPokemonList }) => {
  return currentPokemonList ? (
    currentPokemonList.map((pokemon) => {
      return (
        <div key={pokemon.name}>
          <Link to={`/details/${pokemon.name}`} className="text-center">
            <h1 className="bg-[#fafafa] hover:bg-[#f0f0f0] p-2 text-xl">
              {/* {capitalizeFirstLetter(pokemon.name)} */}
              {pokemon.name}
            </h1>
          </Link>
        </div>
      );
    })
  ) : (
    <h1>loading pokemans...</h1>
  );
};

// const PokemonList = () => <h1>hello</h1>;

export default PokemonList;
