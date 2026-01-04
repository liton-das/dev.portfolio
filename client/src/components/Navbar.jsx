import React, { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
const Navbar = () => {
    const [dark, setDark] = useState(true);
  return (
    <>
      {/* Navbar */}
        <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto gap-4">
          <h1 className="text-2xl font-bold text-teal-500">Liton Das</h1>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-sm">
            <a href="#about" className="hover:text-teal-500">About</a>
            <a href="#skills" className="hover:text-teal-500">Skills</a>
            <a href="#projects" className="hover:text-teal-500">Projects</a>
            <a href="#contact" className="hover:text-teal-500">Contact</a>
            <button onClick={() => setDark(!dark)} className="p-2 rounded-lg bg-gray-600 dark:bg-gray-800">
              {dark ? <MdDarkMode className="text-base"/> : <CiDark className="text-base" />}
            </button>
          </div>
        </nav>
    </>
  )
}

export default Navbar
