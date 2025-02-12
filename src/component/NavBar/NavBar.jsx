import React, { useState } from "react";
import "./NavBar.css";
import sonaQodeIcon from "../../image/sonaQodeIcon.webp";
import { Link, useLocation } from "react-router-dom";
import password from "../../assets/icons/password.png";
import code from "../../assets/icons/code.png";
import chart from "../../assets/icons/chart.png";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark  px-lg-4 fixed-top  mx-lg-4">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-2">
            <img className="img-fluid sonaQodeIcon" src={sonaQodeIcon} alt="" />
          </Link>
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="overlay" id="overlay"></div> */}
          <div
            className="collapse navbar-collapse full-width-collapse"
            id="navbarNavDropdown"
          >
            {/* <button className="close-btn" id="closeNavbar">
              &times;
            </button> */}
            <ul className="navbar-nav mx-auto navbar-list-items column-gap-3">
              <li className="nav-item">
                <Link
                  className={`nav-link  ${
                    location.pathname === "/" ? "text-info" : ""
                  } `}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link li-link  ${
                    location.pathname === "/aboutUs" ? "text-info" : ""
                  } `}
                  to="aboutUs"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li className="d-flex mb-4">
                    <div className="dm-first dropdown-div">
                      <img className="service-icon" src={code} alt="" />
                    </div>
                    <Link
                      className={`dropdown-item ${
                        location.pathname === "/softwareDev" ? "text-info" : ""
                      } `}
                      to="softwareDev"
                    >
                      Software Development
                    </Link>
                  </li>
                  <li className="d-flex mb-4">
                    <div className="dm-second dropdown-div">
                      <img className="service-icon" src={chart} alt="" />
                    </div>
                    <Link
                      className={`dropdown-item ${
                        location.pathname === "/dataAnalytics"
                          ? "text-info"
                          : ""
                      } `}
                      to="dataAnalytics"
                    >
                      Data & Analytics
                    </Link>
                  </li>
                  <li className="d-flex">
                    <div className="dm-third dropdown-div">
                      <img className="service-icon" src={password} alt="" />
                    </div>
                    <Link
                      className={`dropdown-item ${
                        location.pathname === "/cyberSecurity"
                          ? "text-info"
                          : ""
                      } `}
                      to="cyberSecurity"
                    >
                      Cyber Security
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link  ${
                    location.pathname === "/corporateCul" ? "text-info" : ""
                  } `}
                  to="corporateCul"
                >
                  Corporate Culture
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link  ${
                    location.pathname === "/contactUs" ? "text-info" : ""
                  } `}
                  to="contactUs"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div>
              <Link to="getQuote">
                <button className="btn btn-primary rounded-pill border-0 quote-button">
                  Get a Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
