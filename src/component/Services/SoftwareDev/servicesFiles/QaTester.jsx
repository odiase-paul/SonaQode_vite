import React from "react";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";
import leftImage from "/src/assets/softwareDevelopment/qa-testing.png";
import backendDevImage from "/src/assets/servicesImage/qa-tester.webp";
const QaTester = () => {
  const entireSkillSet = [
    {
      heading: "Technical Skills",
      items: [
        {
          id: 1,
          listParagraph: "Testing methodologies:",
          listSpan:
            " Good understanding of various testing types functional, non functional, integration and ability to appropriately apply them.",
        },
        {
          id: 2,
          listParagraph: "Test case creation:",
          listSpan:
            " Skilled in developing comprehensive test cases to cover all possible scenarios.",
        },

        {
          id: 3,
          listParagraph: "Defect tracking:",
          listSpan: " Using bug tracking tools to report and manage defects.",
        },
        {
          id: 4,
          listParagraph: "Automation testing:",
          listSpan: " Proficient in Selenium, Appium for efficient testing.",
        },
        {
          id: 5,
          listParagraph: "Database knowledge:",
          listSpan:
            " Strong understanding of SQL for testing data driven applications.",
        },
        {
          id: 6,
          listParagraph: "Programming languages:",
          listSpan: " Good knowledge of Python, Java programming languages.",
        },
      ],
    },
    {
      heading: "Experience",
      items: [
        {
          id: 1,
          listParagraph: "Software development lifecycle:",
          listSpan: " Understanding the entire development process.",
        },

        {
          id: 2,
          listParagraph: "Agile methodologies:",
          listSpan: " Experience working in agile environments.",
        },

        {
          id: 3,
          listParagraph: "Test automation frameworks:",
          listSpan: " Proficient in using automation tools.",
        },

        {
          id: 4,
          listParagraph: "Performance testing:",
          listSpan:
            " Ability to evaluate software performance under different conditions.",
        },
        {
          id: 5,
          listParagraph: "Security testing:",
          listSpan: " Identifying vulnerabilities in software applications.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "Test Planning and Execution",
      items: [
        {
          id: 1,
          listParagraph: "Test Plan:",
          listSpan:
            " A comprehensive document outlining the testing scope, objectives, and strategies.",
        },

        {
          id: 2,
          listParagraph: "Test Cases:",
          listSpan:
            " Detailed test cases covering various functionalities and scenarios.",
        },

        {
          id: 3,
          listParagraph: "Test Execution:",
          listSpan: " Executing test cases to identify defects and issues.",
        },
        {
          id: 4,
          listParagraph: "Test Reports:",
          listSpan: " Documenting test results, defects, and their status.",
        },
      ],
    },
    {
      heading: "Defect Management",
      items: [
        {
          id: 1,
          listParagraph: "Defect Reporting:",
          listSpan: " Logging and tracking defects found during testing.",
        },

        {
          id: 2,
          listParagraph: "Defect Retesting:",
          listSpan:
            " Verifying defect fixes and ensuring they don't introduce new issues.",
        },
      ],
    },
    {
      heading: "Test Automation",
      items: [
        {
          id: 1,
          listParagraph: "Test Automation Scripts:",
          listSpan: " Developing and maintaining automated test scripts.",
        },

        {
          id: 2,

          listParagraph: "Test Automation Framework:",
          listSpan:
            " Implementing a test automation framework for efficient testing.",
        },
      ],
    },
    {
      heading: "Quality Assurance",
      items: [
        {
          id: 1,
          listParagraph: "Quality Assurance Reports:",
          listSpan:
            " Providing regular reports on product quality and testing progress.",
        },

        {
          id: 2,

          listParagraph: "Risk Assessment:",
          listSpan:
            " Identifying potential risks and recommending mitigation strategies.",
        },
      ],
    },
  ];
  return (
    <div className="marginButton">
      <ServicesFiles
        leftImage={leftImage}
        heading={"QA Tester"}
        paragraph={
          "QA engineers comprises seasoned experts who excel in developing streamlined testing and quality management procedures for your project, leveraging cutting edge technologies and adhering to industry leading testing standards. Collaborating with top notch QA and test automation engineers, going above and beyond to emphasise that quality assurance extends far beyond delivering software devoid of bugs."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Our experienced and reliable QA testers enhance the work of developers and designers by testing across various environments. Through stringent quality tests, these engineers ensure flawless performance for your software or website. They go beyond treating application testing as a discrete function at the end of the application lifecycle, embedding quality at every development phase. Boost software productivity, speed, and quality with our insight driven testing approach. By reducing development costs, enhancing software quality, and minimising management efforts, we deliver a differentiated app experience rather than just standard workflows."
        }
        atrParagraphtwo={
          "Sonaqode excels in automation, QA, continuous testing, and DevOps, making your digital product cutting edge. Whether you aim to launch a new application quickly or modernise your business processes, our professionals use cutting edge tools and methodologies to provide efficient, cost effective testing services. With in-depth expertise and vast experience, they ensure uninterrupted testing in various settings, driving quality enhancements and fostering business growth."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£2,690 / Month + VAT"}
        partTimeTopParagraph={"Part Time"}
        partTimeTopSpan={"(20 hours/week)"}
        partTimeBottomParagraph={"£1,780 / Month + VAT"}
        // popNote
        ftPackageName={"QA Tester (Full Time)"}
        ftItemTotalAmount={"3,228"}
        ftPackageAmount={"2,690"}
        ftVatAmount={"538"}
        ftTotalDue={"3,228"}
        ptPackageName={"QA Tester (Part Time)"}
        ptItemTotalAmount={"2,028"}
        ptPackageAmount={"1,690"}
        ptVatAmount={"338"}
        ptTotalDue={"2,028"}
        // skill array
        entireSkillSet={entireSkillSet}
        // deliverableArrays
        entireDeliverableKey={entireDeliverableKey}
      />
    </div>
  );
};

export default QaTester;
