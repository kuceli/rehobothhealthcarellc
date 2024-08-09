import React from "react";
import Logo3 from "../assets/4.png";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between px-12 items-center font-[montserrat] py-1.5 text-sm font-semibold text-dark-blue shadow">
        <img src={Logo3} className="h-11 cursor-pointer" />

        <ul className="flex gap-7 cursor-pointer">
          <li>Home</li>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Areas We Serve</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
