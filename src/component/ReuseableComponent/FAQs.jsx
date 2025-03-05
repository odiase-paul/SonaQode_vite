import React, { useState } from "react";
import { ControlPoint, RemoveCircleOutline } from "@mui/icons-material";
import "../AboutUs/AboutUs.css";

const FAQs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleItem, setToggleItem] = useState({});

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
  );
};

export default FAQs;
