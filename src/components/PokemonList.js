import { Link } from "react-router-dom";

const PokemonList = ({ pokemonResults }) => {
  return pokemonResults ? (
    pokemonResults.map((pokemon) => {
      return (
        <div className="flex">
          <div className="w-24">
            <Link
              to={`/details/${pokemon.name}`}
              key={pokemon.name}
              className="text-center"
            >
              <h1 className="bg-sky-400 aspect-square">
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </h1>
            </Link>
          </div>
        </div>
      );
    })
  ) : (
    <h1>loading pokemans...</h1>
  );
};

export default PokemonList;
