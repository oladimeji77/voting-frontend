import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "./Navbar";

const Login = (props) => {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  });
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const onLogin = async () => {
    let result = await fetch("http://172.208.41.79:9443/api/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(
        `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
      ),
    });
    const data = await result.json();

    if (!result.ok) {
      navigate("/login");
    } else {
      console.log(data);

      localStorage.setItem("user-info", JSON.stringify(data));

      navigate("/");
    }
  };

  return (
    <div>
      <Navbar />

      <div className={"mainContainer"}>
        <div className={"titleContainer"}>
          <div>Login</div>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={(ev) => setUsername(ev.target.value)}
            className={"inputBox"}
          />
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setpassword(ev.target.value)}
            className={"inputBox"}
          />
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            className={"inputButton"}
            type="button"
            onClick={onLogin}
            value={"Log in"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
