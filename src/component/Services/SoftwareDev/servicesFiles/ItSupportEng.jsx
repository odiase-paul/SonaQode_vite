import React from "react";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";
import leftImage from "/src/assets/softwareDevelopment/it-support.png";
import backendDevImage from "/src/assets/servicesImage/it-support-engineer.webp";
const ItSupportEng = () => {
  const entireSkillSet = [
    {
      heading: "Essential Technical Skills",
      items: [
        {
          id: 1,
          listParagraph: "Software Troubleshooting:",
          listSpan: " Proficient in resolving software issues and conflicts.",
        },
        {
          id: 2,
          listParagraph: "Network Troubleshooting:",
          listSpan:
            " Understanding of network fundamentals and ability to diagnose network problems.",
        },

        {
          id: 3,
          listParagraph: "Operating Systems:",
          listSpan: " Proficient in Windows, macOS, and Linux environments.",
        },
        {
          id: 4,
          listParagraph: "Application Support:",
          listSpan:
            " Knowledge of common software applications Office suite, email.",
        },
        {
          id: 5,
          listParagraph: "Remote Support Tools:",
          listSpan:
            " Proficient in TeamViewer or Remote Desktop, capable of troubleshooting issues remotely and efficiently guiding users through technical problems.",
        },
        {
          id: 6,
          listParagraph: "Ticketing Systems:",
          listSpan: " Experience with help desk software for issue tracking.",
        },
        {
          id: 7,
          listParagraph: "Network management:",
          listSpan:
            " Familiar with network management tools and concepts, such as DNS, DHCP, TCP/IP, and VPN.",
        },
      ],
    },
    {
      heading: "Experience",
      items: [
        {
          id: 1,
          listParagraph: "Help desk or technical support role:",
          listSpan: " Practical experience in handling user issues.",
        },

        {
          id: 2,
          listParagraph: "Performance optimisationCustomer service industry:",
          listSpan:
            " Experience in dealing with customers and resolving complaints.",
        },
        {
          id: 3,
          listParagraph: "Technical documentation:",
          listSpan:
            " Creating clear and concise knowledge base articles using Microsoft Office Word, Excel or Google Workspace Docs, Sheets.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "Technical Support and Problem Resolution",
      items: [
        {
          id: 1,
          listParagraph: "Incident Management:",
          listSpan:
            " Responding to and resolving IT-related issues and inquiries.",
        },

        {
          id: 2,
          listParagraph: "Problem Solving:",
          listSpan: " Diagnosing and resolving complex technical problems.",
        },
        {
          id: 3,
          listParagraph: "Technical Support:",
          listSpan:
            " Providing assistance and guidance to users on hardware and software issues.",
        },
      ],
    },
    {
      heading: "System Maintenance and Administration",
      items: [
        {
          id: 1,
          listParagraph: "Hardware and Software Maintenance:",
          listSpan:
            " Ensuring systems and equipment are functioning optimally.",
        },

        {
          id: 2,
          listParagraph: "System Updates and Patches:",
          listSpan:
            " Applying necessary updates and patches to maintain system security and performance.",
        },
        {
          id: 3,
          listParagraph: "User Account Management:",
          listSpan:
            " Creating, modifying, and deleting user accounts and permissions.",
        },
      ],
    },
    {
      heading: "Service Delivery and Improvement",
      items: [
        {
          id: 1,
          listParagraph: "IT Service Delivery:",
          listSpan:
            " Providing efficient and effective IT services to end-users.",
        },

        {
          id: 2,

          listParagraph: "Knowledge Base Management:",
          listSpan:
            " Creating and updating knowledge base articles for self-service support.",
        },
        {
          id: 3,

          listParagraph: "User Training:",
          listSpan: " Conducting training sessions on IT systems and software.",
        },
      ],
    },
    {
      heading: "Process Improvement",
      items: [
        {
          id: 1,
          listParagraph: "Process Improvement:",
          listSpan:
            " Identifying opportunities to improve IT support processes and efficiency.",
        },
      ],
    },
  ];

  return (
    <div className="marginButton">
      <ServicesFiles
        leftImage={leftImage}
        heading={"IT Support Engineer"}
        paragraph={
          "Our IT Engineers provide comprehensive technical support, collaborating with cross functional teams to deploy, configure, and maintain IT infrastructure components in alignment with business needs. They utilise appropriate tools and techniques to ensure uptime, performance, and security compliance. They excel in problem solving and proactively identify and implement improvements to enhance overall performance."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Sonaqode's IT Support Engineers leverage advanced tools to deliver efficient problem resolutions. Through rigorous problem solving, these experts ensure smooth operations for your organisation. They go beyond treating incident resolution as a discrete function at the end of the service lifecycle, embedding user satisfaction in every IT interaction. Our IT support engineers develop top notch incident management processes and knowledge bases to inform decisions and optimise operations. Boost user productivity, service speed, and overall efficiency with our user centric approach."
        }
        atrParagraphtwo={
          "By reducing downtime, enhancing user experience, and minimising IT-related risks, they deliver a competitive advantage rather than just reactive IT support. Engage dedicated IT Support Engineers who are highly experienced in troubleshooting, software installation, hardware maintenance, and network support, with acclaimed expertise in integrating emerging tech trends such as cloud computing, remote support, and IT automation to achieve exceptional service delivery. Choosing us means faster incident resolution, improved user satisfaction, and enhanced business continuity."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£899 / Month + VAT"}
        partTimeTopParagraph={"Part Time"}
        partTimeTopSpan={"(20 hours/week)"}
        partTimeBottomParagraph={"£549 / Month + VAT"}
        // popNote
        ftPackageName={"IT Support Engineer (Full Time)"}
        ftItemTotalAmount={"1,078"}
        ftPackageAmount={"899"}
        ftVatAmount={"179"}
        ftTotalDue={"1,078"}
        ptPackageName={"IT Support Engineer (Part Time)"}
        ptItemTotalAmount={"658"}
        ptPackageAmount={"549"}
        ptVatAmount={"109"}
        ptTotalDue={"658"}
        // skill array
        entireSkillSet={entireSkillSet}
        // deliverableArrays
        entireDeliverableKey={entireDeliverableKey}
      />
    </div>
  );
};

export default ItSupportEng;
