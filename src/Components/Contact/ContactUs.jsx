import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-100 py-16 px-6 md:px-12 flex justify-center"
    >
      <div className="w-full max-w-lg">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Contact Us
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center mb-8">
          Have a project or just want to say hi? My inbox is always open.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // handle form submit
            alert("Thank you! Message sent.");
          }}
          className="bg-white shadow-lg rounded-lg p-8 space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Tell me what’s on your mind..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
