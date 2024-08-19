import React, { forwardRef } from "react";
import HeroImg from "../assets/Hero-Img.png";
import Button from "./Button";
const HeroAlt = forwardRef((props, ref) => {
  return (
    <div
      className="w-full h-full flex items-center pl-14 bg-[#eef6fe]"
      ref={ref}
    >
      <div className="w-[50%] h-full flex flex-col justify-center leading-10 gap-7 ">
        <p className="uppercase font-semibold text-6xl text-dark-blue ">
          We are here <br />
          <span className="font-bold text-8xl">for your health.</span>
        </p>
        {/* <Button text="Call Us Now" /> */}
        <div className="w-[23%]">
          <div class="mx-auto flex items-center justify-center">
            <div class="relative z-10 flex w-full cursor-pointer items-center overflow-hidden p-[2.5px]">
              <div class="animate-rotate absolute inset-0 h-full w-full bg-[conic-gradient(#5E9426_20deg,transparent_120deg)]"></div>
              <a
                href="tel:2405957030"
                class="relative z-50 block border-2 border-solid border-dark-blue hover:border-white bg-white px-8 py-3 text-center text-sm text-dark-blue font-semibold transition duration-200 hover:bg-dark-blue hover:text-white"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <img src={HeroImg} className="w-[76%] rotate-[-45deg]" />
      </div>
    </div>
  );
});

export default HeroAlt;
