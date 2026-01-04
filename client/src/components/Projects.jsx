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
          <div className="p-6 rounded-lg bg-linear-to-t from-sky-500 to-indigo-500 dark:bg-gray-800 hover:shadow-xl transition">
            <div className="w-75 overflow-hidden">
              <img className="w-full rounded-[5px]" src={Scooter} alt="Scooter" />
            </div>

            <p className="text-sm text-white dark:text-gray-400 mb-4">
              MERN app with Cloudinary image upload & delete.
            </p>
            <a
              href="https://cloud-snap-qb6l.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 text-rose-500 font-semibold hover:underline"
            >
              Live Link
            </a>
          </div>

          <div className="p-6 rounded-lg bg-linear-to-t from-sky-500 to-indigo-500 dark:bg-gray-800 hover:shadow-xl transition">
            <div className="w-75 overflow-hidden">
              <img className="w-full rounded-[5px]" src={ColorPiker} alt="cloudSnap" />
            </div>

            <p className="text-sm text-white dark:text-gray-400 mb-4">(Vanila js)Color Piker App</p>
            <a
              href="https://liton-das.github.io/favorite-color-picker/"
              target="_blank"
              className="flex items-center gap-2 text-rose-500 font-semibold hover:underline"
            >
              Live Link
            </a>
          </div>

          <div className="p-6 rounded-lg bg-linear-to-t from-sky-500 to-indigo-500 dark:bg-gray-800 hover:shadow-xl transition">
            <div className="w-75 overflow-hidden">
              <img className="w-full rounded-[5px]" src={ContactTodo} alt="ContactTodo" />
            </div>

            <p className="text-sm text-white dark:text-gray-400 mb-4">
              (React App) Contact Todo App.
            </p>
            <a
              href="https://contact-app-six-henna.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 text-rose-500 font-semibold hover:underline"
            >
              Live Link
            </a>
          </div>
          <div className="p-6 rounded-lg bg-linear-to-t from-sky-500 to-indigo-500 dark:bg-gray-800 hover:shadow-xl transition">
            <div className="w-75 overflow-hidden">
              <img className="w-full rounded-[5px]" src={TodoImg} alt="cloudSnap" />
            </div>

            <p className="text-sm text-white dark:text-gray-400 mb-4">Todo App</p>
            <a
              href="https://liton-das.github.io/simple-todo/"
              target="_blank"
              className="flex items-center gap-2 text-cyan-300 font-semibold hover:underline"
            >
              Live Link
            </a>
          </div>
          <div className="p-6 rounded-lg bg-linear-to-t from-sky-500 to-indigo-500 dark:bg-gray-800 hover:shadow-xl transition">
            <div className="w-75 overflow-hidden">
              <img className="w-full rounded-[5px]" src={LottaryImg} alt="cloudSnap" />
            </div>

            <p className="text-sm text-white dark:text-gray-400 mb-4">
              (Vanila js and html) Lottary System
            </p>
            <a
              href="https://liton-das.github.io/lottery_system/"
              target="_blank"
              className="flex items-center gap-2 text-cyan-300 font-semibold hover:underline"
            >
              Live Link
            </a>
          </div>
          <div className="p-6 rounded-lg bg-linear-to-t from-sky-500 to-indigo-500 dark:bg-gray-800 hover:shadow-xl transition">
            <div className="w-75 overflow-hidden">
              <img className="w-full rounded-[5px]" src={weather} alt="cloudSnap" />
            </div>

            <p className="text-sm text-white dark:text-gray-400 mb-4">
              (Vanila js and html) Weather App
            </p>
            <a
              href="https://liton-das.github.io/weather-app/"
              target="_blank"
              className="flex items-center gap-2 text-cyan-300 font-semibold hover:underline"
            >
              Live Link
            </a>
          </div>
          
          {/* scooter card */}
          <Card image={Scooter} imageLink={'https://liton-das.github.io/scooter_ui_design/'} content={'(Vanilla JS & HTML) Scooter App'}/>
        </div>
      </section>
    </>
  );
};

export default Projects;
