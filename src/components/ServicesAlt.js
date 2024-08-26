import React, { forwardRef } from "react";
import Heading from "./Heading";
import ServiceImg1 from "../assets/services1.jpg";
import PhysicalExerciseImg from "../assets/physical-exercise.jpg";
import HouseKeepingImg from "../assets/housekeeping.jpg";
import ServiceImg2 from "../assets/services2.jpg";
import { MdOutlineRadioButtonChecked } from "react-icons/md";

const ServicesAlt = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-[45.2rem] py-10  items-center flex flex-col w-full text-dark-blue bg-alt-light-blue"
    >
      <Heading text="Our Services" />
      <div className="flex w-full px-14 py-10justify-between h-[87%] gap-6">
        <div className="w-[25%] h-[85%] rounded-tr-[40px] rounded-bl-[40px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-7 flex flex-col items-center justify-center gap-4">
          <img
            src={ServiceImg1}
            className="w-[60%] h-[40%] object-cover rounded-full"
          />
          <p className="text-lg font-semibold ">Long Term Care</p>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do Lorem
            ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor
            sit amet consectetur adipiscing elit sed do
          </p>
        </div>
        <div className="w-[25%] h-[85%] rounded-tr-[40px] rounded-bl-[40px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-7 flex flex-col items-center justify-center gap-4">
          <img
            src={PhysicalExerciseImg}
            className="w-[60%] h-[40%] object-cover rounded-full"
          />
          <p className="text-lg font-semibold ">Physical Exercise</p>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do Lorem
            ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor
            sit amet consectetur adipiscing elit sed do
          </p>
        </div>
        <div className="w-[25%] h-[85%] rounded-tr-[40px] rounded-bl-[40px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-7 flex flex-col items-center justify-center gap-4">
          <img
            src={HouseKeepingImg}
            className="w-[60%] h-[40%] object-cover rounded-full"
          />
          <p className="text-lg font-semibold ">Housekeeping</p>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do Lorem
            ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor
            sit amet consectetur adipiscing elit sed do
          </p>
        </div>
        <div className="w-[25%] h-[85%] rounded-tr-[40px] rounded-bl-[40px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-7 flex flex-col items-center justify-center gap-4">
          <img
            src={ServiceImg1}
            className="w-[60%] h-[40%] object-cover rounded-full"
          />
          <p className="text-lg font-semibold ">Medical Services</p>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do Lorem
            ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor
            sit amet consectetur adipiscing elit sed do
          </p>
        </div>
      </div>
      <p className="text-xl font-semibold text-center">
        <span className="text-green">"</span>Lorem ipsum dolor sit amet
        consectetur adipiscing elit
        <span className="text-green">"</span>
      </p>
    </div>
  );
});

export default ServicesAlt;
