import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Link from "next/link";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container h-full mx-auto flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 xl:mt-8 xl:pt-8"
        >
          What <span className="text-accent">others</span> have to say
        </motion.h2>
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-4"
        >
          These are the LinkedIn recommendations that I have recieved so far.
          Head to my 
          <Link href={"https://www.linkedin.com/in/kanya-krishi14/"} target="_blank" className="text-accent">
            &nbsp; LinkedIn &nbsp; 
          </Link>
          page for more details.
        </motion.p>
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
