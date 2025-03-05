import React from "react";

const ServiceTopDiv = ({
  leftImage,
  middleImage,
  rightImage,
  heading,
  paragraph,
  button,
  softwareDevImage,
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center software-development-inner-div row mx-4 ">
      <div className="reuseable-service-top-div col-lg-6">
        <div className="d-flex justify-content-between align-items-center flex-image-div w-100">
          <img
            className="img-fluid  flex-image flex-image-left"
            src={leftImage}
            alt=""
          />
          <img
            className="img-fluid flex-image flex-image-middle start-50 translate-middle"
            src={middleImage}
            alt=""
          />
          <img
            className="img-fluid flex-image flex-image-right"
            src={rightImage}
            alt=""
          />
        </div>
        <div>
          <h2>{heading}</h2>
        </div>
        <div>
          <p>{paragraph}</p>
        </div>
        <div>
          <a href="#services">
            <button className="btn btn-primary rounded-pill border-0 see-service-button">
              {button}
            </button>
          </a>
        </div>
      </div>
      <div className="software-dev-image-div col-lg-6">
        <img className="img-fluid shadow-sm" src={softwareDevImage} alt="" />
      </div>
    </div>
  );
};

export default ServiceTopDiv;
