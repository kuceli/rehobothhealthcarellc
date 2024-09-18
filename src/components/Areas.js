import React, { forwardRef } from "react";
import AreasImg from "../assets/areasImg.jpg";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Areas = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-[calc(100vh-56px)] items-center justify-center flex w-full text-white bg-white "
    >
      <div className=" w-full h-[60%] flex absolute justify-between pl-6 sm:pl-10 md:pl-14 lg:pl-20 xl:pl-36 pr-8 sm:pr-12 md:pr-14 lg:pr-24 xl:pr-40 bg-[url('assets/areasBg.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-gray-800 bg-opacity-85 z-10"></div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="z-10 w-full min-[517px]:w-[60%] md:w-[80%] lg:w-[75%] xl:w-[60%] "
        >
          <div className="w-full flex flex-col gap-3 mt-20 ">
            <p className="uppercase font-semibold text-xl sm:text-2xl lg:text-3xl text-white">
              Areas We Serve
            </p>
            <div className="bg-green w-[15%] h-[3px]"></div>
          </div>

          <div className="w-[97%] md:w-[70%] pb-10 pt-5 h-[70%] ">
            <p className="text-xs md:text-sm xl:text-base pb-5">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            </p>

            <div className="flex gap-10 w-[100%] max-[517px]:justify-start max-[565px]:justify-between text-xs md:text-sm xl:text-base">
              <div className="flex flex-col gap-1">
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-white">Anne Arundel </span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-white">Baltimore</span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-white">Prince - Georges</span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />
                  <span className="text-white">Montgomery</span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                {" "}
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-white">Howard</span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-white">Harford</span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-white">Carroll</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="z-10 w-[50%] min-[565px]:w-50% xl:w-[40%] relative top-[-20%] min-[517px]:block hidden">
          <img
            src={AreasImg}
            className="h-[130%] min-[565px]:h-[140%] w-[90%] object-cover"
          />
        </div>
      </div>
    </div>
  );
});

export default Areas;
