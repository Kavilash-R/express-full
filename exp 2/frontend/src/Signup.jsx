import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3030/signup", { username, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className=" bg-gray-100 h-[100%] w-[100%]">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            required
            onChange={(event) => setUsername(event.target.value)}
          />
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
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
