import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Eshop from "./page/Eshop/eshop";
import MonCompte from "./page/MonCompte/monCompte";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Eshop />} />
          <Route path="/monCompte" element={<MonCompte />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
