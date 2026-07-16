"use client";

import React, { useState, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  easeOut,
  easeIn,
  easeInOut,
} from "motion/react";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import MyImg from "@/../public/images/My.png";
import Image from "next/image";

const defaultItems = [
  {
    image:
      "https://i.pinimg.com/736x/20/7e/88/207e884568c8bc8a2748db9751c81e83.jpg",
    text: "Yellow parachute jump suit",
  },
  {
    image: MyImg,
    text: "Urban Street Wear",
  },
  {
    image:
      "https://i.pinimg.com/736x/b3/34/c8/b334c8b573494374222e465046f90918.jpg",
    text: "Classic Denim Jacket",
  },
  {
    image:
      "https://i.pinimg.com/736x/b7/df/c9/b7dfc93da7c501c7834eaf8a640462f0.jpg",
    text: "Silk Embroidered Kurta",
  },
  {
    image:
      "https://i.pinimg.com/736x/a0/9d/bd/a09dbd8f6d037e501146ff35012e42aa.jpg",
    text: "Bohemian Maxi Dress",
  },
  {
    image:
      "https://i.pinimg.com/736x/b7/df/c9/b7dfc93da7c501c7834eaf8a640462f0.jpg",
    text: "Silk Embroidered Kurta",
  },
  {
    image:
      "https://i.pinimg.com/736x/a0/9d/bd/a09dbd8f6d037e501146ff35012e42aa.jpg",
    text: "Bohemian Maxi Dress",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [direction, setDirection] = useState(0);

  const totalItems = 7;

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const renderedItems = useMemo(() => {
    return defaultItems.map((item, index) => {
      let offset = index - activeIndex;
      if (offset < -3) offset += totalItems;
      if (offset > 3) offset -= totalItems;
      return { ...item, offset, originalIndex: index };
    });
  }, [activeIndex]);

  return (
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-center overflow-x-hidden select-none py-6">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[600px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-5 z-10"
      >
        <span className=" text-4xl font-bold tracking-[0.20em] uppercase mb-1 block">
          Desi roots. modern vibes.
        </span>
        <h2 className="text-black text-xl md:text-2xl font-light tracking-widest uppercase">
          <span className="text-amber-400/80"> Ethinic wear </span> |
          <span className="text-[#269E9E]/80"> Street wear </span> | for every
          you
        </h2>
      </motion.div>

      {/* Cards Viewport Container */}
      <div className="relative w-full h-[450px] flex items-center justify-center z-10 overflow-visible">
        {renderedItems.map((item) => {
          const { offset, image, text, originalIndex } = item;
          const isActive = offset === 0;

          return (
            <motion.div
              key={originalIndex}
              animate={{
                x:
                  offset === 0
                    ? 0
                    : offset === -1
                      ? -330
                      : offset === 1
                        ? 330
                        : offset === -2
                          ? -600
                          : offset === 2
                            ? 600
                            : offset === -3
                              ? -820
                              : 820,
                y: offset === 0 ? -10 : offset === -2 || offset === 2 ? 70 : 45,
                rotate:
                  offset === 0
                    ? 0
                    : offset === -1
                      ? -4
                      : offset === 1
                        ? 4
                        : offset === -2
                          ? -6
                          : 6,
                scale:
                  offset === 0
                    ? 1
                    : Math.abs(offset) === 1
                      ? 0.82
                      : Math.abs(offset) === 2
                        ? 0.7
                        : 0.55,
                opacity:
                  (direction === 1 && offset === 3) ||
                  (direction === -1 && offset === -3)
                    ? 0
                    : offset === 0
                      ? 1
                      : Math.abs(offset) === 1
                        ? 0.5
                        : Math.abs(offset) === 2
                          ? 0.3
                          : 0.15,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                mass: 1.2,

                opacity: {
                  duration: 0,
                },
              }}
              onClick={() => {
                if (offset === -1 || offset === -2) handlePrev();
                if (offset === 1 || offset === 2) handleNext();
              }}
              style={{
                zIndex: isActive ? 30 : 20,
                left: "50%",
                top: "50%",
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[325px] h-[450px] md:h-[420px] rounded-2xl overflow-hidden cursor-pointer group"
            >
              {/* Outer glow ring for active card */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-[2px] rounded-3xl bg-gradient-to-b from-amber-400/40 via-amber-600/20 to-transparent z-0 pointer-events-none"
                />
              )}

              {/* Card inner container */}
              <div
                className={`relative w-full h-full rounded-xl overflow-hidden border border-white transition-all duration-500
                   bg-neutral-900`}
              >
                {/* Card Image */}
                <Image
                  src={image}
                  alt={text}
                  fill
                  draggable={false}
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Multi-layer gradient overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 pointer-events-none" /> */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center flex-col p-6 pointer-events-none select-none">
                  <span className="block text-white  text-sm md:text-base font-semibold tracking-widest leading-snug">
                    {text}
                  </span>
                  <div className="mt-3 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-amber-400/60 via-amber-500/30 to-transparent transition-all duration-700 ease-out" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center h-20 gap-5 mt-2">
        {/* Prev Button */}
        <motion.button
          onClick={handlePrev}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full outline-0 bg-black/10 backdrop-blur-md flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ArrowLeft />
        </motion.button>

        {/* Slide Indicators */}
        {/* <div className="flex items-center gap-2.5">
                    {defaultItems.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`transition-all duration-500 rounded-full cursor-pointer ${
                                i === activeIndex
                                    ? 'w-8 h-2 bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div> */}

        <motion.button
          // transition={{ duration: 0.4, ease: easeIn }}

          whileTap={{ scale: 0.9 }}
          className="px-10 py-3.5 overflow-hidden rounded-2xl text-white font-bold bg-neutral-950 text-sm tracking-[0.25em] uppercase"
        >
          Shop Now
        </motion.button>
        {/* Next Button */}
        <motion.button
          onClick={handleNext}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center"
          aria-label="Next slide"
        >
          <ArrowRight />
        </motion.button>
      </div>

      {/* Shop Now CTA */}
    </div>
  );
};

export default Slider;
