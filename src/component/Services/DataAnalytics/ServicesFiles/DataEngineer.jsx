import React from "react";
import leftImage from "/src/assets/data&analytic/data-engineer.png";
import backendDevImage from "/src/assets/servicesImage/data-engineer.webp";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";

const DataEngineer = () => {
  const entireSkillSet = [
    {
      heading: "Technical Skills",
      items: [
        {
          id: 1,
          listParagraph: "Programming:",
          listSpan:
            " Proficient in Python, Java, and Scala for data processing and manipulation.",
        },
        {
          id: 2,
          listParagraph: "SQL:",
          listSpan:
            " Strong SQL skills for querying and managing relational databases.",
        },

        {
          id: 3,
          listParagraph: "Big Data Technologies:",
          listSpan:
            " Experience with Hadoop, Spark, and other big data frameworks.",
        },
        {
          id: 4,
          listParagraph: "Data Pipelines:",
          listSpan:
            " Ability to build and maintain ETL/ELT pipelines using tools such as Airflow, Luigi, and Kafka.",
        },
        {
          id: 5,
          listParagraph: "Cloud Platforms:",
          listSpan:
            " Good knowledge of cloud based data services on AWS, Azure, and GCP.",
        },

        {
          id: 6,
          listParagraph: "Data Warehousing and Modeling:",
          listSpan:
            " Good understanding of data warehousing concepts and building dimensional models.",
        },
        {
          id: 7,
          listParagraph: "Data Quality:",
          listSpan:
            " Ability to ensure data accuracy, completeness, and consistency.",
        },
      ],
    },
    {
      heading: "Experience",
      items: [
        {
          id: 1,
          listParagraph: "Data engineering projects:",
          listSpan:
            " Hands-on experience in building and maintaining data pipelines.",
        },

        {
          id: 2,
          listParagraph: "Big data processing:",
          listSpan: " Working with large datasets and distributed systems.",
        },
        {
          id: 3,
          listParagraph: "Data warehousing:",
          listSpan: " Designing and implementing data warehouses.",
        },
        {
          id: 4,
          listParagraph: "Cloud technologies:",
          listSpan:
            " Skilled at utilising cloud based data services for efficient data management and migrating data to cloud platforms.",
        },
        {
          id: 5,
          listParagraph: "Data governance:",
          listSpan:
            " Implementing data security measures and compliance standards.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "Data Infrastructure and Pipelines",
      items: [
        {
          id: 1,
          listParagraph: "Data Ingestion:",
          listSpan:
            " Developing pipelines to extract data from various sources databases, APIs, files.",
        },

        {
          id: 2,
          listParagraph: "Data Transformation:",
          listSpan:
            " Cleaning, transforming, and standardising data for analysis.",
        },
        {
          id: 3,
          listParagraph: "Data Storage:",
          listSpan:
            " Designing and implementing data storage solutions data warehouses, data lakes.",
        },
        {
          id: 4,
          listParagraph: "Data Pipelines:",
          listSpan:
            " Building automated data pipelines for efficient data movement and processing.",
        },
      ],
    },
    {
      heading: "Data Modeling and Warehousing",
      items: [
        {
          id: 1,
          listParagraph: "Data Modeling:",
          listSpan:
            " Creating data models and schemas for effective data organisation.",
        },

        {
          id: 2,
          listParagraph: "Data Warehousing:",
          listSpan:
            " Designing and implementing data warehouses or data marts.",
        },
      ],
    },
    {
      heading: "Data Quality and Governance",
      items: [
        {
          id: 1,
          listParagraph: "Data Quality Assurance:",
          listSpan:
            " Implementing data quality checks and validation processes.",
        },

        {
          id: 2,

          listParagraph: "Data Governance:",
          listSpan: " Establishing data governance policies and standards.",
        },
      ],
    },
    {
      heading: "Cloud Integration and Optimisation",
      items: [
        {
          id: 1,
          listParagraph: "Cloud Integration:",
          listSpan:
            " Integrating data solutions with cloud platforms AWS, GCP, Azure.",
        },

        {
          id: 1,
          listParagraph: "Cost Optimization (Optimisation):",
          listSpan: " Optimising data storage and processing costs.",
        },
      ],
    },
  ];
  return (
    <div className="marginButton dataAnalyticTopOverallDiv">
      <ServicesFiles
        leftImage={leftImage}
        heading={"Data Engineer"}
        paragraph={
          "Our data engineers design, build, and maintain the data infrastructure and architecture necessary to collect, store, process, and analyse data. They enable real-time data processing, personalise customer experiences, and inform , making their role vital to any data driven organisation. Skilled in a diverse range of frameworks and tools, they drive the efficiency and effectiveness of your organisation’s data ecosystem."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Enhance your data driven with robust data engineering and drive business growth by delivering actionable insights through our Data Engineers. Hire a data engineer from Sonaqode to provide unparalleled data solutions. Our top data engineers transform raw data into valuable assets, attracting new opportunities and increasing revenue like never before. A company's data infrastructure can significantly impact its ability to compete. Our data engineers create top notch data pipelines and models for web and mobile applications that inform decisions and optimise operations."
        }
        atrParagraphtwo={
          "They prioritise data quality and performance to enhance data accessibility, applying a keen eye for detail and a commitment to producing outstanding data products that meet your business objectives. Engage dedicated data engineers who are highly experienced in technologies like SQL, Python, Spark, Hadoop, and more, with acclaimed expertise in integrating emerging tech trends such as cloud computing, machine learning, and big data to achieve exceptional data quality. Choosing us means faster time to market, improved data quality, and significant business impact."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£3,490 / Month + VAT"}
        // popNote
        ftPackageName={"Data Engineer (Full Time)"}
        ftItemTotalAmount={"4,188"}
        ftPackageAmount={"3,490"}
        ftVatAmount={"698"}
        ftTotalDue={"4,188"}
        // skill array
        entireSkillSet={entireSkillSet}
        // deliverableArrays
        entireDeliverableKey={entireDeliverableKey}
      />
    </div>
  );
};

export default DataEngineer;
