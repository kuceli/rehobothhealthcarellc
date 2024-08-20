import React, { forwardRef } from "react";
import AreasImg from "../assets/areas.png";

const Areas = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-[45.2rem] items-center justify-center flex w-full text-white bg-white"
    >
      <div className="border border-solid border-red-500 w-full h-[60%] flex text-dark-blue absolute justify-between px-36">
        <div>
          <div className="w-[100%] flex flex-col items-center gap-3 mb-14 mt-10 border border-solid border-green">
            <p className="uppercase font-semibold text-3xl text-dark-blue">
              Areas We Serve
            </p>
            <div className="bg-green w-[40%] h-[3px]"></div>
          </div>
        </div>
        <div className="border border-solid border-green h-[114%] relative top-[-7%] w-[40%] rounded-lg">
          <img src={AreasImg} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
});

export default Areas;
