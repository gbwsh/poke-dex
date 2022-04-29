const PokemonList = (pokemonResults) => {
  return pokemonResults.map((pokemon) => <h2>{pokemon}</h2>);
};

export default PokemonList;
