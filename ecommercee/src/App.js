import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { GlobalContext } from "./Helper/GlobalContext";
import { About } from "./Pages/About";
import { Add } from "./Pages/Add";
import { Card } from "./Pages/Card";
import { Details } from "./Pages/Details";
import { Products } from "./Pages/Products";

function App() {
  const [numberOfCurd, setNumberOfCard] = useState(0);
  return (
    <div className="App">
      <GlobalContext.Provider value={{ numberOfCurd, setNumberOfCard }}>
        <BrowserRouter>
          <div className="nav">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/card" element={<Card />} />
            <Route path="/details" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
      <button className="btn btn-success">Click</button>
    </div>
  );
}

export default App;
