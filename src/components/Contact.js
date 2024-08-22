import React, { forwardRef } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import ContactImg from "../assets/contactImg.jpg";
import PhoneIcon from "../assets/phoneIcon.png";
import EmailIcon from "../assets/emailIcon.png";

const Contact = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-[45.2rem] px-36 py-10 items-center flex flex-col w-full text-dark-blue bg-[url('assets/contactBg.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="h-[10%] w-[20%] flex flex-col items-center gap-3 mb-14  ">
        <p className="uppercase font-semibold text-3xl text-white">
          Contact Us
        </p>
        <div className="bg-green w-[40%] h-[3px]"></div>
      </div>
      <div className="flex items-center h-[80%] justify-between w-full text-justify  px-24">
        <div className="h-full w-[50%] flex flex-col justify-center items-center gap-7 rounded-l-lg px-6 bg-white ">
          <Input placeholder={"John Doe"} props={"Full Name"} />
          <Input placeholder={"johndoe@gmail.com"} props={"Email Address"} />
          <TextArea placeholder={"Your message here..."} props={"Message"} />
          {/* <Button text="Send Message" /> */}
          <a
            href="#_"
            class="relative inline-flex items-center px-12 py-3 overflow-hidden text-sm font-semibold text-dark-blue border-2 border-dark-blue hover:text-white group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-dark-blue opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative">Send Message</span>
          </a>
        </div>
        <div className="h-full w-[50%] text-white">
          <img
            src={ContactImg}
            className="h-[65%] w-full object-cover rounded-tr-lg"
          />
          <div className="h-[35%] flex flex-col justify-center px-7 gap-4 ">
            <div className=" flex gap-3">
              <img src={PhoneIcon} className="w-12" />
              <div className="flex flex-col justify-center">
                <p className="text-[#A4AEBE] text-sm">Phone Number</p>
                <p>+1(240)-595-7030</p>
              </div>
            </div>
            <div className=" flex gap-3">
              {" "}
              <img src={EmailIcon} className="w-12" />{" "}
              <div className="flex flex-col justify-center ">
                <p className="text-[#A4AEBE] text-sm">Email</p>
                <p>rehobothhc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
