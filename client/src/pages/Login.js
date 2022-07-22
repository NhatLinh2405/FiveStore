import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/api.call";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="log-container">
      <div className="log-wrapper">
        <div className="log-title">SIGN IN</div>
        <form action="" className="log-form">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            className="log-input"
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="log-input"
          />
          <button
            onClick={handleClick}
            disabled={isFetching}
            className="log-button"
          >
            LOGIN
          </button>
          {error && <span className="log-error">Something went wrong...</span>}
          <a href="/" className="log-link">
            DO NOT YOU REMEMBER THE PASSWORD?
          </a>
          <a href="/" className="log-link">
            CREATE A NEW ACCOUNT
          </a>
        </form>
      </div>
    </div>
  );
}
