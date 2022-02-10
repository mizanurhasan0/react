import "./App.css";
import { Navbar } from "./Portfolio/Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Portfolio/Pages/Home";
import { Dashboard } from "./AdminPanel/Components/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
