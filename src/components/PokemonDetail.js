import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_URL from "../Api";

const PokemonDetail = () => {
  const [pokemonDetail, setPokemonDetail] = useState({});
  const { id } = useParams();

  const requestDetail = async () => await fetch(API_URL + id);

  useEffect(() => {
    requestDetail()
      .then((response) => response.json())
      .then((response) => console.log(response));
  }, []);

  return <h1>{id}</h1>;
};

export default PokemonDetail;
