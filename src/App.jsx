import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa6";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/ContactUs";

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Logic for Back to Top Button visibility
      setShowScrollTop(window.scrollY > 400);

      // 2. Logic for Scroll Progress (Both for Ring and Top Bar)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen w-full overflow-hidden relative selection:bg-blue-500/30 selection:text-white">
      
      {/* 1. TOP PROGRESS BAR */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 z-[100] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* GLOBAL AMBIENT GLOWS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* 2. BACK TO TOP UI WITH PROGRESS RING */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        showScrollTop ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
      }`}>
        <button 
          onClick={scrollToTop}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#111] border border-white/5 text-blue-500 shadow-2xl hover:text-white transition-colors group"
          aria-label="Back to Top"
        >
          {/* Progress Ring*/}
          <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/10" />
            <circle
              cx="50" cy="50" r="48"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray="301.59"
              strokeDashoffset={301.59 - (scrollProgress * 301.59) / 100}
              className="text-blue-500 transition-all duration-100 ease-out"
            />
          </svg>
          <FaArrowUp className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300" size={20} />
        </button>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        <Navbar />
        <Home onContactClick={scrollToContact} />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer onContactClick={scrollToContact} />
      </div>
    </div>
  );
}

export default App;