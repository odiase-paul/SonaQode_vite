import React from "react";
import leftImage from "/src/assets/data&analytic/bar-chart.png";
import backendDevImage from "/src/assets/servicesImage/data-analyst.webp";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";
const DataAnalyst = () => {
  const entireSkillSet = [
    {
      heading: "Essential Technical Skills",
      items: [
        {
          id: 1,
          listParagraph: "Data Manipulation:",
          listSpan:
            " Proficient in SQL, Python with libraries such as Pandas, NumPy.",
        },
        {
          id: 2,
          listParagraph: "Data Visualisation:",
          listSpan:
            " Ability to create compelling visualisations using tools like Tableau, Power BI, and Python libraries Matplotlib, Seaborn.",
        },

        {
          id: 3,
          listParagraph: "Statistical Analysis:",
          listSpan:
            " Strong analytical skills using statistical methods and Python with libraries such as NumPy, Pandas, R, and Excel to draw meaningful insights.",
        },

        {
          id: 4,
          listParagraph: "Data Modeling:",
          listSpan:
            " Ability to structure data for analysis e.g. data warehousing, data marts.",
        },
        {
          id: 5,
          listParagraph: "Data Mining:",
          listSpan:
            " Adept at extracting valuable information from large datasets.",
        },
      ],
    },
    {
      heading: "Experience",
      items: [
        {
          id: 1,
          listParagraph: "Data analysis projects:",
          listSpan:
            " Demonstrating practical experience in data driven problem solving.",
        },

        {
          id: 2,
          listParagraph: "Industry knowledge:",
          listSpan:
            " Understanding data from various domains e.g. Finance, marketing, healthcare.",
        },
        {
          id: 3,
          listParagraph: "Data visualisation and storytelling:",
          listSpan: " Creating impactful visualisations and narratives.",
        },

        {
          id: 4,
          listParagraph: "Data cleaning and preparation:",
          listSpan: " Experience handling messy and incomplete data.",
        },
        {
          id: 5,
          listParagraph: "Business intelligence tools:",
          listSpan:
            " Proficient in using BI tools for data exploration and reporting.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "Data Collection and Preparation",
      items: [
        {
          id: 1,
          listParagraph: "Data Gathering:",
          listSpan:
            " Collecting data from various sources databases, spreadsheets, APIs.",
        },

        {
          id: 2,
          listParagraph: "Data Cleaning:",
          listSpan: " Ensuring data accuracy, consistency, and completeness.",
        },
      ],
    },
    {
      heading: "Data Exploration and Analysis",
      items: [
        {
          id: 1,
          listParagraph: "Exploratory Data Analysis:",
          listSpan: " Discovering patterns, trends, and anomalies within data.",
        },

        {
          id: 2,
          listParagraph: "Statistical Analysis:",
          listSpan:
            " Applying statistical methods to extract meaningful insights.",
        },
      ],
    },
    {
      heading: "Data Visualisation",
      items: [
        {
          id: 1,
          listParagraph: "Data Visualisation:",
          listSpan:
            " Creating visual representations of data charts, graphs, dashboards.",
        },

        {
          id: 2,

          listParagraph: "Storytelling:",
          listSpan:
            " Communicating data insights effectively through visualisations.",
        },
      ],
    },
    {
      heading: "Reporting and Insights",
      items: [
        {
          id: 1,
          listParagraph: "Data Reports:",
          listSpan: " Generating regular and ad hoc reports.",
        },

        {
          id: 1,
          listParagraph: "Key Performance Indicators:",
          listSpan: " Developing and tracking KPIs.",
        },
        {
          id: 1,
          listParagraph: "Data driven Recommendations:",
          listSpan: " Providing actionable insights based on data analysis.",
        },
      ],
    },
    {
      heading: "Data Governance and Collaboration",
      items: [
        {
          id: 1,
          listParagraph: "Data Documentation:",
          listSpan: " Documenting data sources, definitions, and processes.",
        },
      ],
    },
  ];
  return (
    <div className="marginButton dataAnalyticTopOverallDiv">
      <ServicesFiles
        leftImage={leftImage}
        heading={"Data Analyst"}
        paragraph={
          "Unlock the potential of raw data by transforming it into valuable insights that enhance decision making, improve efficiency, and drive business growth. Our talented data analysts excel in interpreting data, generating reports, and creating visualisations, helping businesses stay competitive, gain deeper understanding of customers and markets, and adapt their strategies accordingly. Optimise operations, ensuring sustained success and profitability."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Our experienced and reliable data analysts enhance the work of business teams by extracting actionable insights from complex datasets. Through rigorous data analysis, these experts ensure informed decision making for your organisation. They go beyond treating data extraction as a discrete function at the end of the data lifecycle, embedding data driven insights at every business phase. Boost business productivity, speed, and efficiency with our data centric approach."
        }
        atrParagraphtwo={
          "By reducing operational costs, enhancing business performance, and minimising risk, we deliver a competitive advantage rather than just standard data reports. Sonaqode excels in data mining, statistical analysis, data visualisation, and predictive modeling to make your business data driven. Whether you aim to launch a new product quickly or optimise existing operations, our professionals use cutting edge tools and methodologies to provide efficient, cost effective data solutions. With in-depth expertise and vast experience, they ensure accurate data analysis across various business domains, driving data informed decisions and fostering business growth."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£2,690 / Month + VAT"}
        // popNote
        ftPackageName={"Data Analyst (Full Time)"}
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

export default DataAnalyst;
