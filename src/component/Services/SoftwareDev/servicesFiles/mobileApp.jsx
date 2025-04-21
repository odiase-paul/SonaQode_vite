import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";
import leftImage from "/src/assets/softwareDevelopment/angle-brackets.png";
import backendDevImage from "/src/assets/servicesImage/mobile-app-developer.webp";
const MobileApp = () => {
  const entireSkillSet = [
    {
      heading: "Technical Skills",
      items: [
        {
          id: 1,
          listParagraph: "Programming languages:",
          listSpan:
            " Proficient in Node.js, Python with frameworks such as Django, Flask, Ruby on Rails, Java.",
        },
        {
          id: 2,
          listParagraph: "Platform-specific knowledge:",
          listSpan:
            " Deep understanding of iOS and Android ecosystems, including design guidelines, APIs, and development tools.",
        },
        {
          id: 3,
          listParagraph: "UI/UX design:",
          listSpan:
            " Ability to create visually appealing and user friendly interfaces. Knowledge of design principles and tools is beneficial.",
        },
        {
          id: 4,
          listParagraph: "Mobile development frameworks:",
          listSpan:
            " Proficient in using native development kits Xcode for iOS, Android Studio for Android and cross-platform frameworks.",
        },
        {
          id: 5,
          listParagraph: "API integration:",
          listSpan:
            " Skilled in integrating with backend services and third-party APIs.",
        },
        {
          id: 6,
          listParagraph: "Database management:",
          listSpan:
            " Good understanding of mobile friendly databases like SQLite and cloud based solutions.",
        },
        {
          id: 7,
          listParagraph: "Version control:",
          listSpan:
            " Proficient in Git and GitHub, managing code changes and collaboration.",
        },
        {
          id: 8,
          listParagraph: "Testing and debugging:",
          listSpan:
            " Ability to write comprehensive test cases and effectively troubleshoot issues.",
        },
        {
          id: 9,
          listParagraph: "Performance optimisation:",
          listSpan:
            " Knowledge of techniques to improve app speed, responsiveness, and battery life.",
        },
      ],
    },
    {
      heading: "Experience",
      items: [
        {
          id: 1,
          listParagraph: "Agile Development:",
          listSpan:
            " Experience with agile methodologies for project management.",
        },

        {
          id: 2,
          listParagraph: "Cloud Platforms:",
          listSpan:
            " Familiar with AWS, Azure, and Firebase for backend integration and deployment.",
        },
        {
          id: 3,
          listParagraph: "Analytics:",
          listSpan:
            " Understanding of user behavior and app performance metrics.",
        },

        {
          id: 1,
          listParagraph: "DevOps practices:",
          listSpan:
            " Understanding deployment, monitoring, and infrastructure management.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "Core Functionalities",
      items: [
        {
          id: 1,
          listParagraph: "App Architecture:",
          listSpan:
            " Designing the overall structure and framework of the app, including the user interface and user experience.",
        },

        {
          id: 2,
          listParagraph: "Core Features Development:",
          listSpan:
            " Building the primary functions and features as outlined in the app's requirements.",
        },
      ],
    },
    {
      heading: "Design and User Experience",
      items: [
        {
          id: 1,
          listParagraph: "User Interface Design:",
          listSpan:
            " Creating the visual elements and layout of the app's interface.",
        },
        {
          id: 2,
          listParagraph: "User Experience Design:",
          listSpan: " Ensuring the app is user friendly and intuitive.",
        },
      ],
    },
    {
      heading: "Technical Implementation",
      items: [
        {
          id: 1,
          listParagraph: "Code Development:",
          listSpan:
            " Writing clean, efficient, and maintainable code for the app's functionality.",
        },
        {
          id: 2,

          listParagraph: "API Integration:",
          listSpan:
            " Integrating with external APIs or services as required by the app's functionality.",
        },
        {
          id: 3,

          listParagraph: "Performance Optimisation:",
          listSpan:
            " Ensuring the app runs smoothly and efficiently on various devices.",
        },
      ],
    },
    {
      heading: "Testing and Quality Assurance",
      items: [
        {
          id: 1,
          listParagraph: "Unit Testing:",
          listSpan:
            " Creating and executing tests for individual code components.",
        },
        {
          id: 2,

          listParagraph: "App Testing:",
          listSpan:
            "Conducting thorough testing to identify and fix bugs and errors.",
        },
      ],
    },
    {
      heading: "Deployment and Maintenance",
      items: [
        {
          id: 1,
          listParagraph: "App Submission:",
          listSpan:
            " Preparing and submitting the app to app stores Apple App Store, Google Play Store.",
        },
      ],
    },
  ];
  return (
    <div className="marginButton">
      <ServicesFiles
        leftImage={leftImage}
        heading={"Mobile App Developer"}
        paragraph={
          "Engage skilled developers dedicated to crafting robust custom applications tailored to your specific and complex requirements. Our experienced app development team, adept in the latest technologies, excels in creating top notch mobile apps that captivate users and gather valuable insights. Ensure a strong mobile presence, driving sustained growth and success for your business."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Sonaqode's mobile app engineers leverage leading edge technologies to craft next gen apps. Committed to delivering high quality customer satisfaction, they bring your ideas to life with the best blend of user experiences to build sophisticated applications with matchless capabilities. They prioritise user feedback and optimise designs to enhance the user experience, applying a keen eye for detail and a commitment to producing outstanding apps that fulfil the needs of your target audience."
        }
        atrParagraphtwo={
          "Engage dedicated app developers highly experienced in technologies like Android, iOS, Xamarin, React Native, and many more, with acclaimed expertise in integrating emerging tech trends such as AI/ML, VR, IoT, and more to achieve top notch quality output. Smartly navigate the stiff competition of the market with value led and user focused mobile applications that give your business and brand a powerful boost. Our developers have created a wide range of scalable and secure mobile app solutions for both niche and global clientele."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£3,180 / Month + VAT"}
        partTimeTopParagraph={"Part Time"}
        partTimeTopSpan={"(20 hours/week)"}
        partTimeBottomParagraph={"£2,080 / Month + VAT"}
        // popNote
        ftPackageName={"Mobile App Developer (Full Time)"}
        ftItemTotalAmount={"3,816"}
        ftPackageAmount={"3,180"}
        ftVatAmount={"636"}
        ftTotalDue={"3,816"}
        ptPackageName={"Mobile App Developer (Part Time)"}
        ptItemTotalAmount={"2,496"}
        ptPackageAmount={"2,080"}
        ptVatAmount={"416"}
        ptTotalDue={"2,496"}
        // skill array
        entireSkillSet={entireSkillSet}
        // deliverableArrays
        entireDeliverableKey={entireDeliverableKey}
      />
    </div>
  );
};
export default MobileApp;
