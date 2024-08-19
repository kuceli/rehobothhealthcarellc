import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import About from "../components/About";
import Services from "../components/Services";
import Areas from "../components/Areas";
import Contact from "../components/Contact";
import Logo3 from "../assets/4.png";

const LandingPage = () => {
  const home = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const areas = useRef(null);
  const contact = useRef(null);
  const [top, setTop] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (elementRef, sectionName) => {
    setActiveSection(sectionName);
    window.scrollTo({
      top: elementRef.current.offsetTop - 56,
      behavior: "smooth",
    });
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
      { threshold: 0.5 } // Adjust the threshold value to fine-tune when a section is considered "in view"
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
    <div className="w-screen font-[montserrat] overflow-x-hidden">
      <div className="h-screen w-full">
        <div
          className={`h-[56px] fixed left-0 top-0 right-0 z-20 bg-white ${
            !top && `bg-white shadow`
          }`}
        >
          <div className="flex justify-between px-14 items-center py-2 text-sm font-semibold text-dark-blue">
            <img
              src={Logo3}
              className="h-11 cursor-pointer"
              onClick={() => scrollToSection(home, "home")}
            />

            <ul className="flex gap-9 cursor-pointer">
              <li
                onClick={() => scrollToSection(home, "home")}
                className="hover:text-light-blue"
              >
                <span
                  className={
                    activeSection === "home"
                      ? "text-light-blue"
                      : "text-dark-blue"
                  }
                >
                  {" "}
                  Home
                </span>

                <div
                  className={
                    activeSection === "home"
                      ? "w-[70%] h-[2px] bg-green m-auto"
                      : "hidden "
                  }
                ></div>
              </li>
              <li
                onClick={() => scrollToSection(about, "about")}
                className="hover:text-light-blue"
              >
                <span
                  className={
                    activeSection === "about"
                      ? "text-light-blue"
                      : "text-dark-blue"
                  }
                >
                  {" "}
                  About Us
                </span>

                <div
                  className={
                    activeSection === "about"
                      ? "w-[70%] h-[2px] bg-green m-auto"
                      : "hidden "
                  }
                ></div>
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
