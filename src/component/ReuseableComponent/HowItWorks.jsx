import React from "react";

const HowItWorks = ({ heading, arrays, svg }) => {
  return (
    <div className="marginTop">
      <div className="mx-4 how-it-works">
        <div className="how-it-works-div d-flex justify-content-center align-items-center flex-column">
          <h1 className="mb-5">{heading}</h1>
        </div>
        <div className="row gap-lg-4 why-sonaQode-flex">
          {arrays.map((items, i) => {
            return (
              <div
                className="d-flex gap-lg-4 how-it-works-second-divs col-lg-6"
                key={i}
              >
                <div>
                  <img className="" src={items.icon} alt="" />
                  {items.svg}
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
  );
};

export default HowItWorks;
