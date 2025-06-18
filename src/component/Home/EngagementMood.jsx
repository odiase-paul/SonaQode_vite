import React from "react";
import "./EngagementMood.css";
import icon1 from "../../assets/icons/project.png";
import icon2 from "../../assets/icons/schedule.png";
import icon3 from "../../assets/icons/approach.png";
import icon4 from "../../assets/icons/client.png";
import icon5 from "../../assets/icons/admin.png";
import icon6 from "../../assets/icons/transparent.png";
import pinkIcon1 from "../../assets/icons/pink-25.a959ce0b.svg";
import pinkIcon2 from "../../assets/icons/pink-50.bc565c14.svg";
import pinkIcon3 from "../../assets/icons/pink-75.428b2dc9.svg";
import pinkIcon4 from "../../assets/icons/pink-100.5b00329d.svg";
import purpleIcon1 from "../../assets/icons/purple-20.c82e3db3.svg";
import purpleIcon2 from "../../assets/icons/purple-40.851753fe.svg";
import purpleIcon3 from "../../assets/icons/purple-60.987255f2.svg";
import purpleIcon4 from "../../assets/icons/purple-80.4c1e16ea.svg";
import purpleIcon5 from "../../assets/icons/purple-100.419b105d.svg";

const EngagementMood = () => {
  const modelsDeetails = [
    {
      class: "first-child",
      id: "div-one",
      header: "Monthly Subscription",
      subHeader: "Hourly Based, Ongoing Contract",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      icon5: icon5,
      icon6: icon6,
      span1: "Size of the project:",
      span2: "Scope:",
      span3: "Approach:",
      span4: "Client Control:",
      span5: "Flexibility:",
      span6: "Communication:",

      p1: ` Any, long term support`,
      p2: ` Flexible, within allocated hours per month`,
      p3: ` Result driven`,
      p4: ` Full`,
      p5: ` High`,
      p6: ` Designated Specialist`,
      color: "#ffd0d9",
      button: "Subscribe",

      imgBgColor1: "#ddf0ff",
      imgBgColor2: "#ffb8b3",
      imgBgColor3: "#ffe1b5",
      imgBgColor4: "#bbced7",
      imgBgColor5: "#9aa9ff",
      imgBgColor6: "#93ff98",

      link: "#our-services-link",

      //   onboarding

      onBoardingIcon1: pinkIcon1,
      onBoardingIcon2: pinkIcon2,
      onBoardingIcon3: pinkIcon3,
      onBoardingIcon4: pinkIcon4,

      onBoardingTitle1: "Subscribe",
      onBoardingTitle2: "Engage",
      onBoardingTitle3: "Cooperate",
      onBoardingTitle4: "Commence",

      paragraph1:
        "Select the service and package that best suits your needs. Follow our quick payment process by providing your company details.",
      paragraph2:
        "We will schedule a call to ascertain your requirements and expectations and introduce your assigned employee and dedicated manager.",
      paragraph3:
        "Integrate your newly assigned team into your in-house team. Familiarise them with company practices, then assign tasks to unleash their capabilities.",
      paragraph4:
        "Breathe, your ambitious onboarded team embodies an engineering ethos that embraces adaptability, drives continual improvement, and delivers unparalleled value.",
    },
    {
      class: "second-child",
      id: "div-two",
      header: "Scrum Team",
      subHeader: "Agile Methodology",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      icon5: icon5,
      icon6: icon6,
      span1: "Size of the project:",
      span2: "Scope:",
      span3: "Approach:",
      span4: "Client Control:",
      span5: "Flexibility:",
      span6: "Communication:",
      p1: ` Medium and Large`,
      p2: ` Evolving`,
      p3: ` Value driven`,
      p4: ` Full`,
      p5: ` High`,
      p6: ` Designated Project Manager`,
      color: "#cdcbff",
      footer: "We’re open to signing an NDA, if needed.",
      button: "Get a Quote",

      imgBgColor1: "#ddf0ff",
      imgBgColor2: "#ffb8b3",
      imgBgColor3: "#ffe1b5",
      imgBgColor4: "#bbced7",
      imgBgColor5: "#9aa9ff",
      imgBgColor6: "#93ff98",

      link: "/getQuote",
      //   onBoarding

      onBoardingIcon1: purpleIcon1,
      onBoardingIcon2: purpleIcon2,
      onBoardingIcon3: purpleIcon3,
      onBoardingIcon4: purpleIcon4,
      onBoardingIcon5: purpleIcon5,

      onBoardingTitle1: "Pre-engagement",
      onBoardingTitle2: "Discovery",
      onBoardingTitle3: "Proposal",
      onBoardingTitle4: "Development",
      onBoardingTitle5: "Support",

      paragraph1:
        "Laying the groundwork for a strong partnership, we conduct a holistic analysis of your vision, uncovering goals, challenges, and resource considerations.",
      paragraph2:
        "Collaborating with you to shape your idea into a well planned and practical strategy, we unlock both business and user value for an optimal investment, outlining technical and strategic solutions.",
      paragraph3:
        "After thoroughly understanding your business needs, we finalise our proposal and send it to you for review. It outlines the main value proposition, details the scope, timelines, and the terms and conditions. Additionally, we evaluate potential risks and create a mitigation plan.",
      paragraph4:
        "Once all project specifics are agreed upon, we formalise our commitment by signing an MSA. Now, we assemble a robust delivery team and begin building your product. This phase focuses on coding, rigorous testing, and transforming your concept into a tangible reality.",
      paragraph5:
        "Our relationship with you doesn't end once your product is complete. We provide post deployment technical support to enhance and maintain your software. To guarantee long term reliability, our technical experts periodically assess the health of your product and other key functionalities, ensuring it continues to meet your changing requirements.",
    },
  ];

  return (
    <div className="d-flex flex-column justify-content-center mx-4 engagement-model marginTop">
      <div className=" d-flex justify-content-center my-4 ">
        <h1>Engagement Models</h1>
      </div>

      <div className="d-lg-flex justify-content-between gap-5 position-relative">
        {modelsDeetails.map((items, i) => {
          return (
            <div className={`d-flex flex-column gap-3 ${items.class}`} key={i}>
              <div
                className="engagement-model-div"
                style={{ backgroundColor: items.color }}
              >
                <div className="engagement-model-headings-div mb-4">
                  <p className="p-0 m-0 header">{items.header}</p>
                  <p className="sub-header">{items.subHeader}</p>
                  <p className="paragraph">{items.paragraph}</p>
                </div>
                <div className="d-flex flex-column engagement-model-inner-div gap-4">
                  <div className="d-flex gap-2">
                    <div className="my-auto">
                      <span style={{ background: items.imgBgColor1 }}>
                        <img src={items.icon1} alt="" />
                      </span>
                    </div>
                    <div className="my-auto">
                      <p className=" my-auto fw-light">
                        <span className="fw-bold">{items.span1}</span>{" "}
                        {items.p1}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <div className="my-auto">
                      <span style={{ background: items.imgBgColor2 }}>
                        <img src={items.icon2} alt="" />
                      </span>
                    </div>
                    <div className="my-auto">
                      {" "}
                      <p className=" my-auto fw-light">
                        <span className="fw-bold">{items.span2}</span>{" "}
                        {items.p2}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <div className="my-auto">
                      {" "}
                      <span style={{ background: items.imgBgColor3 }}>
                        {" "}
                        <img src={items.icon3} alt="" />
                      </span>
                    </div>
                    <div className="my-auto">
                      <p className=" my-auto fw-light">
                        <span className="fw-bold">{items.span3}</span>
                        {items.p3}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <div className="my-auto">
                      <span style={{ background: items.imgBgColor4 }}>
                        <img src={items.icon4} alt="" />{" "}
                      </span>
                    </div>
                    <div className="my-auto">
                      <p className=" my-auto fw-light">
                        <span className="fw-bold">{items.span4}</span>{" "}
                        {items.p4}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <div className="my-auto">
                      <span style={{ background: items.imgBgColor5 }}>
                        {" "}
                        <img src={items.icon5} alt="" />
                      </span>
                    </div>
                    <div className="my-auto">
                      <p className=" my-auto fw-light">
                        <span className="fw-bold">{items.span5}</span>{" "}
                        {items.p5}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <div className="my-auto">
                      <span
                        className=""
                        style={{ background: items.imgBgColor6 }}
                      >
                        {" "}
                        <img src={items.icon6} alt="" />
                      </span>
                    </div>
                    <div className="my-auto">
                      <p className="my-auto fw-light">
                        <span className="fw-bold">{items.span6}</span>{" "}
                        {items.p6}
                      </p>
                    </div>
                  </div>

                  <div className=" d-flex justify-content-center">
                    <p className="engagement-model-footer">{items.footer}</p>
                  </div>
                </div>
                <div className="mt-4 d-flex justify-content-center">
                  <a href={items.link}>
                    <button
                      className={` rounded-pill border-0 engagement-model-button ${items.id}`}
                    >
                      {items.button}
                    </button>
                  </a>
                </div>
              </div>
              <div
                className={`onboard-div d-flex justify-content-center align-items-center bottom-0 start-50 translate-middle`}
              >
                <h1>Onboarding Steps</h1>
              </div>
              <div className="engagement-onboarding-inner">
                <div className="d-flex gap-3 ">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="top-line-div d-none"></div>
                    <div className="m-auto ">
                      <img
                        className="my-2"
                        src={items.onBoardingIcon1}
                        alt=""
                      />
                    </div>
                    <div className="bottom-line-div"></div>
                  </div>
                  <div>
                    <header>{items.onBoardingTitle1}</header>
                    <p>{items.paragraph1}</p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="top-line-div"></div>
                    <div className="m-auto">
                      <img
                        className="my-2"
                        src={items.onBoardingIcon2}
                        alt=""
                      />
                    </div>
                    <div className="bottom-line-div"></div>
                  </div>
                  <div className="m-auto">
                    <header>{items.onBoardingTitle2}</header>
                    <p className="m-0">{items.paragraph2}</p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="top-line-div"></div>
                    <div className="m-auto">
                      <img
                        className="my-2"
                        src={items.onBoardingIcon3}
                        alt=""
                      />
                    </div>
                    <div className="bottom-line-div "></div>
                  </div>
                  <div className="m-auto">
                    <header>{items.onBoardingTitle3}</header>
                    <p className="m-0">{items.paragraph3}</p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="top-line-div second-div-expand"></div>
                    <div className="m-auto">
                      <img
                        className="my-2"
                        src={items.onBoardingIcon4}
                        alt=""
                      />
                    </div>
                    <div className="bottom-line-div first-invisible second-div-expand"></div>
                  </div>
                  <div className="m-auto">
                    <header>{items.onBoardingTitle4}</header>
                    <p className="m-0">{items.paragraph4}</p>
                  </div>
                </div>
                <div className="d-flex  gap-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="top-line-div first-invisible second-div-expand"></div>
                    <div className="m-auto">
                      <img
                        className="my-2"
                        src={items.onBoardingIcon5}
                        alt=""
                      />
                    </div>
                    <div className="bottom-line-div first-invisible second-invisible"></div>
                  </div>
                  <div className="m-auto">
                    <header>{items.onBoardingTitle5}</header>
                    <p className="m-0">{items.paragraph5}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EngagementMood;
