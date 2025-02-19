import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Result from "./components/Result";
import Otp from "./components/Otp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
