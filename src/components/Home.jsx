import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";

function Home() {
  return (
    <>
      <Navbar />
      <Header
        heading="The Presidency - Candidates for the Position of GCFR"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            eleifend arcu et sem elementum faucibus. Vestibulum faucibus
            eleifend dolor, id luctus libero. Suspendisse commodo, orci eu
            mattis mattis, ante ligula porta tortor, ut scelerisque massa risus
            a quam."
      />

      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
            <img
              className="rounded-pill shadow-md p-2"
              src="assets/images/testimonial/member-01.jpg"
              alt=""
            />
            <h4 className="mt-3 fs-5 mb-1 fw-bold">Bola Tinubu</h4>
            <h6 className="fs-7">
              Runnung to Be:{" "}
              <span className="text-primary fw-bold">President</span>
            </h6>
            <p className="text-dark mt-3 mb-3 fs-8">
              Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras
              condimentum dapibus tellus vel semper. Quisque vel dui molestie
              est auctor utrum nibh porttitor.
            </p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-primary fw-bolder fs-8"
            >
              View Manifesto
            </button>
            <button className="btn btn-danger fw-bolder px-4 ms-2 fs-8">
              Vote
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
            <img
              className="rounded-pill shadow-md p-2"
              src="assets/images/testimonial/member-02.jpg"
              alt=""
            />
            <h4 className="mt-3 fs-5 mb-1 fw-bold">Atiku Abubakar</h4>
            <h6 className="fs-7">
              Runnung to Be:{" "}
              <span className="text-primary fw-bold">President</span>
            </h6>
            <p className="text-dark mt-3 mb-3 fs-8">
              Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras
              condimentum dapibus tellus vel semper. Quisque vel dui molestie
              est auctor utrum nibh porttitor.
            </p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-primary fw-bolder fs-8"
            >
              View Manifesto
            </button>
            <button className="btn btn-danger fw-bolder px-4 ms-2 fs-8">
              Vote
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
            <img
              className="rounded-pill shadow-md p-2"
              src="assets/images/testimonial/member-03.jpg"
              alt=""
            />
            <h4 className="mt-3 fs-5 mb-1 fw-bold">Peter Obi</h4>
            <h6 className="fs-7">
              Runnung to Be:{" "}
              <span className="text-primary fw-bold">President</span>
            </h6>
            <p className="text-dark mt-3 mb-3 fs-8">
              Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras
              condimentum dapibus tellus vel semper. Quisque vel dui molestie
              est auctor utrum nibh porttitor.
            </p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-primary fw-bolder fs-8"
            >
              View Manifesto
            </button>
            <button className="btn btn-danger fw-bolder px-4 ms-2 fs-8">
              Vote
            </button>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
            <img
              className="rounded-pill shadow-md p-2"
              src="assets/images/testimonial/member-04.jpg"
              alt=""
            />
            <h4 className="mt-3 fs-5 mb-1 fw-bold">Rabiu Kwankwanso</h4>
            <h6 className="fs-7">
              Runnung to Be:{" "}
              <span className="text-primary fw-bold">President</span>
            </h6>
            <p className="text-dark mt-3 mb-3 fs-8">
              Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras
              condimentum dapibus tellus vel semper. Quisque vel dui molestie
              est auctor utrum nibh porttitor.
            </p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-primary fw-bolder fs-8"
            >
              View Manifesto
            </button>
            <button className="btn btn-danger fw-bolder px-4 ms-2 fs-8">
              Vote
            </button>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
            <img
              className="rounded-pill shadow-md p-2"
              src="assets/images/testimonial//member-05.png"
              alt=""
            />
            <h4 className="mt-3 fs-5 mb-1 fw-bold">Chris Okotie</h4>
            <h6 className="fs-7">
              Runnung to Be:{" "}
              <span className="text-primary fw-bold">President</span>
            </h6>
            <p className="text-dark mt-3 mb-3 fs-8">
              Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras
              condimentum dapibus tellus vel semper. Quisque vel dui molestie
              est auctor utrum nibh porttitor.
            </p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-primary fw-bolder fs-8"
            >
              View Manifesto
            </button>
            <button className="btn btn-danger fw-bolder px-4 ms-2 fs-8">
              Vote
            </button>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
            <img
              className="rounded-pill shadow-md p-2"
              src="assets/images/testimonial/member-06.png"
              alt=""
            />
            <h4 className="mt-3 fs-5 mb-1 fw-bold">Omoyele Sowore</h4>
            <h6 className="fs-7">
              Runnung to Be:{" "}
              <span className="text-primary fw-bold">President</span>
            </h6>
            <p className="text-dark mt-3 mb-3 fs-8">
              Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras
              condimentum dapibus tellus vel semper. Quisque vel dui molestie
              est auctor utrum nibh porttitor.
            </p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-primary fw-bolder fs-8"
            >
              View Manifesto
            </button>
            <button className="btn btn-danger fw-bolder px-4 ms-2 fs-8">
              Vote
            </button>
          </div>
        </div>
      </div>

      <div className="copy">
        <div className="container">
          <a href="https://www.smarteyeapps.com/">
            2022 &copy; All Rights Reserved | Designed and Developed by
            Smarteyeapps.com
          </a>
          <span>
            <a href="">
              <i className="fab fa-github"></i>
            </a>
            <a href="">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="https://in.pinterest.com/prabnr/pins/">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="https://twitter.com/prabinraja89">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/freewebtemplatesbysmarteye">
              <i className="fab fa-facebook-f"></i>
            </a>
          </span>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-6 fw-bold fs-5"
                id="exampleModalLabel"
              >
                View Manifesto
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="molist">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eu nibh et felis interdum accumsan. Pellentesque elit odio,
                  interdum quis ante in, varius rhoncus orci.
                </li>
                <li>
                  Etiam laoreet dapibus ante at mollis. Morbi lobortis ultricies
                  risus, in faucibus est blandit eu. Nunc nec imperdiet elit.
                </li>
                <li>
                  Praesent eget massa finibus, placerat tortor sed, pretium
                  justo. Aenean et lectus accumsan, tincidunt metus sit amet,
                  laoreet nunc.
                </li>
                <li>
                  In et tincidunt est. Sed neque sapien, ultricies a orci et,
                  fringilla egestas nibh. Sed luctus eros et erat suscipit
                  fermentum.
                </li>
                <li>
                  Cras blandit orci quis purus placerat tincidunt. Nunc
                  ullamcorper iaculis nibh, sed dapibus dui lobortis nec.
                </li>
                <li>
                  Sed tristique ante ac rhoncus facilisis. Maecenas hendrerit
                  velit a interdum convallis. Vivamus tempus eu justo nec
                  rutrum. Praesent sollicitudin interdum nisl, at sollicitudin
                  justo interdum vel
                </li>
                <li>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Nunc eget orci maximus,
                  tincidunt nulla molestie, porta nisi. Integer fringilla lorem
                  at lacinia iaculis.{" "}
                </li>
                <li>
                  Maecenas tempus libero laoreet est facilisis, vitae iaculis
                  dui eleifend. Proin eget magna vitae diam dictum interdum at
                  at nulla. Fusce eu porttitor felis. Aenean pretium lacinia
                  nunc ut convallis.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
