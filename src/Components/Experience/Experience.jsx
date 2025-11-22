import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiMysql, SiTailwindcss, SiBootstrap, SiGithub } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { SiMongodb } from "react-icons/si";
import mohjay from '../../assets/images/mohjay.png';
import edunet from '../../assets/images/edunet.jpeg';

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img src={mohjay} alt="Mohjay logo" className="w-16 h-16 rounded-full" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Web Developer, Mohjay Infotech</h2>
              <p className="text-sm leading-tight font-thin">
                July 2025 - September 2025
              </p>
              <ul className="text-sm p-2">
                <li>- Built real-world web projects using HTML, CSS, JavaScript, Bootstrap, and React</li>
                <li>- Developed dynamic web pages and integrated APIs. </li>
                <li>- Gained hands-on experience with Node.js for backend development</li>
                <li>- Collaborated with team to enhance performance and user experience. </li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <img src={edunet} alt="Edunet logo" className="w-16 h-16 rounded-full" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">AI Intern, EdunetFoundation</h2>
              <p className="text-sm leading-tight font-thin">
                Dec 2024 - Feb 2025
              </p>
              <ul className="text-sm p-2">
                <li>- Completed an AI-focused internship under the TechSaksham program, a joint CSR initiative by Microsoft and SAP, implemented by Edunet Foundation and supported by AICTE.</li>
                <li>- Crafted a deep learning-based system capable of classifying plant diseases.</li>
                <li>- Deployed the trained model as a user-friendly web application.</li>
              </ul>
            </span>
          </div>

           <div className="w-full flex flex-wrap md:w-2/5 gap-10 md:pt-12 pt-0 md:px-0 px-4">
            <h2 className="text-xl md:text-4xl text-white font-bold">Tools & Technologies</h2>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiJavascript color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss size={50} color="#38B2AC" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiBootstrap size={50} color="#7952B3" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiNodedotjs size={50} color="#3C873A" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGitAlt size={50} color="#F05032" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiGithub size={50} color="#181717" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql size={50} color="#4479A1" />
          </span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
