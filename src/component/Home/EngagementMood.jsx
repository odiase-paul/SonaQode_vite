import React from "react";
import "./EngagementMood.css";
import icon1 from "../../assets/icons/project.png";
import icon2 from "../../assets/icons/schedule.png";
import icon3 from "../../assets/icons/approach.png";
import icon4 from "../../assets/icons/client.png";
import icon5 from "../../assets/icons/admin.png";
import icon6 from "../../assets/icons/transparent.png";
import { Link } from "react-router-dom";

const EngagementMood = () => {
  const modelsDeetails = [
    {
      id: "div-one",
      header: "Monthly Subscription",
      subHeader: "Hourly Based, Ongoing Contract",
      paragraph:
        "Enjoy our subscription based, on-demand service that connects you with developers and engineers who deliver genuine results within a set monthly package of hours. Experience flexibility and convenience through regular communication with assigned team members and project managers.",
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
    },
    {
      id: "div-two",
      header: "Scrum Team",
      subHeader: "Agile Methodology",
      paragraph:
        "As your dedicated partner, we fulfil all your bespoke business needs, from ideation and prototyping to launch and ongoing maintenance. For bespoke projects requiring continuous iterations, we develop in two week sprints. With each sprint, we deliver a finished working product increment.",
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
    },
  ];

  return (
    <div className="mx-4 engagement-model marginTop">
      <div className="d-flex justify-content-center my-4 ">
        <h1>Engagement Models</h1>
      </div>
      <div className="d-flex justify-content-between gap-5">
        {modelsDeetails.map((items, i) => {
          return (
            <div
              className="engagement-model-div"
              key={i}
              style={{ backgroundColor: items.color }}
            >
              <div className="engagement-model-headings-div mb-4">
                <p className="p-0 m-0 header">{items.header}</p>
                <p className="sub-header">{items.subHeader}</p>
                <p>{items.paragraph}</p>
              </div>
              <div className="d-flex flex-column engagement-model-inner-div gap-4">
                <div className="d-flex gap-2">
                  <span style={{ background: items.imgBgColor1 }}>
                    <img src={items.icon1} alt="" />
                  </span>
                  <p className=" my-auto fw-light">
                    <span className="fw-bold">{items.span1}</span> {items.p1}
                  </p>
                </div>
                <div className="d-flex gap-2">
                  <span style={{ background: items.imgBgColor2 }}>
                    {" "}
                    <img src={items.icon2} alt="" />
                  </span>
                  <p className=" my-auto fw-light">
                    <span className="fw-bold">{items.span2}</span> {items.p2}
                  </p>
                </div>
                <div className="d-flex gap-2">
                  <span style={{ background: items.imgBgColor3 }}>
                    {" "}
                    <img src={items.icon3} alt="" />
                  </span>
                  <p className=" my-auto fw-light">
                    <span className="fw-bold">{items.span3}</span>
                    {items.p3}
                  </p>
                </div>
                <div className="d-flex gap-2">
                  <span style={{ background: items.imgBgColor4 }}>
                    {" "}
                    <img src={items.icon4} alt="" />{" "}
                  </span>
                  <p className=" my-auto fw-light">
                    <span className="fw-bold">{items.span4}</span> {items.p4}
                  </p>
                </div>
                <div className="d-flex gap-2">
                  <span style={{ background: items.imgBgColor5 }}>
                    {" "}
                    <img src={items.icon5} alt="" />
                  </span>
                  <p className=" my-auto fw-light">
                    <span className="fw-bold">{items.span5}</span> {items.p5}
                  </p>
                </div>
                <div className="d-flex gap-2">
                  <span style={{ background: items.imgBgColor6 }}>
                    {" "}
                    <img src={items.icon6} alt="" />
                  </span>
                  <p className=" my-auto fw-light">
                    <span className="fw-bold">{items.span6}</span> {items.p6}
                  </p>
                </div>

                <div className=" d-flex justify-content-center">
                  <p className="engagement-model-footer">{items.footer}</p>
                </div>
              </div>
              <div className="mt-4 d-flex justify-content-center">
                <Link>
                  <button
                    className={` rounded-pill border-0 engagement-model-button ${items.id}`}
                    // style={{ color: items.btnColor, background: "#fff" }}
                  >
                    {items.button}
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EngagementMood;
