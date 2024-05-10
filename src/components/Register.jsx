import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "./Navbar";

const Register = (props) => {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  });
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const onButtonClick = async () => {
    let item = { fname, lname, username, Password, Email };

    let result = await fetch("http://172.208.41.79:9443/api/users", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    console.log("result", result);
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className={"mainContainer"}>
        <div className={"titleContainer"}>
          <div>Register Here!!</div>
        </div>
        <br />

        <div className={"inputContainer"}>
          <input
            value={fname}
            placeholder="First Name"
            onChange={(ev) => setFname(ev.target.value)}
            className={"inputBox"}
          />
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={lname}
            placeholder="Last Name"
            onChange={(ev) => setLname(ev.target.value)}
            className={"inputBox"}
          />
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={username}
            placeholder="Username"
            onChange={(ev) => setUsername(ev.target.value)}
            className={"inputBox"}
          />
        </div>
        <br />

        <div className={"inputContainer"}>
          <input
            value={Email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className={"inputBox"}
          />
        </div>
        <br />

        <div className={"inputContainer"}>
          <input
            type="password"
            value={Password}
            placeholder="Password"
            onChange={(ev) => setPassword(ev.target.value)}
            className={"inputBox"}
          />
        </div>
        <br />

        <div className={"inputContainer"}>
          <input
            className={"inputButton"}
            type="submit"
            onClick={onButtonClick}
            value={"Register"}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
