import React, { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
const Navbar = () => {
    const [dark, setDark] = useState(true);
    // handle dark mode
    const handleDarkMode = ()=>{
      setDark(!dark)
      
    }
  return (
    <>
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto gap-4">
        <h1 className="text-2xl font-bold text-teal-500">Dev.Liton Das</h1>
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-sm">
          <a
            href="#about"
            className="
              relative
              text-white
              hover:text-teal-400
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-1
              after:w-0
              after:h-px
              after:bg-sky-400
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            About
          </a>

          <a href="#skills" className="relative
              text-white
              hover:text-teal-400
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-1
              after:w-0
              after:h-px
              after:bg-sky-400
              after:transition-all
              after:duration-300
              hover:after:w-full">
            Skills
          </a>
          <a href="#projects" className="relative
              text-white
              hover:text-teal-400
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-1
              after:w-0
              after:h-px
              after:bg-sky-400
              after:transition-all
              after:duration-300
              hover:after:w-full">
            Projects
          </a>
          <a href="#contact" className="relative
              text-white
              hover:text-teal-400
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-1
              after:w-0
              after:h-px
              after:bg-sky-400
              after:transition-all
              after:duration-300
              hover:after:w-full">
            Contact
          </a>
          {/* <button onClick={handleDarkMode} className="p-2 rounded-lg bg-gray-600 dark:bg-gray-800">
              {dark ? <MdDarkMode className="text-base"/> : <CiDark className="text-base" />}
            </button> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar
