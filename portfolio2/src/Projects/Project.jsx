import React from "react";
import "./project.css";
export const Project = ({ img, link }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>

      <a href={link} target="_blank" rel="noreferrer">
        <img src={link} alt="" className="p-img" />
      </a>
    </div>
  );
};