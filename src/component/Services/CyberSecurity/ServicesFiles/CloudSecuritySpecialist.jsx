import React from "react";
import leftImage from "/src/assets/cyberSecurity/cloud.png";
import backendDevImage from "/src/assets/servicesImage/cloud-security-specialist.webp";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";
const CloudSecuritySpecialist = () => {
  const entireSkillSet = [
    {
      heading: "Technical Skills",
      items: [
        {
          id: 1,
          listParagraph: "Cloud Platforms:",
          listSpan:
            " In-depth knowledge of AWS, Azure, GCP, and their security features.",
        },
        {
          id: 2,
          listParagraph: "Networking:",
          listSpan:
            " Good understanding network protocols, security groups, firewalls, and VPNs.",
        },

        {
          id: 3,
          listParagraph: "Cryptography:",
          listSpan:
            " Knowledge of encryption algorithms, key management, and secure communication protocols.",
        },
        {
          id: 4,
          listParagraph: "Security Tools:",
          listSpan:
            " Proficient in security tools like vulnerability scanners, intrusion detection systems, and SIEM.",
        },
        {
          id: 5,
          listParagraph: "Scripting:",
          listSpan: " Skilled in Python, Bash, and PowerShell.",
        },
        {
          id: 6,
          listParagraph: "Compliance:",
          listSpan:
            " Understanding industry standards and regulations GDPR, HIPAA, PCI DSS.",
        },

        {
          id: 7,
          listParagraph: "Identity and Access Management:",
          listSpan: " Ability to manage user identities and access controls.",
        },
      ],
    },
    {
      heading: "Experience",
      items: [
        {
          id: 1,
          listParagraph: "Penetration Testing:",
          listSpan:
            " Experience conducting vulnerability assessments and penetration tests.",
        },

        {
          id: 2,
          listParagraph: "Incident Response:",
          listSpan:
            " Handling security incidents and conducting investigations.",
        },

        {
          id: 3,
          listParagraph: "DevSecOps:",
          listSpan:
            " Integrating security into the development and operations lifecycle.",
        },
        {
          id: 4,
          listParagraph: "Cloud Migration:",
          listSpan: " Experience in migrating workloads to the cloud securely.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "Security Assessment and Risk Management",
      items: [
        {
          id: 1,
          listParagraph: "Cloud Security Assessment:",
          listSpan: " Evaluating the security posture of cloud environments.",
        },

        {
          id: 2,
          listParagraph: "Risk Assessment:",
          listSpan: " Identifying, assessing, and prioritising security risks.",
        },

        {
          id: 3,
          listParagraph: "Threat Modeling:",
          listSpan: " Identifying potential threats and vulnerabilities.",
        },
      ],
    },
    {
      heading: "Security Architecture and Design",
      items: [
        {
          id: 1,
          listParagraph: "Security Architecture:",
          listSpan: " Designing and implementing cloud security architecture.",
        },

        {
          id: 2,
          listParagraph: "Security Controls Implementation:",
          listSpan: " Implementing security controls and measures.",
        },
      ],
    },
    {
      heading: "Security Operations and Monitoring",
      items: [
        {
          id: 1,
          listParagraph: "Security Monitoring:",
          listSpan: " Continuously monitoring cloud environments for threats.",
        },

        {
          id: 2,

          listParagraph: "Incident Response:",
          listSpan: " Developing and implementing incident response plans.",
        },
      ],
    },
    {
      heading: "Compliance and Governance",
      items: [
        {
          id: 1,
          listParagraph: "Compliance Framework Implementation:",
          listSpan:
            " Ensuring adherence to industry regulations e.g., GDPR, HIPAA, PCI DSS.",
        },
        {
          id: 2,
          listParagraph: "Security Policy Development:",
          listSpan:
            " Creating and maintaining security policies and procedures.",
        },
      ],
    },
    {
      heading: "Security Awareness and Training",
      items: [
        {
          id: 1,
          listParagraph: "Security Awareness Programs:",
          listSpan:
            " Developing and delivering security awareness training to employees.",
        },
      ],
    },
  ];
  return (
    <div className="marginButton cyberSecurityTopOverallDiv">
      <ServicesFiles
        leftImage={leftImage}
        heading={"Cloud Security Specialist"}
        paragraph={
          "Cloud Security Engineers are committed to safeguarding your organisation's cloud computing environment. They concentrate on defending cloud infrastructure, data, and applications against potential threats and vulnerabilities. Proficient in designing and implementing comprehensive cloud security strategies, they craft security architectures that align with your business goals and compliance requirements."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Sonaqode's Cloud Security Specialists leverage advanced tools to craft impenetrable defenses that turn potential threats into protection, attracting customer trust and increasing revenue through reduced downtime. They prioritise threat detection and response, applying a keen eye for detail and a commitment to producing outstanding security outcomes that meet your business objectives. Engage dedicated Cloud Security Specialists who are highly experienced in technologies like AWS, Azure, GCP, and cloud security frameworks, with acclaimed expertise in integrating emerging tech trends such as cloud-native security, zero trust architecture, and cloud forensics to achieve top notch security posture. Boost system reliability, speed of response, and customer confidence with our security centric approach."
        }
        atrParagraphtwo={
          "By reducing data breaches, enhancing brand reputation, and minimising financial loss, we deliver a competitive advantage rather than just reactive security measures. Choosing us means faster incident response, improved cloud compliance, and enhanced business continuity."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£3,190 / Month + VAT"}
        // popNote
        ftPackageName={"Cloud Security Specialist (Full Time)"}
        ftItemTotalAmount={"3,828"}
        ftPackageAmount={"3,190"}
        ftVatAmount={"638"}
        ftTotalDue={"3,828"}
        // skill array
        entireSkillSet={entireSkillSet}
        // deliverableArrays
        entireDeliverableKey={entireDeliverableKey}
      />
    </div>
  );
};

export default CloudSecuritySpecialist;
