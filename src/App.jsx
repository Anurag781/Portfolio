import React, { useState, useRef, useEffect } from 'react';
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/ContactUs";

const App = () => {
  const [showContact, setShowContact] = useState(false);
  const contactRef = useRef(null);

   useEffect(() => {
    if (showContact && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showContact]);

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home onContactClick={() => setShowContact(true)} />
      <About />
      <Experience />
      <Projects />
      <Footer onContactClick={() => setShowContact(true)} />

       {showContact && (
        <div ref={contactRef}>
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
