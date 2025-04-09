import React from "react";
import "./CyberSecurity.css";
import ServiceTopDiv from "../../ReuseableComponent/ServiceTopDiv";
import leftImage from "/src/assets/cyberSecurity/police-badge.png";
import middleImage from "/src/assets/cyberSecurity/protect.png";
import rightImage from "/src/assets/cyberSecurity/lock.png";
import softwareDevImage from "/src/assets/cyberSecurity/cyber-security.png";
import ServiceSecondDiv from "../../ReuseableComponent/ServiceSecondDiv";

import securityWindow from "/src/assets/cyberSecurity/security-window.png";
import cloud from "/src/assets/cyberSecurity/cloud.png";
import twoStep from "/src/assets/cyberSecurity/two-step.png";
import dataAdmin from "/src/assets/cyberSecurity/data-admin.png";
import security from "/src/assets/cyberSecurity/security.png";
import passwordOne from "/src/assets/cyberSecurity/password(1).png";
import ServiceThirdDiv from "../../ReuseableComponent/ServiceThirdDiv";
import HowItWorks from "../../ReuseableComponent/HowItWorks";
import FAQs from "../../ReuseableComponent/FAQs";
const CyberSecurity = () => {
  const items = [
    {
      id: 1,
      icon: securityWindow,
      heading: "Application Security Engineer",
      productAmount: "£2,990 / MONTH",
      paragraph:
        "Secure software applications from threats throughout their development lifecycle. Our engineers play a vital role in protecting your business’s applications, ensuring regulatory compliance, and maintaining customer trust. They excel in application security practices, software development, and risk management. Their expertise fortifies a more secure and resilient business environment.",
    },
    {
      id: 2,
      icon: cloud,
      heading: "Cloud Security Specialist",
      productAmount: "£3,190 / MONTH",

      paragraph:
        "Cloud Security Engineers are committed to safeguarding your organisation's cloud computing environment. They concentrate on defending cloud infrastructure, data, and applications against potential threats and vulnerabilities. Proficient in designing and implementing comprehensive cloud security strategies, they craft security architectures that align with your business goals and compliance requirements.",
    },
    {
      id: 3,
      icon: twoStep,
      heading: "Cyber Security Engineer",
      productAmount: "£2,990 / MONTH",

      paragraph:
        "Protect your organisation’s systems, networks, data, and digital assets from cyber threats. Our security engineers excel in identifying vulnerabilities, devising strategies to mitigate risks, and responding to security incidents to enhance the organisation's overall security posture. They leverage digital forensics tools and methodologies and are well versed in developing security policies and procedures.",
    },
    {
      id: 4,
      icon: dataAdmin,
      heading: "Data Administrator",
      productAmount: "£1,499 / MONTH",

      paragraph:
        "Effectively manage your data infrastructure with our experts, who actively maintain the security, integrity, and performance of your company's databases, ensuring secure and optimal data storage. They bolster efficient operations and informed decision making, enabling businesses to achieve cost savings, scalability, and flexibility while ensuring compliance. Through the use of progressive and efficient DB management systems, we facilitate optimal outcomes for your business.",
    },
    {
      id: 5,
      icon: security,
      heading: "Cyber Security Analyst",
      productAmount: "£2,990 / MONTH",
      paragraph:
        "Our Cyber Security Analysts safeguard digital assets against evolving threats. They enhance security, ensure regulatory compliance, manage risks, and maintain trust and confidence. Leveraging a deep understanding of the cybersecurity landscape and strong problem solving abilities, they monitor and analyse security systems, scrutinise network traffic, identify anomalies, and promptly respond to potential security incidents.",
    },
    {
      id: 6,
      icon: passwordOne,
      heading: "Penetration Tester",
      productAmount: "£2,890 / MONTH",
      paragraph:
        "Enhance the security of your system, application, or network by employing our Penetration Tester. Protect your business critical data from hackers and proactively prevent security breaches and vulnerabilities. Customise testing styles to effortlessly meet your unique requirements. They excel in analysing complex systems, pinpointing weaknesses, and adeptly employing both manual testing techniques and automated tools.",
    },
  ];

  const expertAssistance = [
    {
      id: 1,
      paragraph1: "Thorough security assessments and code reviews.",
      paragraph2: "Vulnerability testing and penetration testing.",
      paragraph3: "Ongoing monitoring and support for application security.",
      paragraph4: "Data protection and encryption mechanisms.",
      paragraph5:
        "Implementation of secure coding practices and industry best practices.",
      paragraph6:
        "Design and implementation of robust security architectures for cloud environments.",
    },

    {
      id: 2,

      paragraph1: "Compliance assurance for industry specific standards.",
      paragraph2: "Auditing and reporting.",
      paragraph3: "Security infrastructure design and deployment.",
      paragraph4: "Security awareness training for employees.",
      paragraph5:
        "Incident response planning and disaster recovery strategies.",
      paragraph6:
        "Comprehensive security solutions tailored to your organisation's needs.",
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
    <div className="cyber-security-service marginButton">
      <ServiceTopDiv
        leftImage={leftImage}
        middleImage={middleImage}
        rightImage={rightImage}
        heading={"Data & Analytics"}
        paragraph={
          "Safeguard your digital assets with dedicated experts poised to proactively identify and respond to threats. Fortify your defense with layers of security measures integrated at every stage of your initiatives. From security analysts, cloud specialists, and pen testers who effectively liaise with your team to develop and implement comprehensive security strategies aligned with your organisation's goals."
        }
        button={"See Services"}
        softwareDevImage={softwareDevImage}
      />

      <ServiceSecondDiv
        heading={"Cyber Security Services"}
        arrays={items}
        button={"Learn more"}
      />

      <ServiceThirdDiv
        heading={"Our experts can assist you with"}
        arrays={expertAssistance}
      />

      <HowItWorks heading={"How To Initiate"} arrays={howToInitiate} />

      <FAQs />
    </div>
  );
};

export default CyberSecurity;
