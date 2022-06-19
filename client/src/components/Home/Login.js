import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Login.css";
import Header from "./Header";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUser, setisUser] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUser === true) {
      try {
        const res = await axios.post("http://localhost:5000/user/login", {
          email,
          password,
        });
        if (res.status == 200) {
          alert("Login successful");
          //history.push("/home", { id: res.data._id });
        }
      } catch (err) {
        console.log(err.message);
        alert("Invalid credentials");
      }
    } else {
      try {
        const res = await axios.post("http://localhost:5000/company/login", {
          email,
          password,
        });
        if (res.status == 200) {
          alert("Login successful");
          navigate("/chome", { state: { id: res.data._id } });
        }
      } catch (err) {
        console.log(err.message);
        alert("Invalid credentials");
      }
    }
  };
  return (
    <>
      <Header />
      <div className="logindiv1">
        <div className="login-heading">
          <h2>Login</h2>
        </div>
        <br />
        <br />
        <div className="credentials">Email</div>
        <input
          className="input1"
          type="email"
          placeholder="Enter your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <div className="credentials">Password</div>
        <input
          className="input1"
          type="password"
          placeholder="Enter your Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />

        <div className="credentials">Are you </div>
        <div className="choices">
          <div>
            <input
              type="radio"
              checked
              className="choice-btn"
              value="user"
              name="choice"
              onClick={(e) => {
                setisUser(true);
              }}
            />
            Job Seeker
          </div>
          <div>
            <input
              type="radio"
              className="choice-btn"
              value="company"
              name="choice"
              onClick={(e) => {
                setisUser(false);
              }}
            />
            Company
          </div>
        </div>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Login;
