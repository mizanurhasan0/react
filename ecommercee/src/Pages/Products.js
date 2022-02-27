import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../Designs/product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../Helper/GlobalContext";

export const Products = () => {
  let navigation = useNavigate();
  const { numberOfCurd, setNumberOfCard } = useContext(GlobalContext);
  return (
    <div className="container1">
      <div className="banner">
        <h3 className="baner-title">
          <span className="baner-title-text">Software Development</span>
        </h3>
      </div>
      {/* Body */}
      <div>
        <div className="product-body">
          <h3 className="body-title">Products</h3>
          {/* Search  Bar */}

          <div className="mb-4 container searchbar-container">
            <input type="search" required />
            <label>Search</label>
          </div>

          {/* ENd Search Bar */}
          {/* 1s */}
          <div className="product-list container">
            <div className="card">
              <img
                src={require("../Images/product.jpg")}
                className="card-img-top"
                alt="default"
                onClick={() => {
                  navigation("/details");
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span className="text-muted text-decoration-line-through card-oldPrice">
                  $20.00
                </span>

                <button
                  onClick={() => setNumberOfCard(numberOfCurd + 1)}
                  className="btn"
                >
                  <span className="card-exactPrice"> 18.00 $ </span>

                  <FontAwesomeIcon icon={faShoppingCart} color="#fff" />
                </button>
              </div>
            </div>
            {/* 2nd */}
            <div className="card">
              <img
                src={require("../Images/product.jpg")}
                className="card-img-top"
                alt="default"
                onClick={() => {
                  navigation("/details");
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span className="text-muted text-decoration-line-through card-oldPrice">
                  $20.00
                </span>

                <button
                  onClick={() => setNumberOfCard(numberOfCurd + 1)}
                  className="btn"
                >
                  <span className="card-exactPrice"> 18.00 $ </span>

                  <FontAwesomeIcon icon={faShoppingCart} color="#fff" />
                </button>
              </div>
            </div>
            {/*  */}
            {/* 3nd */}
            <div className="card">
              <img
                src={require("../Images/product.jpg")}
                className="card-img-top"
                alt="default"
                onClick={() => {
                  navigation("/details");
                }}
              />
              <div className="card-body ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span className="text-muted text-decoration-line-through card-oldPrice">
                  $20.00
                </span>

                <button
                  onClick={() => setNumberOfCard(numberOfCurd + 1)}
                  className="btn"
                >
                  <span className="card-exactPrice"> 18.00 $ </span>

                  <FontAwesomeIcon icon={faShoppingCart} color="#fff" />
                </button>
              </div>
            </div>
            {/* end */}
            {/* 4nd */}
            <div className="card">
              <img
                src={require("../Images/product.jpg")}
                className="card-img-top"
                alt="default"
                onClick={() => {
                  navigation("/details");
                }}
              />
              <div className="card-body ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span className="text-muted text-decoration-line-through card-oldPrice">
                  $20.00
                </span>

                <button
                  onClick={() => setNumberOfCard(numberOfCurd + 1)}
                  className="btn"
                >
                  <span className="card-exactPrice"> 18.00 $ </span>

                  <FontAwesomeIcon icon={faShoppingCart} color="#fff" />
                </button>
              </div>
            </div>
            {/* end */}
            {/* 5nd */}
            <div className="card">
              <img
                src={require("../Images/product.jpg")}
                className="card-img-top"
                alt="default"
                onClick={() => {
                  navigation("/details");
                }}
              />
              <div className="card-body ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span className="text-muted text-decoration-line-through card-oldPrice">
                  $20.00
                </span>

                <button
                  onClick={() => setNumberOfCard(numberOfCurd + 1)}
                  className="btn"
                >
                  <span className="card-exactPrice"> 18.00 $ </span>

                  <FontAwesomeIcon icon={faShoppingCart} color="#fff" />
                </button>
              </div>
            </div>
            {/* end */}
          </div>
          {/* End Product List */}
        </div>
      </div>
    </div>
  );
};
