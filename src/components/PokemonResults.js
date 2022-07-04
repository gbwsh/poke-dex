import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import API_URL from "../Api";
import PokemonList from "./PokemonList";
import SearchBar from "./SearchBar";

async function* getSwapiPagerator() {
  let nextUrl = `https://pokeapi.co/api/v2/pokemon?limit=20`;
  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data = await response.json();
    nextUrl = data.next;
    yield data.results;
  }
}

const pokeGen = getSwapiPagerator();

const paginate = () => {
  const results = [];
  return async () => {
    const { value } = await pokeGen.next();
    if (value) results.push(...value);
    return results;
  };
};

const x = paginate();

const PokemonResults = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [currentPokemonList, setCurrentPokemonList] = useState([]);
  // const [offset, setOffset] = useState(0);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState(null);

  const requestPokemon = async () => await fetch(API_URL + "?limit=20");

  let navigate = useNavigate();

  useEffect(() => {
    homePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const homePage = () => {
    requestPokemon()
      .then((response) => response.json())
      .then((response) => {
        setCurrentPokemonList(response.results);
        setNextPage(response.next);
        setPrevPage(null);
      });
  };
  async function requestPage(page) {
    if (page) {
      const res = await fetch(page);
      const json = await res.json();

      setCurrentPokemonList(json.results);
      setNextPage(json.next);
      setPrevPage(json.previous);
    } else console.log("no more pages");
  }

  // useEffect(() => {
  //   requestPokemon()
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setAllPokemon(response.results);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const handleOffsetChange = (value) => {
  //   if (offset + value === 0) {
  //     setOffset(offset + 2 * value);
  //   } else if (offset + value >= allPokemon.length) {
  //     setOffset(0);
  //   } else setOffset(offset + value);
  // };

  // useEffect(() => {
  //   setCurrentPokemonList(allPokemon.slice(offset, offset + 20));
  // }, [offset, allPokemon]);

  // const homePage = () => {
  //   setOffset(0);
  // };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomPokemon = () => {
    navigate(`../details/${getRandomInt(898)}`, { replace: true });
  };

  // useEffect(() => console.log(currentPokemonList), [currentPokemonList]);

  return (
    <div className="grid grid-cols-2">
      <div className="">
        <div className="bg-slate-700 text-white">
          <SearchBar />
          <button className="" onClick={() => requestPage(prevPage)}>
            {"<"}
          </button>
          <button
            onClick={() => {
              homePage();
              navigate("/");
            }}
          >
            Home
          </button>
          <button onClick={() => requestPage(nextPage)}>{">"}</button>
          <div>
            <button onClick={randomPokemon}>Random Pokemon</button>
          </div>
          <button onClick={() => paginate()}>test</button>
          <button
            onClick={() => {
              x().then((x) => {
                setCurrentPokemonList(x);
                console.log(currentPokemonList);
              });
            }}
          >
            log
          </button>
        </div>
        <div className="grid grid-cols-5 h-full">
          <PokemonList currentPokemonList={currentPokemonList} />
        </div>
      </div>
      <div className="w-full h-full m-auto flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default PokemonResults;
