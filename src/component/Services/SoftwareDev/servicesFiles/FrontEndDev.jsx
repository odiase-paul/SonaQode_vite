import React from "react";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";
import leftImage from "/src/assets/softwareDevelopment/js.png";
import backendDevImage from "/src/assets/servicesImage/frontend-developer.webp";

const FrontEndDev = () => {
  const entireSkillSet = [
    {
      heading: "Technical Skills",
      items: [
        {
          id: 1,
          listParagraph: "HTML, CSS, JavaScript:",
          listSpan:
            " A solid foundation in these core languages is indispensable.",
        },
        {
          id: 2,
          listParagraph: "JavaScript Frameworks:",
          listSpan: " Proficient in React, Angular, and Vue.",
        },
        {
          id: 3,
          listParagraph: "CSS Preprocessors:",
          listSpan: " Experience with Sass or Less for efficient styling.",
        },
        {
          id: 4,
          listParagraph: "Responsive Design:",
          listSpan:
            " Ability to create websites that adapt to different screen sizes.",
        },
        {
          id: 5,
          listParagraph: "Cross browser Compatibility:",
          listSpan:
            " Ensuring websites function correctly across various browsers.",
        },
        {
          id: 6,
          listParagraph: "Accessibility:",
          listSpan:
            " Understanding and implementing accessibility standards WCAG.",
        },
        {
          id: 7,
          listParagraph: "Version Control:",
          listSpan: " Proficient in Git and GitHub.",
        },
        {
          id: 8,
          listParagraph: "Testing and Debugging:",
          listSpan:
            " Ability to write tests and effectively troubleshoot issues to ensure code quality.",
        },
        {
          id: 9,
          listParagraph: "Performance Optimisation:",
          listSpan:
            " Knowledge of techniques to improve website speed and responsiveness.",
        },
      ],
    },
    {
      heading: "Experience",
      items: [
        {
          id: 1,
          listParagraph: "Collaboration:",
          listSpan:
            " Understanding design principles and working closely with other designers.",
        },
        {
          id: 2,
          listParagraph: "Performance optimisation:",
          listSpan:
            " Ability to improve application speed and scalability to ensure optimal performance.",
        },
        {
          id: 3,
          listParagraph: "Accessibility testing:",
          listSpan:
            " Ensuring websites are user friendly and accessible to all users.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "Core Deliverables",
      items: [
        {
          id: 1,
          listParagraph: "HTML Structure:",
          listSpan:
            " Building the skeletal framework of the website using HTML.",
        },

        {
          id: 2,
          listParagraph: "CSS Styling:",
          listSpan:
            " Designing the visual appearance and layout of the website using CSS.",
        },
        {
          id: 3,
          listParagraph: "JavaScript Functionality:",
          listSpan:
            " Developing interactive elements and dynamic behavior using JavaScript.",
        },
      ],
    },
    {
      heading: "User Experience Focused",
      items: [
        {
          id: 1,
          listParagraph: "User Interface Design:",
          listSpan:
            " Creating the visual elements and layout of the website or application.",
        },

        {
          id: 2,
          listParagraph: "User Experience Design:",
          listSpan:
            " Ensuring the website or application is user friendly and intuitive.",
        },
        {
          id: 3,
          listParagraph: "Responsive Design:",
          listSpan:
            " Developing websites that adapt to different screen sizes and devices.",
        },
      ],
    },
    {
      heading: "Technical Implementation",
      items: [
        {
          id: 1,
          listParagraph: "Front-end Framework Implementation:",
          listSpan:
            " Using frameworks like React, Angular, or Vue.js to build efficient and maintainable code.",
        },

        {
          id: 2,

          listParagraph: "API Integration:",
          listSpan:
            " Integrating the front-end with backend services to fetch and display data.",
        },
      ],
    },
    {
      heading: "Quality Assurance and Optimisation",
      items: [
        {
          id: 1,
          listParagraph: "Cross Browser Compatibility:",
          listSpan:
            " Ensuring the website or application works consistently across different browsers.",
        },
        {
          id: 2,

          listParagraph: "Performance Optimisation:",
          listSpan:
            " Improving website or application speed and responsiveness.",
        },
      ],
    },
  ];

  return (
    <div className="marginButton">
      <ServicesFiles
        leftImage={leftImage}
        heading={"Frontend Developer"}
        paragraph={
          "Our front-end developers craft intuitive, efficient, and enjoyable user web and mobile applications by expertly wielding a diverse range of frameworks and tools, including JavaScript, CSS, Vue.js, and HTML. They seamlessly integrate design, technology, and usability principles to deliver customised solutions that enhance engagement and accessibility, perfectly aligning with your unique brand needs."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Sonaqode's Frontend Developers leverage advanced tools to create intuitive web and mobile applications that deliver pixel perfect, interactive user experiences. Committed to delivering high-value outcomes, they bring design concepts to life with the perfect blend of design and development skills, crafting sophisticated user interfaces with unmatched appeal. They prioritise user satisfaction, interactions to enhance engagement and create top notch interfaces that influence user behavior and optimise user journeys."
        }
        atrParagraphtwo={
          "With a keen eye for detail and a commitment to producing outstanding user experiences that meet the needs of your target audience, our developers understand that a company's user interface can significantly impact its competitiveness. Engage dedicated Frontend Developers who are highly experienced in technologies like React, Angular, Vue, and more, with acclaimed expertise in integrating emerging tech trends such as artificial intelligence, virtual reality, and augmented reality to achieve exceptional user experiences. Choosing us means faster time to market, improved user satisfaction, and significant business impact."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£2,780 / Month + VAT"}
        partTimeTopParagraph={"Part Time"}
        partTimeTopSpan={"(20 hours/week)"}
        partTimeBottomParagraph={"£1,780 / Month + VAT"}
        // popNote
        ftPackageName={"Frontend Developer (Full Time)"}
        ftItemTotalAmount={"3,336"}
        ftPackageAmount={"2,780"}
        ftVatAmount={"556"}
        ftTotalDue={"3,336"}
        ptPackageName={"Frontend Developer (Part Time)"}
        ptItemTotalAmount={"2,136"}
        ptPackageAmount={"1,780"}
        ptVatAmount={"356"}
        ptTotalDue={"2,136"}
        // skill array
        entireSkillSet={entireSkillSet}
        // deliverableArrays
        entireDeliverableKey={entireDeliverableKey}
      />
    </div>
  );
};

export default FrontEndDev;
