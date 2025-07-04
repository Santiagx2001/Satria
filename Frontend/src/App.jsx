import { Banner } from "./components/sections/Banner";
import { QuienesSomos } from "./components/sections/QuienesSomos";
import { Header } from "./components/sections/Header";
import { Productos } from "./components/sections/Productos";

function App() {
  return (
    <div className="bg-AmarilloClaro-Satria">
      <Header />
      <Banner />
      <QuienesSomos />
      <Productos />
    </div>
  );
}

export default App;
