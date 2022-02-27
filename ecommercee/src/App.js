import { useEffect, useState } from "react";

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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { serverApi, headers } from "./TinnyHelper/TinyHelper";

toast.configure();
function App() {
  const [activenav, setActiveNav] = useState(1);
  const [authUser, setAuthUser] = useState({ status: false, email: "", id: 0 });
  const [numberOfCurd, setNumberOfCard] = useState(0);
  useEffect(() => {
    axios.get(serverApi + "user", headers).then((response) => {
      console.log(response.data);
      if (response.data.error) {
        setAuthUser({ ...authUser, status: false });
      } else {
        setAuthUser({
          email: response.data.email,
          id: response.data.id,
          status: true,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <GlobalContext.Provider
        value={{
          numberOfCurd,
          setNumberOfCard,
          authUser,
          setAuthUser,
          activenav,
          setActiveNav,
        }}
      >
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
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
