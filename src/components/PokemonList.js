const PokemonList = ({ pokemonResults }) => {
  return pokemonResults ? (
    pokemonResults.map((pokemon) => <h1>{pokemon.name}</h1>)
  ) : (
    <h1>loading pokemans...</h1>
  );
};

export default PokemonList;
