import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import "./Login.css";
import Navbar from "./Navbar";

const Register = (props) => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  });
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [is_active, SetIsActive] = useState("");
  const [phone_number, setPhone] = useState("");
  const [is_verified, setIsVerified] = useState("");
  const [account_type, setAccountType] = useState("");
  const navigate = useNavigate();

  const onButtonClick = async () => {
    const is_active = false;
    const is_verified = false;
    let item = {
      first_name,
      last_name,
      username,
      password,
      email,
      is_active,
      phone_number,
      is_verified,
      account_type,
    };

    let result = await fetch(`${process.env.REACT_APP_API}user`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });

    const data = await result.json();

    if (!result.ok) {
      navigate("/register");
    } else {
      console.log(data);
      localStorage.setItem("token", JSON.stringify(result));
      console.log("result", result);
      navigate("/");
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className={"mainContainer"}>
        <div className={"titleContainer"}>
          <div>Register Here!!</div>
        </div>

        <div className={"inputContainer"}>
          <input
            value={first_name}
            placeholder="First Name"
            onChange={(ev) => setFname(ev.target.value)}
            className={"inputBox"}
          />
          <input
            value={last_name}
            placeholder="Last Name"
            onChange={(ev) => setLname(ev.target.value)}
            className={"inputBox"}
          />
          <input
            value={username}
            placeholder="Username"
            onChange={(ev) => setUsername(ev.target.value)}
            className={"inputBox"}
          />
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className={"inputBox"}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(ev) => setPassword(ev.target.value)}
            className={"inputBox"}
          />
          <input
            value={is_active}
            placeholder="Active Status"
            onChange={(ev) => SetIsActive(ev.target.value)}
            className={"inputBox"}
          />
          <input
            value={phone_number}
            placeholder="Phone Number"
            onChange={(ev) => setPhone(ev.target.value)}
            className={"inputBox"}
          />
          <input
            value={is_verified}
            placeholder="Verification Status"
            onChange={(ev) => setSor(ev.target.value)}
            className={"inputBox"}
          />
          <input
            value={account_type}
            placeholder="Account Type"
            onChange={(ev) => setAccountType(ev.target.value)}
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
