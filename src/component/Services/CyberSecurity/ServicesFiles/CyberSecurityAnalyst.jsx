import React from "react";
import leftImage from "/src/assets/cyberSecurity/security.png";
import backendDevImage from "/src/assets/servicesImage/cyber-security-analyst.webp";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";
const CyberSecurityAnalyst = () => {
  const entireSkillSet = [
    {
      heading: "Technical Skills",
      items: [
        {
          id: 1,
          listParagraph: "Networking:",
          listSpan:
            " Understanding network protocols, architectures, and security controls.",
        },
        {
          id: 2,
          listParagraph: "Operating Systems:",
          listSpan: " Proficient in Windows, Linux, and macOS.",
        },

        {
          id: 3,
          listParagraph: "Security Tools:",
          listSpan:
            " Adept in using firewalls, intrusion detection systems, and vulnerability scanners.",
        },
        {
          id: 4,
          listParagraph: "Incident Response:",
          listSpan:
            " Ability to handle security incidents and conduct investigations.",
        },
        {
          id: 5,
          listParagraph: "Data Analysis:",
          listSpan:
            " Proficient in data analysis tools to identify patterns and anomalies.",
        },
        {
          id: 6,
          listParagraph: "Scripting:",
          listSpan:
            " Knowledge of Python and PowerShell for automation and analysis.",
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
          listParagraph: "Digital Forensics:",
          listSpan: " Investigating cyber incidents to gather evidence.",
        },

        {
          id: 3,
          listParagraph: "Risk Assessment:",
          listSpan:
            " Evaluating security risks and implementing mitigation strategies.",
        },
        {
          id: 4,
          listParagraph: "Compliance:",
          listSpan:
            " Understanding industry regulations e.g., GDPR, HIPAA, PCI DSS.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "Threat Identification and Risk Assessment",
      items: [
        {
          id: 1,
          listParagraph: "Threat Identification:",
          listSpan:
            " Identifying potential threats and vulnerabilities to the organisation.",
        },

        {
          id: 2,
          listParagraph: "Risk Assessment:",
          listSpan:
            " Evaluating the potential impact of threats and vulnerabilities.",
        },
      ],
    },
    {
      heading: "Security Monitoring and Incident Response",
      items: [
        {
          id: 1,
          listParagraph: "Security Monitoring:",
          listSpan:
            " Continuously monitoring networks and systems for suspicious activity.",
        },

        {
          id: 2,
          listParagraph: "Incident Response:",
          listSpan: " Investigating and responding to security incidents.",
        },
        {
          id: 3,
          listParagraph: "Incident Reporting:",
          listSpan: " Documenting security incidents and lessons learned.",
        },
      ],
    },
    {
      heading: "Security Testing and Assessment",
      items: [
        {
          id: 1,
          listParagraph: "Vulnerability Assessment:",
          listSpan: " Identifying weaknesses in systems and applications.",
        },

        {
          id: 2,

          listParagraph: "Penetration Testing:",
          listSpan: " Simulating cyberattacks to identify vulnerabilities.",
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
    {
      heading: "Security Policy and Compliance",
      items: [
        {
          id: 1,
          listParagraph: "Security Policy Development:",
          listSpan:
            " Creating and maintaining security policies and procedures.",
        },
        {
          id: 2,
          listParagraph: "Compliance Management:",
          listSpan:
            " Ensuring adherence to industry regulations and standards.",
        },
      ],
    },
  ];
  return (
    <div className="marginButton cyberSecurityTopOverallDiv">
      <ServicesFiles
        leftImage={leftImage}
        heading={"Cyber Security Analyst"}
        paragraph={
          "Our Cyber Security Analysts safeguard digital assets against evolving threats. They enhance security, ensure regulatory compliance, manage risks, and maintain trust and confidence. Leveraging a deep understanding of the cybersecurity landscape and strong problem solving abilities, they monitor and analyse security systems, scrutinise network traffic, identify anomalies, and promptly respond to potential security incidents."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Sonaqode's Cyber Security Analysts leverage advanced tools to craft actionable threat intelligence. Committed to delivering high-value security outcomes, they transform raw threat data into sophisticated threat models with unmatched accuracy using the best blend of analytical techniques. They excel in threat hunting, incident response analysis, vulnerability assessment, and threat modeling to make your organisation cyber resilient. Whether you aim to launch new security initiatives quickly or optimise existing security operations, our professionals use cutting edge tools and methodologies to provide efficient, cost effective security solutions."
        }
        atrParagraphtwo={
          "Enlist dedicated analysts who are highly experienced in tools like SIEM, threat intelligence platforms, and security analytics platforms, with acclaimed expertise in integrating emerging tech trends such as artificial intelligence, machine learning, and big data to achieve top notch threat intelligence output. A company's threat intelligence can significantly influence its security posture. Our Cyber Security Analysts create exceptional threat reports and visualisations that captivate stakeholders and showcase security performance. Choosing us means effective threat hunting, quicker incident response, and enhanced business resilience."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£2,990 / Month + VAT"}
        // popNote
        ftPackageName={"Cyber Security Analyst (Full Time)"}
        ftItemTotalAmount={"3,588"}
        ftPackageAmount={"2,990"}
        ftVatAmount={"598"}
        ftTotalDue={"3,588"}
        // skill array
        entireSkillSet={entireSkillSet}
        // deliverableArrays
        entireDeliverableKey={entireDeliverableKey}
      />
    </div>
  );
};

export default CyberSecurityAnalyst;
