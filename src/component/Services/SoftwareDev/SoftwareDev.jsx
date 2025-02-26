import React from "react";
import "./SoftwareDev.css";
import leftImage from "/src/assets/softwareDevelopment/curly-brackets.png";
import middleImage from "/src/assets/softwareDevelopment/js.png";
import rightImage from "/src/assets/softwareDevelopment/man-social-media.png";

const SoftwareDev = () => {
  return (
    <div className="">
      <div className="software-development">
        <div className="d-flex justify-content-center align-items-center software-development-inner-div row mx-4">
          <div className="col-lg-6">
            <div className="d-flex justify-content-between position">
              <img
                className="position top-0 flex-image"
                src={leftImage}
                alt=""
              />
              <img
                className="position bottom-0 flex-image"
                src={middleImage}
                alt=""
              />
              <img
                className="position top-0 flex-image"
                src={rightImage}
                alt=""
              />
            </div>
            <div>
              <h2>Software Development</h2>
            </div>
            <div>
              <p>
                Connect with our skilled tech specialists, ready to expedite
                your objectives. Whether it's customising a running developing
                prototype applications, or implementing complex technology
                solutions, our expert team is equipped to deliver rapid and
                reliable results. Proficient in top programming languages, they
                adapt and collaborate with your business to address any
                complexity, meet your requirements, and bring your vision to
                life.
              </p>
            </div>
            <div>
              <a href="services">
                <button className="btn btn-primary rounded-pill border-0 see-service-button">
                  See Services
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="software-dev-image-div"></div>
          </div>
        </div>
        <section id="services"></section>
      </div>
    </div>
  );
};

export default SoftwareDev;
