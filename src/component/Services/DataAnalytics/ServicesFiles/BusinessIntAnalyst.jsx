import React from "react";
import leftImage from "/src/assets/data&analytic/business-intelligence.png";
import backendDevImage from "/src/assets/servicesImage/business-intelligence-analyst.webp";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";

const BusinessIntAnalyst = () => {
  const entireSkillSet = [
    {
      heading: "Technical Skills",
      items: [
        {
          id: 1,
          listParagraph: "Data Analysis:",
          listSpan:
            " Proficient in SQL for data querying and manipulation with knowledge of Python or R for advanced data analysis.",
        },
        {
          id: 2,
          listParagraph: "Data Visualisation:",
          listSpan:
            " Ability to create compelling and informative visualisations using Tableau, Power BI, or Python libraries Matplotlib, Seaborn.",
        },

        {
          id: 3,
          listParagraph: "Data Modeling:",
          listSpan:
            " Ability to comprehend data structures and relationships, enabling effective analysis.",
        },
        {
          id: 4,
          listParagraph: "BI Tools:",
          listSpan:
            " Expertise in using BI tools Tableau, Power BI, Qlik for data exploration, reporting, and dashboard creation.",
        },
        {
          id: 5,
          listParagraph: "Database Management:",
          listSpan:
            " Knowledge of database systems SQL, NoSQL for data extraction and management.",
        },
      ],
    },
    {
      heading: "Experience",
      items: [
        {
          id: 1,
          listParagraph: "Data Analysis Projects:",
          listSpan:
            " Demonstrating practical experience in data analysis and reporting.",
        },

        {
          id: 2,
          listParagraph: "Industry Knowledge:",
          listSpan:
            " Understanding the business domain and its data requirements.",
        },

        {
          id: 3,
          listParagraph: "Data Visualisation:",
          listSpan: " Creating impactful dashboards and reports.",
        },
        {
          id: 4,
          listParagraph: "Data Modeling:",
          listSpan: " Designing data structures for efficient analysis.",
        },
        {
          id: 5,
          listParagraph: "Business Intelligence Tools:",
          listSpan:
            " Proficient in using BI tools for data exploration and reporting.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "Data Analysis and Reporting",
      items: [
        {
          id: 1,
          listParagraph: "Data Exploration:",
          listSpan:
            " Discovering patterns, trends, and anomalies within data sets.",
        },

        {
          id: 2,
          listParagraph: "Data Visualisation:",
          listSpan:
            " Creating clear and informative data visualisations charts, graphs.",
        },
        {
          id: 3,
          listParagraph: "Dashboards:",
          listSpan:
            " Developing interactive dashboards for real-time data monitoring.",
        },
        {
          id: 4,
          listParagraph: "Ad hoc Reports:",
          listSpan:
            " Generating custom reports based on specific business needs.",
        },
      ],
    },
    {
      heading: "Data Modeling and Infrastructure",
      items: [
        {
          id: 1,
          listParagraph: "Data Modeling:",
          listSpan:
            " Designing data structures and relationships for efficient analysis.",
        },

        {
          id: 2,
          listParagraph: "Data Quality Assessment:",
          listSpan: " Ensuring data accuracy and consistency.",
        },
      ],
    },
    {
      heading: "Business Insights and Recommendations",
      items: [
        {
          id: 1,
          listParagraph: "Data driven Insights:",
          listSpan:
            " Providing actionable recommendations based on data analysis.",
        },

        {
          id: 2,

          listParagraph: "KPIs and Metrics:",
          listSpan:
            " Defining and tracking key performance indicators KPIs to measure business success.",
        },
      ],
    },
    {
      heading: "Process Improvement and Collaboration",
      items: [
        {
          id: 1,
          listParagraph: "Process Optimisation:",
          listSpan:
            " Identifying opportunities to improve data driven processes.",
        },

        {
          id: 1,
          listParagraph: "Stakeholder Communication:",
          listSpan:
            " Effectively communicating insights and recommendations to stakeholders.",
        },
      ],
    },
  ];

  return (
    <div className="marginButton dataAnalyticTopOverallDiv">
      <ServicesFiles
        leftImage={leftImage}
        heading={"Business Intelligence Analyst"}
        paragraph={
          "Harness the power of data effectively, drive data driven decision making, and enhance performance across various areas. Our talented analysts leverage your data to gain a deeper understanding of your business. They employ analytical tools and techniques to uncover trends, patterns, and correlations within the data, identifying market gaps and developing strategies based on objective information."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Sonaqode's Business Intelligence Analysts leverage advanced tools to craft actionable insights. Committed to delivering high-value business outcomes, they transform raw data into sophisticated data models with unmatched accuracy by applying the best analytical techniques. They prioritise data quality and optimise visualisations to enhance decision making, using a keen eye for detail and a commitment to producing outstanding insights that meet your business objectives."
        }
        atrParagraphtwo={
          "Enlist dedicated analysts who are highly experienced in tools like SQL, Python, Tableau, Power BI, and more, with acclaimed expertise in integrating emerging tech trends such as data mining, machine learning, and big data to achieve top notch analytical output. A company's data presentation can significantly influence decision making. Our business intelligence developers create exceptional dashboards and reports that captivate stakeholders and showcase business performance. Choosing us means effective data storytelling, quicker decision making, and significant business impact."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£2,690 / Month + VAT"}
        // popNote
        ftPackageName={"Business Intelligence Analyst (Full Time)"}
        ftItemTotalAmount={"3,228"}
        ftPackageAmount={"2,690"}
        ftVatAmount={"538"}
        ftTotalDue={"3,228"}
        // skill array
        entireSkillSet={entireSkillSet}
        // deliverableArrays
        entireDeliverableKey={entireDeliverableKey}
      />
    </div>
  );
};

export default BusinessIntAnalyst;
