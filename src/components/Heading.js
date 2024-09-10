import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Heading = (prop) => {
  return (
    <>
      <div className="h-[10%] w-full md:w-[20%] flex flex-col items-center gap-1 md:gap-2 lg:gap-3 mb-8 ">
        <p className="uppercase font-semibold text-xl sm:text-2xl lg:text-3xl">
          {" "}
          {prop.text}
        </p>
        <div className="bg-green w-[10%] md:w-[40%] h-[3px]"></div>
      </div>
    </>
  );
};

export default Heading;
