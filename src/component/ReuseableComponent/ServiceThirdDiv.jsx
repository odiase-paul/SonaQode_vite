import React from "react";

const ServiceThirdDiv = ({ heading, arrays }) => {
  return (
    <section className="marginTop mx-4 experts-assistance">
      <div className=" experts-assistance-div">
        <div className="expert-width m-auto pt-5 pb-5">
          <div className="d-flex justify-content-center mb-4">
            <h1 className="h1-heading">{heading}</h1>
          </div>
          <div className="d-lg-flex column-gap-lg-5  experts-assistance-flex-div">
            {arrays.map((items, i) => {
              return (
                <div key={i}>
                  <div className="d-flex experts-assistance-flex-inner-div flex-column  gap-4">
                    <div className="d-flex justify-content-start align-items-center column-gap-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 lg:w-6 h-5 lg:h-6 shrink-0 text-sona-purple w-2"
                      >
                        <rect
                          width="24"
                          height="24"
                          rx="12"
                          fill="currentColor"
                        ></rect>
                        <path
                          filerule="evenodd"
                          clipRule="evenodd"
                          d="M17.096 7.38967L9.93602 14.2997L8.03602 12.2697C7.68602 11.9397 7.13602 11.9197 6.73602 12.1997C6.34602 12.4897 6.23602 12.9997 6.47602 13.4097L8.72602 17.0697C8.94602 17.4097 9.32601 17.6197 9.75601 17.6197C10.166 17.6197 10.556 17.4097 10.776 17.0697C11.136 16.5997 18.006 8.40967 18.006 8.40967C18.906 7.48967 17.816 6.67967 17.096 7.37967V7.38967Z"
                          fill="#FFFFFF"
                        ></path>
                      </svg>
                      <p className="my-auto">{items.paragraph1}</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center  column-gap-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 lg:w-6 h-5 lg:h-6 shrink-0 text-sona-purple"
                      >
                        <rect
                          width="24"
                          height="24"
                          rx="12"
                          fill="currentColor"
                        ></rect>
                        <path
                          filerule="evenodd"
                          clipRule="evenodd"
                          d="M17.096 7.38967L9.93602 14.2997L8.03602 12.2697C7.68602 11.9397 7.13602 11.9197 6.73602 12.1997C6.34602 12.4897 6.23602 12.9997 6.47602 13.4097L8.72602 17.0697C8.94602 17.4097 9.32601 17.6197 9.75601 17.6197C10.166 17.6197 10.556 17.4097 10.776 17.0697C11.136 16.5997 18.006 8.40967 18.006 8.40967C18.906 7.48967 17.816 6.67967 17.096 7.37967V7.38967Z"
                          fill="#FFFFFF"
                        ></path>
                      </svg>
                      <p className="my-auto">{items.paragraph2}</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center column-gap-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 lg:w-6 h-5 lg:h-6 shrink-0 text-sona-purple"
                      >
                        <rect
                          width="24"
                          height="24"
                          rx="12"
                          fill="currentColor"
                        ></rect>
                        <path
                          filerule="evenodd"
                          clipRule="evenodd"
                          d="M17.096 7.38967L9.93602 14.2997L8.03602 12.2697C7.68602 11.9397 7.13602 11.9197 6.73602 12.1997C6.34602 12.4897 6.23602 12.9997 6.47602 13.4097L8.72602 17.0697C8.94602 17.4097 9.32601 17.6197 9.75601 17.6197C10.166 17.6197 10.556 17.4097 10.776 17.0697C11.136 16.5997 18.006 8.40967 18.006 8.40967C18.906 7.48967 17.816 6.67967 17.096 7.37967V7.38967Z"
                          fill="#FFFFFF"
                        ></path>
                      </svg>
                      <p className="my-auto">{items.paragraph3}</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center column-gap-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 lg:w-6 h-5 lg:h-6 shrink-0 text-sona-purple"
                      >
                        <rect
                          width="24"
                          height="24"
                          rx="12"
                          fill="currentColor"
                        ></rect>
                        <path
                          filerule="evenodd"
                          clipRule="evenodd"
                          d="M17.096 7.38967L9.93602 14.2997L8.03602 12.2697C7.68602 11.9397 7.13602 11.9197 6.73602 12.1997C6.34602 12.4897 6.23602 12.9997 6.47602 13.4097L8.72602 17.0697C8.94602 17.4097 9.32601 17.6197 9.75601 17.6197C10.166 17.6197 10.556 17.4097 10.776 17.0697C11.136 16.5997 18.006 8.40967 18.006 8.40967C18.906 7.48967 17.816 6.67967 17.096 7.37967V7.38967Z"
                          fill="#FFFFFF"
                        ></path>
                      </svg>
                      <p className="my-auto">{items.paragraph4}</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center column-gap-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 lg:w-6 h-5 lg:h-6 shrink-0 text-sona-purple"
                      >
                        <rect
                          width="24"
                          height="24"
                          rx="12"
                          fill="currentColor"
                        ></rect>
                        <path
                          filerule="evenodd"
                          clipRule="evenodd"
                          d="M17.096 7.38967L9.93602 14.2997L8.03602 12.2697C7.68602 11.9397 7.13602 11.9197 6.73602 12.1997C6.34602 12.4897 6.23602 12.9997 6.47602 13.4097L8.72602 17.0697C8.94602 17.4097 9.32601 17.6197 9.75601 17.6197C10.166 17.6197 10.556 17.4097 10.776 17.0697C11.136 16.5997 18.006 8.40967 18.006 8.40967C18.906 7.48967 17.816 6.67967 17.096 7.37967V7.38967Z"
                          fill="#FFFFFF"
                        ></path>
                      </svg>
                      <p className="my-auto">{items.paragraph5}</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center column-gap-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 lg:w-6 h-5 lg:h-6 shrink-0 text-sona-purple"
                      >
                        <rect
                          width="24"
                          height="24"
                          rx="12"
                          fill="currentColor"
                        ></rect>
                        <path
                          filerule="evenodd"
                          clipRule="evenodd"
                          d="M17.096 7.38967L9.93602 14.2997L8.03602 12.2697C7.68602 11.9397 7.13602 11.9197 6.73602 12.1997C6.34602 12.4897 6.23602 12.9997 6.47602 13.4097L8.72602 17.0697C8.94602 17.4097 9.32601 17.6197 9.75601 17.6197C10.166 17.6197 10.556 17.4097 10.776 17.0697C11.136 16.5997 18.006 8.40967 18.006 8.40967C18.906 7.48967 17.816 6.67967 17.096 7.37967V7.38967Z"
                          fill="#FFFFFF"
                        ></path>
                      </svg>
                      <p className="my-auto">{items.paragraph6}</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center column-gap-3 data-analytic-hide">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 lg:w-6 h-5 lg:h-6 shrink-0 text-sona-purple"
                      >
                        <rect
                          width="24"
                          height="24"
                          rx="12"
                          fill="currentColor"
                        ></rect>
                        <path
                          filerule="evenodd"
                          clipRule="evenodd"
                          d="M17.096 7.38967L9.93602 14.2997L8.03602 12.2697C7.68602 11.9397 7.13602 11.9197 6.73602 12.1997C6.34602 12.4897 6.23602 12.9997 6.47602 13.4097L8.72602 17.0697C8.94602 17.4097 9.32601 17.6197 9.75601 17.6197C10.166 17.6197 10.556 17.4097 10.776 17.0697C11.136 16.5997 18.006 8.40967 18.006 8.40967C18.906 7.48967 17.816 6.67967 17.096 7.37967V7.38967Z"
                          fill="#FFFFFF"
                        ></path>
                      </svg>
                      <p className="my-auto">{items.paragraph7}</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center column-gap-3 data-analytic-hide">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 lg:w-6 h-5 lg:h-6 shrink-0 text-sona-purple"
                      >
                        <rect
                          width="24"
                          height="24"
                          rx="12"
                          fill="currentColor"
                        ></rect>
                        <path
                          filerule="evenodd"
                          clipRule="evenodd"
                          d="M17.096 7.38967L9.93602 14.2997L8.03602 12.2697C7.68602 11.9397 7.13602 11.9197 6.73602 12.1997C6.34602 12.4897 6.23602 12.9997 6.47602 13.4097L8.72602 17.0697C8.94602 17.4097 9.32601 17.6197 9.75601 17.6197C10.166 17.6197 10.556 17.4097 10.776 17.0697C11.136 16.5997 18.006 8.40967 18.006 8.40967C18.906 7.48967 17.816 6.67967 17.096 7.37967V7.38967Z"
                          fill="#FFFFFF"
                        ></path>
                      </svg>
                      <p className="my-auto">{items.paragraph8}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceThirdDiv;
