import "./App.css";
import { createRoot } from "react-dom/client";
import PokemonResults from "./components/PokemonResults";

function App() {
  return (
    <div className="App">
      <PokemonResults />
    </div>
  );
}

export default App;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
