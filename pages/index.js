
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="h2"
          >
            Hi, I&apos;m Kanya Krishi,
            <br /> <span className="text-accent">Software Developer</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
          </motion.p>
          {/* btn */}
          <div className="flex justify-center relative xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge">
          {" "}
        </div>
        <div></div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          exit="hidden"
          animate="show"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[407px] max-h-[650px] absolute -bottom-32 lg:bottom-0 lg:right-[15%] "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
