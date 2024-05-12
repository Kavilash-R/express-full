import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3030/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className=" bg-gray-100 h-[100%] w-[100%]">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
          {/* <input type="password" placeholder="confirm password" required onChange={setConfirmPassword} /> */}
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
