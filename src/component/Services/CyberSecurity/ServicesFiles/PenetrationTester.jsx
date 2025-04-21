import React from "react";
import leftImage from "/src/assets/cyberSecurity/password(1).png";
import backendDevImage from "/src/assets/servicesImage/penetration-tester.webp";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";
const PenetrationTester = () => {
  const entireSkillSet = [
    {
      heading: "Technical Skills",
      items: [
        {
          id: 1,
          listParagraph: "Networking:",
          listSpan:
            " Deep understanding of network protocols, architectures, and security controls.",
        },
        {
          id: 2,
          listParagraph: "Operating Systems:",
          listSpan: " Proficiency in Windows, Linux, and macOS.",
        },

        {
          id: 3,
          listParagraph: "Programming:",
          listSpan:
            " Knowledge of Python, Perl, PowerShell for automation and exploit development.",
        },

        {
          id: 4,
          listParagraph: "Security Tools:",
          listSpan:
            " Competent in using penetration testing tools Burp Suite, Metasploit, Nmap, Kali Linux.",
        },
        {
          id: 5,
          listParagraph: "Vulnerability Assessment:",
          listSpan: " Ability to identify and exploit vulnerabilities.",
        },
        {
          id: 6,
          listParagraph: "Web Application Security:",
          listSpan:
            " Understanding web application vulnerabilities and exploitation techniques.",
        },
        {
          id: 7,
          listParagraph: "Cryptography:",
          listSpan: " Knowledge of encryption algorithms and protocols.",
        },
      ],
    },
    {
      heading: "Experience",
      items: [
        {
          id: 1,
          listParagraph: "Penetration Testing Projects:",
          listSpan: " Hands-on experience conducting penetration tests.",
        },

        {
          id: 2,
          listParagraph: "Vulnerability Research:",
          listSpan: " Identifying and analysing new vulnerabilities.",
        },

        {
          id: 3,
          listParagraph: "Exploit Development:",
          listSpan: " Creating custom exploits for specific vulnerabilities.",
        },
        {
          id: 4,
          listParagraph: "Incident Response:",
          listSpan: " Understanding how to respond to security breaches.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "Vulnerability Assessment and Exploitation",
      items: [
        {
          id: 1,
          listParagraph: "Vulnerability Scanning:",
          listSpan:
            " Identifying potential vulnerabilities in systems and applications.",
        },

        {
          id: 2,
          listParagraph: "Exploit Development:",
          listSpan:
            " Creating tools or scripts to exploit identified vulnerabilities.",
        },

        {
          id: 3,
          listParagraph: "Vulnerability Assessment Reports:",
          listSpan:
            " Documenting discovered vulnerabilities and their potential impact.",
        },
      ],
    },
    {
      heading: "Penetration Testing Execution",
      items: [
        {
          id: 1,
          listParagraph: "Network Penetration Testing:",
          listSpan: " Assessing the security of network infrastructure.",
        },

        {
          id: 2,
          listParagraph: "Application Penetration Testing:",
          listSpan: " Testing web applications, mobile apps, and APIs.",
        },
        {
          id: 3,
          listParagraph: "Database Penetration Testing:",
          listSpan: " Assessing the security of databases.",
        },
      ],
    },
    {
      heading: "Risk Assessment and Reporting",
      items: [
        {
          id: 1,
          listParagraph: "Risk Assessment: ",
          listSpan:
            "Evaluating the potential impact of identified vulnerabilities.",
        },

        {
          id: 2,

          listParagraph: "Penetration Testing Report:",
          listSpan:
            " Providing a comprehensive report detailing findings, recommendations, and remediation steps.",
        },
      ],
    },
    {
      heading: "Security Awareness and Training",
      items: [
        {
          id: 1,
          listParagraph: "Vulnerability Disclosure:",
          listSpan:
            " Responsible disclosure of vulnerabilities to system owners.",
        },
        {
          id: 2,
          listParagraph: "Security Awareness Recommendations:",
          listSpan:
            " Providing recommendations to improve overall security posture.",
        },
      ],
    },
  ];
  return (
    <div className="marginButton cyberSecurityTopOverallDiv">
      <ServicesFiles
        leftImage={leftImage}
        heading={"Penetration Tester"}
        paragraph={
          "Enhance the security of your system, application, or network by employing our Penetration Tester. Protect your business critical data from hackers and proactively prevent security breaches and vulnerabilities. Customise testing styles to effortlessly meet your unique requirements. They excel in analysing complex systems, pinpointing weaknesses, and adeptly employing both manual testing techniques and automated tools."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Our experienced and reliable Penetration Testers enhance the work of security teams by identifying and exploiting vulnerabilities. Rigorous penetration testing by these experts ensures robust protection for your organisation. They go beyond treating vulnerability scanning as a discrete function at the end of the development lifecycle, embedding security testing at every IT phase. By reducing the risk of data breaches, enhancing brand reputation, and minimising financial loss, we deliver a competitive advantage by proactively identifying weaknesses."
        }
        atrParagraphtwo={
          "Our Penetration Testers create top notch testing methodologies and reports to inform decisions and optimise security operations. Engage dedicated Penetration Testers who are highly experienced in vulnerability scanning, exploitation techniques, and security testing frameworks, with acclaimed expertise in integrating emerging tech trends such as application security testing, cloud penetration testing, and web application security to achieve top notch security assessment results. Choosing us means faster vulnerability discovery, improved security posture, and enhanced business protection."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£2,890 / Month + VAT"}
        // popNote
        ftPackageName={"Penetration Tester (Full Time)"}
        ftItemTotalAmount={"3,468"}
        ftPackageAmount={"2,890"}
        ftVatAmount={"578"}
        ftTotalDue={"3,468"}
        // skill array
        entireSkillSet={entireSkillSet}
        // deliverableArrays
        entireDeliverableKey={entireDeliverableKey}
      />
    </div>
  );
};

export default PenetrationTester;
