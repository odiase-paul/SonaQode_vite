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
      subHeading: "Decent Work and Economic Growth",
      paragraph:
        "We commit to investing in training and professional qualifications to empower team members to advance into senior and higher paying roles. Additionally, we will bolster the growth of our operational digital economy by enhancing citizen services and facilitating improved access to online services.",
    },
    {
      id: 2,
      background: sdg3,
      heading: "SDG 3",
      subHeading: "Good Health and Wellbeing",
      paragraph:
        "At the core of our organisation are people, and their well being is our utmost priority. We strive to foster open discussions about mental health, promote work life balance, incentivise healthy habits, and engage you with exciting wellness initiatives.",
    },
    {
      id: 3,
      background: sdg5,
      heading: "SDG 5",
      subHeading: "Gender Equality  ",
      paragraph:
        "We position ourselves as a progressive company and actively champion gender equality by promoting women's participation in the workforce and leadership roles. Fostering a diverse and inclusive workplace broadens perspectives, stimulates innovation, and enhances problem solving capabilities within the company.",
    },
    {
      id: 4,
      background: sdg10,
      heading: "SDG 10",
      subHeading: "Reduced Inequalies",
      paragraph:
        "We aim to create equal opportunities by educating youth about digital careers and providing mentorship to job seekers from underprivileged backgrounds, thereby leveling the playing field.",
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
        "Working with our partners to encourage investment and empowerment into communities and individuals with a focus on generating positive social and environmental outcomes.",
    },
    {
      id: 2,
      icon: crowd,
      backGround: "#93ff98",
      heading: "Elevating Communities",
      paragraph:
        "As a people first company, we value our local community and actively support it by investing in the tools, skills, and education needed to create communities that are inspired, capable, and confident in driving change.",
    },
    {
      id: 3,
      icon: creativity,
      backGround: "#ffd556",
      heading: "Amplifying Talents",
      paragraph:
        "We support diverse talent to excel in their fields and become value driven role models and leaders who uplift and inspire their communities. These achievements are facilitated by offering individuals free opportunities for networking, internships, and personal development.",
    },
    {
      id: 4,
      icon: support,
      backGround: "#b4e7ff",
      heading: "Supporting Charitable Causes",
      paragraph:
        "As part of our mission to positively impact work, people, and the planet, we actively support charitable causes and none profit organisations. This includes staging fundraising events and providing material assistance to orphanages and children's facilities in various regions where we are present.",
    },
  ];
  return (
    <div className="corporate-culture marginButton">
      <section className="corporate-culture-div d-flex justify-content-start align-items-lg-center">
        <div className="d-flex flex-column text-white corporate-culture-details mx-4 ">
          <h1>Corporate Culture</h1>
          <p>
            At Sonaqode, we integrate corporate social responsibility into our
            strategy to enrich the lives of our team members and uplift the
            communities in which we operate. We demonstrate our commitment
            through proactive initiatives that promote social, economic,
            educational, and environmental well-being at both local and global
            levels. By establishing and pursuing clear objectives in these
            areas, we reinforce our dedication to nurturing a thriving and
            responsible workforce.
          </p>
        </div>
      </section>

      <ServiceTopDiv
        heading={"People"}
        paragraph={
          "We cultivate a supportive and inclusive working environment that embodies our mission and values. We commit to continual improvement and development, believing in the power of individuals. By creating personal development plans, we unlock the true potential of every team member and are thrilled to be a company that attracts unique individuals who share a passion for tech and dream of making it more accessible to businesses needing support in today's worldwide digital transformation."
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
                Our company's commitments are aligned with several United
                Nations Sustainable Development Goals (SDGs), a set of 17
                objectives designed to promote global peace and prosperity.
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
                Only through collaborative efforts can we generate a ripple
                effect of prosperity and well being for all members of the
                communities we impact. We accomplish this by actively supporting
                individuals and communities in these areas.
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
