import React, { forwardRef } from "react";
import AboutImg from "../assets/about.jpg";
import Heading from "./Heading";

const About = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-[45.3rem] py-14  items-center justify-center flex flex-col w-full text-dark-blue bg-white  "
    >
      <Heading text="About Us" />
      <div className="h-full items-center justify-center flex w-full relative ">
        <div className="h-[85%] w-[25%] absolute left-[24rem] font-medium text-sm text-justify leading-5 z-10 px-8  bg-alt-light-blue flex flex-col justify-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
          <p className=" mb-2">
            Rehoboth Health Care LLC is a Maryland Provisional Licensed
            Residential Service Agency that provides skiled and unskiled in-home
            nursing services at afordable and competitive rates in Maryland and
            its metropolitan areas to seniors, disable individuals and the sick.
            nursing services at afordable and competitive rates in Maryland and
            its metropolitan areas to seniors, disable individuals and the sick.
          </p>
          <p className=" ">
            Rehoboth Health Care LLC is a Maryland Provisional Licensed
            Residential Service Agency that provides skiled and unskiled in-home
            nursing services at afordable and competitive rates in Maryland and
            its metropolitan areas to seniors, disable individuals and the sick.
            nursing services at afordable and competitive rates in Maryland and
          </p>
        </div>

        <img src={AboutImg} className=" absolute right-[24rem] h-full" />
      </div>
    </div>
  );
});

export default About;
