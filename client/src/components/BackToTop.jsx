import React, { useEffect, useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi2";
const BackToTop = () => {
  const [show, setShow] = useState(false);

  // handleScrollTop
  const handleScrollTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  // auto run this scroll when user gose top to bottom
  useEffect(() => {
    // handle scroll
    const handleScroll = () => {
      if (window.scroll > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {!show && (
        <button
          onClick={handleScrollTop}
          className="
            fixed bottom-6 right-6 z-50
            p-4 rounded-full
            bg-linear-to-tr from-cyan-400 to-teal-500
            text-white
            shadow-xl shadow-cyan-500/40
            animate-pulse
            hover:animate-none
            hover:scale-110
            transition
            "
        >
          <HiOutlineArrowUp size={22} />
        </button>
      )}
    </>
  );
};

export default BackToTop;
