import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user-info"));
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div className="header container-fluid bg-white">
        <div id="menu-jk" className="nav-col text-white shadow-md mb-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pt-2 pb-2 align-items-center">
                <a href="/" className="fw-bold fs-8 text-primary">
                  <img
                    className="max-230 mt-2"
                    src="assets/images/logo.png"
                    alt=""
                  />
                </a>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#menu"
                  className="float-end text-dark d-lg-none pt-1 ps-3"
                >
                  <i className="bi pt-1 fs-1 cp bi-list"></i>
                </a>
              </div>

              {localStorage.getItem("user-info") ? (
                <div id="menu" className="col-lg-6 d-none d-lg-block">
                  <ul className="float-end mul d-inline-block">
                    <li className="float-md-start px-4 pe-1 pt-4">
                      <a href="/result" className="fw-bold fs-8 text-primary">
                        {" "}
                        <span> Welcome {user?.fname?.toUpperCase()}</span>
                      </a>
                    </li>
                    <li className="float-md-start px-4 pe-1 pt-4">
                      <a href="/result" className="fw-bold fs-8 text-primary">
                        {" "}
                        View Result
                      </a>
                    </li>

                    <li className="float-md-start px-4 pe-1 py-3">
                      <button
                        onClick={logOut}
                        className="btn fw-bold fs-8 btn-outline-primary px-5"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div id="menu" className="col-lg-6 d-none d-lg-block">
                  <ul className="float-end mul d-inline-block">
                    <li className="float-md-start px-4 pe-1 pt-4">
                      <a href="/result" className="fw-bold fs-8 text-primary">
                        {" "}
                        View Result
                      </a>
                    </li>

                    <li className="float-md-start px-4 pe-1 py-3">
                      <a href="/Login" className="fw-bold fs-8 text-primary">
                        <button className="btn fw-bold fs-8 btn-outline-primary px-5">
                          Login
                        </button>
                      </a>
                    </li>

                    <li className="float-md-start px-4 pe-1 py-3">
                      <a href="/register" className="fw-bold fs-8 text-primary">
                        <button className="btn fw-bold fs-8 btn-primary">
                          Register as Voter
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
