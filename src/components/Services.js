import React, { forwardRef } from "react";
import Heading from "./Heading";
import { servicesData } from "../data/servicesData";

const Services = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-full sm:h-[calc(100vh-56px)] pt-6 md:pt-10 items-center flex flex-col w-full text-dark-blue bg-alt-light-blue"
    >
      <Heading text="Our Services" />
      <div className="flex flex-col lg:flex-row w-full px-8 sm:px-12 md:px-14 items-center justify-between h-[87%] gap-4 xl:gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="cursor-default w-full lg:w-[25%] h-[40%] lg:h-[86%] xl:h-[83%] rounded-tr-[40px] rounded-bl-[40px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col items-center justify-center lg:justify-between transition-all delay-0 duration-300 ease-in-out [translate:0] hover:[translate:0_-10px]"
          >
            <div className="lg:block hidden w-full h-[40%] rounded-tr-[40px] relative">
              <img
                src={service.img}
                className="w-full h-full object-cover rounded-tr-[40px]"
                alt={`Service ${index}`}
              />
              <a
                href="#"
                className="absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-15"
              ></a>
            </div>
            <div className="h-[60%] p-3 flex flex-col items-center justify-center gap-2 xl:gap-4">
              <p className="text-base md:text-lg xl:text-xl font-semibold z-20">
                {service.heading}
              </p>
              <p className="text-xs md:text-sm xl:text-base text-center z-20">
                {service.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-center py-3">
        <span className="text-green">"</span>Lorem ipsum dolor sit amet
        consectetur adipiscing elit
        <span className="text-green">"</span>
      </p>
    </div>
  );
});

export default Services;
