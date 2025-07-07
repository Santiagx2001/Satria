import { Banner } from "./components/sections/Banner";
import { QuienesSomos } from "./components/sections/QuienesSomos";
import { Header } from "./components/sections/Header";
import { Productos } from "./components/sections/Productos";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Rutas from "./routes/router";

function App() {
  return (
    <BrowserRouter>
      <Rutas />
    </BrowserRouter>
  );
}

export default App;
