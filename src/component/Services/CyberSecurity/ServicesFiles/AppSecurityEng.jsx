import React from "react";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";
import leftImage from "/src/assets/cyberSecurity/security-window.png";
import backendDevImage from "/src/assets/servicesImage/it-support-engineer.webp";

const AppSecurityEng = () => {
  const entireSkillSet = [
    {
      heading: "Technical Skills",
      items: [
        {
          id: 1,
          listParagraph: "Programming Languages:",
          listSpan:
            " Proficient in Java, Python, C++, and Ruby to understand code vulnerabilities.",
        },
        {
          id: 2,
          listParagraph: "Security Testing:",
          listSpan:
            " Expertise in vulnerability assessment tools Burp Suite, OWASP ZAPand penetration testing methodologies.",
        },

        {
          id: 3,
          listParagraph: "Cryptography:",
          listSpan:
            " Understanding encryption algorithms, key management, and secure communication protocols.",
        },
        {
          id: 4,
          listParagraph: "Web Application Firewalls",
          listSpan: ": Knowledge of WAF configuration and management.",
        },
        {
          id: 5,
          listParagraph: "Secure Coding Practices:",
          listSpan:
            " Proficient in writing secure code and identifying vulnerabilities.",
        },
        {
          id: 6,
          listParagraph: "Threat Modeling:",
          listSpan:
            " Ability to identify potential threats and vulnerabilities in applications.",
        },

        {
          id: 7,
          listParagraph: "Network Security:",
          listSpan: " Understanding network protocols and security measures.",
        },
        {
          id: 8,
          listParagraph: "Cloud Security:",
          listSpan: " Knowledge of cloud security best practices and tools.",
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
            " Experience conducting penetration tests to identify vulnerabilities.",
        },

        {
          id: 2,
          listParagraph: "Incident Response:",
          listSpan:
            " Handling security incidents and conducting investigations.",
        },
        {
          id: 3,
          listParagraph: "Secure Software Development Lifecycle:",
          listSpan: " Integrating security into the development process.",
        },

        {
          id: 4,
          listParagraph: "Cloud Security Architecture:",
          listSpan:
            " Designing and implementing secure cloud based applications.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "Security Assessment and Testing",
      items: [
        {
          id: 1,
          listParagraph: "Vulnerability Assessment:",
          listSpan:
            " Identifying potential weaknesses and vulnerabilities in applications.",
        },

        {
          id: 2,
          listParagraph: "Penetration Testing:",
          listSpan:
            " Simulating cyberattacks to uncover exploitable vulnerabilities.",
        },

        {
          id: 3,
          listParagraph: "Threat Modeling:",
          listSpan:
            " Identifying potential threats and their impact on the application.",
        },
      ],
    },
    {
      heading: "Security Architecture and Design",
      items: [
        {
          id: 1,
          listParagraph: "Security Architecture Review:",
          listSpan:
            " Assessing the security of application architecture and design.",
        },

        {
          id: 2,
          listParagraph: "Secure Coding Practices:",
          listSpan: " Enforcing secure coding standards and guidelines.",
        },
      ],
    },
    {
      heading: "Security Implementation and Remediation",
      items: [
        {
          id: 1,
          listParagraph: "Vulnerability Remediation:",
          listSpan:
            " Developing and implementing fixes for identified vulnerabilities.",
        },

        {
          id: 2,

          listParagraph: "Security Controls Implementation:",
          listSpan:
            " Implementing security controls and mechanisms e.g., authentication, authorisation, encryption.",
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
            " Developing and conducting security awareness training for employees.",
        },

        {
          id: 2,
          listParagraph: "Security Incident Response Plans:",
          listSpan: " Creating and maintaining incident response plans.",
        },
      ],
    },
    {
      heading: "Continuous Security Monitoring",
      items: [
        {
          id: 1,
          listParagraph: "Security Monitoring:",
          listSpan:
            " Implementing and managing security monitoring tools and processes.",
        },
      ],
    },
  ];
  return (
    <div className="marginButton cyberSecurityTopOverallDiv">
      <ServicesFiles
        leftImage={leftImage}
        heading={"Application Security Engineer"}
        paragraph={
          "Secure software applications from threats throughout their development lifecycle. Our engineers play a vital role in protecting your business’s applications, ensuring regulatory compliance, and maintaining customer trust. They excel in application security practices, software development, and risk management. Their expertise fortifies a more secure and resilient business environment."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Sonaqode's Application Security Engineers leverage advanced tools to craft robust security solutions. Drive business resilience by implementing impenetrable defenses with our Application Security Engineers. A company's security infrastructure can significantly influence its risk profile. Our security engineers develop top notch security controls and processes for applications that safeguard data and optimise operations. They prioritise vulnerability identification and remediation, applying a keen eye for detail and a commitment to producing outstanding security outcomes that meet your business objectives."
        }
        atrParagraphtwo={
          "Boost software reliability, speed to market, and customer trust through our security centric approach. By reducing data breaches, enhancing brand reputation, and minimising financial loss, we deliver a competitive advantage rather than just reactive security measures. Enlist dedicated engineers who are committed to delivering high-value security outcomes, using the best blend of security techniques to build sophisticated defense systems with unmatched protection. Choosing us means faster incident response, improved security compliance, and enhanced business continuity."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£2,990 / Month + VAT"}
        // popNote
        ftPackageName={"Application Security Engineer (Full Time)"}
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

export default AppSecurityEng;
