import React from "react";
import "./OurServices.css";
import Image1 from "../../image/software-development.png";
import Image2 from "../../image/data-analytics.png";
import Image3 from "../../image/cyber-security.png";
import Icon1 from "../../assets/icons/affordable.png";
import Icon2 from "../../assets/icons/transparent.png";
import Icon3 from "../../assets/icons/focus.png";
import Icon4 from "../../assets/icons/extension.png";
import { Link } from "react-router-dom";
const OurServices = () => {
  const serviceDetails = [
    {
      id: 1,
      imageFile: Image1,
      heading: "Software Development",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      button: "Learn More",
      color: "#cdcbff",
      buttonBg: "#8581ff",
      link: "/softwareDev",
    },
    {
      id: 2,
      imageFile: Image2,
      heading: "Data & Analytics",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
      button: "Learn More",
      color: "#ffd0d9",
      buttonBg: "#ff96aa",
      link: "/dataAnalytics",
    },
    {
      id: 3,
      imageFile: Image3,
      heading: "Cyber Security",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
      button: "Learn More",
      color: "#d1ffd9",
      buttonBg: "#69ff93",
      link: "/cyberSecurity",
    },
  ];

  const whySonaQuode = [
    {
      id: 1,
      icon: Icon1,
      backGround: "#8497ff",
      heading: "Affordable Pricing",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      icon: Icon2,
      backGround: "#93ff98",
      heading: "Transparent Communication",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      icon: Icon3,
      backGround: "#ffd556",
      heading: "Focus on Quality",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      icon: Icon4,
      backGround: "#b4e7ff",
      heading: "Team Extension",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div id="our-services-link" className=" mx-4 our-service">
      <h1 className="d-flex justify-content-center mb-5 ">Our Services</h1>
      <div className="our-service-top-flex-div">
        <div className="d-lg-flex justify-content-between column-gap-5 our-service-flex">
          {serviceDetails.map((items, i) => {
            return (
              <div
                style={{ backgroundColor: items.color }}
                className="our-service-div"
                key={i}
              >
                <div>
                  <img src={items.imageFile} alt="" />
                </div>
                <div className="d-flex justify-content-center">
                  <header className="fs-5 my-4">{items.heading}</header>
                </div>
                <div className="hidden-container d-flex justify-content-center align-items-center flex-column px-4">
                  <p className="mb-4">{items.paragraph}</p>

                  <div className="w-75 d-flex justify-content-center">
                    <Link className="w-75" to={items.link}>
                      <button
                        style={{ backgroundColor: items.buttonBg }}
                        className="w-100  border-0 rounded-pill py-2 text-white"
                      >
                        {items.button}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="marginTop">
        <div className="why-sonaQode">
          <div className="why-sonaQuode-top-div d-flex justify-content-center align-items-center flex-column">
            <h1 className="mb-3">Why Pakh_Tech</h1>
            <p className="why-sonaQode-title mb-5 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut.
            </p>
          </div>
          <div className="row gap-lg-5 why-sonaQode-flex">
            {whySonaQuode.map((items, i) => {
              return (
                <div className="why-sonaqode-second-divs col-6 m-auto" key={i}>
                  <span style={{ backgroundColor: items.backGround }}>
                    <img className="" src={items.icon} alt="" />
                  </span>
                  <header className="mt-4 mb-1 fw-bold ">
                    {items.heading}
                  </header>
                  <p className="text-secondary">{items.paragraph}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="how-we-work-background d-lg-flex align-items-end">
        <div className="how-we-work-background-top p-lg-5 ">
          <div className=" how-we-work-background-header">
            <h1 className="text-white ">How We Work</h1>
            <p className="text-white mt-3 mb-lg-5 fw-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut.
            </p>
          </div>
          <div className="how-we-work-background-button">
            <Link to="aboutUs">
              <button className="btn btn-primary rounded-pill border-0 quote-button">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
