import React from "react";
import CloudSnap from "../assets/projectImg.jpg";
import TodoImg from "../assets/TodoImg.jpg";
import ContactTodo from "../assets/ContactTodo.jpg";
import ColorPiker from "../assets/ColorPiker.jpg";
import LottaryImg from "../assets/LottaryImg.jpg";
import weather from "../assets/weather.jpg";
import Scooter from "../assets/Scooter.jpg";
import Ecommerce from "../assets/E-commerc.jpg";
import TaskTodo from "../assets/TaskTodo.jpg";
import Card from "./Card";
const allProjects=[
  {
    id:1,
    image:CloudSnap,
    imageLink:"https://cloud-snap-qb6l.vercel.app/",
    content:"(MERN-STACK) app with Cloudinary image upload & delete."
  },
  {
    id:2,
    image:Scooter,
    imageLink:"https://liton-das.github.io/scooter_ui_design/",
    content:"(Vanila JS & HTML) Scooter App"
  },
  {
    id:3,
    image:Ecommerce,
    imageLink:"#",
    content:"(Next.Js & Tailwindcss) E-commerce App",
    subContent:'Coming Soon'
  },
  {
    id:4,
    image:ColorPiker,
    imageLink:"https://liton-das.github.io/favorite-color-picker/",
    content:"(Vanila JS) Color Picker App"
  },
  {
    id:5,
    image:ContactTodo,
    imageLink:"https://contact-app-six-henna.vercel.app/",
    content:"(React App) Contact Todo App."
  },
  {
    id:6,
    image:TodoImg,
    imageLink:"https://liton-das.github.io/simple-todo/",
    content:"Todo App"
  },
  {
    id:7,
    image:LottaryImg,
    imageLink:"https://liton-das.github.io/lottery_system/",
    content:"(Vanila js and html) swap App"
  },
  {
    id:8,
    image:TaskTodo,
    imageLink:"https://liton-das.github.io/task-management/",
    content:"(Vanila js and html) Task Todo App"
  },
  {
    id:9,
    image:weather,
    imageLink:"https://liton-das.github.io/weather-app/",
    content:"(Vanila js and html) Weather App"
  },
  
]
const Projects = () => {
  return (
    <>
      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h3 className="text-3xl font-bold mb-10 text-teal-500">Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {
            allProjects.map((item)=>(
              <Card key={item?.id} image={item?.image} imageLink={item?.imageLink} content={item?.content} subContent={item?.subContent}/>
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Projects;
