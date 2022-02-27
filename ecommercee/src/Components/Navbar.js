import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Designs/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../Helper/GlobalContext";

export const Navbar = () => {
  const { numberOfCurd, authUser, setAuthUser, setActiveNav, activenav } =
    useContext(GlobalContext);
  const activeLink = (index) => {
    setActiveNav(index);
  };
  const logout = () => {
    localStorage.removeItem("accessToken");
    setActiveNav(4);
    setAuthUser({ email: "", id: 0, status: false });
  };
  return (
    <div className="navContainer">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="navbar-header-title">Software BD</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={activenav === 1 ? "nav-link active" : "nav-link"}
                  onClick={() => activeLink(1)}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={activenav === 2 ? "nav-link active" : "nav-link"}
                  onClick={() => activeLink(2)}
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              {authUser.status && (
                <li className="nav-item">
                  <Link
                    className={activenav === 3 ? "nav-link active" : "nav-link"}
                    onClick={() => activeLink(3)}
                    aria-current="page"
                    to="/add"
                  >
                    Add
                  </Link>
                </li>
              )}

              {!authUser.status ? (
                <li className="nav-item">
                  <Link
                    className={activenav === 4 ? "nav-link active" : "nav-link"}
                    onClick={() => activeLink(4)}
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    className={activenav === 4 ? "nav-link active" : "nav-link"}
                    onClick={logout}
                    aria-current="page"
                    to="/login"
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
            <div className="d-flex">
              <Link className="nav-item-card" aria-current="page" to="/card">
                <FontAwesomeIcon icon={faShoppingCart} color="#ff5c72" />
                <span className="nav-item-card-number">{numberOfCurd}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
