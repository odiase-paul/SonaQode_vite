import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FacebookOutlined, Instagram, LinkedIn } from "@mui/icons-material";
import sonaQodeIcon from "../../image/sonaQodeIcon.webp";

const Footer = ({}) => {
  const year = new Date().getFullYear();

  return (
    <div className="footer marginTop text-white p-5 pb-2 ">
      <div className="header d-flex justify-content-center">
        <h1>Let’s Build Something Great Together</h1>
      </div>
      <div className="footer-link-div d-lg-flex justify-content-between mt-5  pt-4">
        <div className="image-logo">
          <img className="img-fluid footer-logo" src={sonaQodeIcon} alt="" />
        </div>
        <div className="d-flex flex-column gap-3">
          <header>Company</header>
          <Link to="/aboutUs" className="footer-link">
            About Us
          </Link>
          <Link to="/contactUs" className="footer-link">
            Contact
          </Link>
          <Link to="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>
        </div>
        <div className="d-flex flex-column gap-3">
          <header>Service</header>
          <Link to="/cyberSecurity" className="footer-link">
            Cybersecurity
          </Link>
          <Link to="/dataAnalytics" className="footer-link">
            Data Analytics
          </Link>
          <Link to="/softwareDev" className="footer-link">
            Software Development
          </Link>
        </div>
        <div className="d-flex flex-column gap-3">
          <header>Updates</header>
          <Link to="/" className="footer-link">
            Blog
          </Link>
          <Link to="/" className="footer-link">
            News
          </Link>
        </div>
        <div className="d-flex flex-column gap-3">
          <header>Contact</header>
          <span className="footer-link">London, England</span>
          <a className="footer-link" href="mailto:paulakhere48@gmail.com">
            paulakhere48@gmail.com
          </a>
          <div className="d-flex gap-3">
            <span>
              <LinkedIn />
            </span>
            <span>
              <FacebookOutlined className="footer-icon" />
            </span>
            <span>
              <Instagram />
            </span>
          </div>
        </div>
      </div>
      <div className="footer-reserved d-flex justify-content-center">
        <p className="mt-4">© {year} SonaQode. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
