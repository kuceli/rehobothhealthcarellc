import React, { forwardRef } from "react";
import Heading from "./Heading";
import ServiceImg1 from "../assets/services1.jpg";
import PhysicalExerciseImg from "../assets/physical-exercise.jpg";
import HouseKeepingImg from "../assets/housekeeping.jpg";
import LongTermCareImg from "../assets/longtermcare.jpg";

const Services = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-[calc(100vh-56px)] pt-6 md:pt-10 items-center flex flex-col w-full text-dark-blue bg-alt-light-blue"
    >
      <Heading text="Our Services" />
      <div className="flex flex-col lg:flex-row w-full px-14 items-center justify-between h-[87%] gap-6 border border-dark-blue">
        <div className="cursor-default w-full lg:w-[25%] h-[30%] lg:h-[85%] rounded-tr-[40px] rounded-bl-[40px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-7 flex flex-col items-center justify-center gap-4 transition-all delay-0 duration-300 ease-in-out [translate:0] hover:[translate:0_-10px]">
          <img
            src={PhysicalExerciseImg}
            className="lg:block hidden w-[60%] h-[40%] object-cover rounded-full"
          />
          <a
            href="#"
            class=" cursor-default absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-15 "
          ></a>
          <p className="text-lg font-semibold z-20 ">Long Term Care</p>
          <p className="text-sm text-center z-20 ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do Lorem
            ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor
            sit amet consectetur adipiscing elit sed do
          </p>
        </div>
        <div className=" cursor-default w-full lg:w-[25%] h-[30%] lg:h-[85%] rounded-tr-[40px] rounded-bl-[40px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-7 flex flex-col items-center justify-center gap-4 transition-all delay-0 duration-300 ease-in-out [translate:0] hover:[translate:0_-10px]">
          <img
            src={PhysicalExerciseImg}
            className="lg:block hidden w-[60%] h-[40%] object-cover rounded-full"
          />
          <a
            href="#"
            class=" cursor-default absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-15 "
          ></a>
          <p className="text-lg font-semibold z-20">Physical Exercise</p>
          <p className="text-sm text-center z-20">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do Lorem
            ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor
            sit amet consectetur adipiscing elit sed do
          </p>
        </div>
        <div className=" cursor-default w-full lg:w-[25%] h-[30%] lg:h-[85%] rounded-tr-[40px] rounded-bl-[40px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-7 flex flex-col items-center justify-center gap-4 transition-all delay-0 duration-300 ease-in-out [translate:0] hover:[translate:0_-10px]">
          <img
            src={HouseKeepingImg}
            className="lg:block hidden w-[60%] h-[40%] object-cover rounded-full"
          />
          <a
            href="#"
            class=" cursor-default absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-15 "
          ></a>
          <p className="text-lg font-semibold z-20 ">Housekeeping</p>
          <p className="text-sm text-center z-20">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do Lorem
            ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor
            sit amet consectetur adipiscing elit sed do
          </p>
        </div>
        <div className=" cursor-default w-full lg:w-[25%] h-[30%] lg:h-[85%] rounded-tr-[40px] rounded-bl-[40px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-7 flex flex-col items-center justify-center gap-4 transition-all delay-0 duration-300 ease-in-out [translate:0] hover:[translate:0_-10px]">
          <img
            src={ServiceImg1}
            className="lg:block hidden w-[60%] h-[40%] object-cover rounded-full"
          />
          <a
            href="#"
            class=" cursor-default absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-15 "
          ></a>
          <p className="text-lg font-semibold z-20">Medical Services</p>
          <p className="text-sm text-center z-20 ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do Lorem
            ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor
            sit amet consectetur adipiscing elit sed do
          </p>
        </div>
      </div>
      <p className="text-base lg:text-xl font-semibold text-center ">
        <span className="text-green">"</span>Lorem ipsum dolor sit amet
        consectetur adipiscing elit
        <span className="text-green">"</span>
      </p>
    </div>
  );
});

export default Services;
