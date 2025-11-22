import React from "react";
import Anurag from "../../assets/images/Anurag.JPG";
import TextChange from "../TextChange";

const Home = ({ onContactClick }) => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20" id="home">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          Web Developer | React.js & Node.js | Tech Enthusiast | Building Modern Web Experiences
        </p>
          <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl sticky bg-[#465697]">
          <a href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
            }}>
            Hire Me
          </a>
        </button>
      </div>
      <div>
        <img className="w-80 h-80 rounded-full" src={Anurag} alt="Profile_Photo" />
      </div>
    </div>
  );
};

export default Home;
