import React from "react";
import leftImage from "/src/assets/cyberSecurity/two-step.png";
import backendDevImage from "/src/assets/servicesImage/cyber-security-engineer.webp";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";
const CyberSecurityEng = () => {
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
          listParagraph: "Programming:",
          listSpan:
            " Knowledge of languages like Python, C++, or Java for scripting and tool development.",
        },
        {
          id: 4,
          listParagraph: "Cryptography:",
          listSpan:
            " Understanding encryption algorithms, key management, and secure communication protocols.",
        },
        {
          id: 5,
          listParagraph: "Security Tools:",
          listSpan:
            " Proficient in security tools like firewalls, intrusion detection systems, and vulnerability scanners.",
        },
        {
          id: 6,
          listParagraph: "Incident Response:",
          listSpan:
            " Experience in handling security incidents and conducting investigations.",
        },
        {
          id: 7,
          listParagraph: "Cloud Security:",
          listSpan:
            " Understanding cloud security concepts and platforms AWS, Azure, GCP.",
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
          listSpan: " Understanding industry regulations GDPR, HIPAA, PCI DSS.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "Security Architecture and Design",
      items: [
        {
          id: 1,
          listParagraph: "Security Architecture Design:",
          listSpan:
            " Developing a comprehensive security architecture for the organisation.",
        },

        {
          id: 2,
          listParagraph: "Threat Modeling:",
          listSpan:
            " Identifying potential threats and vulnerabilities within systems and applications.",
        },
      ],
    },
    {
      heading: "Security Implementation and Maintenance",
      items: [
        {
          id: 1,
          listParagraph: "Security Controls Implementation:",
          listSpan:
            " Deploying security controls firewalls, intrusion detection systems, etc..",
        },

        {
          id: 2,
          listParagraph: "Security Configuration Management:",
          listSpan:
            " Ensuring systems and applications are configured securely.",
        },
        {
          id: 3,
          listParagraph: "Vulnerability Management:",
          listSpan: " Identifying, assessing, and mitigating vulnerabilities.",
        },
      ],
    },
    {
      heading: "Incident Response and Recovery",
      items: [
        {
          id: 1,
          listParagraph: "Incident Response Planning:",
          listSpan: " Developing and maintaining incident response plans.",
        },

        {
          id: 2,

          listParagraph: "Incident Handling:",
          listSpan: " Responding to security incidents and minimizing damage.",
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
        {
          id: 2,
          listParagraph: "Security Policies and Procedures:",
          listSpan:
            " Creating and maintaining security policies and procedures.",
        },
      ],
    },
    {
      heading: "Continuous Improvement",
      items: [
        {
          id: 1,
          listParagraph: "Security Audits and Assessments:",
          listSpan:
            " Conducting regular security assessments to identify weaknesses.",
        },
      ],
    },
  ];
  return (
    <div className="marginButton cyberSecurityTopOverallDiv">
      <ServicesFiles
        leftImage={leftImage}
        heading={"Cyber Security Engineer"}
        paragraph={
          "Protect your organisation’s systems, networks, data, and digital assets from cyber threats. Our security engineers excel in identifying vulnerabilities, devising strategies to mitigate risks, and responding to security incidents to enhance the organisation's overall security posture. They leverage digital forensics tools and methodologies and are well versed in developing security policies and procedures."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Our expert cybersecurity engineers bolster IT teams by proactively identifying cyber threats. Rigorous security assessments ensure comprehensive protection for you. By reducing data breaches, enhancing brand reputation, and minimising financial loss, we provide a competitive advantage rather than just reactive security measures. Sonaqode's engineers excel in threat intelligence, vulnerability management, incident response, and digital forensics to make your organisation cyber resilient."
        }
        atrParagraphtwo={
          "They prioritise threat detection and response, optimising security controls to enhance system protection, applying a keen eye for detail and a commitment to producing outstanding security postures that meet your business objectives. Enlist dedicated engineers who are highly experienced in tools like vulnerability scanners, intrusion detection systems, and security information and event management, with acclaimed expertise in integrating emerging tech trends such as artificial intelligence, blockchain, and cloud security to achieve top notch security outcomes. Choosing us means faster incident response, improved security compliance, and enhanced business continuity."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£2,990 / Month + VAT"}
        // popNote
        ftPackageName={"Cyber Security Engineer (Full Time)"}
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

export default CyberSecurityEng;
