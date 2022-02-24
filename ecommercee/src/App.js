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
import { Login } from "./Pages/Login";
import { Products } from "./Pages/Products";
import { Registration } from "./Pages/Registration";

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
            <Route path="/login" element={<Login />} />
            <Route path="/reg" element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
