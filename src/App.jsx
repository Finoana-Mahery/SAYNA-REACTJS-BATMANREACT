import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Eshop from "./page/Eshop/eshop";
import MonCompte from "./page/MonCompte/monCompte";
import { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Fonction pour mettre à jour la largeur de l'écran
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Écoute les changements de largeur de l'écran
    window.addEventListener("resize", updateWindowWidth);

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Eshop windowWidth={windowWidth} />} />

          <Route path="/monCompte" element={<MonCompte />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
