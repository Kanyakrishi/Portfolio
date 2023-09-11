// icons
import React, { useState } from "react";
import Avatar2 from "../../components/Avatar2";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";


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
        stage: "2011 - 2012",
      },
    ],
  },
  {
    title: "Nokia",
    info: [
      {
        title: "Senior Software Developer",
        stage: "2012 - 2023",
        tech: "Python, Java, Kubernetes, Docker ",
        duration: "Jul 2019 – Jul 2022",
        description: [
          "Spearheaded a team of 3 developers as the Technical Area Owner, overseeing a critical revenue-generating module.",
          "Elevated module sales by incorporating 5G Massive MIMO support for T-Mobile's Nokia and Ericsson vendors, resulting in a substantial increase in market share by 43%.",
          "Earned the 'Fearless' Badge and accolades for exemplary technical proficiency and outstanding leadership abilities.",
          "Conducted End-to-End (E2E) demonstrations for an audience of 30+ internal and external stakeholders.",
          " Investigated performance bottlenecks, devised optimal solutions for 35+ performance and functional bugs.",
          "Collaborated with the product architect to develop an innovative polygon creation algorithm, enhancing the detection of highly impacted network cells.",
          "Attained exclusive ownership of 2 pivotal components, introducing enhancements that significantly improved efficiency in terms of load, performance, and accuracy.",
          "Provided valuable technical guidance to partner teams.",
          "Pioneered a fully functional weather-based optimization module from scratch that provides better coverage to the are under the influence of bad weather as a part of 2-person innovation team.",
          "Revamped cloud architecture to enhance 5G network slicing capabilities.",
          "Led and contributed to more than 20 distinct program epics, mentoring 3 developers to foster their technical growth.",
          "Demonstrated exceptional leadership as Scrum Master for agile team of 4 developers , 3 technical leads over 6 months.",
        ],
      },
    ],
  },
  {
    title: "Nokia-Intern",
    info: [
      {
        title: "Software Enigneeing Intern",
        stage: "2011",
        description: [
          "Implemented a tool to automate an entire department’s manual work of scheduling module executions after every version release.",
          "Improved productivity by simplifying the process of triggering and analyzing performance run times of all Nokia’s EdenNet components.",
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
        stage: "2011",
        description: [
          "Streamlined and established a Telecalling - Data Software to upload data through excel sheets, update, validate and categorize the data, view interactive and responsive charts of records, and download progress reports.",
          "Restructured communication flow between the Data collection and Data Validation departments",
          "Reduced manual work of updating excel sheets by 50%.",
          "Easier to track the entire teams progress at a given time.",
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
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Avatar2 />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="h2">
            Work <span className="text-accent"> Experience</span>
          </h2>
        </div>
        {/* change the position  ( placement of the div) */}
        <div className="flex flex-col w-full max-w-[65%] h-[420px]">
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
          <div className="overflow-auto py-4 xl:py-4 w-[100%] xl:w-[80%] rounded-lg  flex flex-col gap-y-2 xl:gap-y-3 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              {
                /* Display the position, tech stack and description */
              }
              return (
                <div className="" key={itemIndex}>
                  <div
                    key={itemIndex}
                    className="text-accent text-lg font-light m-2 rounded-lg w-fit mb-2
                "
                  >
                    {item.title}
                  </div>
                  <div
                    key={itemIndex}
                    className=" rounded-lg w-fit flex space-x-4 font-light m-2"
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
                          className="text-sm font-light mb-4 list-disc list-outside leading-normal text-justify"
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
        </div>
      </div>
    </div>
  );
};

export default Work;
