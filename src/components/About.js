import React, { forwardRef } from "react";
import About1 from "../assets/about1.jpg";
import About2 from "../assets/about2.jpg";
import About3 from "../assets/about3.jpg";
import Heading from "./Heading";

const About = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-[45.3rem] pt-14  items-center justify-center flex flex-col w-full text-dark-blue bg-white  "
    >
      <Heading text="About Us" />
      <div className="flex flex-col h-full w-full">
        <div className="h-[70%] flex  gap-8 px-56">
          <div className=" h-full w-[50%] flex gap-4 ">
            <div className="w-[50%] h-[90%] flex flex-col items-end gap-4">
              <div className="h-[50%] w-full  ">
                <img src={About1} className="h-full w-full object-cover" />
              </div>
              <div className="h-[46%] w-[90%] ">
                <img src={About2} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="w-[50%] ">
              <img src={About3} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className=" h-full w-[50%] h-full flex flex-col gap-4  justify-center ">
            <p className=" font-semibold text-2xl">
              Providing Health Care Services with a Difference in Maryland.
            </p>
            <div className="flex flex-col gap-2 text-sm text-justify">
              <p className=" ">
                Rehoboth Health Care LLC is a Maryland Provisional Licensed
                Residential Service Agency that provides skilled and unskilled
                in-home nursing services at afordable and competitive rates in
                Maryland and its metropolitan areas to seniors, disable
                individuals and the sick. nursing services at afordable and
                competitive rates in Maryland and its metropolitan areas to
                seniors, disable individuals and the sick. competitive rates in
                Maryland and its metropolitan areas to seniors, disable
                individuals and the sick.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[25%] bg-dark-blue text-white flex items-center justify-center mt-7 gap-7 w-full py-3 px-56">
          <div className="w-[30%] h-full border border-solid border-white">
            left
          </div>
          <div className="w-[30%]  h-full  border border-solid border-white">
            middle
          </div>
          <div className="w-[30%]  h-full  border border-solid border-white">
            right
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
