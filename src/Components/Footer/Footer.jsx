import React from "react";
import { MdOutlineEmail, MdArrowOutward } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = ({ onContactClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-[#0a0a0a] text-white pt-20 pb-10 px-6 md:px-16 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand Identity (Span 5) */}
          <div className="lg:col-span-5 flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Anurag <span className="text-blue-500">Thakur.</span>
            </h2>
            <p className="text-gray-400 text-base font-light leading-relaxed max-w-sm text-center md:text-left">
              Crafting high-performance web applications and intelligent solutions with a focus on clean code and exceptional user experience.
            </p>

            {/* Social Dock */}
            <div className="flex gap-4 mt-8">
              <SocialIcon href="https://github.com/Anurag781" icon={<FaGithub />} />
              <SocialIcon href="https://www.linkedin.com/in/anurag-thakur-0aaba52a0/" icon={<CiLinkedin />} />
              <SocialIcon href="mailto:itsanuragofficial7@gmail.com" icon={<MdOutlineEmail />} />
            </div>
          </div>

          {/* Column 2: Navigation (Span 3) */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-blue-500 mb-6">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'Skills', 'Experience', 'Projects'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="text-gray-400 hover:text-white transition-all duration-300 font-light flex items-center group gap-1">
                    {item}
                    <MdArrowOutward className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-blue-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact/Action (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start lg:items-end">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-blue-500 mb-6">Let's Connect</h3>
            <div className="text-center md:text-left lg:text-right space-y-4">
              <p className="text-gray-400 font-light text-sm">Have a project in mind?</p>
              <button
                onClick={onContactClick}
                className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-500 active:scale-95 shadow-lg shadow-white/5"
              >
                Say Hello
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-200 font-medium tracking-normal">
            © {currentYear} Anurag Thakur.
            <span className="hidden md:inline"> Built with React & Tailwind.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

// Sub-component for Social Icons
const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1"
  >
    {React.cloneElement(icon, { size: 20 })}
  </a>
);

export default Footer;