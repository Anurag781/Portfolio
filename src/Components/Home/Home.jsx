import React from "react";
import Anurag from "../../assets/images/Anurag.JPG";
import TextChange from "../TextChange";

const Home = ({ onContactClick }) => {
  return (
    <div
      className="relative text-white min-h-screen flex flex-col md:flex-row justify-between items-center p-10 md:p-24 overflow-hidden"
      id="Home"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-indigo-600/10 rounded-full blur-[120px] -z-10" />

      {/* Left Section */}
      <div className="md:w-3/5 space-y-4 z-10 flex flex-col justify-center">

        {/* TOP BADGE */}
        <div className="inline-flex w-fit flex-shrink-0 whitespace-nowrap items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/40 text-blue-200 text-xs md:text-sm font-medium backdrop-blur-md shadow-inner">
          <span className="text-blue-400 animate-pulse">⚡</span>
          <span>Available for new opportunities | Fullstack Developer</span>
        </div>

        {/* MAIN HEADING */}
        <div className="min-h-[80px] md:min-h-[120px] flex items-center">
          <TextChange />
        </div>

        {/* DESCRIPTION */}
        <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-lg">
          I build modern, scalable web applications with React, JavaScript, and cutting-edge technologies.
          I transform ideas into exceptional digital experiences.
        </p>

        {/* STATS*/}
        <div className="flex flex-row items-center gap-8 md:gap-12 pt-4">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-white">1.5<span className="text-blue-500">+</span></h2>
            <p className="text-[11px] uppercase tracking-widest text-slate-500 font-medium">Years Experience</p>
          </div>

          <div className="h-10 w-[1px] bg-slate-800"></div> {/* Vertical Divider */}

          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-white">5<span className="text-blue-500">+</span></h2>
            <p className="text-[11px] uppercase tracking-widest text-slate-500 font-medium">Projects</p>
          </div>

          <div className="h-10 w-[1px] bg-slate-800"></div> {/* Vertical Divider */}

          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-white">15<span className="text-blue-500">+</span></h2>
            <p className="text-[11px] uppercase tracking-widest text-slate-500 font-medium">Tech Stack</p>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="pt-6">
          <button
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
            }}
            className="px-10 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-blue-50 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95"
          >
            <a href="#contact" onClick={(e) => e.preventDefault()}>Get in Touch</a>
          </button>
        </div>
      </div>

      {/* RIGHT SECTION - Image stays sticky here */}
      <div className="mt-20 md:mt-0 flex-shrink-0 relative">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
          {/* Subtle Outer Ring */}
          <div className="absolute inset-0 rounded-full border border-blue-500/10 scale-110"></div>
          <img
            className="w-full h-full rounded-full object-cover shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            src={Anurag}
            alt="Anurag Thakur"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;