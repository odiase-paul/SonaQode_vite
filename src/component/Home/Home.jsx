import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import OnDemand from "./OnDemand";
import OurServices from "./OurServices";
import EngagementMood from "./EngagementMood";
import WhatOurClientsSay from "./WhatOurClientsSay";

const Home = () => {
  return (
    <div className="marginButton">
      <div className="homeBanner d-flex justify-content-start align-items-lg-center">
        <div className="text-white home-banner-details mx-4">
          <h1>Empowered by tech. Powered by talent.</h1>
          <p>
            We help organisations integrate remote support, accelerating
            progress and uncovering opportunities.
          </p>
          <div className="home-learn-more">
            <Link to="aboutUs">
              <button className="btn btn-primary rounded-pill border-0 quote-button">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <OnDemand />
      <OurServices />
      <EngagementMood />
      <WhatOurClientsSay />
    </div>
  );
};

export default Home;
