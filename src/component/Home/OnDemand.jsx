import React from "react";
import homeBanner from "../../assets/homeBanner/woman-standing.png";
import { Link } from "react-router-dom";
const OnDemand = () => {
  return (
    <>
      <div className="on-demand mx-4">
        <div className="row p-5 d-flex justify-content-start align-items-center gap-0">
          <div className="col-lg-7 p-0 d-flex flex-column px-1">
            <h1 className="mb-3">
              On-Demand Talent Solution Helping You Thrive
            </h1>
            <p className="text-secondary">
              We connect you with top-tier tech professionals to build a
              resilient, extended remote workforce. Our value driven solutions
              accelerate growth and innovation, propelling your business to new
              heights. From start-ups to established enterprises, we align your
              goals with expert teams and professionals through our seamless and
              flexible model.
            </p>
            <p className="text-secondary">
              Allowing you to focus on growing your business while we expertly
              manage your staffing needs
            </p>
            <div>
              <Link to="aboutUs">
                <button className="btn rounded-pill border-0 on-demand-button mt-4">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <img width="450" src={homeBanner} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OnDemand;
