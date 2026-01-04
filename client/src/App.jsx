// import { GitBranchPlus, Link2, Mail, Moon, Sun } from "lucide"
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboute from "./components/Aboute";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  const [dark, setDark] = useState(true);
  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 text-white transition-colors duration-500">
        {/* Navbar */}
        <Navbar/>
        {/* Hero */}
        <Hero/>
        {/* About */}
        <Aboute/>
        {/* Skills */}
        <Skills/>
        {/* Projects */}
        <Projects/>
        {/* Contact */}
        <Contact/>
        {/* Footer */}
        <Footer/>
      </div>
    </div>
  )
}

export default App
