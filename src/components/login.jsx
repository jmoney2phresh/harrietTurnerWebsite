// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./navBar";
import Footer from "./footer";
import "../styling/root.style.css";
import "../styling/login.style.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const correctPassword = "Adaggio24!"; // Replace with your actual password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      sessionStorage.setItem("authenticated", "true");
      navigate("/resources");
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="login content">
      <NavBar />
      <h1>Password Protected Section</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit enquire">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
