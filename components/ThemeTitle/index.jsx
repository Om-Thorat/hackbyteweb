"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountDownAnim from "../CountDownAnim";

const ThemeTitle = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [display, setDisplay] = useState("block");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    setDisplay(window.innerWidth < 450 ? "none" : "block");
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      display: display,
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#DED9C6",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <p className="text-[#FAF8ED] text-[1.25rem] tracking-widest md:text-[1.5rem] font-medium uppercase translate-x-2">
        Revealing soon :{" "}
      </p>
      <div
        className="text-[#FAF8ED] text-[2.375rem] md:text-[3rem] 
          font-medium leading-[1.2] md:leading-[1.1]"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        <CountDownAnim targetDate="2025-01-07T00:00:00" />
      </div>

      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </>
  );
};

export default ThemeTitle;
