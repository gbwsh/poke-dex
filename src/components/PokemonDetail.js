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
      <div className="text-3xl border-4 p-6 bg-[#fafafa] hover:bg-[#f0f0f0]">
        <img src={pokemonDetail.sprites.front_default} alt="pokemon front" />
        <h1>{capitalizeFirstLetter(pokemonDetail.name)}</h1>
        <h2>{pokemonDetail.height * 10} cm</h2>
        <h2>{pokemonDetail.weight / 10} kg</h2>
        <h2>Type: {capitalizeFirstLetter(pokemonDetail.types[0].type.name)}</h2>
      </div>
    );
  } else return <></>;
};

export default PokemonDetail;
