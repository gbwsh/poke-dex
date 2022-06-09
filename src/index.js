import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import PokemonDetail from "./components/PokemonDetail";
import PokemonResults from "./components/PokemonResults";

function App() {
  return (
    //<StrictMode>
    <div className="p-0 m-0">
      <BrowserRouter>
        <header className="w-full mb-00 text-center p-7 bg-gradient-to-r from-orange-400 via-amber-400 to-blue-400 h-32px">
          <Link to="/" className="text-2xl hover:font-bold hover:underline">
            Pokedex
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<PokemonResults />}>
            <Route path="/details/:id" element={<PokemonDetail />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    //</StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
