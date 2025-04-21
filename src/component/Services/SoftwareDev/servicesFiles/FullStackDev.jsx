import React from "react";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";
import leftImage from "/src/assets/softwareDevelopment/vscode.png";
import backendDevImage from "/src/assets/servicesImage/full-stack-developer.webp";

const FullStackDev = () => {
  const entireSkillSet = [
    {
      heading: "Technical Skills",
      items: [
        {
          id: 1,
          innerHeading: <p className="mb-0">Front-End Development</p>,
          listParagraph: "",
          listSpan: "HTML, CSS, JavaScript",
        },
        {
          id: 2,
          listParagraph: "JavaScript frameworks:",
          listSpan: " React, Angular, Vue",
        },
        {
          id: 3,
          listParagraph: "Preprocessors:",
          listSpan: " Sass or Less for CSS organisation and efficiency",
        },

        {
          id: 4,
          innerHeading: <p className="mb-0 mt-2">Back-End Development</p>,
          listParagraph: "Programming languages:",
          listSpan:
            " Proficient in Node.js, Python with frameworks like Django, Flask, Ruby on Rails, Java.",
        },
        {
          id: 5,
          listParagraph: "Databases:",
          listSpan:
            " SQL MySQL, PostgreSQL, SQLite and NoSQL MongoDB, Cassandra.",
        },
        {
          id: 6,
          listParagraph: "Server-side frameworks:",
          listSpan:
            " Express.js Node.js, Django/Flask Python, Ruby on Rails Ruby, Spring Java.",
        },

        {
          id: 7,
          innerHeading: <p className="mb-0 mt-2">Other Essential Skills</p>,
          listParagraph: "Version control:",
          listSpan: " Git and GitHub.",
        },
        {
          id: 8,
          listParagraph: "API development:",
          listSpan: " RESTful and GraphQL.",
        },
        {
          id: 8,
          listParagraph: "Cloud platforms:",
          listSpan: " AWS, Azure, or GCP",
        },
        {
          id: 8,
          listParagraph: "DevOps:",
          listSpan:
            " Understanding of deployment, monitoring, and infrastructure management.",
        },
      ],
    },
    {
      heading: "Experience",
      items: [
        {
          id: 1,
          listParagraph: "Agile development methodologies:",
          listSpan: " Strong understanding of Agile frameworks.",
        },

        {
          id: 2,
          listParagraph: "Cloud platforms:",
          listSpan:
            " Familiar with cloud services AWS, Azure, GCP for deployment and scaling.",
        },
        {
          id: 3,
          listParagraph: "DevOps practices:",
          listSpan:
            " Knowledge of infrastructure as code, continuous integration/continuous delivery.",
        },

        {
          id: 1,
          listParagraph: "UI/UX design:",
          listSpan:
            " Understanding of user experience principles to create intuitive interfaces.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "Front-end Development",
      items: [
        {
          id: 1,
          listParagraph: "User Interface Design:",
          listSpan:
            " Creating the visual elements and layout of the application.",
        },

        {
          id: 2,
          listParagraph: "User Experience Design:",
          listSpan: " Ensuring the application is user friendly and intuitive.",
        },
        {
          id: 3,
          listParagraph: "Front-end Development:",
          listSpan:
            " Building the client-side of the application using technologies like HTML, CSS, and JavaScript.",
        },
      ],
    },
    {
      heading: "Back-end Development",
      items: [
        {
          id: 1,
          listParagraph: "Server-side Logic:",
          listSpan:
            " Developing the core functionality and business logic of the application.",
        },
        {
          id: 2,
          listParagraph: "API Development:",
          listSpan:
            " Creating and maintaining APIs for communication between the front-end and back-end.",
        },
        {
          id: 3,
          listParagraph: "Database Management:",
          listSpan:
            " Designing and managing the database for storing and retrieving data.",
        },
      ],
    },
    {
      heading: "Full-Stack Integration",
      items: [
        {
          id: 1,
          listParagraph: "Integration:",
          listSpan:
            " Integrating the front-end and back-end components to create a cohesive application.",
        },
        {
          id: 2,

          listParagraph: "Deployment:",
          listSpan: " Deploying the application to production environments.",
        },
      ],
    },
    {
      heading: "Quality Assurance and Maintenance",
      items: [
        {
          id: 1,
          listParagraph: "Testing:",
          listSpan:
            " Writing and executing unit, integration, and end-to-end tests.",
        },
        {
          id: 2,

          listParagraph: "Maintenance:",
          listSpan:
            " Providing ongoing maintenance and support for the application.",
        },
      ],
    },
  ];

  return (
    <div className="marginButton">
      <ServicesFiles
        leftImage={leftImage}
        heading={"Full Stack Developer"}
        paragraph={
          "Access skilled web developers who can construct high-performance, modern web applications from scratch. Our full-stack developers excel in both Front-end and Back-end technologies, delivering fully customised web apps that meet your precise requirements. They ensure excellent performance and provide end-to-end solutions that are reliable and scalable."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Our experienced and reliable full-stack developers enhance development teams by crafting robust and efficient software solutions. Through rigorous software development, these experts ensure high-quality, functional products for your organisation. They go beyond treating coding as a discrete function at the end of the development lifecycle, embedding user centric design and technical expertise at every project phase. By boosting product development speed, quality, and user satisfaction while reducing development costs, enhancing product performance, and minimising time to market they deliver a competitive advantage instead of fragmented development efforts."
        }
        atrParagraphtwo={
          "Our developers excel in front-end and back-end development, database management, and cloud integration, ensuring your product's success. Engage dedicated Full Stack Developers with extensive experience in technologies like React, Angular, Node.js, Python, and many more, and benefit from their acclaimed expertise in integrating emerging tech trends such as artificial intelligence, virtual reality, and blockchain to achieve top notch product quality. Choosing us means faster time to market, improved user satisfaction, and a significant business impact."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£3,180 / Month + VAT"}
        partTimeTopParagraph={"Part Time"}
        partTimeTopSpan={"(20 hours/week)"}
        partTimeBottomParagraph={"£2,145 / Month + VAT"}
        // popNote
        ftPackageName={"Full Stack Developer (Full Time)"}
        ftItemTotalAmount={"3,816"}
        ftPackageAmount={"3,180"}
        ftVatAmount={"636"}
        ftTotalDue={"3,816"}
        ptPackageName={"Full Stack Developer (Part Time)"}
        ptItemTotalAmount={"2,574"}
        ptPackageAmount={"2,145"}
        ptVatAmount={"429"}
        ptTotalDue={"2,574"}
        // skill array
        entireSkillSet={entireSkillSet}
        // deliverableArrays
        entireDeliverableKey={entireDeliverableKey}
      />
    </div>
  );
};

export default FullStackDev;
