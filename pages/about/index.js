// icons
import React, { useState } from "react";
import Avatar2 from "../../components/Avatar2";
import Circles from "../../components/Circles";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";


import { SiAmazonaws} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming",
        icons: [
          <Image alt="skills icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" width={50} height={50} key="skill1" />,
          <Image alt="skills icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" width={50} height={50} key="skill2" />,
          <Image alt="skills icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={50} height={50} key="skill3" />,
          <Image alt="skills icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" width={50} height={50} key="skill4" />,
          <Image alt="skills icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width={50} height={50} key="skill5" />
        ],
      },
      {
        title: "Client Side",
        icons: [
          <Image alt="skills icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width={50} height={50} key="skill6" />,
          <Image alt="skills icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" width={50} height={50} key="skill7" />,
          <Image alt="skills icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width={50} height={50}key="skill8" />,
          <Image alt="skills icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width={50} height={50}  key="skill9" />,
          <Image alt="skills icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" width={50} height={50} key="skill10" />,
          <Image alt="skills icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" width={50} height={50} key="skill11" />,
        ],
      },
      {
        title: "Server Side",
        icons: [
    <Image alt="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" width={50} height={50} key="skill12" />,
    <Image alt="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" width={50} height={50}  key="skill13" />,
    <Image alt="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-plain.svg" width={50} height={50}  key="skill14" />,
    <Image alt="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"  width={50} height={50} key="skill15" />,
    <Image alt="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" width={50} height={50} key="skill16" />,
    <Image alt="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" width={50} height={50} key="skill17" />,
        ],
      },
      {
        title: "Devops & Other Tools",
        icons: [
          <SiAmazonaws key="skill18" />,
          <Image alt="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width={50} height={50}  key="skill19" />,
          <Image alt="skills icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"  width={50} height={50}  key="skill21" />,
          <Image alt="skills icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"  width={50} height={50}  key="skill22"/>,
          <Image alt="skills icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg"  width={50} height={50}  key="skill22" />,
          
          ,
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
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 xl:items-center">


        <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl xl:h2">Designing a <span className="text-accent"> better</span> tomorrow</h2>
        </div>
        {/* change the position  ( placement of the div) */}
        <div className="flex flex-col w-full xl:max-w-[65%] h-[380px] overflow-y-auto">
          {/*The items within the aboutData variable will be displayed */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              {console.log("*******************", itemIndex)}
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
          <div className="overflow-auto bg-purple-100/5 py-4 xl:py-4 xl:px-4 w-[80%] xl:w-[80%] rounded-lg  flex flex-col gap-y-2 xl:gap-y-3 items-center xl:items-start">  
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex}>
                <div className="text-accent text-lg font-light bg-pink-300/10 p-2 rounded-lg w-fit mb-2 xl:text-lg ml-2 xl:ml-[-0.4em]">{item.title}</div>
                <div className="text-lg font-light pl-2 w-fit xl:text-sm ml-2 xl:ml-[-0.4em]">{item.tech}</div>
                {/*Skills */}
                <div className="flex gap-x-4 mb-4 items-start"> {item.icons}</div>

                {/* DESCRIPTION */}
                <div>
                  {item.description?.map((work, workIndex) => {
                    return (
                      <ol
                        key={workIndex}
                        className="text-sm font-light mb-4 list-disc list-outside leading-normal text-justify xl:ml-[-1em]"
                      >
                        {work}
                      </ol>
                    );
                  })}
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