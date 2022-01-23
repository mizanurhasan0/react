import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [listOfPost, setListOfPost] = useState([]);
  let navigate = useNavigate();

  const apiLink = "http://localhost:3001";
  useEffect(() => {
    axios.get(apiLink + "/posts").then((response) => {
      setListOfPost(response.data);
    });
  }, []);

  // const ShowDetails = (id) => {

  // };
  return (
    <div className="wrapper-grid">
      {listOfPost.map((val, key) => {
        return (
          <div
            className="container"
            key={key}
            onClick={() => {
              navigate(`/post/${val.id}`);
            }}
          >
            <h1 className="title">{val.title}</h1>
            <p className="description">{val.postText}</p>
            <h4 className="footer">{val.username}</h4>
          </div>
        );
      })}
    </div>
  );
};
