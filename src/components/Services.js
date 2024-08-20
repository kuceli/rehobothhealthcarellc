import React, { forwardRef } from "react";
import Heading from "./Heading";
import { IoCheckmarkDone } from "react-icons/io5";

const Services = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-[45.2rem] py-10  items-center flex flex-col w-full text-dark-blue bg-alt-light-blue"
    >
      <Heading text="Our Services" />
      <div className="flex gap-7 w-full  px-32 justify-between h-[87%]">
        <div className="w-[50%] flex flex-col items-center">
          <div className="border border-solid border-red-500 w-[30%] h-[30%] rounded-full mb-6"></div>
          <p className="text-lg">
            Skilled <span className="font-semibold">Nursing Services</span>
          </p>
          <div className="text-sm flex flex-col gap-2">
            <p className="flex items-center gap-3">
              <IoCheckmarkDone className="text-green" /> Wound Care Management
            </p>
            <p className="flex items-center gap-3">
              <IoCheckmarkDone className="text-green" /> Wound Care Management
            </p>
            <p className="flex items-center gap-3">
              <IoCheckmarkDone className="text-green" /> Wound Care Management
            </p>
            <p className="flex items-center gap-3">
              <IoCheckmarkDone className="text-green" /> Wound Care Management
            </p>
            <p className="flex items-center gap-3">
              <IoCheckmarkDone className="text-green" /> Wound Care Management
            </p>
            <p className="flex items-center gap-3">
              <IoCheckmarkDone className="text-green" /> Wound Care Management
            </p>
            <p className="flex items-center gap-3">
              <IoCheckmarkDone className="text-green" /> Wound Care Management
            </p>
            <p className="flex items-center gap-3">
              <IoCheckmarkDone className="text-green" /> Wound Care Management
            </p>
            <p className="flex items-center gap-3">
              <IoCheckmarkDone className="text-green" /> Wound Care Management
            </p>
            <p className="flex items-center gap-3">
              <IoCheckmarkDone className="text-green" /> Wound Care Management
            </p>
          </div>
        </div>
        <div className="w-[50%] border border-solid border-green">right</div>
      </div>
    </div>
  );
});

export default Services;
