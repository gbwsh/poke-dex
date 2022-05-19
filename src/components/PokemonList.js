import { Link, useParams } from "react-router-dom";

const PokemonList = ({ pokemonResults }) => {
  return pokemonResults ? (
    pokemonResults.map((pokemon) => {
      const id = pokemon.url.split("/")[6];
      console.log(id);
      <Link to={`/details/${id}`}>{pokemon.name}</Link>;
    })
  ) : (
    <h1>loading pokemans...</h1>
  );
};

export default PokemonList;
