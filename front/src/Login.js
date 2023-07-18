import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/login", {
      username, password
    })
    .then((response) => {
      if(response.status === 200 && response.data === "success"){
        return navigate("/wall")
      }
      else setError("There was a problem with your login")
    })
    .catch((err) => {console.log(err)});
  }

  return (
    <div className="login">
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button type="submit">Login</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}

export default Login;
