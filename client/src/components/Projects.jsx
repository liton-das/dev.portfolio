import React, { useState } from "react";
import CloudSnap from "../assets/projectImg.jpg";
import TodoImg from "../assets/TodoImg.jpg";
import ContactTodo from "../assets/ContactTodo.jpg";
import ColorPiker from "../assets/ColorPiker.jpg";
import LottaryImg from "../assets/LottaryImg.jpg";
import weather from "../assets/weather.jpg";
import Scooter from "../assets/Scooter.jpg";
import Ecommerce from "../assets/E-commerc.jpg";
import TaskTodo from "../assets/TaskTodo.jpg";
import Restaurant from '../assets/Restaurant.jpg'
import Ai from '../assets/Ai.jpg'
import Card from "./Card";
const allProjects = [
  {
    id: 1,
    image: CloudSnap,
    imageLink: "https://cloud-snap-qb6l.vercel.app/",
    content: "(MERN-STACK) app with Cloudinary image upload & delete.",
  },
  {
    id: 3,
    image: Restaurant,
    imageLink: "https://restaurant-blond-gamma.vercel.app/",
    content: "(React Project) Restaurant App",
    subContent: "Runnig Project",
  },
  {
    id: 4,
    image: Ai,
    imageLink: "https://ai-tau-weld.vercel.app/",
    content: "(React & Gemini-Api) Ai App",
    subContent: "Coming Soon",
  },
  {
    id: 2,
    image: Scooter,
    imageLink: "https://liton-das.github.io/scooter_ui_design/",
    content: "(Vanila JS & HTML) Scooter App",
  },
  {
    id: 5,
    image: Ecommerce,
    imageLink: "#",
    content: "(Next.Js & Tailwindcss) E-commerce App",
    subContent: "Coming Soon",
  },
  {
    id: 6,
    image: ColorPiker,
    imageLink: "https://liton-das.github.io/favorite-color-picker/",
    content: "(Vanila JS) Color Picker App",
  },
  {
    id: 7,
    image: ContactTodo,
    imageLink: "https://contact-app-six-henna.vercel.app/",
    content: "(React App) Contact Todo App.",
  },
  {
    id: 8,
    image: TodoImg,
    imageLink: "https://liton-das.github.io/simple-todo/",
    content: "Todo App",
  },
  {
    id: 9,
    image: LottaryImg,
    imageLink: "https://liton-das.github.io/lottery_system/",
    content: "(Vanila js and html) swap App",
  },
  {
    id: 10,
    image: TaskTodo,
    imageLink: "https://liton-das.github.io/task-management/",
    content: "(Vanila js and html) Task Todo App",
  },
  {
    id: 11,
    image: weather,
    imageLink: "https://liton-das.github.io/weather-app/",
    content: "(Vanila js and html) Weather App",
  },
];
const Projects = () => {
  const [currCard, setCurrCard] = useState(6);
  const [ismore, setIsMore] = useState(false);
  return (
    <>
      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h3 className="text-3xl font-bold mb-10 text-teal-500">Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {!ismore
            ? allProjects
                .slice(0, currCard)
                .map((item) => (
                  <Card
                    key={item?.id}
                    image={item?.image}
                    imageLink={item?.imageLink}
                    content={item?.content}
                    subContent={item?.subContent}
                  />
                ))
            : allProjects.map((item) => (
                <Card
                  key={item?.id}
                  image={item?.image}
                  imageLink={item?.imageLink}
                  content={item?.content}
                  subContent={item?.subContent}
                />
              ))}
        </div>
          {allProjects.length > 6 && (
            <button
              onClick={() => setIsMore(!ismore)}
              className={
                `
              m-auto
              mt-8
              group
              w-36 h-11
              sm:w-32 sm:h-10
              md:w-36 md:h-11
              flex items-center justify-center gap-2
              
              text-sm sm:text-xs md:text-sm font-semibold
              text-teal-300
          
              rounded-xl
              border border-teal-400/50
          
              bg-white/5 backdrop-blur-lg
              shadow-md shadow-black/20
          
              hover:bg-linear-to-r hover:from-teal-500 hover:to-cyan-500
              hover:text-white
              hover:shadow-lg hover:shadow-teal-500/50
              hover:scale-105
          
              active:scale-95
              transition-all duration-300`
              }
              >
              {ismore ? "Show Less" : "Show More"}

              {/* Arrow animation */}
              <span
                className="
                transition-transform duration-300
                group-hover:translate-x-1
                text-base
                "
                >
                {ismore ? "↑" : "↓"}
              </span>
            </button>
          )}
      </section>
    </>
  );
};

export default Projects;
