import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
const Navbar = () => {
  const [dark, setDark] = useState(true);
  const [isOpen, setOpen] = useState(false);
  // handle dark mode
  const handleDarkMode = () => {
    setDark(!dark);
  };
  return (
    <>
      {/* Navbar */}
      <nav className="relative flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <h2
          className="
            text-xl font-bold text-teal-400
            text-center py-6
            tracking-wide
            drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]
            "
        >
          Dev.Liton Das
        </h2>

        {/* Hamburger Icon (Mobile) */}
        <button onClick={() => setOpen(true)} className="lg:hidden text-teal-500 text-3xl z-50">
          <GiHamburgerMenu />
        </button>

        {/* Mobile Overlay */}
        <div
          className={`
    fixed inset-0 bg-black/70 backdrop-blur-sm
    transition-opacity duration-300
    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
    lg:hidden z-40
  `}
          onClick={() => setOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`
    fixed top-0 left-0 h-screen w-[85%] max-w-xs
    bg-linear-to-br from-slate-900 via-gray-900 to-black
    backdrop-blur-xl
    border-r border-white/10
    z-50
    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    lg:hidden
  `}
        >
          {/* Close Icon */}
          <VscChromeClose
            onClick={() => setOpen(false)}
            className="
    absolute right-4 top-4
    text-rose-500 text-xl
    w-8 h-8
    flex items-center justify-center
    rounded-full
    bg-white
    shadow-lg shadow-pink-500/50
    hover:scale-110
    transition
    cursor-pointer
  "
          />

          <h2 className="text-xl font-bold text-teal-500 text-center py-6">Dev.Liton Das</h2>

          <ul className="flex flex-col items-center gap-8 mt-12">
            {["about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="
        relative text-gray-200 text-lg font-medium
        hover:text-teal-400
        transition-all duration-300
        after:absolute after:left-0 after:-bottom-1
        after:w-0 after:h-0.5
        after:bg-linear-to-r after:from-teal-400 after:to-cyan-400
        after:transition-all after:duration-300
        hover:after:w-full
      "
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-sm">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>

          <span
            className="
      px-2.5 py-1 text-[11px] font-semibold
      text-cyan-200 rounded-md
      bg-white/20 backdrop-blur-lg
      border border-white/30
    "
          >
            v{__APP_VERSION__}
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
