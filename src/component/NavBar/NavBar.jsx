import React, { useState } from "react";
import "./NavBar.css";
// import sonaQodeIcon from "../../image/sonaQodeIcon.webp";
import { Link, useLocation } from "react-router-dom";
import password from "../../assets/icons/password.png";
import code from "../../assets/icons/code.png";
import chart from "../../assets/icons/chart.png";
import { Close } from "@mui/icons-material";
import { motion } from "framer-motion";

const NavBar = () => {
  const location = useLocation();

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark  px-lg-4 fixed-top  mx-lg-4">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3">
            PAKH_TECH
            {/* <img className="img-fluid sonaQodeIcon" src={sonaQodeIcon} alt="" /> */}
          </Link>
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            onClick={toggleOverlay}
          >
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M30.833 30.834L15.4163 30.834M30.833 20.0423L6.16634 20.0423M30.833 9.25065L6.16634 9.25065"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            {/* <span className="navbar-toggler-icon"></span> */}
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
      {isOverlayOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOverlayOpen ? 0 : "100%" }}
          transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          className={`overlay `}
          id="navbarNavDropdown"
        >
          <div className="overlay-close-div " onClick={toggleOverlay}>
            <Close className="overlay-close-icon" />
          </div>
          <div className="overlay-content">
            <ul className="navbar-nav mx-auto navbar-list-items gap-1">
              <li className="nav-item ">
                <Link
                  className={`nav-link `}
                  aria-current="page"
                  to="/"
                  onClick={() => setIsOverlayOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link li-link`}
                  to="aboutUs"
                  onClick={() => setIsOverlayOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle "
                  href="#"
                  role="button"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li className="d-flex mb-3">
                    <div className="dm-first dropdown-div">
                      <img className="service-icon" src={code} alt="" />
                    </div>
                    <Link
                      className={`dropdown-item  `}
                      to="softwareDev"
                      onClick={() => setIsOverlayOpen(false)}
                    >
                      Software Development
                    </Link>
                  </li>
                  <li className="d-flex mb-3">
                    <div className="dm-second dropdown-div">
                      <img className="service-icon" src={chart} alt="" />
                    </div>
                    <Link
                      className={`dropdown-item`}
                      to="dataAnalytics"
                      onClick={() => setIsOverlayOpen(false)}
                    >
                      Data & Analytics
                    </Link>
                  </li>
                  <li className="d-flex">
                    <div className="dm-third dropdown-div">
                      <img className="service-icon" src={password} alt="" />
                    </div>
                    <Link
                      className={`dropdown-item`}
                      to="cyberSecurity"
                      onClick={() => setIsOverlayOpen(false)}
                    >
                      Cyber Security
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link  ${
                    location.pathname === "/corporateCul"
                  } `}
                  to="corporateCul"
                  onClick={() => setIsOverlayOpen(false)}
                >
                  Corporate Culture
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link`}
                  to="contactUs"
                  onClick={() => setIsOverlayOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              <div className="mt-4">
                <Link to="getQuote">
                  <button
                    onClick={() => setIsOverlayOpen(false)}
                    className=" rounded-pill border-0 overlay-quote-button"
                  >
                    Get a Quote
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
