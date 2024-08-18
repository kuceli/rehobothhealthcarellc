import React, { forwardRef } from "react";
import AboutImg from "../assets/About-Img.jpg";

const About = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-[45.3rem] items-center justify-center flex w-full relative text-dark-blue bg-gradient-to-br from-dark-blue to-light-blue "
    >
      <div className="h-[70%] w-[27%] absolute left-[21.3rem] z-10 px-8  bg-[#eef6fe] flex flex-col justify-center">
        <p className="uppercase font-semibold text-xl mb-4">About Us</p>
        <p className="text-sm text-justify leading-5">
          Rehoboth Health Care LLC is a Maryland Provisional Licensed
          Residential Service Agency that provides skiled and unskiled in-home
          nursing services at afordable and competitive rates in Maryland and
          its metropolitan areas to seniors, disable individuals and the sick.
        </p>
      </div>

      <img src={AboutImg} className=" absolute right-[21.3rem] h-[85%] " />
    </div>
  );
});

export default About;
