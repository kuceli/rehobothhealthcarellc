import React from "react";

const Heading = (prop) => {
  return (
    <div className="h-[10%] w-[20%] flex flex-col items-center gap-3 mb-14  ">
      <p className="uppercase font-semibold text-3xl"> {prop.text}</p>
      <div className="bg-green w-[40%] h-[3px]"></div>
    </div>
  );
};

export default Heading;
