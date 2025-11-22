import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = ({ onContactClick }) => {
  return (
    <footer className="bg-gray-900 text-white py-8" id="footer">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-6">
        {/* Social Icons Row */}
        <div className="flex space-x-4">
          <a
            href="itsanuragofficial7@gmail.com"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-500 transition-colors"
          >
            <MdOutlineEmail size={20} />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm md:text-lg">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline" onClick={(e) => {
              e.preventDefault();
              onContactClick();
            }}>Contact Us</a>
        </div>
        
        <div className="flex space-x-4 text-sm md:text-base">
          <div className="flex items-center gap-1">
            <MdOutlineEmail size={18} />
            <span>itsanuragofficial7@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <CiLinkedin size={18} />
            <a href="https://www.linkedin.com/in/anurag-thakur-0aaba52a0/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-1">
            <FaGithub size={18} />
            <a href="https://github.com/Anurag781" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs md:text-sm text-gray-400">
          © {new Date().getFullYear()} Anurag Thakur. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
