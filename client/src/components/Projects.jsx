import React from "react";
import CloudSnap from "../assets/projectImg.jpg";
import TodoImg from "../assets/TodoImg.jpg";
import ContactTodo from "../assets/ContactTodo.jpg";
import ColorPiker from "../assets/ColorPiker.jpg";
import LottaryImg from "../assets/LottaryImg.jpg";
import weather from "../assets/weather.jpg";
import Scooter from "../assets/Scooter.jpg";
import Card from "./Card";
const Projects = () => {
  return (
    <>
      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h3 className="text-3xl font-bold mb-10 text-teal-500">Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Scooter Web Design Card */}
          <Card
            image={CloudSnap}
            imageLink={"https://cloud-snap-qb6l.vercel.app/"}
            content={"MERN app with Cloudinary image upload & delete."}
          />
          {/* color piker app card */}
          <Card
            image={ColorPiker}
            imageLink={"https://liton-das.github.io/favorite-color-picker/"}
            content={"(Vanila JS) Color Picker App"}
          />
          {/* contact todo app card */}
          <Card
            image={ContactTodo}
            imageLink={"https://contact-app-six-henna.vercel.app/"}
            content={"(React App) Contact Todo App."}
          />
          {/* Todo App card */}
          <Card
            image={TodoImg}
            imageLink={"https://liton-das.github.io/simple-todo/"}
            content={"Todo App"}
          />
          {/* swap App card */}
          <Card
            image={LottaryImg}
            imageLink={"https://liton-das.github.io/lottery_system/"}
            content={"(Vanila js and html) swap App"}
          />
          {/* weather app card */}
          <Card
            image={weather}
            imageLink={"https://liton-das.github.io/weather-app/"}
            content={"(Vanila js and html) Weather App"}
          />

          {/* scooter card */}
          <Card
            image={Scooter}
            imageLink={"https://liton-das.github.io/scooter_ui_design/"}
            content={"(Vanila JS & HTML) Scooter App"}
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
