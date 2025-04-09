import React, { useState } from "react";
import "./GetQuote.css";
const defaultField = {
  name: "",
  email: "",
  companyName: "",
  phoneNumber: "",
  subject: "",
  message: "",
  agree: false,
};

const GetQuote = () => {
  const [formField, setFormField] = useState(defaultField);
  const { name, email, companyName, phoneNumber, subject, message, agree } =
    formField;

  const items = [
    {
      id: 1,
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 lg:w-6 h-5 lg:h-6 shrink-0 text-sona-blue"
        >
          <rect width="24" height="24" rx="12" fill="currentColor"></rect>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.096 7.38967L9.93602 14.2997L8.03602 12.2697C7.68602 11.9397 7.13602 11.9197 6.73602 12.1997C6.34602 12.4897 6.23602 12.9997 6.47602 13.4097L8.72602 17.0697C8.94602 17.4097 9.32601 17.6197 9.75601 17.6197C10.166 17.6197 10.556 17.4097 10.776 17.0697C11.136 16.5997 18.006 8.40967 18.006 8.40967C18.906 7.48967 17.816 6.67967 17.096 7.37967V7.38967Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      ),
      paragraph: "Expect a response within 24 hours.",
    },
    {
      id: 2,
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 lg:w-6 h-5 lg:h-6 shrink-0 text-sona-blue"
        >
          <rect width="24" height="24" rx="12" fill="currentColor"></rect>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.096 7.38967L9.93602 14.2997L8.03602 12.2697C7.68602 11.9397 7.13602 11.9197 6.73602 12.1997C6.34602 12.4897 6.23602 12.9997 6.47602 13.4097L8.72602 17.0697C8.94602 17.4097 9.32601 17.6197 9.75601 17.6197C10.166 17.6197 10.556 17.4097 10.776 17.0697C11.136 16.5997 18.006 8.40967 18.006 8.40967C18.906 7.48967 17.816 6.67967 17.096 7.37967V7.38967Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      ),
      paragraph: "We’re open to signing an NDA, if needed.",
    },
    {
      id: 3,
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 lg:w-6 h-5 lg:h-6 shrink-0 text-sona-blue"
        >
          <rect width="24" height="24" rx="12" fill="currentColor"></rect>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.096 7.38967L9.93602 14.2997L8.03602 12.2697C7.68602 11.9397 7.13602 11.9197 6.73602 12.1997C6.34602 12.4897 6.23602 12.9997 6.47602 13.4097L8.72602 17.0697C8.94602 17.4097 9.32601 17.6197 9.75601 17.6197C10.166 17.6197 10.556 17.4097 10.776 17.0697C11.136 16.5997 18.006 8.40967 18.006 8.40967C18.906 7.48967 17.816 6.67967 17.096 7.37967V7.38967Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      ),
      paragraph: "Discuss your project in details.",
    },
  ];

  const isFormFilled =
    formField.companyName &&
    formField.email &&
    formField.message &&
    formField.name &&
    formField.phoneNumber &&
    formField.subject &&
    formField.agree;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormFilled) {
      console.log("Form submitted", formField);
    }
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormField({
      ...formField,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="get-quote ">
      <div className="d-flex contact-us-inner-div mx-4">
        <div className=" first-column">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="h1-heading">Have A Project?</h2>
            <p>Let's connect</p>
          </div>
          <div className="contact-us-flex-div">
            <p>Send your details and we'll get in touch</p>

            {items.map((item, i) => {
              return (
                <div key={i} className="d-flex gap-3">
                  <span>{item.svg}</span>
                  <p>{item.paragraph}</p>
                </div>
              );
            })}
          </div>
          <p className="fw-light">Reach out to us at</p>
          <h1 className="first-column-email">info@sonaqode.co.uk</h1>
        </div>
        <div className="contact-us-form d-flex justify-content-end">
          <form
            className="d-flex flex-column gap-4"
            action=""
            onSubmit={handleSubmit}
          >
            <div className="d-flex flex-column gap-2">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={handleChange}
                name="name"
                required
              />
            </div>
            <div className="d-flex flex-column gap-2">
              <label htmlFor="">Company Name</label>
              <input
                type="text"
                placeholder="Company name"
                value={companyName}
                onChange={handleChange}
                name="companyName"
                required
              />
            </div>
            <div className="d-flex flex-column gap-2">
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                placeholder="you@yourcompany.com"
                value={email}
                onChange={handleChange}
                name="email"
                required
              />
            </div>
            <div className="d-flex flex-column gap-2">
              <label htmlFor="">Phone Number</label>
              <input
                type="number"
                placeholder="+234 705 493 0908"
                value={phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
                required
              />
            </div>
            <div className="d-flex flex-column gap-2">
              <label htmlFor="">Subject</label>
              <input
                type="text"
                placeholder="How can we help you?"
                value={subject}
                onChange={handleChange}
                name="subject"
                required
              />
            </div>
            <div className="d-flex flex-column gap-2">
              <label htmlFor="">Tell us about your project</label>
              <textarea
                type="text"
                placeholder="Tell us about your project..."
                value={message}
                onChange={handleChange}
                name="message"
                required
              />
            </div>
            <div className="d-flex flex-column  gap-2">
              <input
                className="file-input-field text-center"
                accept="image/*"
                type="file"
                required
              />
            </div>
            <label className="d-flex gap-2 custom-checkbox">
              <input
                className="contact-us-checkbox"
                type="checkbox"
                id="checkbox"
                onChange={handleChange}
                checked={agree}
                name="agree"
                required
              />
              <span></span>
              <p className="my-auto privacy-policy fw-light">
                You agree to our friendly{" "}
                <a href="" className="text-white">
                  privacy policy
                </a>
              </p>
            </label>
            <button
              className={` transition ${
                isFormFilled
                  ? "filledSubmitButton cursor-pointer"
                  : "contactUs-submit-button"
              }`}
              type="submit"
              disabled={!isFormFilled}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
