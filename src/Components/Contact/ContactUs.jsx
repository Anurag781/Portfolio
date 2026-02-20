import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdCheckCircle, MdError} from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); 

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Fetching keys from Environment Variables
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus("success");
          e.target.reset(); // Clear form on success
          // Hide toast after 5 seconds
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
          // Hide toast after 5 seconds
          setTimeout(() => setStatus("idle"), 5000);
        }
      );
  };

  return (
    <section
      id="Contact"
      className="relative min-h-screen bg-[#0a0a0a] text-white py-20 px-6 md:px-16 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Aesthetic Background Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-cyan-600/5 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-2xl z-10 relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Get In <span className="text-blue-500 font-semibold">Touch.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light max-w-md mx-auto leading-relaxed">
            Have a project in mind or just want to say hi? My inbox is always open. 
            I'll do my best to get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-[#111] border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="user_name" className="text-xs uppercase tracking-widest font-semibold text-gray-500 ml-1">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 text-gray-200 placeholder:text-gray-800"
                placeholder="Anurag Thakur"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="user_email" className="text-xs uppercase tracking-widest font-semibold text-gray-500 ml-1">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 text-gray-200 placeholder:text-gray-800"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs uppercase tracking-widest font-semibold text-gray-500 ml-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 text-gray-200 resize-none placeholder:text-gray-800"
              placeholder="Tell me what’s on your mind..."
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full font-semibold py-4 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-lg flex justify-center items-center gap-2 ${
                status === "sending" 
                ? "bg-gray-800 cursor-not-allowed text-gray-500" 
                : "bg-blue-600 text-white hover:bg-blue-500 shadow-blue-600/10"
              }`}
            >
              {status === "sending" ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
        
       <p className="text-center text-gray-700 text-sm mt-6 uppercase tracking-widest font-semibold">
  Typically responds within 24 hours
</p>

      </div>

      {/* --- FLOATING TOAST NOTIFICATION --- */}
      <div 
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform ${
          status === "success" || status === "error" ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        {status === "success" && (
          <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/40 text-green-500 px-6 py-3 rounded-full backdrop-blur-md shadow-2xl">
            <MdCheckCircle size={22} />
            <span className="text-sm font-medium tracking-wide">Message sent successfully!</span>
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/40 text-red-500 px-6 py-3 rounded-full backdrop-blur-md shadow-2xl">
            <MdError size={22} />
            <span className="text-sm font-medium tracking-wide">Failed to send. Please try again.</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;