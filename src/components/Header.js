import React, { useRef } from "react";
import Logo3 from "../assets/4.png";

const Header = () => {
  const home = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const areas = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="flex justify-between px-14 items-center py-2 text-sm font-semibold text-dark-blue">
        <img src={Logo3} className="h-11 cursor-pointer" />

        <ul className="flex gap-9 cursor-pointer">
          <li onClick={() => scrollToSection(home)}>Home</li>
          <li onClick={() => scrollToSection(about)}>About Us</li>
          <li onClick={() => scrollToSection(services)}>Our Services</li>
          <li onClick={() => scrollToSection(areas)}>Areas We Serve</li>
          <li onClick={() => scrollToSection(contact)}>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
