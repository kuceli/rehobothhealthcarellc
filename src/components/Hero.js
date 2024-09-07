import React, { forwardRef } from "react";
const Hero = forwardRef((props, ref) => {
  return (
    <div
      className="w-full h-full grid bg-[url('assets/hero2.jpg')] bg-cover bg-center bg-no-repeat"
      ref={ref}
    >
      <div class="col-start-1 row-start-1 bg-gray-800 bg-opacity-70 w-full h-full"></div>
      <div className="w-[50%] h-full flex flex-col justify-center text-white  gap-7 col-start-1 row-start-1 pl-14 ">
        <div>
          <p className="uppercase font-semibold text-6xl leading-10  ">
            We are here <br />
            <span className="font-bold text-8xl">for your health.</span>
          </p>
          <p className="w-[70%] text-justify text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
            ad minim nostrud eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div className="w-[23.95%]">
          <div class="mx-auto flex items-center justify-center">
            <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden p-[2.5px]">
              <div className="animate-rotate absolute inset-0 h-full w-full bg-[conic-gradient(#fff_20deg,transparent_120deg)]"></div>
              <a
                href="tel:2405957030"
                className="group relative z-50 block border-2 border-solid border-dark-blue bg-white px-8 py-3 text-center text-sm text-dark-blue font-semibold transition duration-200 hover:border-white hover:bg-dark-blue hover:text-white overflow-hidden"
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
