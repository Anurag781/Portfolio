import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import Resume from "../../assets/images/Resume.pdf";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 flex items-center justify-between px-8 md:px-20 py-4 z-50 text-white transition-all duration-300 ${
        scrolled
          ? "bg-[#0F1123] bg-opacity-90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo Left */}
      <div className="text-2xl font-bold tracking-wider">
        Portfolio
      </div>

      {/* Nav Links Center */}
      <ul
        className={`
          ${menu ? "flex" : "hidden"}
          flex-col md:flex-row md:flex absolute md:static top-16 left-0 w-full md:w-auto bg-transparent text-center md:text-left font-semibold gap-8 py-4 md:py-0
        `}
      >
        <a href="#Skills">
          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
            Skills
          </li>
        </a>
        <a href="#Experience">
          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
            Projects
          </li>
        </a>
        <a href="#Contact">
          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
            Contact
          </li>
        </a>
         <a
          href={Resume}
          target="_blank"
          rel="noreferrer"
        >
          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
            Resume
          </li>
        </a>
      </ul>

      {/* Hire Me Button Right*/}
      <div className="hidden md:block">
        <a
          href="#Contact"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-full font-semibold transition duration-300"
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      {!menu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden cursor-pointer"
          onClick={() => setMenu(true)}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden cursor-pointer"
          onClick={() => setMenu(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
