import React, { useRef, forwardRef } from "react";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import TextArea from "./TextArea";
import ContactImg from "../assets/contactImg.jpg";
import PhoneIcon from "../assets/phoneIcon.png";
import EmailIcon from "../assets/emailIcon.png";

const Contact = forwardRef((props, ref) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_943b9ml", "template_ccc5izx", form.current, {
        publicKey: "YCSAUe8rrid0FVCps",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      ref={ref}
      className="h-[45.2rem] px-36 py-10 items-center flex flex-col w-full text-dark-blue bg-dark-blue"
    >
      <div className="h-[10%] w-[20%] flex flex-col items-center gap-3 mb-14  ">
        <p className="uppercase font-semibold text-3xl text-white">
          Contact Us
        </p>
        <div className="bg-green w-[40%] h-[3px]"></div>
      </div>
      <div className="flex items-center h-[80%] justify-between w-full text-justify  px-24">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-full w-[50%] flex flex-col justify-center items-center gap-7 rounded-l-lg px-6 bg-white"
        >
          <div class="relative h-11 flex flex-col justify-center items-center">
            <input
              type="text"
              name="user_name"
              placeholder="John Doe"
              className=" peer h-full w-[400px] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[14px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-blue after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-dark-blue peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Full Name <span className="text-red-500">*</span>
            </label>
          </div>
          <div class="relative h-11 flex flex-col justify-center items-center">
            <input
              type="email"
              name="user_email"
              placeholder="johndoe@gmail.com"
              className=" peer h-full w-[400px] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[14px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-blue after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-dark-blue peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email Address <span className="text-red-500">*</span>
            </label>
          </div>
          <div class="relative h-36 flex flex-col justify-center items-center">
            <textarea
              name="message"
              placeholder="Your message here..."
              maxLength={270}
              className=" peer h-full w-[400px] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            ></textarea>
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[14px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-blue after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-dark-blue peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Message <span className="text-red-500">*</span>
            </label>
          </div>
          <button
            type="submit"
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
          </button>
        </form>

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
