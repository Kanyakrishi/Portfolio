// testimonial data
import Image from "next/image";
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Vidya KC",
    position: "Senior Technical Writer at Nokia",
    message:
      "We meet many people every day, but only some leave marks. Kanya is one such person. She is one of the most dedicated professionals I’ve worked with and is willing to extend help whenever you need it. She was my R&D associate and was very organized in providing inputs for documentation. She has been applauded by her seniors multiple times for her excellent skills at presenting the feature after development. Kanya stands out for her proactiveness, positive attitude, commitment, and initiative. Her contribution is valuable and I highly recommend Kanya and would love to work with her again.",
  },
  {
    image: "/t-avt-2.png",
    name: "Vishnu Charan",
    position: "Software Engineer at Nokia",
    message:
      "It's very rarely in your life that you come across a person like Kanya who not only is technically sound and proficient but also has the goodwill to go out of her way to lend a helping hand to others. She is humble, hard-working, polite, talented, calm, composed and especially a very delightful person to work with. She has an elegant way of writing and organizing her code. She is also very good at team and time management. She's always ready to take up responsibilities and very well ensure that all the 'i's are dotted and the 't's crossed while fulfilling it on-time. I had the opportunity to work with her and would love to work with her again on any given day. I believe every team needs a 'Dependable and Reliable' team player like her.",
  },
  {
    image: "/t-avt-2.png",
    name: "Devdas Kamath",
    position: "Software Engineer at Nokia Solutions and Networks",
    message:
      "I had the opportunity of working with kanya for a short time. In that short period I got to know how hardworking and talented she was yet extremely humble and modest at the same time. she was always ready to help others by sharing her technical knowledge and experience. I was fascinated by her way of working on mulitple things with ease. All in all, I can say that she is the one every company or a team would look for.",
  },
  {
    image: "/t-avt-2.png",
    name: "Spoorthy KM",
    position: "Graduate Engineer at Nokia",
    message:
      "Kanya was a mentor for me during my initial days. As a result of the KT she gave me, I gained a great deal of confidence and motivation. She showed me the right path to pitch in. She was a talented person and a good asset to our team. No matter what challenges we faced, she solved them and made them successful. She managed everything smoothly. I found her to be very humble and readily available for help whenever I needed it.",
  },
];
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {testimonialData.map((testimony, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex  flex-col items-center md:flex-row gap-x-4 h-full md:px-0">
              {/* insert image, name and position */}
              <div className="w-full max-w-[200px] flex flex-col xl:justify-center items-center relative xl:mx-3">
                <div className="flex flex-col justify-center text-center">
                  <div>{testimony.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimony.position}
                  </div>
                </div>
              </div>

              <div>
                {/* Message */}
                <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 relative xl:before:h-[200px] xl:pl-20 mt-4 xl:h-[300px] h-[220px] p-5">
                  <div className="mb-2">
                    <FaQuoteLeft className="text-lg xl:text-2xl text-white/20 mx-auto md:mx-0 md:my-2" />
                  </div>
                  <div className="xl:text-sm leading-[1.5] text-justify overflow-auto ">
                    {testimony.message}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
