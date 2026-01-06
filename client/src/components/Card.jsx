import React from "react";
import { HiMiniArrowRight } from "react-icons/hi2";
const Card = ({ image, content, subContent, imageLink }) => {
  return (
    <>
      <a
  href={imageLink}
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full max-w-sm mx-auto focus:outline-none"
>
  <div
    className="
      relative w-full
      p-4 sm:p-5 rounded-2xl
      bg-white/5 backdrop-blur-2xl
      border border-white/30
      shadow-xl shadow-black/20
      transition-all duration-300
      hover:shadow-cyan-500/40
      will-change-transform
    "
    onMouseMove={(e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -(y - centerY) / 18;
      const rotateY = (x - centerX) / 18;

      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)
      `;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }}
  >
    {/* Glow layer */}
    <div className="
      absolute inset-0 rounded-2xl
      bg-linear-to-br from-cyan-400/20 to-purple-500/20
      blur-xl opacity-0 hover:opacity-100 transition
    " />

    {/* Image */}
    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
      <img
        src={image}
        alt="Project Preview"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>

    {/* Content */}
    <div className="relative mt-4 flex items-center justify-between gap-3">
      <p className="text-sm sm:text-base text-white leading-relaxed line-clamp-2">
        {content}
        <span className="text-sm sm:text-base text-rose-500 leading-relaxed ml-1 font-bold">{subContent}</span>
      </p>

      {/* Fake Button (visual only) */}
      <span
        className="
          inline-flex items-center gap-1
          px-3 py-1.5
          text-xs sm:text-sm font-semibold text-[#009af9]
          rounded-md
          bg-white
          hover:scale-110
          hover:shadow-lg hover:shadow-pink-500/50
          transition-all
        "
      >
        Link <HiMiniArrowRight className="text-base" />
      </span>
    </div>
  </div>
</a>

    </>
  );
};

export default Card;
