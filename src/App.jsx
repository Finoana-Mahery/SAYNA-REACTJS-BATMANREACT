import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Eshop from "./page/Eshop/eshop";
import MonCompte from "./page/MonCompte/monCompte";
import { useState, useEffect } from "react";
import { AppProvider } from "../src/Context.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Eshop />} />

            <Route path="/monCompte" element={<MonCompte />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
