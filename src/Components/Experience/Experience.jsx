import React from "react";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, 
  SiMysql, SiTailwindcss, SiBootstrap, SiGithub, SiMongodb, 
  SiSocketdotio, SiPostman, SiJsonwebtokens 
} from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { VscCode, VscVscode } from 'react-icons/vsc'; 
import mohjay from '../../assets/images/mohjay.png';
import edunet from '../../assets/images/edunet.jpeg';

const Experience = () => {
  return (
    <section 
      id="Experience" 
      className="relative min-h-screen bg-[#0a0a0a] text-white p-10 md:p-24 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* SECTION 1: PROFESSIONAL EXPERIENCE */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-light mb-12 tracking-tight">
            Professional <span className="text-blue-500 font-normal">Journey.</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            <ExperienceCard 
              logo={mohjay}
              role="Web Developer Intern"
              company="Mohjay Infotech"
              date="July 2025 - Sept 2025"
              points={[
                "Built real-world web projects using HTML, CSS, JavaScript, Bootstrap, and React",
                "Developed dynamic web pages and integrated APIs for seamless data flow",
                "Gained hands-on experience with Node.js for robust backend development",
                "Collaborated with the development team to enhance UX and performance"
              ]}
            />

            <ExperienceCard 
              logo={edunet}
              role="AI Intern"
              company="Edunet Foundation"
              date="Dec 2024 - Feb 2025"
              points={[
                "AI-focused internship under TechSaksham (Microsoft & SAP joint initiative)",
                "Developed a deep learning-based system for plant disease classification",
                "Successfully deployed the trained model as a user-friendly web application"
              ]}
            />
          </div>
        </div>

        {/* SECTION 2: TOOLS & TECHNOLOGIES */}
        <div>
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-gray-200">
              Tools & <span className="text-blue-500">Technologies</span>
            </h2>
            <div className="h-[1px] flex-grow bg-white/10 hidden md:block"></div>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
            <TechBadge icon={<SiHtml5 color="#E34F26" />} name="HTML5" />
            <TechBadge icon={<SiCss3 color="#1572B6" />} name="CSS3" />
            <TechBadge icon={<SiJavascript color="#F7DF1E" />} name="JavaScript" />
            <TechBadge icon={<SiReact color="#61DAFB" />} name="React" />
            <TechBadge icon={<SiTailwindcss color="#38B2AC" />} name="Tailwind" />
            <TechBadge icon={<SiBootstrap color="#7952B3" />} name="Bootstrap" />
            <TechBadge icon={<SiNodedotjs color="#3C873A" />} name="Node.js" />
            <TechBadge icon={<SiMongodb color="#47A248" />} name="MongoDB" />
            <TechBadge icon={<SiMysql color="#4479A1" />} name="MySQL" />
            <TechBadge icon={<SiSocketdotio color="#ffffff" />} name="Socket.io" />
            <TechBadge icon={<VscCode color="#3C873A" />} name="EJS" /> 
            <TechBadge icon={<SiPostman color="#FF6C37" />} name="Postman" />
            <TechBadge icon={<VscVscode color="#007ACC" />} name="VS Code" />
            <TechBadge icon={<TbApi color="#00BFFF" />} name="REST APIs" />
            <TechBadge icon={<SiJsonwebtokens color="#D63AFF" />} name="JWT" />
            <TechBadge icon={<FaGitAlt color="#F05032" />} name="Git" />
            <TechBadge icon={<SiGithub color="#ffffff" />} name="GitHub" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ logo, role, company, date, points }) => (
  <div className="group flex flex-col md:flex-row gap-8 p-8 md:p-10 rounded-2xl bg-[#111] border border-white/5 hover:border-blue-500/20 transition-all duration-500 shadow-xl">
    <div className="flex-shrink-0">
      <img 
        src={logo} 
        alt={company} 
        className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 border border-white/10 shadow-lg" 
      />
    </div>
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-4">
        <span>
          <h3 className="text-xl font-light text-white group-hover:text-blue-400 transition-colors tracking-tight">
            {role}
          </h3>
          <p className="text-blue-500/80 font-normal text-sm tracking-wide">
            {company}
          </p>
        </span>
        <span className="text-[10px] md:text-xs font-medium text-gray-500 bg-white/5 px-4 py-1.5 rounded-full w-fit uppercase tracking-[0.15em]">
          {date}
        </span>
      </div>
      <ul className="space-y-3">
        {points.map((point, i) => (
          <li key={i} className="text-gray-400 text-sm md:text-[15px] font-extralight flex items-start gap-3 leading-relaxed">
            <span className="mt-2.5 h-1 w-1 rounded-full bg-blue-500 flex-shrink-0"></span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const TechBadge = ({ icon, name }) => (
  <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-default group">
    <span className="text-xl group-hover:scale-110 transition-transform">
      {icon}
    </span>
    <span className="text-[11px] font-normal uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
      {name}
    </span>
  </div>
);

export default Experience;