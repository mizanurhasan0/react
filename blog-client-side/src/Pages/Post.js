import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Post.css";
export const Post = () => {
  let apiLink = "http://localhost:3001";
  const [postObject, setPostObject] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios.get(apiLink + `/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
  });
  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title"> {postObject.title} </div>
          <div className="body">{postObject.postText}</div>
          <div className="footer">{postObject.username}</div>
        </div>
      </div>
      <div className="rightSide">Comment Section</div>
    </div>
  );
};
