import React from "react";
import AboutImg from "../../assets/images/bg_about.jpeg";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="about"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className=" rounded-md mr-20 md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Full-Stack Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  React.js · Node.js · Express.js · MongoDB — crafting dynamic, data-driven web experiences
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Machine Learning Enthusiast (Beginner)
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Pandas · NumPy · Jupyter Notebook — exploring AI-powered features and data-driven insights
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Programming Languages
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  C++ · Python · JavaScript — adaptable across diverse projects and environments
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                 Core Strengths
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 Data Structures & Algorithms · Problem Solving · Analytical Thinking — the bedrock for efficient, quality coding
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
