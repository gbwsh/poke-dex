import { StrictMode } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import PokemonDetail from "./components/PokemonDetail";
import PokemonResults from "./components/PokemonResults";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Pokedex</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<PokemonDetail />} />
          <Route path="/" element={<PokemonResults />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
