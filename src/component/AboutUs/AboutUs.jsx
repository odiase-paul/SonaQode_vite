import React from "react";
import "../AboutUs/AboutUs.css";
import Icon1 from "../../assets/AboutUsFiles/goal.png";
import Icon2 from "../../assets/AboutUsFiles/vision.png";
import valuesIcon1 from "../../assets/AboutUsFiles/admin-male.png";
import valuesIcon2 from "../../assets/AboutUsFiles/trust.png";
import valuesIcon3 from "../../assets/AboutUsFiles/conflict.png";
import valuesIcon4 from "../../assets/AboutUsFiles/progress.png";
import valuesIcon5 from "../../assets/AboutUsFiles/handshake.png";
import valuesIcon6 from "../../assets/AboutUsFiles/graduation.png";
import howItWorksIcon1 from "../../assets/AboutUsFiles/blue-25.c24e78a1.svg";
import howItWorksIcon2 from "../../assets/AboutUsFiles/blue-50.ba3d36f7.svg";
import howItWorksIcon3 from "../../assets/AboutUsFiles/blue-75.9e9f5a15.svg";
import howItWorksIcon4 from "../../assets/AboutUsFiles/blue-100.643e0c52.svg";

import FAQs from "../ReuseableComponent/FAQs";
import HowItWorks from "../ReuseableComponent/HowItWorks";

const AboutUs = () => {
  const missionAndVision = [
    {
      id: 1,
      icon: Icon1,
      backgroundColor: "#cdcbff",
      iconBackGround: "#8497ff",
      heading: "Mission",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u.",
    },
    {
      id: 2,
      icon: Icon2,
      backgroundColor: "#ffd0d9",
      iconBackGround: "#ff758f",
      heading: "Vision",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab.",
    },
  ];
  const ourValues = [
    {
      id: 1,
      icon: valuesIcon1,
      backGround: "#8497ff",
      heading: "Client",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      icon: valuesIcon2,
      backGround: "#ffbfab",
      heading: "Commitment",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      icon: valuesIcon3,
      backGround: "#ffd556",
      heading: "Proactive",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      icon: valuesIcon4,
      backGround: "#b4e7ff",
      heading: "Progress",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      id: 5,
      icon: valuesIcon5,
      backGround: "#ff9d0f",
      heading: "Trusted Partner",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 6,
      icon: valuesIcon6,
      backGround: "#55c6ff",
      heading: "Excellence Service",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const howItWorks = [
    {
      id: 1,
      icon: howItWorksIcon1,

      heading: "Initiation",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      icon: howItWorksIcon2,

      heading: "Discovery",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      icon: howItWorksIcon3,

      heading: "Application",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      icon: howItWorksIcon4,

      heading: "Appraisal",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="marginButton">
      {/* about us */}
      <div className="about-us d-flex justify-content-start align-items-lg-center">
        <div className="d-flex flex-column text-white about-us-details mx-4 ">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo.
          </p>
        </div>
      </div>
      {/* mission and vision */}
      <div className="row gap-lg-4 row-gap-4 about-us-mission-vision marginTop mx-4">
        {missionAndVision.map((items, i) => {
          return (
            <div
              style={{ background: items.backgroundColor }}
              className="mission-vision-divs col-lg-6 m-auto"
              key={i}
            >
              <div className="d-flex align-items-center gap-3 mb-3">
                <div
                  className=" goal-vision-img"
                  style={{ backgroundColor: items.iconBackGround }}
                >
                  <img className="" src={items.icon} alt="" />{" "}
                </div>
                <h3 className="m-0 header">{items.heading}</h3>
              </div>
              <p className="mb-1">{items.paragraph}</p>
            </div>
          );
        })}
      </div>
      {/* our values */}
      <div className="marginTop">
        <div className="mx-4 why-sonaQode">
          <div className="why-sonaQuode-top-div d-flex justify-content-center align-items-center flex-column">
            <h1 className="mb-3">Our Values</h1>
            <p className="why-sonaQode-our-value-title mb-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore
            </p>
          </div>
          <div className="row gap-lg-5  why-sonaQode-flex">
            {ourValues.map((items, i) => {
              return (
                <div className="why-sonaqode-second-divs col-6 m-auto" key={i}>
                  <span style={{ backgroundColor: items.backGround }}>
                    <img className="" src={items.icon} alt="" />
                  </span>
                  <header className="mt-4 mb-1 fw-bold">{items.heading}</header>
                  <p className="text-secondary">{items.paragraph}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* how it works */}
      <HowItWorks heading={"How It Works"} arrays={howItWorks} />
      {/* global reach */}
      <div className="marginTop mx-4">
        <div className="d-flex align-items-lg-end global-reach">
          <div className="">
            <h1 className="">Global Reach</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      {/* frequently asked questions */}
      <FAQs />
    </div>
  );
};

export default AboutUs;
