import TestimonialSlider from "../../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <h2 className="text-5xl mb-8 xl:mb-0">
          What <span className="text-accent">others</span> have to say
        </h2>
        <div>
        <TestimonialSlider/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
