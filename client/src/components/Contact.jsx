import React from "react";
import { FiMail } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { BsTelephoneOutbound } from "react-icons/bs";
const Contact = () => {
  return (
    <>
      {/* Contact */}
      <section id="contact" className="bg-black/40 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6 text-teal-500">Contact Me</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Let’s build something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {/* Phone */}
            <a
              href="tel:+8801331215169"
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center 
               rounded-lg border border-teal-400 text-teal-500
               hover:bg-teal-500 hover:text-white
               hover:scale-110 hover:shadow-lg hover:shadow-teal-500/40
               transition-all duration-300"
            >
              <BsTelephoneOutbound className="text-xl sm:text-2xl" />
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=litonchandra094@gmail.com"
              target="_blank"
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center
               rounded-lg border border-teal-400 text-teal-500
               hover:bg-teal-500 hover:text-white
               hover:scale-110 hover:shadow-lg hover:shadow-teal-500/40
               transition-all duration-300"
            >
              <FiMail className="text-xl sm:text-2xl" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rj-raj-53b5322a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center
               rounded-lg border border-teal-400 text-teal-500
               hover:bg-teal-500 hover:text-white
               hover:scale-110 hover:shadow-lg hover:shadow-teal-500/40
               transition-all duration-300"
            >
              <SlSocialLinkedin className="text-xl sm:text-2xl" />
            </a>

            {/* Facebook */}
            <a
              href="https://web.facebook.com/liton.das.385336"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center
               rounded-lg border border-teal-400 text-teal-500
               hover:bg-teal-500 hover:text-white
               hover:scale-110 hover:shadow-lg hover:shadow-teal-500/40
               transition-all duration-300"
            >
              <SlSocialFacebook className="text-xl sm:text-2xl" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/liton-das"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center
               rounded-lg border border-teal-400 text-teal-500
               hover:bg-teal-500 hover:text-white
               hover:scale-110 hover:shadow-lg hover:shadow-teal-500/40
               transition-all duration-300"
            >
              <FiGithub className="text-xl sm:text-2xl" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
