import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container h-full mx-auto flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-5xl mb-8 xl:mb-0"
        >
          What <span className="text-accent">others</span> have to say
        </motion.h2>
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:max-w-[90%] m-auto"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
