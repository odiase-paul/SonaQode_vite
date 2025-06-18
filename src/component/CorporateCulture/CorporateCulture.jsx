import React, { useState } from "react";
import "./CorporateCulture.css";
import ServiceTopDiv from "../ReuseableComponent/ServiceTopDiv";
import peopleImage from "/src/assets/corporateCulture/people.png";
import sdg8 from "/src/assets/corporateCulture/sdg-1.png";
import sdg3 from "/src/assets/corporateCulture/sdg-2.png";
import sdg5 from "/src/assets/corporateCulture/sdg-3.png";
import sdg10 from "/src/assets/corporateCulture/sdg-4.png";
import education from "/src/assets/corporateCulture/comm-1.png";

import culture from "/src/assets/corporateCulture/comm-2.png";
import sport from "/src/assets/corporateCulture/comm-3.png";
import charity from "/src/assets/corporateCulture/comm-4.png";
import educationIcon from "/src/assets/corporateCulture/education.398a0828.svg";
import cultureIcon from "/src/assets/corporateCulture/globe.668c52e1.svg";
import sportIcon from "/src/assets/corporateCulture/pin.08bd9046.svg";
import charityIcon from "/src/assets/corporateCulture/coins-hand.f941cf0a.svg";
import alliance from "/src/assets/corporateCulture/alliance.png";
import crowd from "/src/assets/corporateCulture/crowd.png";
import creativity from "/src/assets/corporateCulture/creativity.png";
import support from "/src/assets/corporateCulture/support.png";

const CorporateCulture = () => {
  const [isHovered, setIsHovered] = useState(null);
  const sdgItems = [
    {
      id: 1,
      background: sdg8,
      heading: "SDG 8",
      subHeading: "Lorem ipsum dolor sit amet",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      background: sdg3,
      heading: "SDG 3",
      subHeading: "Lorem ipsum dolor sit amet",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      background: sdg5,
      heading: "SDG 5",
      subHeading: "Lorem ipsum dolor sit amet",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      background: sdg10,
      heading: "SDG 10",
      subHeading: "Lorem ipsum dolor sit amet",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  const ecscItems = [
    {
      id: 1,
      background: education,
      heading: "Education",
      icon: educationIcon,
    },
    {
      id: 2,
      background: culture,
      heading: "Culture",
      icon: cultureIcon,
    },
    {
      id: 3,
      background: sport,
      heading: "Sport",
      icon: sportIcon,
    },
    {
      id: 4,
      background: charity,
      heading: "Charity",
      icon: charityIcon,
    },
  ];
  const weAchieveTheseBy = [
    {
      id: 1,
      icon: alliance,
      backGround: "#8497ff",
      heading: "Cultivating Alliances",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      icon: crowd,
      backGround: "#93ff98",
      heading: "Elevating Communities",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  commodo consequat.",
    },
    {
      id: 3,
      icon: creativity,
      backGround: "#ffd556",
      heading: "Amplifying Talents",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      icon: support,
      backGround: "#b4e7ff",
      heading: "Supporting Charitable Causes",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <div className="corporate-culture marginButton">
      <section className="corporate-culture-div d-flex justify-content-start align-items-lg-center">
        <div className="d-flex flex-column text-white corporate-culture-details mx-4 ">
          <h1>Corporate Culture</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore
          </p>
        </div>
      </section>

      <ServiceTopDiv
        heading={"People"}
        paragraph={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore"
        }
        softwareDevImage={peopleImage}
      />
      {/* pledges */}
      <section className="pledges marginTop mx-4">
        <div className="pledges-div ">
          <div className="pledges-inner-div ">
            <div className="pledges-inner-div-details d-flex flex-column justify-content-center align-items-center">
              <h2 className="h1-heading">Pledges</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore
              </p>
            </div>
            <div className="pledges-flex-div d-flex justify-content-between align-items-center flex-wrap">
              {sdgItems.map((item, i) => {
                return (
                  <div
                    onMouseEnter={() => setIsHovered(item.id)}
                    onMouseLeave={() => setIsHovered(null)}
                    className="sdg-div d-flex flex-column justify-content-center align-items-center"
                    style={{
                      background: `url(${item.background})`,
                      backgroundPosition: "center",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    key={i}
                  >
                    <h2>{item.heading}</h2>
                    <div className="sdg-subheading-paragraph d-flex justify-content-center align-items-center">
                      {isHovered === item.id ? (
                        <p className="is-hovered m-0">{item.paragraph}</p>
                      ) : (
                        <p className="not-hovered m-0">{item.subHeading}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* our impact on the community */}
      <section className="community-impact marginTop mx-4">
        <div className="community-impact-div ">
          <div className="community-impact-inner-div ">
            <div className="community-impact-inner-div-details d-flex flex-column justify-content-center align-items-center">
              <h2 className="h1-heading">Our Impact On Community</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                illo inventore
              </p>
            </div>
            <div className="community-impact-flex-div d-flex justify-content-between align-items-center flex-wrap">
              {ecscItems.map((item, i) => {
                return (
                  <div
                    onMouseEnter={() => setIsHovered(item.id)}
                    onMouseLeave={() => setIsHovered(null)}
                    className="ecsc-div d-flex flex-column justify-content-center align-items-center"
                    style={{
                      background: `url(${item.background})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    key={i}
                  >
                    {isHovered === item.id ? (
                      <div className="d-flex column-gap-2">
                        <img src={item.icon} />{" "}
                        <h2 className="m-0">{item.heading}</h2>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* We Achieve These By */}

      <div className="marginTop ">
        <div className="mx-4 why-sonaQode">
          <div className="why-sonaQuode-top-div d-flex justify-content-center align-items-center flex-column">
            <h1 className="mb-lg-3">We Achieve These By</h1>
          </div>
          <div className="row gap-lg-5  why-sonaQode-flex mt-5">
            {weAchieveTheseBy.map((items, i) => {
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
    </div>
  );
};

export default CorporateCulture;
