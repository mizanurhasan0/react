import "./App.css";

import React from "react";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";

// import { TestBody } from "./Components/TestBody";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreatePost } from "./Pages/CreatePost";
import { Post } from "./Pages/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/create" exact element={<CreatePost />} />
          <Route path="/post/:id" exact element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
