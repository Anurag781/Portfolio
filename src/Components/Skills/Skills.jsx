import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { RiReactjsLine, RiNodejsLine, RiJavascriptLine, RiRobot2Line } from "react-icons/ri";
import { SiMongodb, SiExpress, SiPython, SiCplusplus, SiOpenai, SiTensorflow } from "react-icons/si";

const Skills = () => {
  return (
    <section 
      id="Skills" 
      className="relative min-h-screen flex items-center bg-[#0a0a0a] text-white p-10 md:p-24 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/5 blur-[150px] rounded-full"></div>
      
      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-light mb-4 tracking-tight text-white">
            Technical <span className="text-blue-500 font-normal">Stack.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed font-extralight">
            A specialized collection of tools and frameworks I use to build 
            intelligent, scalable, and high-performance digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <SkillCategory 
            title="Full-Stack Engineering"
            description="Developing end-to-end scalable web applications."
            icons={[<RiReactjsLine key="react" />, <RiNodejsLine key="node" />, <SiExpress key="express" />, <SiMongodb key="mongodb" />]}
            details="React.js · Node.js · Express.js · MongoDB — crafting dynamic, data-driven web experiences."
          />

          <SkillCategory 
            title="AI Model Integration"
            description="Implementing intelligent features into web ecosystems."
            icons={[<SiPython key="python" />, <SiOpenai key="openai" />, <RiRobot2Line key="robot" />, <SiTensorflow key="tensorflow" />]}
            details="Python · Model Deployment · API Integration — leveraging pre-trained models and LLMs to enhance project functionality."
          />

          <SkillCategory 
            title="Core Languages"
            description="Versatile coding across different environments."
            icons={[<SiCplusplus key="cpp" />, <SiPython key="python" />, <RiJavascriptLine key="javascript" />]}
            details="C++ · Python · JavaScript — adaptable across diverse projects and performance-critical systems."
          />

          <SkillCategory 
            title="Logic & Problem Solving"
            description="The architectural foundation of my code."
            icons={[<IoArrowForward key="arrow" />]}
            details="Data Structures & Algorithms · Analytical Thinking · System Design — ensuring efficient and clean code execution."
          />

        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, description, icons, details }) => (
  <div className="group relative p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-blue-500/30 transition-all duration-500 shadow-xl">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
    
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex gap-3 text-xl text-blue-400/80">
          {icons.map((icon, index) => (
            <span key={index} className="hover:scale-110 hover:text-blue-400 transition-all duration-300">
              {icon}
            </span>
          ))}
        </div>
      </div>

      <h3 className="text-xl font-light mb-1 group-hover:text-blue-400 transition-colors duration-300 tracking-wide">
        {title}
      </h3>
      
      <p className="text-gray-500 text-[10px] font-medium mb-4 uppercase tracking-[0.2em]">
        {description}
      </p>
      
      <div className="pt-4 border-t border-white/5">
        <p className="text-gray-400 leading-relaxed text-sm md:text-[15px] font-extralight italic group-hover:text-gray-300 transition-colors">
          {details}
        </p>
      </div>
    </div>
  </div>
);

export default Skills;