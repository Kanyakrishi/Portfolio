import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import ServiceSlider from "../../components/ServiceSlider";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Projects = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My <span className="text-accent">Projects</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Here are a couple of projects that I have worked on. Click on the arrow button and head to a live demo of the project or to the github repository.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="hidden xl:flex absolute bottom-0 -left[370px]"
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Bulb />
      </motion.div>
    </div>
  );
};

export default Projects;
