import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "./Navbar";

const Otp = (props) => {
  //   useEffect(() => {
  //     if (localStorage.getItem("user-info")) {
  //       navigate("/");
  //     }
  //   });
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onLogin = async () => {
    let user_info = JSON.parse(localStorage.getItem("user-info"));
    console.log(user_info);
    let result = await fetch(
      `${process.env.REACT_APP_API}verify?otp=${otp}&username=${user_info.access_token}`,
      {
        method: "POST",
        // body: JSON.stringify(`?otp=${otp}&username=${user_info.access_token}`),
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    const data = await result.json();

    if (!result.ok) {
      setMessage("OTP verification failed: Invalid token");
      navigate("/login");
    } else {
      console.log(typeof data.id);

      localStorage.setItem("token", JSON.stringify(data));
      setMessage("OTP verified! You are now logged in.");

      navigate("/");
    }
  };

  return (
    <div>
      <Navbar />

      <div className={"mainContainer"}>
        <div className={"titleContainer"}>
          <div>Enter OTP</div>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            type="text"
            value={otp}
            placeholder="Enter your username"
            onChange={(ev) => setOtp(ev.target.value)}
            className={"inputBox"}
          />
        </div>
        <br />

        <br />
        <div className={"inputContainer"}>
          <input
            className={"inputButton"}
            type="button"
            onClick={onLogin}
            value={"Verify OTP"}
          />
        </div>
      </div>
    </div>
  );
};

export default Otp;
