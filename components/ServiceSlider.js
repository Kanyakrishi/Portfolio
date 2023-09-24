// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowRight,
} from "react-icons/rx";

import Link from "next/link";
// data
const serviceData = [
  {
    icon: <RxRocket />,
    title: "CareerCompass using using React Native, Expo Router, MobX ",
    description: [
      "Developed a cross platform mobile application to simplify job searches.",
      "Integrated RapidAPI Job Search using axios to fetch job data and effectively manage React Native components.",
      "Converted Dribbble designs into pixel-perfect React Native code, maintaining designer's vision & user experience.",
    ],
    link: "https://github.com/Kanyakrishi/CareerCompass",
  },
  {
    icon: <RxCrop />,
    title: "Travel Diaries using GoogleMaps API, React ",
    description: [
      "Developed and launched Travel Diaries, an app to diligently record states visited.",
      "Modeled Apple Photos' innovative feature, displaying memories and 3 photos on zoom in & out of specific destinations.",
    ],
    link: "https://travel-diaries-kanya.netlify.app/",
  },
  {
    icon: <RxPencil2 />,
    title: "Hand Gesture Recognition using ML Algorithms",
    description: [
      "Published the paper in the International Journal of Recent Technology & Engineering (IJRTE).",
      "Utilized mathematical algorithms to recognize human gestures to control viewing of PDFs and PowerPoints.",
      "Detected objects using TensorFlow and OpenCV. Drew boundary boxes using the Haar Cascade algorithm. Enabled PDF zooming in, zooming out, and scrolling up and down using PyAutoGUI.",
    ],
    link: "https://github.com/iamdaaniyaal/HCI-FinalYearProject",
  },
  {
    icon: <RxDesktop />,
    title: "Student Project Assessment Review Committee Software",
    description: [
      "Focused to help professors track students’ advancements on projects, helped students mark and review their progress at the various phases of a project.",
      "Assisted in allocation of mentors to the student groups based on their field of interest. The final score report along with comments will be available in PDF format.",
    ],
  },
  {
    icon: <RxReader />,
    title: "Airbnb Clone",
    description: [
      "Modeled Airbnb website to learn more about React and TailwindCSS",
    ],
    link: "https://kanya-airbnb.netlify.app",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=" rounded-lg bg-purple-500/10 px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-purple-400/20 transition-all duration-300 h-[200px] xl:h-[270px] overflow-auto">
              <div className="text-accent mb-2">{item.icon}</div>
              <div className="mb-8">
                <div className="text-lg mb-2">{item.title}</div>
                <div className="max-w-[350px] leading-normal text-sm  font-thin">
                  {item.description.map((desc, descIndex) => {
                    return (
                      <div key={descIndex} className="mb-2">
                        {desc}
                      </div>
                    );
                  })}
                </div>
              </div>
              {item.link && (
                <div className="text-2xl">
                  <Link href={item.link} target="_blank">
                    <RxArrowRight className="hover:translate-x-2 hover:text-accent transition-all duration-300" />
                  </Link>
                </div>
              )}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
