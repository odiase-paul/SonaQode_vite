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
      heading: "Fizel Nejabat",
      subHeading: "CEO, Performr Group ltd",
      countryName: "UK",
      countryFlag: uk,
      paragraph:
        "I approached Sonaqode with a tight timeline to develop version 1 of our MVP. From the outset of the onboarding process, I was immediately impressed by their professionalism and thoroughness. They selected the most suitable candidates who demonstrated a clear understanding of our requirements and delivered on them effectively, maintaining excellent communication throughout. We were thrilled with the quality of the product delivered and are now collaborating on version 2.",
    },
    {
      id: 2,
      icon: syka,
      heading: "Nana Kwame Asare",
      subHeading: "CEO, Syka Bank",
      countryName: "GHANA",
      countryFlag: ghana,
      paragraph:
        "Working with Sonaqode to build Phase 1 of Syka's web application has been a great experience. The initiation process was seamless and comprehensive, demonstrating their commitment to quality. Their highly skilled and efficient developers delivered a product that aligned perfectly with our vision and expectations. We are very satisfied with the product and look forward to more engagements",
    },
    {
      id: 3,
      icon: mytech,
      heading: "Amisi Kalonda",
      subHeading: "Tech lead, My Tech Partner",
      countryName: "NETHERLANDS",
      countryFlag: netherland,
      paragraph:
        "Connecting with them has been a joy. We've developed a fruitful collaboration and consider them part of our team. They are very hands-on and actively involved in conversations. They have provided us with highly qualified back-end engineers. Despite our demanding requirements, they remained adaptable and delivered without complaint, consistently meeting our expectations. It’s a pleasure working with Sonaqode. I would highly recommend them.",
    },
    {
      id: 4,
      icon: afrimedia,
      heading: "Kola Oluwole",
      subHeading: "Director, Afrimedia Ltd",
      countryName: "UK",
      countryFlag: uk,
      paragraph:
        "We contacted Sonaqode because we needed a video editor to complete a project. They were very accommodating in understanding our business, goals, and roadmap. They kept things simple yet concise, which made me feel confident in the service I was acquiring. I commend their excellent communication. The editor assigned to us, Romeo, was a pleasure to work with. He had a proactive attitude and great enthusiasm.",
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
          Our testimonials highlight the trust, quality, and satisfaction that
          define our work. Discover why our clients choose us to deliver
          excellence.
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
