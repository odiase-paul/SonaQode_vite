import React, { useState } from "react";
import "./WhatOurClientsSay.css";
import { useSwipeable } from "react-swipeable";
import performr from "../../assets/icons/performr.png";
import syka from "../../assets/icons/syka.png";
import mytech from "../../assets/icons/mytech.png";
import afrimedia from "../../assets/icons/afrimedia.png";
import uk from "../../assets/icons/gb.svg";
import ghana from "../../assets/icons/gh.svg";
import netherland from "../../assets/icons/nl.svg";
import { useMediaQuery } from "react-responsive";

const WhatOurClientsSay = () => {
  const [index, setIndex] = useState(0);
  const items = [
    {
      id: 1,
      icon: performr,
      heading: "Lorem ipsum",
      subHeading: "CEO, Lorem ipsum ltd",
      countryName: "UK",
      countryFlag: uk,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      icon: syka,
      heading: "Lorem ipsum",
      subHeading: "CEO, Lorem ipsum",
      countryName: "GHANA",
      countryFlag: ghana,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      icon: mytech,
      heading: "Lorem ipsum",
      subHeading: "Tech lead, Lorem ipsum",
      countryName: "NETHERLANDS",
      countryFlag: netherland,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      icon: afrimedia,
      heading: "Lorem ipsum",
      subHeading: "Director, Lorem Ltd",
      countryName: "UK",
      countryFlag: uk,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  const totalItems = items.length;
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const itemWidthMobile = 100;
  const visibleItemsMobile = 1;
  const handleNextMobile = () => {
    if (index < totalItems - visibleItemsMobile) {
      setIndex(index + 1);
    }
  };

  const itemWidth = 398;
  const visibleItems = 3;
  const handleNext = () => {
    if (index < totalItems - visibleItems) {
      setIndex(index + 1);
    }
  };
  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="what-our-clients-say marginTop mx-4 px-3">
      <div className="d-flex flex-column align-items-center what-our-clients-say-top-div">
        <h1>What Our Clients Say</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="w-carousel-container" {...handlers}>
        <div className="w-carousel">
          <div className="d-flex justify-content-between px-4 mb-5">
            <button className="prev border-0" onClick={handlePrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0e6ba4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-left"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </button>
            <button
              className="next border-0"
              onClick={isMobile ? handleNextMobile : handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0e6ba4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div
            className="d-flex w-carousel-track"
            style={
              isMobile
                ? { transform: `translateX(-${index * itemWidthMobile}%)` }
                : { transform: `translateX(-${index * itemWidth}px)` }
            }
          >
            {items.map((item, i) => {
              return (
                <div
                  key={i}
                  className="w-carousel-item d-flex flex-column justify-content-center"
                >
                  <div className="w-icon d-flex justify-content-center align-items-center position-absolute start-50 translate-middle top-0">
                    {<img width="174" height="174" src={item.icon} alt="" />}
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <header>{item.heading}</header>
                      <p className="sub-heading">{item.subHeading}</p>
                    </div>
                    <div className="d-flex gap-1">
                      <p className="sub-heading">{item.countryName}</p>
                      <div className="">
                        <img
                          className="country-flag "
                          src={item.countryFlag}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <p className="paragraph">{item.paragraph}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatOurClientsSay;
