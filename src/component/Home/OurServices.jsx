import React from "react";
import "./Ourservices.css";
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
        "At Sonaqode, we understand that developing robust and scalable software solutions is the backbone of every successful business. That's why we offer you access to our talented and highly skilled software engineers.",
      button: "Learn More",
      color: "#cdcbff",
      buttonBg: "#8581ff",
    },
    {
      id: 2,
      imageFile: Image2,
      heading: "Data & Analytics",
      paragraph:
        "At Sonaqode, we offer you the expertise of our talented data scientists, who can help you unlock the full potential of your data and derive actionable insights to drive business growth.",
      button: "Learn More",
      color: "#ffd0d9",
      buttonBg: "#ff96aa",
    },
    {
      id: 3,
      imageFile: Image3,
      heading: "Cyber Security",
      paragraph:
        "At Sonaqode we offer top-tier cybersecurity specialists who are dedicated to safeguarding your company's digital assets, minimising the risk of cyber threats, and ensuring the confidentiality and integrity of your data.",
      button: "Learn More",
      color: "#d1ffd9",
      buttonBg: "#69ff93",
    },
  ];

  const whySonaQuode = [
    {
      id: 1,
      icon: Icon1,
      backGround: "#8497ff",
      heading: "Affordable Pricing",
      paragraph:
        "Tap into our exceptional talent pool of skilled professionals at cost effective rates, boosting your profitability.",
    },
    {
      id: 2,
      icon: Icon2,
      backGround: "#93ff98",
      heading: "Transparent Communication",
      paragraph:
        "We believe in trust, accountability, and practicing clear and cohesive engagements with clients.",
    },
    {
      id: 3,
      icon: Icon3,
      backGround: "#ffd556",
      heading: "Focus on Quality",
      paragraph:
        "Driving excellence, continuously improving efficiency, and aligning practices with a commitment to long term success.",
    },
    {
      id: 4,
      icon: Icon4,
      backGround: "#b4e7ff",
      heading: "Team Extension",
      paragraph:
        "Connecting you with top-tier talents, seamlessly integrating them into your team, and ensuring effective contributions.",
    },
  ];
  return (
    <div className="mx-4 our-service">
      <h1 className="d-flex justify-content-center mb-5">Our Services</h1>
      <div className="d-flex justify-content-between mb-5">
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
                <button
                  style={{ backgroundColor: items.buttonBg }}
                  className="w-50 border-0 rounded-pill py-2 text-white"
                >
                  {items.button}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="marginTop">
        <div className="why-sonaQode">
          <div className="why-sonaQuode-top-div d-flex justify-content-center align-items-center flex-column">
            <h1 className="mb-3">Why SonaQode</h1>
            <p className="why-sonaQode-title mb-5 text-secondary">
              Sonaqode is synonymous with top class quality and reliability,
              featuring specialists with extensive experience across various
              industries who are always prepared to address any challenges your
              business faces promptly.
            </p>
          </div>
          <div className="row gap-5">
            {whySonaQuode.map((items, i) => {
              return (
                <div className="why-sonaqode-second-divs col-6 m-auto" key={i}>
                  <span style={{ backgroundColor: items.backGround }}>
                    <img className="" src={items.icon} alt="" />
                  </span>
                  <header className="mt-4 mb-1 fs-5 fw-bold ">
                    {items.heading}
                  </header>
                  <p className="text-secondary">{items.paragraph}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="how-we-work-background d-flex align-items-end">
        <div className="p-5 mb-3 w-50">
          <h1 className="text-white ">How We Work</h1>
          <p className="text-white mt-4 mb-5 fw-light">
            We recognise the unique needs of every business, understanding that
            a one size fits all approach is inadequate. That's why we emphasise
            simplicity and flexibility in our engagements, tailored to your
            convenience on demand.
          </p>
          <div className="">
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
