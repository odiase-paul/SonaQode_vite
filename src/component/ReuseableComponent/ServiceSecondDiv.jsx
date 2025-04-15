import React from "react";

const ServiceSecondDiv = ({ heading, arrays, button }) => {
  return (
    <section
      className="software-development-service marginTop mx-4"
      id="services"
    >
      <div className="d-flex justify-content-center marginTop">
        <h1 className="h1-heading">{heading}</h1>
      </div>
      <div className="d-lg-flex flex-lg-wrap column-gap-5 software-development-service-inner marginTop">
        {arrays.map((item, i) => {
          return (
            <div key={i} className="software-development-service-item ">
              <div className="w-icon d-flex justify-content-center align-items-center position-absolute start-50 translate-middle top-0">
                {
                  <img
                    className="img-fluid"
                    width="120"
                    height="120"
                    src={item.icon}
                    alt=""
                  />
                }
              </div>
              <div className="product-amount-div d-flex justify-content-center">
                <p className="">
                  <span>From</span>
                  {item.productAmount}
                </p>
              </div>

              <div className="sds-body-div">
                <p className="header">{item.heading}</p>
                <p className="paragraph">{item.paragraph}</p>
              </div>

              <div className="sds-learn-more-div d-flex justify-content-center">
                <a className="" href={item.buttonLink}>
                  <button className="btn rounded-pill border-0  sds-learn-more">
                    {button}
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceSecondDiv;
