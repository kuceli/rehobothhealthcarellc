import React, { useRef, forwardRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ContactImg from "../assets/contactImg.jpg";
import PhoneIcon from "../assets/phoneIcon.png";
import EmailIcon from "../assets/emailIcon.png";
import { MdErrorOutline } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Contact = forwardRef((props, ref) => {
  const form = useRef();
  const [modal, setModal] = useState({ isOpen: false, message: "", type: "" });

  useEffect(() => {
    if (modal.isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modal.isOpen]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_943b9ml", "template_ccc5izx", form.current, {
        publicKey: "YCSAUe8rrid0FVCps",
      })
      .then(
        () => {
          setModal({
            isOpen: true,
            message: "Your message has been sent successfully!",
            type: "success",
          });
          form.current.reset();
        },
        (error) => {
          setModal({
            isOpen: true,
            message: "Failed to send your message. Please try again.",
            type: "error",
          });
        }
      );
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  return (
    <div
      ref={ref}
      className="h-full sm:h-[calc(100vh-56px)] px-6 sm:px-10 md:px-12 lg:px-14 xl:px-36 py-6 md:py-10 items-center flex flex-col w-full text-dark-blue bg-dark-blue"
    >
      <div className="h-[10%] w-full md:w-[30%] flex flex-col items-center gap-1 md:gap-2 lg:gap-3 mb-8 ">
        <p className="uppercase font-semibold text-xl sm:text-2xl lg:text-3xl text-white">
          {" "}
          Contact Us
        </p>
        <div className="bg-green w-[10%] md:w-[35%] h-[3px]"></div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex sm:flex-row flex-col items-center max-sm:gap-5 h-full sm:h-[80%] justify-between w-full text-justify md:px-9 lg:px-24 xl:px-28"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-[90%] sm:h-full w-full sm:w-[50%] flex flex-col justify-center items-center gap-7 max-sm:rounded-lg sm:rounded-l-lg px-6 py-10 sm:py-0 sm:px-6 bg-white"
        >
          <div className="relative w-full h-11 flex flex-col justify-center items-center">
            <input
              type="text"
              name="user_name"
              placeholder="John Doe"
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-xs sm:text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-xs sm:text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-blue after:transition-transform after:duration-300 peer-placeholder-shown:text-[13px] sm:peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-dark-blue peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Full Name <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="relative h-11 w-full flex flex-col justify-center items-center">
            <input
              type="email"
              name="user_email"
              placeholder="johndoe@gmail.com"
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-xs sm:text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-xs sm:text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-blue after:transition-transform after:duration-300 peer-placeholder-shown:text-[13px] sm:peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-dark-blue peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email Address <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="relative h-36 w-full flex flex-col justify-center items-center">
            <textarea
              name="message"
              placeholder="Your message here..."
              maxLength={270}
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-xs sm:text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            ></textarea>
            <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-xs sm:text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-blue after:transition-transform after:duration-300 peer-placeholder-shown:text-[13px] sm:peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-dark-blue peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Message <span className="text-red-500">*</span>
            </label>
          </div>
          <button
            type="submit"
            className="relative inline-flex items-center px-12 py-3 overflow-hidden text-xs sm:text-sm font-semibold text-dark-blue border-2 border-dark-blue hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-dark-blue opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Send Message</span>
          </button>
        </form>

        <div className="h-[35px] sm:h-full w-full sm:w-[50%] text-white">
          <img
            src={ContactImg}
            className="h-[65%] w-full object-cover rounded-tr-lg sm:block hidden"
          />
          <div className="h-full sm:h-[35%] max-sm:w-full max-sm:justify-between flex flex-row sm:flex-col justify-center min-[450px]:px-4 sm:px-7 gap-4 ">
            <div className="flex gap-1 min-[450px]:gap-3 max-[450px]:items-center">
              <img
                src={PhoneIcon}
                className="w-5 max-[450px]:h-5 min-[450px]:w-8 sm:w-12"
              />
              <div className="flex flex-col justify-center">
                <p className="text-[#A4AEBE] text-[10px] min-[380px]:text-xs md:text-sm">
                  Phone Number
                </p>
                <p className="text-[10px] min-[380px]:text-xs sm:text-sm lg:text-base">
                  +1(240)-595-7030
                </p>
              </div>
            </div>
            <div className="flex gap-1 min-[450px]:gap-3 max-[450px]:items-center">
              <img
                src={EmailIcon}
                className="w-5 max-[450px]:h-5 min-[450px]:w-8 sm:w-12"
              />
              <div className="flex flex-col justify-center">
                <p className="text-[#A4AEBE] text-[10px] min-[380px]:text-xs md:text-sm">
                  Email
                </p>
                <p className=" text-[10px] min-[380px]:text-xs sm:text-sm lg:text-base">
                  rehobothhc@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {modal.isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div
            className={`bg-white py-6 px-6 sm:px-10 rounded-lg flex flex-col items-center text-xs sm:text-sm ${
              modal.type === "success" ? "text-green" : "text-red-600"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <MdErrorOutline
              size={160}
              className={`${modal.type === "success" ? "hidden" : "block"}`}
            />
            <IoMdCheckmarkCircleOutline
              size={160}
              className={`${modal.type === "success" ? "block" : "hidden"}`}
            />
            <p>{modal.message}</p>

            <button
              onClick={closeModal}
              class="mt-4 before:ease relative h-10 w-28 overflow-hidden bg-gray-300 transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40"
            >
              <span relative="relative z-10">Close</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

export default Contact;
