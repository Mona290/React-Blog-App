
import React from "react";
import "./register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
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

  const handleRegister = (e) => {
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
    <div className="register-container">
      <label>Username</label>
      <input
        className="input-field"
        onChange={handleChange}
        value={cred?.username}
        name="username"
        placeholder="Enter your Username..."
      />
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
      <button className="register-button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;
