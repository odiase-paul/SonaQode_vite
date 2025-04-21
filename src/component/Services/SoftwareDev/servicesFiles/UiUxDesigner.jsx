import React from "react";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";
import leftImage from "/src/assets/softwareDevelopment/figma.png";
import backendDevImage from "/src/assets/servicesImage/ui-ux-designer.webp";
const UiUxDesigner = () => {
  const entireSkillSet = [
    {
      heading: "Technical Skills",
      items: [
        {
          id: 1,
          listParagraph: "User Research:",
          listSpan:
            " Ability to demonstrate good techniques in conducting interviews, surveys, testing, and understanding user needs.",
        },
        {
          id: 2,
          listParagraph: "Information Architecture:",
          listSpan: " Organising information in a clear and intuitive way.",
        },
        {
          id: 3,
          listParagraph: "Wireframing and Prototyping:",
          listSpan: " Creating visual representations of the user interface.",
        },
        {
          id: 4,
          listParagraph: "Visual Design:",
          listSpan:
            " Creating high level, aesthetically pleasing, and user friendly designs.",
        },
        {
          id: 5,
          listParagraph: "Design Tools:",
          listSpan: " Proficient in Figma, Sketch, Adobe XD, and InVision.",
        },
        {
          id: 6,
          listParagraph: "Usability Testing:",
          listSpan:
            " Evaluating designs through user testing to identify areas for improvement to ensure optimal user experience.",
        },
      ],
    },
    {
      heading: "Experience",
      items: [
        {
          id: 1,
          listParagraph: "User research experience:",
          listSpan:
            " Ability to conduct and analyse user research to inform design decisions.",
        },
        {
          id: 2,
          listParagraph: "Prototyping and testing:",
          listSpan:
            " Creating interactive prototypes and gathering useful user feedback.",
        },
        {
          id: 3,
          listParagraph: "Collaboration with development teams:",
          listSpan:
            " Understanding technical constraints and working closely with developers.",
        },

        {
          id: 4,
          listParagraph: "Design trends:",
          listSpan:
            " Staying up to date with design trends and industry standards.",
        },
      ],
    },
  ];

  const entireDeliverableKey = [
    {
      heading: "User Research and Understanding",
      items: [
        {
          id: 1,
          listParagraph: "User Personas:",
          listSpan:
            " Creating detailed profiles of target users to inform design decisions.",
        },

        {
          id: 2,
          listParagraph: "User Journey Maps:",
          listSpan: " Visualising the steps a user takes to achieve a goal.",
        },
        {
          id: 3,
          listParagraph: " Competitive Analysis:",
          listSpan:
            " Identifying strengths and weaknesses of competitors' designs.",
        },
      ],
    },
    {
      heading: "Information Architecture and Interaction Design",
      items: [
        {
          id: 1,
          listParagraph: "Information Architecture:",
          listSpan: " Structuring content and features for easy navigation.",
        },

        {
          id: 2,
          listParagraph: "Wireframes:",
          listSpan: " Creating low fidelity blueprints of the user interface.",
        },
        {
          id: 3,
          listParagraph: "User Flows:",
          listSpan:
            " Mapping out the user's path through the product or service.",
        },
      ],
    },
    {
      heading: "Visual Design and Prototyping",
      items: [
        {
          id: 1,
          listParagraph: "Visual Design:",
          listSpan: " Creating the aesthetic look and feel of the product.",
        },

        {
          id: 2,

          listParagraph: "Mockups:",
          listSpan:
            " High fidelity visual representations of the user interface.",
        },
        {
          id: 3,

          listParagraph: "Interactive Prototypes:",
          listSpan:
            " Creating clickable prototypes to simulate the user experience.",
        },
      ],
    },
    {
      heading: "Design System and Documentation",
      items: [
        {
          id: 1,
          listParagraph: "Design System:",
          listSpan:
            " Developing a comprehensive style guide for consistent design elements.",
        },
      ],
    },
  ];
  return (
    <div className="marginButton">
      <ServicesFiles
        leftImage={leftImage}
        heading={"UI/UX Designer"}
        paragraph={
          "Our innovative designers excel at crafting visually appealing, highly functional, and user friendly designs for applications, software, and websites. With a keen eye for detail, they expertly bring your desired design concept to life, creating visuals that enhance audience engagement. By delivering outstanding products that align with your brand and target audience, we foster brand loyalty and give you a competitive advantage"
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Our experienced and reliable UI/UX designers enhance development teams by crafting intuitive user experiences. Committed to delivering high-value outcomes, they bring design concepts to life with the perfect blend of creative and technical skills, building sophisticated user interfaces with unmatched appeal. They go beyond treating visual aesthetics as a discrete function at the end of the design lifecycle, embedding user-centered design at every development phase. Our designers create top notch user flows and interactions for web and mobile applications, guiding decisions and optimising user journeys."
        }
        atrParagraphtwo={
          "By prioritising user satisfaction and optimising usability, they enhance user engagement with a keen eye for detail and a commitment to producing outstanding designs that meet the needs of your target audience. Engage dedicated UI/UX Designers who are highly experienced in tools like Figma, Sketch, Adobe XD, and more, with acclaimed expertise in integrating emerging tech trends such as augmented reality, virtual reality, and voice interfaces to achieve exceptional design quality. Choosing us means faster time to market, improved user satisfaction, and significant business impact."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£2,180 / Month + VAT"}
        partTimeTopParagraph={"Part Time"}
        partTimeTopSpan={"(20 hours/week)"}
        partTimeBottomParagraph={"£1,390 / Month + VAT"}
        // popNote
        ftPackageName={"UI/UX Designer (Full Time)"}
        ftItemTotalAmount={"2,616"}
        ftPackageAmount={"2,180"}
        ftVatAmount={"436"}
        ftTotalDue={"2,616"}
        ptPackageName={"UI/UX Designer (Part Time)"}
        ptItemTotalAmount={"1,668"}
        ptPackageAmount={"1,390"}
        ptVatAmount={"278"}
        ptTotalDue={"1,668"}
        // skill array
        entireSkillSet={entireSkillSet}
        // deliverableArrays
        entireDeliverableKey={entireDeliverableKey}
      />
    </div>
  );
};

export default UiUxDesigner;
