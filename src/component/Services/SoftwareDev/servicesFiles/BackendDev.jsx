import React from "react";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";
import leftImage from "/src/assets/softwareDevelopment/code-folder.png";
import backendDevImage from "/src/assets/servicesImage/backend-developer.webp";

const BackendDev = () => {
  const skillArrays = [
    {
      id: 1,
      listParagraph: "Programming languages:",
      listSpan: " Proficient in Python, Java, Ruby, Node.js, and PHP.",
    },
    {
      id: 2,
      listParagraph: "Databases:",
      listSpan:
        " Strong understanding of both SQL MySQL, PostgreSQL and NoSQL MongoDB, Cassandra databases.",
    },
    {
      id: 3,
      listParagraph: "Server-side frameworks:",
      listSpan: " Experienced with Django, Flask, Ruby on Rails, Express.js.",
    },
    {
      id: 4,
      listParagraph: "API development:",
      listSpan: " Ability to build RESTful or GraphQL APIs for data exchange.",
    },
    {
      id: 5,
      listParagraph: "Data structures and algorithms:",
      listSpan: " A good understanding of core data structures and solving.",
    },
    {
      id: 6,
      listParagraph: "Version control:",
      listSpan: " Proficient in Git and GitHub.",
    },
    {
      id: 7,
      listParagraph: "Testing:",
      listSpan:
        " Ability to write tests and effectively troubleshoot issues to ensure code quality.",
    },
    {
      id: 8,
      listParagraph: "Cloud platforms:",
      listSpan:
        " Familiar with AWS, Azure, and GCP for deployment and scaling.",
    },
  ];
  const deliverableArrays = [
    {
      id: 1,

      listParagraph: "Server-side Logic:",
      listSpan:
        " Developing the core business logic and functionalities of the application.",
    },

    {
      id: 2,
      listParagraph: "API Development:",
      listSpan:
        " Creating robust and efficient Application Programming Interfaces APIs for communication between the front-end and back-end.",
    },

    {
      id: 3,
      listParagraph: "Database Design and Management:",
      listSpan:
        " Designing and implementing the database schema to store and retrieve application data effectively.",
    },
  ];
  const entireSkillSet = [
    { id: 1, heading: "Technical Skills" },
    { id: 2, heading: "Experience" },
  ];
  const entireDeliverableKey = [
    { id: 1, heading: "Core Functionalities" },
    { id: 2, heading: "System Architecture and Performance" },
    { id: 3, heading: "Security and Reliability" },
    { id: 4, heading: "Deployment and Maintenance" },
  ];
  return (
    <div className="marginButton">
      <ServicesFiles
        leftImage={leftImage}
        heading={"Backend Developer"}
        paragraph={
          "Access back-end developers prepared to integrate into your project, delivering robust architecture and enhanced performance. They construct secure, scalable, and durable server-side solutions using cutting edge tools and technologies such as Java, Python, Node.js, Ruby, and more. Experts in SQL and NoSQL databases, they ensure consistent data flow, delivering impeccable back-end systems that operate flawlessly and fulfill every business requirement."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Our experienced and reliable backend developers enhance development teams by building robust and scalable applications. Through rigorous code development, these experts ensure high-performance and reliable systems for your organization. By translating application requirements into efficient code, they help attract user engagement and increase revenue through improved performance. Boost software productivity, speed to market, and system performance with our backend focused approach."
        }
        atrParagraphtwo={
          "By reducing technical debt, enhancing application reliability, and minimising downtime, they deliver a competitive advantage instead of fragmented software solutions. Engage dedicated Backend Developers highly experienced in technologies like Node.js, Python, Ruby on Rails, Java, and many more, with acclaimed expertise in integrating emerging tech trends such as microservices, serverless architecture, and cloud computing to achieve top notch application performance. Choosing us means faster time to market, improved application reliability, and enhanced user satisfaction."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£2,780 / Month + VAT"}
        partTimeTopParagraph={"Part Time"}
        partTimeTopSpan={"(20 hours/week)"}
        partTimeBottomParagraph={"£1,780 / Month + VAT"}
        // popNote
        ftPackageName={"Backend Developer (Full Time)"}
        ftItemTotalAmount={"3,336"}
        ftPackageAmount={"2,780"}
        ftVatAmount={"556"}
        ftTotalDue={"3,336"}
        ptPackageName={"Backend Developer (Part Time)"}
        ptItemTotalAmount={"2,136"}
        ptPackageAmount={"1,780"}
        ptVatAmount={"356"}
        ptTotalDue={"2,136"}
        // skill array
        skillArrays={skillArrays}
        entireSkillSet={entireSkillSet}
        // deliverableArrays
        deliverablesArray={deliverableArrays}
        entireDeliverableKey={entireDeliverableKey}
      />
    </div>
  );
};

export default BackendDev;
