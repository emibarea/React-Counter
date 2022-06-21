import "./App.css";
import freeCodeCampLogo from "./assets/freecodecamp-logo.png";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from "react";
function App() {
  const [numClick, setNumClicks] = useState(0);
  const manejarClick = () => {
    setNumClicks(numClick + 1);
  };
  const reiniciarCont = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo d freecodecamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numeroClick={numClick} />
        <Boton texto="Click" esBotonClick={true} manejarClick={manejarClick} />
        <Boton
          texto="Reinicar"
          esBotonClick={false}
          manejarClick={reiniciarCont}
        />
      </div>
    </div>
  );
}

export default App;
