/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  const handlechange = (event) => {
    props.setcolor(event.target.value);
    console.log("clicked in nav" + event.target.value);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      {/* `` are refer to as template liteal which help us to include js in a class just add ${} to use conditional redenring  */}
      <div className="container-fluid" id="nav">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link" to="/home"> */}
              <a className="nav-link-active" aria-current="page" href="#">
                Home
              </a>
              {/* </Link> */}
            </li>

            <li className="nav-item">
              {/* <Link className="nav-link" to="/about"> */}
              <a className="nav-link" href="#">
                {props.about}
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <div className="container my-2">
              <select
                className="form-select form-select-sm "
                aria-label=".form-select-sm example"
                defaultValue=""
                onChange={handlechange}
                id="theme"
              >
                <option value="" disabled>
                  Choose a Theme ...
                </option>
                <option value="green">Green</option>
                <option value="pink">pink</option>
                <option value="blue">Blue</option>
                <option value="default">default</option>
              </select>
            </div>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              } my-1`}
            >
              <input
                className="form-check-input my-3"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggle}
              />
              <label
                className="form-check-label mx-0 "
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {props.mode === "light" ? "dark" : "light"} mode
              </label>
            </div>

            {/* 
            <button className="btn btn-primary" type="submit">
              Search
            </button> */}
          </form>
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   about: PropTypes.string,
// };

// Navbar.defaultProps = {
//   title: "set the title",
//   about: "set the about text here",
// };
