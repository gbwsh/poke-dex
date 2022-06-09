import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import API_URL from "../Api";
import PokemonList from "./PokemonList";
import SearchBar from "./SearchBar";

const PokemonResults = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [currentPokemonList, setCurrentPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);

  const requestPokemon = async () => await fetch(API_URL + "?limit=10000");

  let navigate = useNavigate();

  useEffect(() => {
    requestPokemon()
      .then((response) => response.json())
      .then((response) => {
        setAllPokemon(response.results);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOffsetChange = (value) => {
    setOffset(offset + value);
  };

  useEffect(() => {
    setCurrentPokemonList(allPokemon.slice(offset, offset + 20));
  }, [offset, allPokemon]);

  const homePage = () => {
    setOffset(0);
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomPokemon = () => {
    navigate(`../details/${getRandomInt(898)}`, { replace: true });
  };

  return (
    <div className="grid grid-cols-5">
      <div className="bg-red-600 ">
        <div className="bg-slate-700 text-white">
          <SearchBar />
          <button className="" onClick={() => handleOffsetChange(-20)}>
            {"<"}
          </button>
          <button onClick={() => homePage()}>Home</button>
          <button onClick={() => handleOffsetChange(20)}>{">"}</button>
          <div>
            <button onClick={randomPokemon}>Random Pokemon</button>
          </div>
        </div>
        <div className="grid gap-6">
          <PokemonList currentPokemonList={currentPokemonList} />
        </div>
      </div>
      <div className="bg-red-600 col-span-4 w-full h-full m-auto flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default PokemonResults;

// const [nextPage, setNextPage] = useState("");
//   const [prevPage, setPrevPage] = useState(null);
//   useEffect(() => {
//     homePage();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const homePage = () => {
//     requestPokemon()
//       .then((response) => response.json())
//       .then((response) => {
//         setPokemonResults(response.results);
//         setNextPage(response.next);
//         setPrevPage(null);
//       });
//   };
//   async function requestPage(page) {
//     if (page) {
//       const res = await fetch(page);
//       const json = await res.json();

//       setPokemonResults(json.results);
//       setNextPage(json.next);
//       setPrevPage(json.previous);
//     } else console.log("no more pages");
//   }
//   return (
//     <div className="grid grid-cols-5">
//       <div className="bg-red-600">
//         <div className="bg-slate-700 text-white">
//           <button className="" onClick={() => requestPage(prevPage)}>
//             {"<"}
//           </button>
//           <button onClick={(e) => homePage()}>Home</button>
//           <button onClick={() => requestPage(nextPage)}>{">"}</button>
//           <div>
//             <button onClick={randomPokemon}>Random Pokemon</button>
//           </div>
//         </div>
//         <div className="grid col-span-1 gap-6">
//           <PokemonList pokemonResults={pokemonResults} />
//         </div>
//       </div>
//       <div className="bg-red-600 col-span-4 w-full h-full m-auto flex justify-center items-center">
//         <Outlet />
//       </div>
//     </div>
//   );
// };
