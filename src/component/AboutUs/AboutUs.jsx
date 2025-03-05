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
        "To spearhead and propel digital services through AI and technology from Africa to the world.",
    },
    {
      id: 2,
      icon: Icon2,
      backgroundColor: "#ffd0d9",
      iconBackGround: "#ff758f",
      heading: "Vision",
      paragraph:
        "To be the leading technology staffing company committed in solving deep tech industry challenges.",
    },
  ];
  const ourValues = [
    {
      id: 1,
      icon: valuesIcon1,
      backGround: "#8497ff",
      heading: "Client",
      paragraph:
        "Clients are our most valuable asset. Providing client centric solutions means actively engaging with our customers, listening to their feedback, and understanding their pain points throughout the evaluation and process.",
    },
    {
      id: 2,
      icon: valuesIcon2,
      backGround: "#ffbfab",
      heading: "Commitment",
      paragraph:
        "Every project we undertake will be managed with the highest level of commitment. We are dedicated to achieving business goals, meeting deadlines, ensuring quality, and maximising productivity.",
    },
    {
      id: 3,
      icon: valuesIcon3,
      backGround: "#ffd556",
      heading: "Proactive",
      paragraph:
        "We encourage a proactive, innovative, and initiative driven mindset within our workforce. Our goal is to maintain creativity while delivering services to our clients.",
    },
    {
      id: 4,
      icon: valuesIcon4,
      backGround: "#b4e7ff",
      heading: "Progress",
      paragraph:
        "A value we closely share with our clients is the importance of demonstrating progress throughout our collaboration. As a forward thinking and pragmatic organisation, we strive to embrace innovation and practicality.",
    },
    {
      id: 5,
      icon: valuesIcon5,
      backGround: "#ff9d0f",
      heading: "Trusted Partner",
      paragraph:
        "Trust comes from being honest, reliable, and transparent. These integral values apply both internally and externally, guiding our relationships with clients and stakeholders. They are essential ingredients in developing success together.",
    },
    {
      id: 6,
      icon: valuesIcon6,
      backGround: "#55c6ff",
      heading: "Excellence Service",
      paragraph:
        "The highest quality is the best way to build long term relationships with our clients. This empowers our team to deliver excellence in every aspect of our business and fuels continuous improvement.",
    },
  ];

  const howItWorks = [
    {
      id: 1,
      icon: howItWorksIcon1,

      heading: "Initiation",
      paragraph:
        "We begin with an introductory call, diving into the intricate details of your organisation. Through dynamic brainstorming sessions, we uncover your specific staffing requirements, ethos, and expectations, accurately matching them with suitable professionals to provide solutions to your challenges.",
    },
    {
      id: 2,
      icon: howItWorksIcon2,

      heading: "Discovery",
      paragraph:
        "Building on the initial consultation, we embark on constructing a well planned and practical strategy, mapping out staffing solutions along with the resources, efficiency, and competency required to deliver outstanding results.",
    },
    {
      id: 3,
      icon: howItWorksIcon3,

      heading: "Application",
      paragraph:
        "This phase is dedicated to finding the ideal candidate for your organisation. We conduct a thorough vetting process, rigorously shortlisting the most compatible professionals who will seamlessly integrate with and complement your in-house team, delivering tangible results that align with your outlined expectations.",
    },
    {
      id: 4,
      icon: howItWorksIcon4,

      heading: "Appraisal",
      paragraph:
        "We understand the value of user insight. Our team assesses the achievement of your engagement against outlined requirements, evaluating performance and other functionalities. This ensures it continues to meet your changing requirements and maximises its positive impact on your processes, guaranteeing quality and long term reliability.",
    },
  ];

  return (
    <div>
      {/* about us */}
      <div className="about-us d-flex justify-content-start align-items-lg-center">
        <div className="d-flex flex-column text-white about-us-details mx-4 ">
          <h1>About Us</h1>
          <p>
            Sonaqode is a tech professional staffing company dedicated to
            helping businesses scale and grow. We focus on optimising budgets,
            accelerating growth, and avoiding the pitfalls of traditional
            outsourcing. By providing efficient, on-demand access to top-tier
            talent from across Africa, we empower you to achieve exceptional
            results swiftly.
          </p>
          <p>
            We understand that achieving your success means securing the best
            talent, and our dedicated team of specialists stands ready to
            support you at every step.
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
              We embody our values, driving us forward and defining our stance.
              We actively drive every team member to achieve results and advance
              our progress.
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
              With our roots in the UK and Ghana's alignment with the GMT time
              zone, we cater to the needs of global entities. Our specialists
              work within your business hours, and our mature collaboration
              strategies enable us to overcome geographic, language, and
              cultural barriers, ensuring cohesive communication and exceptional
              results.
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
