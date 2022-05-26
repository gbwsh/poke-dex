import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_URL from "../Api";

const PokemonDetail = () => {
  const [pokemonDetail, setPokemonDetail] = useState();
  const { id } = useParams();

  const requestDetail = async () => await fetch(API_URL + id);

  useEffect(() => {
    requestDetail()
      .then((response) => response.json())
      .then((response) => setPokemonDetail(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (pokemonDetail) {
    return (
      <div>
        <img src={pokemonDetail.sprites.front_default} alt="pokemon front" />
        <h1>Name: {pokemonDetail.name}</h1>
        <h2>Type: {pokemonDetail.types[0].type.name}</h2>
        <h2>Height: {pokemonDetail.height}</h2>
        <h2>Weight: {pokemonDetail.weight}</h2>
      </div>
    );
  } else return <h1>loading pokemans...</h1>;
};

export default PokemonDetail;
