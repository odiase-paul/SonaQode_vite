import React from "react";
import ServiceTopDiv from "../../ReuseableComponent/ServiceTopDiv";
import "./DataAnalytics.css";
import leftImage from "/src/assets/data&analytic/python.png";
import middleImage from "/src/assets/data&analytic/analytics.png";
import rightImage from "/src/assets/data&analytic/mysql.png";
import softwareDevImage from "/src/assets/data&analytic/data-analytics.png";
import ServiceSecondDiv from "../../ReuseableComponent/ServiceSecondDiv";

import dataEngineer from "/src/assets/data&analytic/data-engineer.png";
import barChart from "/src/assets/data&analytic/bar-chart.png";
import dataScience from "/src/assets/data&analytic/data-science.png";
import businessIntelligence from "/src/assets/data&analytic/business-intelligence.png";
import automation from "/src/assets/data&analytic/automation.png";
import ServiceThirdDiv from "../../ReuseableComponent/ServiceThirdDiv";
import HowItWorks from "../../ReuseableComponent/HowItWorks";
import FAQs from "../../ReuseableComponent/FAQs";

const DataAnalytics = () => {
  const items = [
    {
      id: 1,
      icon: dataEngineer,
      heading: "Data Engineer",
      productAmount: "£3,490 / MONTH",

      paragraph:
        "Our data engineers design, build, and maintain the data infrastructure and architecture necessary to collect, store, process, and analyse data. They enable real time data processing, personalise customer experiences, and inform decision making, making their role vital to any data driven organisation. Skilled in a diverse range of frameworks and tools, they drive the efficiency and effectiveness of your organisation’s data ecosystem.",
    },
    {
      id: 2,
      icon: barChart,
      heading: "Data Analyst",
      productAmount: "£2,690 / MONTH",

      paragraph:
        "Unlock the potential of raw data by transforming it into valuable insights that enhance decision making, improve efficiency, and drive business growth. Our talented data analysts excel in interpreting data, generating reports, and creating visualisations, helping businesses stay competitive, gain deeper understanding of customers and markets, and adapt their strategies accordingly. Optimise operations, ensuring sustained success and profitability.",
    },
    {
      id: 3,
      icon: dataScience,
      heading: "Data Scientist",
      productAmount: "£3,790 / MONTH",

      paragraph:
        "Discover patterns, trends, and correlations in data that reveal insights into customer behavior, market trends, and operational performance. Our data scientists excel in data analysis, predictive modeling, and strategic insights, empowering businesses to optimise operations, innovate products and services, enhance customer experiences, and mitigate risks, thereby maintaining a competitive edge in the market.",
    },
    {
      id: 4,
      icon: businessIntelligence,
      heading: "Business Intelligence Analyst",
      productAmount: "£2,690 / MONTH",

      paragraph:
        "Harness the power of data effectively, drive data driven decision making, and enhance performance across various areas. Our talented analysts leverage your data to gain a deeper understanding of your business. They employ analytical tools and techniques to uncover trends, patterns, and correlations within the data, identifying market gaps and developing strategies based on objective information.",
    },
    {
      id: 5,
      icon: automation,
      heading: "Automation Engineer",
      productAmount: "£3,390 / MONTH",

      paragraph:
        "Streamline your processes with our dedicated automation engineers. Leverage their proficiency in designing and implementing automated systems to optimise workflows, drive efficiency, enhance quality, and maintain competitiveness in a rapidly evolving market. Utilising cutting edge technologies and a commitment to innovation, our specialists are ready to revolutionise your workflow.",
    },
  ];
  const expertAssistance = [
    {
      id: 1,
      paragraph1:
        "Data driven strategy development tailored to your business needs",
      paragraph2: "Advanced analytics and predictive modeling.",
      paragraph3: "Data warehouse management.",
      paragraph4: "Data analysis and interpretation.",
      paragraph5: "Domain expertise across various industries.",
      paragraph6: "Statistical modeling and hypothesis testing.",
    },

    {
      id: 2,

      paragraph1: "Design and implementation of robust data pipelines.",
      paragraph2: "Data visualisation and dashboard creation.",
      paragraph3:
        "Data integration and ETL (Extract, Transform, Load) processes.",
      paragraph4: "Data organisation and structuring for optimal efficiency.",
      paragraph5: "Data backup and recovery solutions.",
      paragraph6: "Data integrity and quality management.",
    },
  ];

  const howToInitiate = [
    {
      id: 1,
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 112 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 text-sona-purple"
        >
          <circle cx="56.2622" cy="56.2661" r="20.2192" fill="#FFFFFF"></circle>
          <path
            d="M55.8229 -0.000805967C63.1536 -0.000805326 70.4125 1.44309 77.1853 4.24845C83.958 7.0538 90.1118 11.1657 95.2954 16.3493C100.479 21.5329 104.591 27.6867 107.396 34.4595C110.202 41.2322 111.646 48.4911 111.646 55.8219L90.9047 55.8219C90.9047 51.2148 89.9973 46.6529 88.2343 42.3966C86.4712 38.1403 83.8871 34.2729 80.6295 31.0152C77.3718 27.7576 73.5044 25.1735 69.2481 23.4104C64.9918 21.6474 60.4299 20.74 55.8228 20.74L55.8229 -0.000805967Z"
            fill="currentColor"
            className="path-color"
          ></path>
        </svg>
      ),

      heading: "Subscribe",
      paragraph:
        "Select the service and package that best suits your needs. Follow our quick payment process by providing your company details.",
    },
    {
      id: 2,

      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 113 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 text-sona-purple"
        >
          <circle cx="56.9077" cy="56.2661" r="20.2192" fill="#FFFFFF"></circle>
          <path
            d="M56.4684 -0.000805967C71.2735 -0.000804672 85.4722 5.8805 95.9409 16.3493C106.41 26.8181 112.291 41.0168 112.291 55.8219C112.291 70.627 106.41 84.8257 95.9409 95.2944C85.4722 105.763 71.2734 111.645 56.4683 111.645L56.4684 90.9037C65.7726 90.9037 74.6959 87.2076 81.275 80.6285C87.8541 74.0494 91.5502 65.1262 91.5502 55.8219C91.5502 46.5176 87.8541 37.5944 81.275 31.0152C74.6959 24.4361 65.7727 20.74 56.4684 20.74L56.4684 -0.000805967Z"
            fill="currentColor"
            className="path-color"
          ></path>
        </svg>
      ),
      heading: "Engage",
      paragraph:
        "We will schedule a call to ascertain your requirements and expectations and introduce your assigned employee and dedicated manager.",
    },
    {
      id: 3,
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 112 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 text-sona-purple"
        >
          <circle cx="56.2622" cy="56.2661" r="20.2192" fill="#FFFFFF"></circle>
          <path
            d="M55.8229 -0.000805967C66.8635 -0.000805001 77.6563 3.27314 86.8363 9.40701C96.0163 15.5409 103.171 24.2592 107.396 34.4595C111.621 44.6597 112.727 55.8838 110.573 66.7123C108.419 77.5409 103.102 87.4875 95.2954 95.2945C87.4885 103.101 77.5418 108.418 66.7133 110.572C55.8848 112.726 44.6607 111.62 34.4604 107.395C24.2602 103.17 15.5419 96.0153 9.40799 86.8353C3.27412 77.6553 0.000179391 66.8625 0.000180356 55.8218L20.741 55.8218C20.741 62.7604 22.7985 69.5431 26.6533 75.3123C30.5082 81.0815 35.9872 85.578 42.3976 88.2333C48.808 90.8885 55.8618 91.5833 62.667 90.2296C69.4722 88.876 75.7232 85.5348 80.6295 80.6285C85.5358 75.7222 88.877 69.4712 90.2306 62.666C91.5843 55.8608 90.8895 48.807 88.2343 42.3966C85.579 35.9862 81.0825 30.5072 75.3133 26.6523C69.5441 22.7975 62.7614 20.74 55.8228 20.74L55.8229 -0.000805967Z"
            fill="currentColor"
            className="path-color"
          ></path>
        </svg>
      ),
      heading: "Cooperate",
      paragraph:
        "Integrate your newly assigned team into your in-house team. Familiarise them with company practices, then assign tasks to unleash their capabilities.",
    },
    {
      id: 4,
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 113 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 text-sona-purple"
        >
          <circle cx="56.9077" cy="56.2661" r="20.2192" fill="#FFFFFF"></circle>
          <path
            d="M0.645688 55.8219C0.645691 24.9918 25.6384 -0.000808662 56.4684 -0.000805967C87.2984 -0.000803271 112.291 24.9919 112.291 55.8219C112.291 86.6519 87.2984 111.645 56.4683 111.645C25.6383 111.645 0.645685 86.6519 0.645688 55.8219ZM91.5502 55.8219C91.5502 36.4467 75.8435 20.74 56.4684 20.74C37.0932 20.74 21.3865 36.4467 21.3865 55.8219C21.3865 75.197 37.0932 90.9037 56.4684 90.9037C75.8435 90.9037 91.5502 75.197 91.5502 55.8219Z"
            fill="currentColor"
            className="path-color"
          ></path>
        </svg>
      ),
      heading: "Commence",
      paragraph:
        "Breathe, your ambitious onboarded team embodies an engineering ethos that embraces adaptability, drives continual improvement, and delivers unparalleled value.",
    },
  ];
  return (
    <div className="data-analytics">
      {/* first div */}
      <ServiceTopDiv
        leftImage={leftImage}
        middleImage={middleImage}
        rightImage={rightImage}
        heading={"Data & Analytics"}
        paragraph={
          "Leverage the power of data with our analysts and engineers to turn data into value. Competent in delivering analytics solutions that help you process and interpret your data assets, shedding light on key business dynamics, they transform projects and processes to supercharge operations with targeted insights, liberating your teams from repetitive processes."
        }
        button={"See Services"}
        softwareDevImage={softwareDevImage}
      />

      {/* second div */}

      <ServiceSecondDiv
        heading={"Data & Analytics Services"}
        arrays={items}
        button={"Learn more"}
      />

      {/* third div */}

      <ServiceThirdDiv
        heading={"Our experts can assist you with"}
        arrays={expertAssistance}
      />

      {/* fourth div */}

      <HowItWorks heading={"How To Initiate"} arrays={howToInitiate} />

      <FAQs />
    </div>
  );
};

export default DataAnalytics;
