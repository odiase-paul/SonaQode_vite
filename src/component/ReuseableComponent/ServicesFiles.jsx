import React, { useState } from "react";
import "./ServicesFile.css";
import ClearIcon from "@mui/icons-material/Clear";
import { ControlPoint, RemoveCircleOutline } from "@mui/icons-material";
const ServicesFiles = ({
  leftImage,
  heading,
  paragraph,
  button,
  backendDevImage,
  // aboutThisRole
  aboutThisRole,
  atrParagraphOne,
  atrParagraphtwo,
  // subscribe
  fullTimeTopParagraph,
  fullTimeTopSpan,
  fullTimeBottomParagraph,
  partTimeTopParagraph,
  partTimeTopSpan,
  partTimeBottomParagraph,
  // popNote
  ftItemTotalAmount,
  ftPackageName,
  ftTotalDue,
  ftPackageAmount,
  ftVatAmount,

  ptPackageName,
  ptItemTotalAmount,
  ptPackageAmount,
  ptVatAmount,
  ptTotalDue,
  // skill array
  entireSkillSet,
  // deliverables array
  entireDeliverableKey,
}) => {
  const [showPopUp, setShowPopup] = useState("");

  const [isCollapseOpen, setIscollapseOpen] = useState({});
  const [isCollapseKeyOpen, setIscollapseKeyOpen] = useState({});
  const handleToggle = (id) => {
    setIscollapseOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };
  const toggleCollapse = (id) => {
    setIscollapseKeyOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const closePopup = () => {
    setShowPopup("");
  };

  return (
    <div className="service-files">
      <section className="d-flex justify-content-center align-items-center service-files-inner row mx-4">
        <div className="service-files-inner-right col-lg-6">
          <div className="d-flex justify-content-between align-items-center flex-image-div w-100 mb-2">
            <img
              className="img-fluid service-files-image-left"
              src={leftImage}
              alt=""
            />
          </div>
          <div>
            <h2>{heading}</h2>
          </div>
          <div className="mb-4">
            <p>{paragraph}</p>
          </div>
          <div className="service-top-div-button-hide">
            <a href="#subscribe">
              <button className="btn btn-primary rounded-pill border-0 see-service-button">
                {button}
              </button>
            </a>
          </div>
        </div>
        <div className="software-dev-image-div col-lg-6">
          <img className="img-fluid shadow-sm" src={backendDevImage} alt="" />
        </div>
      </section>
      <section className="about-this-role d-flex flex-column justify-content-center align-items-center mx-4">
        <div>
          <h1 className="d-flex justify-content-center mb-5">
            {aboutThisRole}
          </h1>
          <div>
            <p className="mb-4">{atrParagraphOne}</p>
            <p className="mt-1">{atrParagraphtwo}</p>
          </div>
        </div>
      </section>

      <section
        id="subscribe"
        className=" service-files-subscribe d-lg-flex justify-content-between align-items-center mx-4 marginButton"
      >
        <div className="subscribe-first d-flex flex-column justify-content-center align-items-center">
          <h2>Subscribe</h2>

          <svg
            viewBox="3 7 30 18"
            width="120"
            height="70"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:block h-16"
            preserveAspectRatio="none"
          >
            <g id="arrowRight">
              <line
                fill="none"
                stroke="#0E6BA4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2px"
                x1="31"
                x2="1"
                y1="16"
                y2="16"
              ></line>
              <line
                fill="none"
                stroke="#0E6BA4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2px"
                x1="32"
                x2="25.08"
                y1="16"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="#0E6BA4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2px"
                x1="32"
                x2="25.08"
                y1="16"
                y2="11"
              ></line>
            </g>
          </svg>
        </div>
        <div
          onClick={() => {
            setShowPopup("fullTime");
          }}
          className="subscribe-second d-flex flex-column align-items-center justify-content-center"
        >
          <p>
            {fullTimeTopParagraph} <span>{fullTimeTopSpan}</span>
          </p>
          <p>{fullTimeBottomParagraph}</p>
        </div>
        <div
          onClick={() => {
            setShowPopup("partTime");
          }}
          className="subscribe-third d-flex flex-column align-items-center justify-content-center"
        >
          <p>
            {partTimeTopParagraph} <span>{partTimeTopSpan}</span>
          </p>
          <p>{partTimeBottomParagraph}</p>
        </div>
        {showPopUp && (
          <div className="popup-top-div">
            <div className="popup-inner-div">
              <div className="d-flex justify-content-between ">
                <p
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    marginBottom: "5px",
                  }}
                >
                  Welcome Aboard
                </p>
                <ClearIcon style={{ cursor: "pointer" }} onClick={closePopup} />
              </div>
              <p style={{ fontSize: "0.875rem", color: "#475467" }}>
                To initiate your subscription, kindly click the subscribe
                button. This will guide you through our streamlined payment
                procedure, which is secure, quick, and easy.
              </p>
              <p style={{ fontWeight: "500" }}>Order Summary</p>
              <div className="d-flex justify-content-between m-0 p-0">
                <p
                  style={{
                    background: "#e6f2ff",
                    padding: "4px 8px 4px 8px",
                    borderRadius: "20px",
                    color: "#0e6ba4",
                    fontSize: "0.875rem",
                    marginBottom: "5px",
                  }}
                >
                  1 item
                </p>
                <p className="fw-bold fs-5 m-0 p-0">
                  £
                  {showPopUp === "fullTime"
                    ? ftItemTotalAmount
                    : ptItemTotalAmount}
                </p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "500",
                  }}
                >
                  <p style={{ margin: "10px 0" }}>
                    {showPopUp === "fullTime" ? ftPackageName : ptPackageName}
                  </p>
                  <p style={{ marginBottom: "10px" }}>VAT</p>
                  <p style={{ marginBottom: "10px" }}>Total Due</p>
                </div>
                <div style={{ fontSize: "0.9rem" }}>
                  <p style={{ margin: "10px 0" }}>
                    £
                    {showPopUp === "fullTime"
                      ? ftPackageAmount
                      : ptPackageAmount}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    £{showPopUp === "fullTime" ? ftVatAmount : ptVatAmount}
                  </p>
                  <p>£{showPopUp === "fullTime" ? ftTotalDue : ptTotalDue}</p>
                </div>
              </div>
              <hr />
              <p style={{ fontSize: "0.875rem", color: "#475467" }}>
                You can cancel your subscription at any time. Cancellation will
                take effect one month after your next billing cycle, and a final
                payment will be charged.
              </p>
              <button className="subscribe">Subscribe</button>
            </div>
          </div>
        )}
      </section>
      <section className="skill-deliverable-set  ">
        <div className="row mx-4">
          <div className="col-lg-6 p-0">
            <div className="skill-deliverable-separate-div">
              <div>
                <h2 className="d-flex justify-content-center mb-4 skill-key-heading">
                  Skill Set
                </h2>
              </div>
              {entireSkillSet.map((item, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => handleToggle(i)}
                    className="mt-4 skill-deliverable-set-inner-div"
                  >
                    <div className="d-flex gap-4">
                      <div>
                        {isCollapseOpen[i] ? (
                          <ControlPoint className="icon-dull-color" />
                        ) : (
                          <RemoveCircleOutline className="icon-dull-color" />
                        )}
                      </div>
                      <p className="m-0 tech-core">{item.heading}</p>
                    </div>
                    <div
                      className={`collapse-bottom ${
                        isCollapseOpen[i] ? "collapsed" : "expanded"
                      }`}
                      style={{
                        overflow: "hidden",
                        maxHeight: isCollapseOpen[i] ? "15px" : "600px",
                        transition:
                          "max-height 0.4s ease, visibility 0.3s ease",
                        visibility: isCollapseOpen[i] ? "hidden" : "visible",
                      }}
                    >
                      <div className="d-flex">
                        <ul
                          className="skill-dull-color"
                          style={{
                            listStyleType: "disc",
                            marginLeft: "30px",
                          }}
                        >
                          {item.items.map((item, i) => {
                            return (
                              <div key={i}>
                                {item.innerHeading}
                                <li className="mt-2">
                                  <span> {item.listParagraph}</span>
                                  {item.listSpan}
                                </li>
                              </div>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-6 d-lg-flex flex-column align-items-end  p-0">
            <div className=" mb-4 skill-deliverable-separate-div">
              <div>
                <h2 className="d-flex justify-content-center mb-4 skill-key-heading">
                  Key Deliverables
                </h2>
              </div>
              {entireDeliverableKey.map((item, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => toggleCollapse(i)}
                    className="mt-4 skill-deliverable-set-inner-div"
                  >
                    <div className="d-flex gap-4">
                      <div>
                        {isCollapseKeyOpen[i] ? (
                          <ControlPoint className="icon-dull-color" />
                        ) : (
                          <RemoveCircleOutline className="icon-dull-color" />
                        )}
                      </div>
                      <p className="m-0 tech-core">{item.heading}</p>
                    </div>
                    <div
                      className={`collapse-bottom ${
                        isCollapseKeyOpen[i] ? "collapsed" : "expanded"
                      }`}
                      style={{
                        overflow: "hidden",
                        maxHeight: isCollapseKeyOpen[i] ? "15px" : "600px",
                        transition:
                          "max-height 0.4s ease, visibility 0.3s ease",
                        visibility: isCollapseKeyOpen[i] ? "hidden" : "visible",
                      }}
                    >
                      <div className="d-flex">
                        <ul
                          className="skill-dull-color"
                          style={{
                            listStyleType: "disc",
                            marginLeft: "30px",
                          }}
                        >
                          {item.items.map((item, i) => {
                            return (
                              <li className="mt-2" key={i}>
                                <span> {item.listParagraph}</span>
                                {item.listSpan}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesFiles;
