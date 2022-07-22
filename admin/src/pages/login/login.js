import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/api.call";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="log-container">
      <input
        className="input-form "
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="input-form"
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} className="button-btn">
        Login
      </button>
    </div>
  );
}
