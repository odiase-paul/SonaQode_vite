import React from "react";
import "./SoftwareDev.css";
import leftImage from "/src/assets/softwareDevelopment/curly-brackets.png";
import middleImage from "/src/assets/softwareDevelopment/js.png";
import rightImage from "/src/assets/softwareDevelopment/man-social-media.png";
import softwareDevImage from "/src/assets/softwareDevelopment/software-development.png";
import angleBracket from "/src/assets/softwareDevelopment/angle-brackets.png";
import vscode from "/src/assets/softwareDevelopment/vscode.png";
import js from "/src/assets/softwareDevelopment/js.png";
import codeFolder from "/src/assets/softwareDevelopment/code-folder.png";
import figma from "/src/assets/softwareDevelopment/figma.png";
import videoEditor from "/src/assets/softwareDevelopment/video-editor.png";
import qaTesting from "/src/assets/softwareDevelopment/qa-testing.png";
import itSupport from "/src/assets/softwareDevelopment/it-support.png";
import HowItWorks from "../../ReuseableComponent/HowItWorks";
import FAQs from "../../ReuseableComponent/FAQs";
import ServiceTopDiv from "../../ReuseableComponent/ServiceTopDiv";
import ServiceSecondDiv from "../../ReuseableComponent/ServiceSecondDiv";
import ServiceThirdDiv from "../../ReuseableComponent/ServiceThirdDiv";

const SoftwareDev = () => {
  const items = [
    {
      id: 1,
      icon: angleBracket,
      heading: "Mobile App Developer",
      productAmount: " £2,080 / MONTH",
      paragraph:
        "Engage skilled developers dedicated to crafting robust custom applications tailored to your specific and complex requirements. Our experienced app development team, adept in the latest technologies, excels in creating top notch mobile apps that captivate users and gather valuable insights. Ensure a strong mobile presence, driving sustained growth and success for your business.",
      buttonLink: "/mobileApp",
    },
    {
      id: 2,
      icon: vscode,
      heading: "Full Stack Developer",
      productAmount: " £2,145 / MONTH",

      paragraph:
        "Access skilled web developers who can construct high performance, modern web applications from scratch. Our full-stack developers excel in both Front-end and Back-end technologies, delivering fully customised web apps that meet your precise requirements. They ensure excellent performance and provide end to end solutions that are reliable and scalable.",
      buttonLink: "/fullStackDev",
    },
    {
      id: 3,
      icon: js,
      heading: "Frontend Developer",
      productAmount: " £1,780 / MONTH",
      paragraph:
        "Our front-end developers craft intuitive, efficient, and enjoyable user web and mobile applications by expertly wielding a diverse range of frameworks and tools, including JavaScript, CSS, Vue.js, and HTML. They seamlessly integrate design, technology, and usability principles to deliver customised solutions that enhance engagement and accessibility, perfectly aligning with your unique brand needs.",
      buttonLink: "/frontendDev",
    },
    {
      id: 4,
      icon: codeFolder,
      heading: "Backend Developer",
      productAmount: " £1,780 / MONTH",
      paragraph:
        "Access back-end developers prepared to integrate into your project, delivering robust architecture and enhanced performance. They construct secure, scalable, and durable server side solutions using cutting edge tools and technologies such as Java, Python, Node.js, Ruby, and more. Experts in SQL and NoSQL databases, they ensure consistent data flow, delivering impeccable back-end systems that operate flawlessly and fulfill every business requirement.",
      buttonLink: "/backendDev",
    },
    {
      id: 5,
      icon: figma,
      heading: "UI/UX Designer",
      productAmount: " £1,390 / MONTH",

      paragraph:
        "Our innovative designers excel at crafting visually appealing, highly functional, and user friendly designs for applications, software, and websites. With a keen eye for detail, they expertly bring your desired design concept to life, creating visuals that enhance audience engagement. By delivering outstanding products that align with your brand and target audience, we foster brand loyalty and give you a competitive advantage.",
      buttonLink: "/uiuxDesigner",
    },
    {
      id: 6,
      icon: videoEditor,
      heading: "Video Content Editor",
      productAmount: " £1,189 / MONTH",

      paragraph:
        "Talented video editors actively cultivate creative and collaborative partnerships to conceptualise captivating animations, motion graphics, and multimedia content that seamlessly align with the company's brand and objectives. They skillfully execute edits that are both current and captivating, drawing upon their versatile expertise in commercial, corporate, and documentary formats.",
      buttonLink: "/videoEditor",
    },
    {
      id: 7,
      icon: qaTesting,
      heading: "QA Tester",
      productAmount: " £1,690 / MONTH",

      paragraph:
        "QA engineers comprises seasoned experts who excel in developing streamlined testing and quality management procedures for your project, leveraging cutting edge technologies and adhering to industry leading testing standards. Collaborating with top notch QA and test automation engineers, going above and beyond to emphasise that quality assurance extends far beyond delivering software devoid of bugs.",
      buttonLink: "/qaTester",
    },
    {
      id: 8,
      icon: itSupport,
      heading: "IT Support Engineer",
      productAmount: " £549 / MONTH",

      paragraph:
        "Our IT Engineers provide comprehensive technical support, collaborating with cross functional teams to deploy, configure, and maintain IT infrastructure components in alignment with business needs. They utilise appropriate tools and techniques to ensure uptime, performance, and security compliance. They excel in problem solving and proactively identify and implement improvements to enhance overall performance.",
      buttonLink: "/itSupportEng",
    },
  ];
  const expertAssistance = [
    {
      id: 1,
      paragraph1: "System Analysis and Design",
      paragraph2: "Bug Fixing",
      paragraph3: "Automated, Manual and Integration testing",
      paragraph4: "Security Audits",
      paragraph5: "API Integration",
      paragraph6: "Software Integration",
      paragraph7: "E-commerce Solutions",
      paragraph8: "MVP Development",
    },

    {
      id: 2,

      paragraph1: "Database Management",
      paragraph2: "Software Updates and Patches",
      paragraph3: "Prototyping",
      paragraph4: "Saas Development",
      paragraph5: "Maintenance and Support",
      paragraph6: "Responsive Website Design",
      paragraph7: "B2B Portal Development",
      paragraph8: "A/B testing",
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
    <div className="software-development marginButton">
      {/* software development */}
      <ServiceTopDiv
        leftImage={leftImage}
        middleImage={middleImage}
        rightImage={rightImage}
        heading={"Software Development"}
        paragraph={
          " Connect with our skilled tech specialists, ready to expedite your objectives. Whether it's customising a running developing prototype applications, or implementing complex technology solutions, our expert team is equipped to deliver rapid and reliable results. Proficient in top programming languages, they adapt and collaborate with your business to address any complexity, meet your requirements, and bring your vision to life."
        }
        button={" See Services"}
        softwareDevImage={softwareDevImage}
      />
      {/* Software Development Services */}

      <ServiceSecondDiv
        heading={"Software Development Services"}
        arrays={items}
        button={"Learn more"}
      />

      {/* Our experts can assist you with */}

      <ServiceThirdDiv
        heading={"Our experts can assist you with"}
        arrays={expertAssistance}
      />

      {/* how to initiate */}

      <HowItWorks heading={"How To Initiate"} arrays={howToInitiate} />

      {/* FAQs */}

      <FAQs />
    </div>
  );
};

export default SoftwareDev;
