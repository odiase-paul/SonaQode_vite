import React, { useState } from "react";
import "./NavBar.css";
import sonaQodeIcon from "../../image/sonaQodeIcon.webp";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top  mx-4">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-2">
            <img className="sonaQodeIcon" src={sonaQodeIcon} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarNavDropdown">
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
                  <li>
                    <Link
                      className={`dropdown-item ${
                        location.pathname === "/softwareDev" ? "text-info" : ""
                      } `}
                      to="softwareDev"
                    >
                      Software Development
                    </Link>
                  </li>
                  <li>
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
                  <li>
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
