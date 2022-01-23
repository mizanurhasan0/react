import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  return (
    <div className="AppLogin">
      <div className="loginBox">
        <img
          src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Free-Image.png"
          className="avater"
          alt="avater img"
        />
        <h1>Login Here</h1>
        <form>
          <p>Username</p>
          <input type="text" name="" placeholder="Enter Username..." />
          <p>Password</p>
          <input type="Password" name="" placeholder="Enter Password..." />
          <input type="submit" name="" value="Login" />
          <Link className="link" to="#">
            Lost Your Password?
          </Link>

          <Link className="link" to="#">
            Don't have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};
