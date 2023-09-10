// icons
import React, { useState } from "react";
import Avatar2 from "../../components/Avatar2";
import Circles from "../../components/Circles";
import {
  FaPython, FaJava, FaVuejs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact
} from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";


import { SiNextdotjs, SiCplusplus, SiCsharp, SiAmazonaws, SiDjango, SiJenkins, SiDocker, SiGit, SiFlask, SiPostgresql, SiSpringboot, SiDotnet, SiMysql, SiMongodb} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming",
        icons: [
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />,

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />,
          <SiCplusplus />,

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />,
          <SiCsharp />,
        ],
      },
      {
        title: "Client Side",
        icons: [
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />,
          <FaCss3 />,
          <FaReact />,
          <SiNextdotjs />,

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />,

          <FaVuejs />,
          <SiDotnet />,
        ],
      },
      {
        title: "Server Side",
        icons: [
          <SiFlask />,
          <SiSpringboot />,
          <SiMysql />,
          <SiPostgresql />,
          <SiMongodb />,
        ],
      },
      {
        title: "Devops & Other Tools",
        icons: [
          <SiAmazonaws />,
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />,
          <SiGit />,
          <SiJenkins />,
        ],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "M.S in Computer Science,",
        tech: "University of Texas at Dallas",
        duration: "August 2022 - Present ",
        description: [
          "GPA: 3.61",
          "Relavent Courses: Adavance Algorithms, Object Oriented Design and Analysis, Database Management, Machine Learning, Web-Programming Language, Artifical Intelligence, AI and Security ",
          "Graduation: May 2024",
          "Others: Working as a CS Outreach Instructor, conducting workshops and sessions for high school students on Java, Scratch and P5JS.",
        ],
      },

      {
        title: "B.E in Computer Science, ",
        tech: "BMS Insititute of Technology and Management, India",
        duration: "June 2015 - July 2019 ",
        description: [
          "GPA: 8.84",
          "Relavent Courses: Data Sturctures and Organization, Design and Analysis of Algorithms, Software Engineering, Object-Oriented Concepts, Computer Networks, System Software and Compiler Design, Operating Systems, Machine Learning, Artificial Intelligence, Natural Language Processing, Digital Image Processing, Internet of Things, Big Data",
          "Graduation: Jul 2019",
          "Achievements: Computer Science Department Topper, Secured the first place for Project Based Learning by developing a tool that aids professors allot project guides, track progess and grade final year projects.",
        ],
      },
    ],
  },
  {
    title: "Certifications",
    info: [
      {
        title: "Certifications Completed",
        description: [
          "Cloud Architecture – Core Concepts",
          "NokiaEDU Learning, 2021",
          "Android App Development &Java Programming.",
        ],
      },
    ],
  },
];

const About = () => {
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
        <h2 className="h2">Designing a <span className="text-accent"> better</span> tomorrow</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptate earum laudantium architecto quas unde explicabo officiis voluptatum, amet sit!</p>
        </div>
        {/* change the position  ( placement of the div) */}
        <div className="flex flex-col w-full max-w-[65%] h-[580px]">
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
                  onClick={() => setIndex(itemIndex)}> {item.title} 
                </div>
              );
            })}
          </div>
          {/* End of aboutData items TITLE */}

          {/* Display aboutData items CONTENT */}
          <div className="overflow-auto bg-purple-100/5 rounded-lg p-4 flex flex-col gap-y-4 xl:py-6 xl:gap-y-4 items-start xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div className="">
                <div key={itemIndex} className="text-accent text-lg font-light bg-pink-300/10 p-2 rounded-lg w-fit mb-2">{item.title}</div>
                <div key={itemIndex}>{item.tech}</div>

                <br />

                 {/*Skills */}
                  <div className="flex text-4xl space-x-4">
                      <p>{item.icons}</p>
                  </div>

            {/* DESCRIPTION */}
                <div key={itemIndex}>
                  {item.description?.map((work) => {
                    return ( <ol className="text-sm font-light mb-4 list-disc list-outside leading-normal text-justify ml-[-1em]">
                        {work}</ol>);})}
                </div>

                
              </div>
            );})}
            </div>
            {/* End of Description */}



        </div>
      </div>
    </div>
  );
};

export default About;


// {/* SKILLS Icon */}
                  // <div key={itemIndex} className="flex">
                  //   {item.icons?.map((icon, itemIndex) => {
                  //     return (
                  //       <p className="text-2xl space-x-4 ml-2 text-white">
                  //         {icon}
                  //       </p>
                  //     );
                  //   })}
                  // </div>