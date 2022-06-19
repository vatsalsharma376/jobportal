import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Register.css";
import Header from "./Header";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUser, setisUser] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password, isUser);
    if (isUser === true) {
      try {
        const res = await axios.post("http://localhost:5000/user/register", {
          name,
          email,
          password,
        });
        if (res.status == 200) {
          alert("Company created successfully");
        } else {
          alert("Company already exists");
        }
      } catch (err) {
        console.log(err.message);
        alert("Company already exists");
      }
    } else {
      try {
        const res = await axios.post("http://localhost:5000/company/register", {
          name,
          email,
          password,
        });
        console.log(res);
        if (res.status != 400) {
          console.log(res);
          navigate("/chome", { state: { id: res } });
        } else {
          alert("Company already exists");
        }
      } catch (err) {
        console.log(err.message, err.data);
        alert("Company already exists");
      }
    }
  };
  return (
    <>
      <Header />
      <div className="logindiv2">
        <div className="login-heading2">
          <h2>Register</h2>
        </div>
        <div className="credentials2">Name</div>
        <input
          className="input2"
          type="Name"
          placeholder="Enter your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <div className="credentials2">Email</div>
        <input
          className="input2"
          type="email"
          placeholder="Enter your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <div className="credentials2">Password</div>
        <input
          className="input2"
          type="password"
          placeholder="Enter your Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />

        <div className="credentials2">Are you </div>
        <div className="choices2">
          <div>
            <input
              type="radio"
              className="choice-btn2"
              value="true"
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
              className="choice-btn2"
              value="false"
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

export default Register;
