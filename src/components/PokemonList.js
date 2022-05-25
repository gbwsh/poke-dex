import { Link } from "react-router-dom";

const PokemonList = ({ pokemonResults }) => {
  return pokemonResults ? (
    pokemonResults.map((pokemon) => {
      return (
        <Link
          to={`/details/${pokemon.name}`}
          key={pokemon.name}
          className="hover:underline hover:uppercase hover:text-blue-600 text-center"
        >
          <h1>{pokemon.name}</h1>
        </Link>
      );
    })
  ) : (
    <h1>loading pokemans...</h1>
  );
};

export default PokemonList;
