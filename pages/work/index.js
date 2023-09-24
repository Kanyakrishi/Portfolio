// icons
import React, { useState } from "react";
import Avatar2 from "../../components/Avatar2";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Bulb from "../../components/Bulb";


//  data
const aboutData = [
  {
    title: "Nasdaq",
    info: [
      {
        title: "Software Engineering Intern",
        tech: "VueJS, C#, PostgreSQL",
        duration: " Jun 2023 – Aug 2023  ",
        description: [
          "Engineered the creation of a Peer Universe Tool within the eVestment platform, enabling seamless grouping of 100+ firms for performance comparison.",
          "Empowered investors to benchmark peers and competitors efficiently, enhancing investment intelligence by 30%.",
          "Developed robust backend system with C# and PostgreSQL scripts for optimal data management and performance.",
          "Received recognition for 'Going the Extra Mile'.",
          "Designed a UI Dashboard using Figma to resolve a business issue exisitng within the organiztion as part of the Summer Pitch Competition.",
        ],
        link: "https://www.linkedin.com/pulse/nasdaq-internship-kanya-krishi/?trackingId=eG%2F3DbzUQuuJZfAuTBOVHQ%3D%3D",
      },
    ],
  },
  {
    title: "Nokia",
    info: [
      {
        title: "Senior Software Developer",
        tech: "Python, Java, Kubernetes, Docker ",
        duration: "Jul 2019 – Jul 2022",
        description: [
          "Integrated 5G Massive MIMO support for T-Mobile's Nokia & Ericsson vendors thus elevating 5G module sales by 40%.",
          "Developed and maintained 2 pivotal components, introducing enhancements that significantly improved efficiency in terms of load, performance, and accuracy. Provided valuable technical support to partner teams.",
          " Designed and executed an advanced polygon creation algorithm in collaboration with the product architect, leveraging Python to enhance detection of high-impact network cells in the backend.",
          "Pioneered a fully functional weather-based optimization module from scratch that provides better coverage to the affected area, as a part of 2-person innovation team.",
          "Expertise in writing technical documentation and drafting technical specification for implemented features in 5G / 4G.",
          "Spearheaded a team of 3 developers as the Technical Area Owner, overseeing a critical revenue-generating module.",
          "Revamped cloud architecture to enhance 5G network slicing capabilities using Java, Docker, Kubernetes.",
          "Participated in 20 + program epics, provided technical guidance for 3 developers, demonstrated exceptional leadership as scrum master for an agile team and technical proficiency which led to achievement of the ‘Fearless Badge’ ",
        ],
      },
    ],
  },
  {
    title: "Nokia-Intern",
    info: [
      {
        title: "Software Enigneeing Intern",
        description: [
          "Built full-stack web app with Django, Flask & MongoDB to automate the triggering and analysis of module performance.",
          "Incorporated continuous integration of front-end & back-end components, along with code review, debugging testing & validation, in a collaborative cross-functional setting and conducted end-to-end (E2E) demos of features to stakeholders.",
        ],
        tech: "Python, Django, Flask, MongoDB, HTML, CSS, Bootstrap, JavaScript",
      },
    ],
  },
  {
    title: "PDA Trade Fairs",
    info: [
      {
        title: "Student-Intern",
        description: [
          "Streamlined a scalable Telecalling Data Software to validate, categorize & update data using SQL, view interactive & responsive charts & download progress reports.",
          "Restructured communication flow and reduced manual work by 50%.",
        ],
        tech: "PHP, HTML, CSS, Bootstrap, JavaScript, DataAnalysis",
      },
    ],
  },
];

const Work = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <motion.div
        className="hidden xl:flex absolute bottom-0 -left[370px]"
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Bulb />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex flex-col justify-center">
          <motion.h2
            className="h2"
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Work <span className="text-accent"> Experience</span>
          </motion.h2>
        </div>
        {/* change the position  ( placement of the div) */}
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full max-w-[85%] h-[420px]"
        >
          {/*The items within the aboutData variable will be displayed */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } capitalize cursor-pointer relative xl:text-lg after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          {/* End of aboutData items TITLE */}

          {/* Display aboutData items CONTENT */}
          <div className="overflow-auto py-4 xl:py-4 w-[100%] xl:w-[70%] rounded-lg  flex flex-col gap-y-2 xl:gap-y-3 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              {
                /* Display the position, tech stack and description */
              }
              return (
                <div className="" key={itemIndex}>
                  <div
                    key={itemIndex}
                    className="text-accent text-lg font-light m-2 rounded-lg mb-2
                "
                  >
                    {item.title}
                  </div>
                  <div
                    key={itemIndex}
                    className=" rounded-lg flex space-x-4 font-light m-2"
                  >
                    Tech Stack - {item.tech}
                    <div key={itemIndex} className="flex">
                      {item.icons?.map((icon, itemIndex) => {
                        return (
                          <p
                            key={itemIndex}
                            className="text-2xl space-x-4 ml-2 text-white"
                          >
                            {icon}
                          </p>
                        );
                      })}
                    </div>
                  </div>

                  <br />
                  <div key={itemIndex}>
                    {item.description?.map((work) => {
                      return (
                        <ol
                          key={itemIndex}
                          className="text-sm font-light mb-4 list-disc list-outside leading-normal text-justify pl-0"
                        >
                          {work}
                        </ol>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
