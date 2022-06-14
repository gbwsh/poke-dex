import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_URL from "../Api";
import capitalizeFirstLetter from "./capitalizeFirstLetter";

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
      <div className="text-3xl grid border-4 border-red-900 bg-red-800 p-6">
        <img src={pokemonDetail.sprites.front_default} alt="pokemon front" />
        <h1>Name: {capitalizeFirstLetter(pokemonDetail.name)}</h1>
        <h2>Type: {capitalizeFirstLetter(pokemonDetail.types[0].type.name)}</h2>
        <h2>Height: {pokemonDetail.height * 10} cm</h2>
        <h2>Weight: {pokemonDetail.weight / 10} kg</h2>
      </div>
    );
  } else return <h1>loading pokemans...</h1>;
};

export default PokemonDetail;
