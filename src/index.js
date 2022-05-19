import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import PokemonDetail from "./components/PokemonDetail";
import PokemonResults from "./components/PokemonResults";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Pokedex</Link>
      </header>
      <Routes>
        <Route path="/" element={<PokemonResults />} />
        <Route path="/details/:id" element={<PokemonDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
