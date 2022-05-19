import { useParams } from "react-router-dom";

const PokemonDetail = ({ pokemon }) => {
  const { id } = useParams();
  return <h1>{id}</h1>;
};

export default PokemonDetail;
