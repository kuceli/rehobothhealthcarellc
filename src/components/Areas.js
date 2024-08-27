import React, { forwardRef } from "react";
import AreasImg from "../assets/areasImg.jpg";
import Areas2 from "../assets/areas2.jpg";
import { MdOutlineRadioButtonChecked } from "react-icons/md";

const Areas = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-[45.2rem] items-center justify-center flex w-full text-white bg-white "
    >
      <div className=" w-full h-[60%] flex absolute justify-between pl-36 pr-40 bg-[url('assets/areasBg.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-gray-800 bg-opacity-85 z-10"></div>
        <div className="z-10  w-[60%] ">
          <div className="w-full flex flex-col gap-3 mt-20 ">
            <p className="uppercase font-semibold text-3xl text-white">
              Areas We Serve
            </p>
            <div className="bg-green w-[15%] h-[3px]"></div>
          </div>

          <div className="w-[60%] pb-10 pt-5 h-[70%] ">
            <p className="text-sm pb-5">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            </p>

            <div className="flex gap-10">
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
        </div>
        <div className="z-10 w-[40%] relative top-[-20%]">
          <img src={AreasImg} className="h-[140%] w-[90%] object-cover" />
        </div>
      </div>
    </div>
  );
});

export default Areas;
