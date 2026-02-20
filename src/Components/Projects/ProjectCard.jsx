import React from "react";
import PropTypes from 'prop-types';

const ProjectCard = ({ title, main, image, sourceUrl, tech }) => {
  return (
    <div className="group flex flex-col bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-500 shadow-xl">
      <div className="overflow-hidden">
        <img 
          className="w-full h-48 object-cover group-hover:scale-110 duration-700 opacity-80 group-hover:opacity-100 transition-all" 
          src={image} 
          alt={title} 
        />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-light leading-tight text-white group-hover:text-blue-400 transition-colors tracking-wide">
          {title}
        </h3>
        <p className="text-gray-400 text-sm md:text-[14px] font-extralight leading-relaxed mt-4 mb-6 flex-grow">
          {main}
        </p>

        {tech && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item, i) => (
              <span key={i} className="text-[9px] uppercase tracking-[0.15em] font-medium px-2 py-1 bg-white/5 border border-white/5 text-blue-400/80 rounded-md">
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="flex">
          <a 
            href={sourceUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full text-center py-2.5 text-xs uppercase tracking-widest font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-500 transition-all duration-300 active:scale-95 shadow-lg shadow-blue-900/20"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired,
  tech: PropTypes.array
};

export default ProjectCard;