import React, { forwardRef } from "react";
import Heading from "./Heading";
import ServiceImg1 from "../assets/services1.jpg";
import ServiceImg2 from "../assets/services2.jpg";
import { MdOutlineRadioButtonChecked } from "react-icons/md";

const Services = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-[45.2rem] py-10  items-center flex flex-col w-full text-dark-blue bg-alt-light-blue"
    >
      <Heading text="Our Services" />
      <div className="flex gap-7 w-full px-14 justify-between h-[87%]">
        <div className="w-[50%]  bg-white rounded-lg h-full flex flex-col justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <img
            src={ServiceImg1}
            className="w-full h-[64%] rounded-lg object-cover "
          />
          {/* <div className="w-full h-[60%] rounded-lg bg-dark-blue"></div> */}
          <div className="p-6 h-[36%]">
            <p className="font-semibold text-[17px] pb-3">
              Skilled Nursing Services
            </p>
            <div className="flex text-[13px] gap-3">
              <div className="flex flex-col gap-1">
                {" "}
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">Wound Care Management</span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">Post-Operation Care</span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">
                    Diabetic Management & Care
                  </span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">
                    Cardiac/Respiratory Care
                  </span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">Lifting & Transferring</span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                {" "}
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">
                    Medication Management & Administration
                  </span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">
                    Safety Measures & Universal Precautions
                  </span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">Infusion & Blood Draws</span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">Tube Feeding</span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">Live-In</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%]  bg-white rounded-lg h-full flex flex-col justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <img
            src={ServiceImg2}
            className="w-full h-[64%] rounded-lg object-cover "
          />
          {/* <div className="w-full h-[60%] rounded-lg bg-dark-blue"></div> */}
          <div className="p-6 h-[36%]">
            <p className="font-semibold text-[17px] pb-3">
              Unskilled Nursing Services
            </p>
            <div className="flex text-[13px] gap-4">
              <div className="flex flex-col gap-1">
                {" "}
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">
                    ADL's e.g., Bathing, Dressing, Feeding etc.
                  </span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">Respite Care</span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">Incontinent Care</span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">24 Hours Live-In</span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">
                    Transport & Accompany to Dr. Appointments
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                {" "}
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">
                    Companionship & Safety Supervision
                  </span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">Meal Preparation</span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">Light Housekeeping</span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">Errands & Shopping</span>
                </p>
                <p className="flex items-center gap-3 text-green">
                  <MdOutlineRadioButtonChecked />{" "}
                  <span className="text-dark-blue">Medication Reminders</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Services;
