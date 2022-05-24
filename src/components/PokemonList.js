import { Link } from "react-router-dom";

const PokemonList = ({ pokemonResults }) => {
  return pokemonResults ? (
    pokemonResults.map((pokemon) => {
      return (
        <Link
          to={`/details/${pokemon.name}`}
          key={pokemon.name}
          className="hover:underline"
        >
          {pokemon.name}
        </Link>
      );
    })
  ) : (
    <h1>loading pokemans...</h1>
  );
};

export default PokemonList;
