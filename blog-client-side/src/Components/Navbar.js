import React from "react";
import "./Navbar.css";
import { BrowserRouter, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
        alt="logo"
      />

      <nav>
        <ul className="nav_links">
          <li>
            <Link to="/" className="link">
              posts
            </Link>
          </li>
          <li>
            <Link to="/create" className="link">
              Create
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
              Login
            </Link>
          </li>
        </ul>
      </nav>

      <Link to="/contact" className="cta">
        <button>Contact</button>
      </Link>
    </div>
  );
};
