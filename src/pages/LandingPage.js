import React, { useEffect, useState, useRef } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import About from "../components/About";
import Services from "../components/Services";
import Areas from "../components/Areas";
import Contact from "../components/Contact";
import Logo3 from "../assets/4.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const LandingPage = () => {
  const home = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const areas = useRef(null);
  const contact = useRef(null);
  const [top, setTop] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (elementRef, sectionName) => {
    setActiveSection(sectionName);
    window.scrollTo({
      top: elementRef.current.offsetTop - 56,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  useEffect(() => {
    const sections = [
      { ref: home, name: "home" },
      { ref: about, name: "about" },
      { ref: services, name: "services" },
      { ref: areas, name: "areas" },
      { ref: contact, name: "contact" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.section);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
        section.ref.current.dataset.section = section.name;
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="h-full w-screen font-montserrat overflow-x-hidden">
      <div className="h-screen w-full">
        <div
          className={`h-[56px] fixed left-0 top-0 right-0 z-20 bg-white ${
            !top && `bg-white shadow`
          }`}
        >
          <div className="h-full flex justify-between items-center text-xs sm:text-sm font-semibold text-dark-blue hover:text-light-blue">
            {/* Logo */}
            <div className="h-9 sm:h-11 flex justify-start pl-6 sm:pl-10 md:pl-12 lg:pl-14 flex-grow ">
              <img
                src={Logo3}
                className="h-full object-contain cursor-pointer "
                onClick={() => scrollToSection(home, "home")}
              />
            </div>

            {/* Hamburger Icon for smaller screens */}
            <div className="lg:hidden flex justify-end pr-6 sm:pr-10 md:pr-12 lg:pr-14  flex-grow">
              {menuOpen ? (
                <AiOutlineClose
                  size={22}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer"
                />
              ) : (
                <GiHamburgerMenu
                  size={24}
                  onClick={() => setMenuOpen(true)}
                  className="cursor-pointer"
                />
              )}
            </div>

            {/* Full Menu for larger screens */}
            <ul className="hidden lg:flex gap-9 cursor-pointer flex-grow justify-end pr-6 sm:pr-10 md:pr-12 lg:pr-14 ">
              <li
                onClick={() => scrollToSection(home, "home")}
                className={activeSection === "home" ? "text-green" : ""}
              >
                Home
              </li>
              <li
                onClick={() => scrollToSection(about, "about")}
                className={activeSection === "about" ? "text-green" : ""}
              >
                About Us
              </li>

              <li
                onClick={() => scrollToSection(services, "services")}
                className={activeSection === "services" ? "text-green" : ""}
              >
                Our Services
              </li>
              <li
                onClick={() => scrollToSection(areas, "areas")}
                className={activeSection === "areas" ? "text-green" : ""}
              >
                Areas We Serve
              </li>
              <li
                onClick={() => scrollToSection(contact, "contact")}
                className={activeSection === "contact" ? "text-green" : ""}
              >
                Contact Us
              </li>
            </ul>
          </div>
          {/* Dropdown Menu for smaller screens */}
          {menuOpen && (
            <div
              className={`bg-white w-full flex flex-col items-center justify-center lg:hidden text-xs sm:text-sm font-semibold text-dark-blue hover:text-light-blue border-t overflow-hidden transition-all 
              ${
                menuOpen
                  ? "max-h-[13rem] animate-slideDown"
                  : "max-h-0 animate-slideUp"
              }`}
            >
              <ul className="bg-white w-full h-[10rem] sm:h-[13rem] flex flex-col items-center justify-center gap-3 sm:gap-4 lg:hidden text-xs sm:text-sm font-semibold text-dark-blue hover:text-light-blue border-t">
                <li
                  onClick={() => scrollToSection(home, "home")}
                  className={activeSection === "home" ? "text-green" : ""}
                >
                  Home
                </li>
                <li
                  onClick={() => scrollToSection(about, "about")}
                  className={activeSection === "about" ? "text-green" : ""}
                >
                  About Us
                </li>

                <li
                  onClick={() => scrollToSection(services, "services")}
                  className={activeSection === "services" ? "text-green" : ""}
                >
                  Our Services
                </li>
                <li
                  onClick={() => scrollToSection(areas, "areas")}
                  className={activeSection === "areas" ? "text-green" : ""}
                >
                  Areas We Serve
                </li>
                <li
                  onClick={() => scrollToSection(contact, "contact")}
                  className={activeSection === "contact" ? "text-green" : ""}
                >
                  Contact Us
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="h-full pt-14">
          {" "}
          <Hero ref={home} />
        </div>
      </div>
      <About ref={about} />
      <Services ref={services} />
      <Areas ref={areas} />
      <Contact ref={contact} />
      <Footer />
    </div>
  );
};

export default LandingPage;
