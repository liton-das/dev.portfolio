import React from "react";

const Card = ({image,content,imageLink}) => {
  return (
    <>
      <div className=" p-4 sm:p-6 rounded-2xl bg-linear-to-r from-indigo-500 to-teal-400 dark:bg-white/5 backdrop-blur-lg border border-white/20 shadow-lg transition-transform duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-cyan-500/50">
        {/* Image */}
        <div className="w-full overflow-hidden rounded-xl">
          <img
            src={image}
            alt="Weather App UI"
            className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-xl hover:scale-105 transition duration-300"
          />
        </div>

        <div className="flex items-center justify-between mt-3">
            {/* Content */}
        <p className="mt-4 text-sm text-white dark:text-gray-200">
          {content}
        </p>

        {/* Bottom Right Button */}
        <a
          href={imageLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center py-1.25 px-2.25 text-sm font-semibold text-white bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[5px] hover:bg-cyan-400 hover:scale-110 transition"
        >
          Live
        </a>
        </div>
      </div>
    </>
  );
};

export default Card;
