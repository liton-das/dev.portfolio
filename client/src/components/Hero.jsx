import React from "react";
const Hero = () => {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white animate-pulse">
              MERN Stack <span className="text-teal-400">Developer</span>
            </h1>

            <p className="mt-6 text-gray-300 max-w-xl mx-auto md:mx-0">
              I am a motivated MERN Stack Developer focused on building responsive, scalable, and
              clean web applications. I enjoy learning new technologies, solving real-world
              problems, and continuously improving my development skills through practical projects.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-teal-500 text-black font-semibold rounded-xl hover:scale-105 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-teal-500 text-teal-400 rounded-xl hover:bg-teal-500 hover:text-black transition"
              >
                Contact Me
              </a>
              <a
                href="/Liton-Resume.pdf"
                target="_blank"
                download="Liton-Resume.pdf"
                className="px-6 py-3 border border-teal-500 text-teal-400 rounded-xl hover:bg-teal-500 hover:text-black transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right GIF */}
          <div className="flex justify-center items-center">
            <img
              src="https://c.tenor.com/UttC4AITYR4AAAAd/full-stack-developer.gif"
              alt="Developer working animation"
              className="w-64 sm:w-80 md:w-96 object-contain animate-float rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
