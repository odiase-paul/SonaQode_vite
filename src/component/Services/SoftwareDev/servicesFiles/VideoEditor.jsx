import React from "react";
import ServicesFiles from "../../../ReuseableComponent/ServicesFiles";
import leftImage from "/src/assets/softwareDevelopment/video-editor.png";
import backendDevImage from "/src/assets/servicesImage/video-content-editor.webp";
const VideoEditor = () => {
  const entireSkillSet = [
    {
      heading: "Technical Skills",
      items: [
        {
          id: 1,
          listParagraph: "Video Editing Software:",
          listSpan:
            " Proficient in Adobe Premiere Pro, Final Cut Pro, and Avid Media Composer.",
        },
        {
          id: 2,
          listParagraph: "Audio Editing:",
          listSpan:
            " Skilled in Adobe Audition for sound design, mixing, and synchronising audio with visuals.",
        },

        {
          id: 3,
          listParagraph: "Colour Correction and Grading:",
          listSpan:
            " Ability to enhance visual quality and creating desired moods.",
        },
        {
          id: 4,
          listParagraph: "Motion Graphics and Visual Effects:",
          listSpan:
            " Adept at creating engaging visual elements to complement videos and animations, enhancing storytelling.",
        },
        {
          id: 5,
          listParagraph: "File Formats and Codecs:",
          listSpan:
            " Understanding different video formats and their characteristics.",
        },
      ],
    },
    {
      heading: "Experience",
      items: [
        {
          id: 1,
          listParagraph: "Video editing:",
          listSpan:
            " Versatile in a range of editing styles and skills, with the ability to edit raw footage to meet high-quality standards.",
        },

        {
          id: 2,
          listParagraph: "Collaboration with creative teams:",
          listSpan:
            " Understanding the creative process and working effectively with directors, producers, and marketing teams to achieve the required objectives.",
        },
        {
          id: 3,
          listParagraph: "Staying updated with industry trends:",
          listSpan: " Keeping up with new technologies and editing techniques.",
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
      heading: "Video Editing and Post-Production",
      items: [
        {
          id: 1,
          listParagraph: "Video Editing:",
          listSpan: " Assembling raw footage into a cohesive narrative.",
        },

        {
          id: 2,
          listParagraph: "Color Correction and Grading:",
          listSpan: " Enhancing the visual quality of the video.",
        },
        {
          id: 3,
          listParagraph: "Audio Editing and Mixing:",
          listSpan: " Adjusting sound levels, adding music, and sound effects.",
        },
        {
          id: 4,
          listParagraph: "Special Effects and Visual Effects:",
          listSpan:
            " Incorporating visual enhancements to enhance storytelling.",
        },
      ],
    },
    {
      heading: "Content Creation and Adaptation",
      items: [
        {
          id: 1,
          listParagraph: "Video Formatting:",
          listSpan:
            " Adjusting video for different platforms e.g., social media, websites.",
        },

        {
          id: 2,
          listParagraph: "Subtitles and Captions:",
          listSpan:
            " Adding subtitles or captions for accessibility and language adaptation.",
        },
        {
          id: 3,
          listParagraph: "Video Optimization:",
          listSpan:
            " Compressing video files for efficient delivery without compromising quality.",
        },
      ],
    },
    {
      heading: "Project Management and Collaboration",
      items: [
        {
          id: 1,
          listParagraph: "Asset Management:",
          listSpan: " Organising and managing video files and assets.",
        },
        {
          id: 2,

          listParagraph: "Collaboration:",
          listSpan:
            " Working effectively with other team members e.g., producers, directors.",
        },

        {
          id: 3,

          listParagraph: "Deliverables:",
          listSpan:
            " Providing final video files in required formats and specifications.",
        },
      ],
    },
  ];
  return (
    <div className="marginButton">
      <ServicesFiles
        leftImage={leftImage}
        heading={"Video Content Editor"}
        paragraph={
          "Talented video editors actively cultivate creative and collaborative partnerships to conceptualise captivating animations, motion graphics, and multimedia content that seamlessly align with the company's brand and objectives. They skillfully execute edits that are both current and captivating, drawing upon their versatile expertise in commercial, corporate, and documentary formats."
        }
        button={"Subscribe"}
        backendDevImage={backendDevImage}
        // about this role

        aboutThisRole={"About This Role"}
        atrParagraphOne={
          "Sonaqode's Video Content Editors leverage advanced tools to craft compelling visual narratives. Committed to delivering high-value audience engagement, they bring storyboards to life with the perfect blend of creative and technical skills, producing sophisticated video content with unmatched impact. They prioritise visual storytelling and optimise performance to enhance the audience experience, applying a keen eye for detail and a commitment to producing outstanding videos that meet the needs of your target audience. Boost brand awareness, speed to market, and audience retention with our visual centric approach."
        }
        atrParagraphtwo={
          "By reducing production costs, enhancing brand perception, and minimising message confusion, they deliver a competitive advantage instead of generic video content. Experienced in tools like Adobe Premiere Pro, Final Cut Pro, and After Effects, they are proficient in video concept development, scriptwriting, video editing, and motion graphics to make your brand visually compelling. Whether you aim to launch a new product quickly or optimise existing video campaigns, they use cutting edge tools and methodologies to provide efficient, cost effective video solutions. Choosing us means effective storytelling, quicker time to market, and enhanced audience engagement."
        }
        // subscribe
        fullTimeTopParagraph={"Full Time"}
        fullTimeTopSpan={"(40 hours/week)"}
        fullTimeBottomParagraph={"£1,799 / Month + VAT"}
        partTimeTopParagraph={"Part Time"}
        partTimeTopSpan={"(20 hours/week)"}
        partTimeBottomParagraph={"£1,189 / Month + VAT"}
        // popNote
        ftPackageName={"Video Content Editor (Full Time)"}
        ftItemTotalAmount={"2,158"}
        ftPackageAmount={"1,799"}
        ftVatAmount={"359"}
        ftTotalDue={"2,158"}
        ptPackageName={"Video Content Editor (Part Time)"}
        ptItemTotalAmount={"1,426"}
        ptPackageAmount={"1,189"}
        ptVatAmount={"237"}
        ptTotalDue={"1,426"}
        // skill array
        entireSkillSet={entireSkillSet}
        // deliverableArrays
        entireDeliverableKey={entireDeliverableKey}
      />
    </div>
  );
};

export default VideoEditor;
