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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  Excepteur sint occaecat cupidatat non.",
    },
    {
      id: 2,
      plus: <ControlPoint />,
      minus: <RemoveCircleOutline />,
      heading: "Excepteur sint occaecat cupidatat non?",
      collapseItem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  Excepteur sint occaecat cupidatat non.",
    },
    {
      id: 3,
      plus: <ControlPoint />,
      minus: <RemoveCircleOutline />,
      heading: "Excepteur sint occaecat cupidatat non?",
      collapseItem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  Excepteur sint occaecat cupidatat non.",
    },
    {
      id: 4,
      plus: <ControlPoint />,
      minus: <RemoveCircleOutline />,
      heading: "Excepteur sint occaecat cupidatat non?",
      collapseItem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  Excepteur sint occaecat cupidatat non..",
    },
    {
      id: 5,
      plus: <ControlPoint />,
      minus: <RemoveCircleOutline />,
      heading: "Excepteur sint occaecat cupidatat non?",
      collapseItem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  Excepteur sint occaecat cupidatat non.",
    },
    {
      id: 6,
      plus: <ControlPoint />,
      minus: <RemoveCircleOutline />,
      heading: "Excepteur sint occaecat cupidatat non?",
      collapseItem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  Excepteur sint occaecat cupidatat non.",
    },
    {
      id: 7,
      plus: <ControlPoint />,
      minus: <RemoveCircleOutline />,
      heading: "Excepteur sint occaecat cupidatat non?",
      collapseItem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  Excepteur sint occaecat cupidatat non.",
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
