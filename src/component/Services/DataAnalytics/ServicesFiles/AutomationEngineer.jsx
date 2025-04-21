import React from "react";

import leftImage from "/src/assets/data&analytic/automation.png";
import backendDevImage from "/src/assets/servicesImage/automation-engineer.webp";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";
const AutomationEngineer = () => {
  const entireSkillSet = [
    {
      heading: "Technical Skills",
      items: [
        {
          id: 1,
          listParagraph: "Programming:",
          listSpan:
            " Proficient in Python, Java, C#, or JavaScript for scripting and developing automation frameworks.",
        },
        {
          id: 2,
          listParagraph: "Automation Tools:",
          listSpan:
            " Competent in using automation tools like Selenium, Appium, UiPath, or Robotic Process Automation RPA platforms.",
        },

        {
          id: 3,
          listParagraph: "Testing Frameworks:",
          listSpan:
            " Good knowledge of testing frameworks JUnit, TestNG, pytest for creating and executing test cases.",
        },
        {
          id: 4,
          listParagraph: "Scripting Languages:",
          listSpan:
            " Proficient in scripting languages such as PowerShell, Bash for system automation.",
        },
        {
          id: 5,
          listParagraph: "Continuous Integration/Continuous Delivery:",
          listSpan:
            " Good understanding of CI/CD pipelines and tools Jenkins, GitLab, Azure DevOps.",
        },
        {
          id: 6,
          listParagraph: "Cloud Platforms:",
          listSpan:
            " Familiar with cloud platforms AWS, Azure, GCP for cloud based automation.",
        },
      ],
    },
    {
      heading: "Experience",
      items: [
        {
          id: 1,
          listParagraph: "Automation Framework Development:",
          listSpan: " Creating reusable automation frameworks.",
        },

        {
          id: 2,
          listParagraph: "Test Automation:",
          listSpan: " Designing and implementing test automation suites.",
        },

        {
          id: 3,
          listParagraph: "Process Automation:",
          listSpan: " Automating repetitive tasks and workflows.",
        },
        {
          id: 3,
          listParagraph: "Cloud Platforms:",
          listSpan:
            " Experience with cloud based automation tools and services AWS, Azure, GCP.",
        },
        {
          id: 3,
          listParagraph: "DevOps Practices:",
          listSpan:
            " Understanding DevOps principles and implementing automation solutions within a DevOps culture.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "Automation Development and Implementation",
      items: [
        {
          id: 1,
          listParagraph: "Process Analysis:",
          listSpan: " Identifying manual processes suitable for automation.",
        },

        {
          id: 2,
          listParagraph: "Automation Scripting:",
          listSpan: " Developing scripts or programs to automate tasks.",
        },
        {
          id: 3,
          listParagraph: "Automation Framework Development:",
          listSpan: " Creating a reusable framework for automation projects.",
        },
        {
          id: 4,
          listParagraph: "Integration with Systems:",
          listSpan:
            " Integrating automation solutions with existing systems and applications.",
        },
      ],
    },
    {
      heading: "Testing and Optimisation",
      items: [
        {
          id: 1,
          listParagraph: "Test Automation:",
          listSpan: " Developing and executing automated test cases.",
        },

        {
          id: 2,
          listParagraph: "Performance Optimisation:",
          listSpan:
            " Identifying and resolving performance bottlenecks in automated processes.",
        },
      ],
    },
    {
      heading: "Deployment and Maintenance",
      items: [
        {
          id: 1,
          listParagraph: "Deployment:",
          listSpan:
            " Deploying automation solutions into production environments.",
        },

        {
          id: 2,

          listParagraph: "Maintenance:",
          listSpan:
            " Monitoring and maintaining automation scripts and processes.",
        },
      ],
    },
    {
      heading: "Evaluation and Reporting",
      items: [
        {
          id: 1,
          listParagraph: "ROI Analysis:",
          listSpan:
            " Measuring the impact of automation on efficiency and cost savings.",
        },
        {
          id: 1,
          listParagraph: "Automation Roadmap:",
          listSpan: " Developing a long term plan for automation initiatives.",
        },
      ],
    },
  ];
  return (
    <div className="marginButton dataAnalyticTopOverallDiv">
      <ServicesFiles
        leftImage={leftImage}
        heading={"Automation Engineer"}
        paragraph={
          "Streamline your processes with our dedicated automation engineers. Leverage their proficiency in designing and implementing automated systems to optimise workflows, drive efficiency, enhance quality, and maintain competitiveness in a rapidly evolving market. Utilising cutting edge technologies and a commitment to innovation, our specialists are ready to revolutionise your workflow."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Boost your operational efficiency with robust automation engineering. Our experienced and reliable automation engineers enhance the work of development and operations teams by streamlining complex processes. Committed to delivering high-value operational outcomes, they automate manual tasks using the best blend of techniques to build sophisticated workflows with unmatched efficiency. They prioritize process optimisation and productivity enhancement, applying a keen eye for detail and a commitment to producing outstanding automation solutions that meet your business objectives."
        }
        atrParagraphtwo={
          "Engage dedicated automation engineers who are highly experienced in technologies like Selenium, Python, RPA, and more, with acclaimed expertise in integrating emerging tech trends such as AI, machine learning, and cloud computing to achieve top notch automation results. Choosing us means faster time to market, improved operational efficiency, and significant cost savings."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£3,390 / Month + VAT"}
        // popNote
        ftPackageName={"Automation Engineer (Full Time)"}
        ftItemTotalAmount={"4,068"}
        ftPackageAmount={"3,390"}
        ftVatAmount={"678"}
        ftTotalDue={"4,068"}
        // skill array
        entireSkillSet={entireSkillSet}
        // deliverableArrays
        entireDeliverableKey={entireDeliverableKey}
      />
    </div>
  );
};

export default AutomationEngineer;
