import React from "react";
import homeBanner from "../../assets/homeBanner/woman-standing.png";
import { Link } from "react-router-dom";
const OnDemand = () => {
  return (
    <>
      <div className="on-demand mx-4">
        <div className="on-demand-top-div row px-lg-5 pt-lg-5 d-flex justify-content-start align-items-lg-center gap-0">
          <div className="col-lg-7 p-0 d-flex flex-column mb-sm-4 px-lg-1">
            <h1 className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipi
            </h1>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <div className="">
              <Link to="aboutUs">
                <button className="btn rounded-pill border-0 on-demand-button">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="on-demand-top-div-img col-lg-5">
            <img className="img-fluid " width="450" src={homeBanner} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OnDemand;
