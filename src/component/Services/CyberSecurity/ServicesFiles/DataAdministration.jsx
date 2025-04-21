import React from "react";
import leftImage from "/src/assets/cyberSecurity/data-admin.png";
import backendDevImage from "/src/assets/servicesImage/data-administrator.webp";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";
const DataAdministration = () => {
  const entireSkillSet = [
    {
      heading: "Technical Skills",
      items: [
        {
          id: 1,
          listParagraph: "Database Management Systems:",
          listSpan:
            " Proficient in SQL, experience with MySQL, Oracle, SQL Server.",
        },
        {
          id: 2,
          listParagraph: "Data Modeling:",
          listSpan:
            " Understanding data structures and relationships to design efficient databases.",
        },

        {
          id: 3,
          listParagraph: "Database Design:",
          listSpan: " Ability to create optimal database schemas and indexes.",
        },
        {
          id: 4,
          listParagraph: "Performance Tuning:",
          listSpan:
            " Adept at optimising database performance through query optimisation, indexing, and software configurations.",
        },
        {
          id: 5,
          listParagraph: "Backup and Recovery:",
          listSpan: " Implementing and testing backup and recovery procedures.",
        },
        {
          id: 6,
          listParagraph: "Data Security:",
          listSpan:
            " Ability to ensure data confidentiality, integrity, and availability through access controls, encryption, and other security measures.",
        },
        {
          id: 7,
          listParagraph: "Scripting:",
          listSpan: " Knowledge of Python, Perl, Bash.",
        },
      ],
    },
    {
      heading: "Experience",
      items: [
        {
          id: 1,
          listParagraph: "Database Administration:",
          listSpan:
            " Hands-on experience in managing and maintaining databases.",
        },

        {
          id: 2,
          listParagraph: "Data Migration:",
          listSpan: " Experience in migrating data between systems.",
        },

        {
          id: 3,
          listParagraph: "Data Quality:",
          listSpan:
            " Ability to implement data quality checks and improvement processes.",
        },
        {
          id: 4,
          listParagraph: "ITIL or other IT Service Management frameworks:",
          listSpan: " Understanding IT service management principles.",
        },
        {
          id: 5,
          listParagraph: "Cloud Platforms:",
          listSpan:
            " Knowledge of cloud based database services AWS, Azure, GCP.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "Data Governance and Compliance",
      items: [
        {
          id: 1,
          listParagraph: "Data Governance Framework:",
          listSpan:
            " Developing and implementing data governance policies and standards.",
        },

        {
          id: 2,
          listParagraph: "Data Classification:",
          listSpan: " Categorising data based on sensitivity and value.",
        },

        {
          id: 3,
          listParagraph: "Compliance Adherence:",
          listSpan:
            " Ensuring compliance with data protection regulations GDPR, CCPA, etc..",
        },
      ],
    },
    {
      heading: "Data Security and Protection",
      items: [
        {
          id: 1,
          listParagraph: "Data Access Controls:",
          listSpan:
            " Implementing and managing access controls to protect sensitive data.",
        },

        {
          id: 2,
          listParagraph: "Data Encryption:",
          listSpan:
            " Implementing data encryption to safeguard data at rest and in transit.",
        },

        {
          id: 3,
          listParagraph: "Data Loss Prevention:",
          listSpan: " Implementing DLP solutions to prevent data leakage.",
        },
      ],
    },
    {
      heading: "Data Management and Quality",
      items: [
        {
          id: 1,
          listParagraph: "Data Quality Management:",
          listSpan: " Ensuring data accuracy, completeness, and consistency.",
        },

        {
          id: 2,

          listParagraph: "Data Retention and Deletion:",
          listSpan: " Managing data lifecycle and retention policies.",
        },
      ],
    },
    {
      heading: "Data Infrastructure and Operations",
      items: [
        {
          id: 1,
          listParagraph: "Data Storage Management:",
          listSpan:
            " Managing data storage infrastructure databases, data lakes.",
        },
        {
          id: 2,
          listParagraph: "Data Backup and Recovery:",
          listSpan: " Implementing data backup and recovery procedures.",
        },
      ],
    },
  ];
  return (
    <div className="marginButton cyberSecurityTopOverallDiv">
      <ServicesFiles
        leftImage={leftImage}
        heading={"Data Administrator"}
        paragraph={
          "Effectively manage your data infrastructure with our experts, who actively maintain the security, integrity, and performance of your company's databases, ensuring secure and optimal data storage. They bolster efficient operations and informed decision making, enabling businesses to achieve cost savings, scalability, and flexibility while ensuring compliance. Through the use of progressive and efficient DB management systems, we facilitate optimal outcomes for your business."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Our experienced and reliable data administrators enhance the work of IT teams by managing and protecting critical data assets. Rigorous data governance by these experts ensures data integrity and compliance for your organisation, bringing data chaos into order with the best blend of technical skills to build robust data infrastructures. They prioritise data quality and accessibility, applying a keen eye for detail and a commitment to producing outstanding data services that meet your business objectives."
        }
        atrParagraphtwo={
          "Enlist dedicated administrators who are highly experienced in tools like database management systems, data governance platforms, and data quality tools, with acclaimed expertise in integrating emerging tech trends such as cloud data management, data privacy, and data security to achieve top notch data management outcomes. A company's data management approach can significantly influence operational efficiency. Our data administrators create top notch data policies and procedures that captivate stakeholders and showcase data reliability. Choosing us means effective data governance, quicker data access, and enhanced operational performance."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£1,499 / Month + VAT"}
        // popNote
        ftPackageName={"Data Administrator (Full Time)"}
        ftItemTotalAmount={"1,798"}
        ftPackageAmount={"1,499"}
        ftVatAmount={"299"}
        ftTotalDue={"1,798"}
        // skill array
        entireSkillSet={entireSkillSet}
        // deliverableArrays
        entireDeliverableKey={entireDeliverableKey}
      />
    </div>
  );
};

export default DataAdministration;
