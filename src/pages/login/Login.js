/*import { Link } from "react-router-dom";
import"./login.css";


export default function Login () {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder=" Enter Your email..."/>
        <label>Password</label>
        <input type="text" className="loginInput" placeholder="Enter your Password..."/>
        <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
        
        <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  )
}*/

import React from "react";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({});

  const users = [
    {
      mail: "mona06hjp@gmail.com",
      password: "123456",
    },
    {
      mail: "abc@gmail.com",
      password: "123456",
    },
  ];

  const handleLogin = (e) => {
    const credentialsMatched = users.find((item) => {
      return item.mail === cred?.email && item?.password === cred?.password;
    });

    if (credentialsMatched) {
      localStorage?.setItem("authToken", "dummyToken");
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setCred({
      ...cred,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-container">
      <label>Email</label>
      <input
        className="input-field"
        onChange={handleChange}
        value={cred?.email}
        name="email"
        placeholder="Enter your Email..."
      />
      <label>Password</label>
      <input
        className="input-field"
        onChange={handleChange}
        value={cred?.password}
        name="password"
        placeholder="Enter your Password..."
        type="password"
      />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;


