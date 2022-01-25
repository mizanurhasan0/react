import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Profile.css";
export const Profile = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  const [username, setUsername] = useState();
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/auth/profile/${id}`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        setUsername(response.data.username);
      });

    axios
      .get(`http://localhost:3001/posts/byUserId/${id}`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        // console.log(response.data);
        setListOfPosts(response.data);
      });
  }, []);
  return (
    <div className="profileContainer">
      <div className="basicInfo">
        <h1>{username}</h1>
      </div>
      <div className="listOfPost">
        {listOfPosts.map((value, key) => {
          return (
            <div key={key} className="post">
              <div className="title"> {value.title} </div>
              <div
                className="body"
                onClick={() => {
                  navigate(`/post/${value.id}`);
                }}
              >
                {value.postText}
              </div>
              <div className="footer">
                <div className="username">{value.username}</div>
                <div className="buttons">
                  <label> {value.Likes.length}</label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
