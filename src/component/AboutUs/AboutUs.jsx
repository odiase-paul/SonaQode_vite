import React, { useState } from "react";
import "./AboutUs.css";
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
import { ControlPoint, RemoveCircleOutline } from "@mui/icons-material";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleItem, setToggleItem] = useState({});

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
      backGround: "#8497ff",
      heading: "Initiation",
      paragraph:
        "We begin with an introductory call, diving into the intricate details of your organisation. Through dynamic brainstorming sessions, we uncover your specific staffing requirements, ethos, and expectations, accurately matching them with suitable professionals to provide solutions to your challenges.",
    },
    {
      id: 2,
      icon: howItWorksIcon2,
      backGround: "#ffbfab",
      heading: "Discovery",
      paragraph:
        "Building on the initial consultation, we embark on constructing a well planned and practical strategy, mapping out staffing solutions along with the resources, efficiency, and competency required to deliver outstanding results.",
    },
    {
      id: 3,
      icon: howItWorksIcon3,
      backGround: "#ffd556",
      heading: "Application",
      paragraph:
        "This phase is dedicated to finding the ideal candidate for your organisation. We conduct a thorough vetting process, rigorously shortlisting the most compatible professionals who will seamlessly integrate with and complement your in-house team, delivering tangible results that align with your outlined expectations.",
    },
    {
      id: 4,
      icon: howItWorksIcon4,
      backGround: "#b4e7ff",
      heading: "Appraisal",
      paragraph:
        "We understand the value of user insight. Our team assesses the achievement of your engagement against outlined requirements, evaluating performance and other functionalities. This ensures it continues to meet your changing requirements and maximises its positive impact on your processes, guaranteeing quality and long term reliability.",
    },
  ];

  const faqs = [
    {
      id: 1,
      plus: <ControlPoint />,
      minus: <RemoveCircleOutline />,
      heading: "How do you select your specialists?",
      collapseItem:
        "We meticulously screen candidates, assessing their industry expertise, experience, and technical proficiency. This ensures our team is composed of individuals with diverse skill sets, fostering a well-rounded approach.",
    },
    {
      id: 2,
      plus: <ControlPoint />,
      minus: <RemoveCircleOutline />,
      heading:
        "What happens if a team member needs to be replaced or added mid-project?",
      collapseItem:
        "We recognise that project needs can shift. To accommodate changes, we promptly adjust our team by adding or replacing members, minimising disruptions to your project timeline. Our commitment is to remain adaptable and responsive to your evolving requirements.",
    },
    {
      id: 3,
      plus: <ControlPoint />,
      minus: <RemoveCircleOutline />,
      heading: "How experienced are your professionals?",
      collapseItem:
        "Our professionals are highly experienced and have a proven track record in their respective fields. All are university graduates and bring a minimum of three years of industry experience. They combine a strong educational foundation with practical expertise, empowering them to craft high quality solutions tailored to your business's unique needs.",
    },
    {
      id: 4,
      plus: <ControlPoint />,
      minus: <RemoveCircleOutline />,
      heading: "How does the onboarding process work?",
      collapseItem:
        "Our onboarding process is straightforward. Simply complete the subscription form, and we will contact you within a couple of hours to begin the welcome process. During this process, we will introduce your dedicated professional and establish a roadmap for delivering outstanding results.",
    },
    {
      id: 5,
      plus: <ControlPoint />,
      minus: <RemoveCircleOutline />,
      heading: "Where is Sonaqode based?",
      collapseItem:
        "Our leadership team is based in London, UK, while most of our senior and mid level engineers operate from Accra, Ghana. We are committed to recruiting top-quality specialists from various countries across the African continent, enabling us to deliver exceptional remote work.",
    },
    {
      id: 6,
      plus: <ControlPoint />,
      minus: <RemoveCircleOutline />,
      heading:
        "How can I ensure effective communication with a Developer & Engineer?",
      collapseItem:
        "Maintaining clear and effective communication is crucial for the success of any project. You will have direct communication channels with the dedicated developers working on your project. We establish strong communication channels and regular check ins from the outset to ensure this. Our toolkit for effective communication usually includes tools Skype, Teams, Email, Zoom, Jira, Confluence, and Slack.",
    },
    {
      id: 7,
      plus: <ControlPoint />,
      minus: <RemoveCircleOutline />,
      heading: "Are your professionals fluent in English?",
      collapseItem:
        "Yes, all our professionals are fluent in English, ensuring clear and effective communication throughout every stage of your project. This proficiency enables seamless collaboration and a thorough understanding of your requirements.",
    },
  ];

  const handleActiveToggle = (id) => {
    setToggleItem((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <div>
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

      <div className="marginTop">
        <div className="mx-4 how-it-works">
          <div className="how-it-works-div d-flex justify-content-center align-items-center flex-column">
            <h1 className="mb-5">How It Works</h1>
          </div>
          <div className="row gap-lg-4 why-sonaQode-flex">
            {howItWorks.map((items, i) => {
              return (
                <div
                  className="d-flex gap-lg-4 how-it-works-second-divs col-lg-6"
                  key={i}
                >
                  <div>
                    <img className="" src={items.icon} alt="" />
                  </div>
                  <div>
                    <header className=" mb-1 ">{items.heading}</header>
                    <p className="text-secondary">{items.paragraph}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

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

      <div className="marginTop mx-4 frequently-questions">
        <div className="">
          <div className="d-flex frequently-asked-questions justify-content-center mb-4">
            <h1>Frequently Asked Questions</h1>
          </div>

          <div className="d-flex flex-column gap-3">
            {faqs.map((items, i) => {
              return (
                <div
                  key={i}
                  className="frequently-questions-second-div py-3"
                  style={{
                    background: toggleItem[items.id]
                      ? "#fff"
                      : setTimeout(() => {
                          "#e6f2ff";
                        }, 500),
                  }}
                >
                  <div
                    className="px-4"
                    type="button"
                    data-bs-toggle=""
                    data-bs-target="#collapseContent"
                    aria-expanded={isOpen}
                    onClick={() => {
                      setIsOpen(!isOpen);
                      handleActiveToggle(items.id);
                    }}
                  >
                    <div className="d-flex align-items-center ps-2 gap-3">
                      {toggleItem[items.id] ? (
                        <RemoveCircleOutline style={{ color: "#98a2b3" }} />
                      ) : (
                        <ControlPoint style={{ color: "#98a2b3" }} />
                      )}
                      <p className="heading my-auto">{items.heading}</p>
                    </div>
                  </div>
                  <p
                    className={`custom-collapse  mx-4 ps-5 mb-0 mt-3 ${
                      toggleItem[items.id] ? "open" : ""
                    }`}
                    id="collapseContent"
                  >
                    {items.collapseItem}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
