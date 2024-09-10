import React, { forwardRef } from "react";

const Hero = forwardRef((props, ref) => {
  return (
    <div
      className="w-full h-[calc(100vh-56px)] grid bg-[url('assets/hero2.jpg')] bg-cover bg-center bg-no-repeat"
      ref={ref}
    >
      {/* Overlay */}
      <div className="col-start-1 row-start-1 bg-gray-800 bg-opacity-70 w-full h-full"></div>

      {/* Content */}
      <div className="w-[85%] sm:w-[70%] lg:w-[50%] h-full flex flex-col justify-center text-white gap-4 col-start-1 row-start-1 pl-8 sm:px-12 md:px-14">
        {/* Heading */}
        <p className="uppercase font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-snug sm:leading-tight lg:leading-10">
          We are here <br />
          <span className="font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
            for your <br /> health.
          </span>
        </p>

        {/* Subtext */}
        <p className=" md:w-[80%] lg:w-[70%] text-sm text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim nostrud eiusmod tempor incididunt ut labore et dolore magna.
        </p>

        {/* Button */}
        <div className="w-full flex items-center justify-start">
          <div className="">
            <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden p-[2.5px]">
              <div className="animate-rotate absolute inset-0 h-full w-full bg-[conic-gradient(#fff_20deg,transparent_120deg)]"></div>
              <a
                href="tel:2405957030"
                className="group relative z-50 block border-2 border-solid border-dark-blue bg-white px-5 xl:px-4 py-3 text-center text-xs sm:text-sm font-semibold text-dark-blue transition duration-200 hover:border-white hover:bg-dark-blue hover:text-white overflow-hidden"
              >
                <span className="relative z-10">Call Us Now</span>
                <span className="absolute inset-0 m-auto h-0 w-0 rounded-sm bg-dark-blue transition-all duration-300 ease-out opacity-80 group-hover:h-40 group-hover:w-40"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hero;
