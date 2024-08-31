import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Heading = (prop) => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="h-[10%] w-[20%] flex flex-col items-center gap-3 mb-8  "
      >
        <p className="uppercase font-semibold text-3xl"> {prop.text}</p>
        <div className="bg-green w-[40%] h-[3px]"></div>
      </motion.div>
    </>
  );
};

export default Heading;
