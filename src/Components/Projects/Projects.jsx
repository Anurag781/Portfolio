import React from "react";
import ProjectCard from "./ProjectCard";
import ChessImg from "../../assets/images/Chess.JPG";
import NotesAppImg from "../../assets/images/Notes App MERN.JPG";
import ReelAppImg from "../../assets/images/Reel Main.JPG";

const Projects = () => {
  const projectList = [
    {
      title: "Chess Game",
      main: "A web-based Chess Game built with Node.js, Express, and EJS for backend logic and templating, and Chess.js for enforcing legal chess rules. The app renders a dynamic chessboard and handles move validation, captures, checks, and checkmates, all styled using Tailwind CSS via CDN for a clean, responsive UI.",
      image: ChessImg,
      sourceUrl: "https://github.com/Anurag781/Chess-Game",
      tech: ["Node.js", "Express", "EJS", "Tailwind CSS", "Chess.js", "Socket.io"]
    },
    {
      title: "Notes Application",
      main: "A full-stack Notes Application utilizing MongoDB, Express, React, and Node.js for seamless CRUD functionality and secure user authentication. Users can sign up, log in, create, edit, pin, and search notes, with responsive frontend styling via Tailwind CSS and RESTful API calls using Axios.",
      image: NotesAppImg,
      sourceUrl: "https://github.com/Anurag781/MERN-Notes-App",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "Axios"]
    },
    {
      title: "ReelStyle Food Ordering Platform",
      main: "ReelStyle is a reel-inspired food ordering web application that transforms traditional menu browsing into an engaging video-based experience. Users can discover dishes through short reels and place orders seamlessly. The platform also includes a dedicated restaurant dashboard for managing menus and tracking orders in real time.",
      image: ReelAppImg,
      sourceUrl: "https://github.com/Anurag781/Reel-Style-Mern-App",
      tech: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Axios", "React Router", "Node.js", "Express.js", "MongoDB (Mongoose)", "Socket.IO", "RESTful APIs", "JWT"]
    }
  ];

  return (
    <section
      id="Projects"
      className="relative bg-[#0a0a0a] text-white p-10 md:p-24 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 blur-[100px] rounded-full"></div>

      <div className="max-w-6xl mx-auto z-10 relative">
        <h2 className="text-3xl md:text-5xl font-light mb-12 tracking-tight">
          Featured <span className="text-blue-500 font-normal">Projects.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              main={project.main}
              image={project.image}
              sourceUrl={project.sourceUrl}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;