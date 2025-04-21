import React from "react";
import leftImage from "/src/assets/data&analytic/data-science.png";
import backendDevImage from "/src/assets/servicesImage/data-scientist.webp";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";

const DataScientist = () => {
  const entireSkillSet = [
    {
      heading: "Technical Skills",
      items: [
        {
          id: 1,
          listParagraph: "Programming:",
          listSpan:
            " Proficient in Python and R, with knowledge of libraries such as Pandas, NumPy, Scikit-learn, TensorFlow, and PyTorch.",
        },
        {
          id: 2,
          listParagraph: "Statistics and Probability:",
          listSpan:
            " Strong foundation in statistical methods, hypothesis testing, and probability theory.",
        },

        {
          id: 3,
          listParagraph: "Machine Learning:",
          listSpan:
            " Expertise in various algorithms, including supervised, unsupervised, and reinforcement learning.",
        },

        {
          id: 4,
          listParagraph: "Data Munging and Cleaning:",
          listSpan:
            " Proficient in handling messy data, including data cleaning, transformation, and exploration.",
        },
        {
          id: 5,
          listParagraph: "Data Visualisation:",
          listSpan:
            " Ability to create compelling visualisations using tools like Python libraries Matplotlib, Seaborn or specialised software Tableau, Power BI.",
        },
        {
          id: 6,
          listParagraph: "Big Data Technologies:",
          listSpan:
            " Knowledge of tools like Hadoop, Spark, and cloud based data platforms.",
        },
        {
          id: 7,
          listParagraph: "Database Management:",
          listSpan: " Proficient in SQL.",
        },

        {
          id: 8,
          listParagraph: "Cloud Computing:",
          listSpan:
            " Familiar with cloud platforms AWS, Azure, GCP for data storage and processing.",
        },
      ],
    },
    {
      heading: "Experience",
      items: [
        {
          id: 1,
          listParagraph: "Data modeling and analysis projects:",
          listSpan:
            " Experience in building predictive models and deriving actionable insights.",
        },

        {
          id: 2,
          listParagraph: "Machine learning:",
          listSpan: " Ability to build and deploy predictive models.",
        },
        {
          id: 3,
          listParagraph: "Industry knowledge:",
          listSpan:
            " Good understanding of data within various domains e.g. Finance, healthcare, marketing.",
        },
        {
          id: 4,
          listParagraph: "Data engineering experience:",
          listSpan:
            " Experience with working with large datasets and building data pipelines.",
        },

        {
          id: 5,
          listParagraph: "Cloud platform usage:",
          listSpan:
            " Leveraging cloud based data services for efficient data processing.",
        },
        {
          id: 6,
          listParagraph: "Data visualisation:",
          listSpan:
            " Creating effective visualisations to communicate findings efficiently.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "Data Exploration and Preparation",
      items: [
        {
          id: 1,
          listParagraph: "Data Cleaning and Preprocessing:",
          listSpan:
            " Handling missing values, outliers, and inconsistencies in data.",
        },

        {
          id: 2,
          listParagraph: "Data Exploration:",
          listSpan:
            " Discovering patterns, trends, and relationships within data.",
        },
      ],
    },
    {
      heading: "Model Building and Evaluation",
      items: [
        {
          id: 1,
          listParagraph: "Model Selection:",
          listSpan:
            " Choosing appropriate algorithms and techniques for the problem.",
        },

        {
          id: 2,
          listParagraph: "Model Training:",
          listSpan: " Developing and training machine learning models.",
        },
        {
          id: 3,
          listParagraph: "Model Evaluation:",
          listSpan: " Assessing model performance using relevant metrics.",
        },
      ],
    },
    {
      heading: "Data Product Development",
      items: [
        {
          id: 1,
          listParagraph: "Data Pipelines:",
          listSpan:
            " Building automated data pipelines for model deployment and retraining.",
        },

        {
          id: 2,

          listParagraph: "Data Products:",
          listSpan: " Creating data driven applications or tools.",
        },
      ],
    },
    {
      heading: "Insights and Communication",
      items: [
        {
          id: 1,
          listParagraph: "Data Storytelling:",
          listSpan:
            " Effectively communicating insights to stakeholders through visualisations and reports.",
        },
        {
          id: 2,
          listParagraph: "Predictive Modeling:",
          listSpan: " Developing models to forecast future trends or outcomes.",
        },

        {
          id: 3,
          listParagraph: "Business Impact Analysis:",
          listSpan:
            " Quantifying the impact of data driven insights on business outcomes.",
        },
      ],
    },
  ];

  return (
    <div className="marginButton dataAnalyticTopOverallDiv">
      <ServicesFiles
        leftImage={leftImage}
        heading={"Data Scientist"}
        paragraph={
          "Discover patterns, trends, and correlations in data that reveal insights into customer behavior, market trends, and operational performance. Our data scientists excel in data analysis, predictive modeling, and strategic insights, empowering businesses to optimise operations, innovate products and services, enhance customer experiences, and mitigate risks, thereby maintaining a competitive edge in the market."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Sonaqode's Data Scientists leverage cutting edge methodologies to craft predictive models. Committed to delivering high-value business insights, they transform raw data into sophisticated predictive models with unmatched accuracy by blending advanced statistical techniques. They prioritise data quality and optimise algorithms to enhance model performance, applying a keen eye for detail and a commitment to producing outstanding insights that meet your business objectives."
        }
        atrParagraphtwo={
          "Engage dedicated data scientists who are highly experienced in techniques such as machine learning, deep learning, statistical modeling, and more, with acclaimed expertise in integrating emerging tech trends like AI, NLP, and big data to achieve top notch analytical output. Smartly navigate the complex business landscape with data driven, insight focused solutions that give your business a competitive advantage. Our data scientists have created a wide range of scalable and robust data models for both niche and global enterprises, using advanced tools and methodologies to provide efficient, cost effective analytical services."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£3,790 / Month + VAT"}
        // popNote
        ftPackageName={"Data Scientist (Full Time)"}
        ftItemTotalAmount={"4,548"}
        ftPackageAmount={"3,790"}
        ftVatAmount={"758"}
        ftTotalDue={"4,548"}
        // skill array
        entireSkillSet={entireSkillSet}
        // deliverableArrays
        entireDeliverableKey={entireDeliverableKey}
      />
    </div>
  );
};

export default DataScientist;
