import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')

  const  navigate = useNavigate()
  

  function handleSubmit(e){
    e.preventDefault()
    axios.post("http://localhost:8080/register", {name, email, phone, username, password})
    .then((response) => {
      if(response.status === 200 && response.data === "Done"){
        return navigate("/login")
      }
      else{
        setError("There was a problem with your registration")
      }
    })
    .catch((err) => setError(err))
  }

  return (
    <div className="register">

      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Register</button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}

export default Register;
