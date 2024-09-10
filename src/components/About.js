import React, { forwardRef } from "react";
import About1 from "../assets/about1.jpg";
import About2 from "../assets/about2.jpg";
import About3 from "../assets/about3.jpg";
import Satisfaction from "../assets/satisfaction.png";
import Nurse from "../assets/nurse.png";
import Cash from "../assets/cash.png";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

const About = forwardRef((props, ref) => {
  return (
    <>
      <div
        ref={ref}
        className="h-[calc(100vh-56px)] pt-6 md:pt-10 items-center justify-center flex flex-col w-full text-dark-blue bg-white "
      >
        <Heading text="About Us" />
        <div className="flex flex-col h-[87%] w-full justify-between">
          <div className="h-[65%] flex min-[540px]:flex-row flex-col-reverse gap-4 md:gap-6lg:gap-8 px-14 px-8 sm:px-12 md:px-14 lg:px-32 xl:px-56">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="h-full w-[40%] md:w-[50%] hidden min-[540px]:flex gap-4 "
            >
              <div className="hidden md:block w-[50%] h-[90%] flex flex-col items-end gap-4">
                <div className="h-[50%] w-full  ">
                  <img src={About1} className="h-full w-full object-cover" />
                </div>
                <div className="h-[46%] w-[90%] ">
                  <img src={About2} className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="hidden min-[540px]:block w-full md:w-[50%] ">
                <img src={About3} className="h-full w-full object-cover" />
              </div>
            </motion.div>

            <div className=" h-full w-full hidden min-[355px]:flex min-[540px]:hidden justify-between">
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="h-full w-[48%]"
              >
                {" "}
                <img src={About2} className="h-full w-full object-cover" />
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="h-full w-[48%]"
              >
                {" "}
                <img src={About1} className="h-full w-full object-cover" />
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="h-full w-full min-[540px]:w-[60%] md:w-[50%] h-full flex flex-col gap-2 md:gap-4 justify-center "
            >
              <p className=" font-semibold text-lg md:text-xl lg:text-2xl">
                Providing Health Care Services with a Difference in Maryland.
              </p>
              <div className="flex flex-col gap-2 text-xs md:text-sm text-justify">
                <p className=" ">
                  Rehoboth Health Care LLC is a Maryland Provisional Licensed
                  Residential Service Agency that provides skilled and unskilled
                  in-home nursing services at affordable and competitive rates
                  in Maryland and its metropolitan areas to seniors, disabled
                  individuals, and the sick. Nursing services at affordable and
                  competitive rates in Maryland and its metropolitan areas to
                  seniors, disabled individuals, and the sick. Competitive rates
                  in Maryland and its metropolitan areas to seniors, disabled
                  individuals, and the sick.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="lg:hidden h-[35%] bg-dark-blue text-white flex items-center justify-center mt-8 w-full px-14 lg:px-32 xl:px-56 relative ">
            <Slider {...carouselSettings} className="h-full w-full py-5 ">
              <div className="cursor-default w-full h-full flex gap-3 text-center  ">
                <img
                  src={Satisfaction}
                  className="w-[22%] h-[22%] sm:h-[13%] sm:w-[13%] m-auto"
                />
                <p className="font-semibold text-sm sm:text-base">
                  Satisfaction Guaranteed
                </p>
                <p className="text-xs sm:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
              <div className="cursor-default w-full h-full  flex gap-3 text-center ">
                <img
                  src={Nurse}
                  className="w-[22%] h-[22%] sm:h-[13%] sm:w-[13%] m-auto"
                />
                <p className="font-semibold text-sm sm:text-base">
                  Professional Nurses
                </p>
                <p className="text-xs sm:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
              <div className="cursor-default w-full h-full flex gap-3 text-center">
                <img
                  src={Cash}
                  className="w-[22%] h-[22%] sm:h-[13%] sm:w-[13%] m-auto"
                />
                <p className="font-semibold text-sm sm:text-base">
                  Affordable Rates
                </p>
                <p className="text-xs sm:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
            </Slider>
          </div>
          <div className=" hidden lg:flex h-[35%] bg-dark-blue text-white items-center justify-center mt-8 gap-12 w-full py-5 px-14 lg:px-32 xl:px-56">
            <div className="cursor-default w-[30%] h-full  flex flex-col items-center justify-center transform transition-all delay-0 duration-300 ease-in-out hover:scale-105">
              <img src={Satisfaction} className="h-[45%]" />
              <p className="font-semibold">Satisfaction Guaranteed</p>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
            <div className="cursor-default w-[30%] h-full  flex flex-col items-center justify-center transform transition-all delay-0 duration-300 ease-in-out hover:scale-105">
              <img src={Nurse} className="h-[45%]" />
              <p className="font-semibold">Professional Nurses</p>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
            <div className="cursor-default w-[30%] h-full  flex flex-col items-center justify-center transform transition-all delay-0 duration-300 ease-in-out hover:scale-105">
              <img src={Cash} className="h-[45%]" />
              <p className="font-semibold">Affordable Rates</p>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default About;
