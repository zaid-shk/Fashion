// "use client";

// import React, { useState, useMemo } from "react";
// import {
//   motion,
//   AnimatePresence,
//   easeOut,
//   easeIn,
//   easeInOut,
// } from "motion/react";
// import { ArrowLeft, ArrowRight, Send } from "lucide-react";
// import MyImg from "@/../public/images/My.png";
// import Image from "next/image";

// const defaultItems = [
//   {
//     image:
//       "https://i.pinimg.com/736x/20/7e/88/207e884568c8bc8a2748db9751c81e83.jpg",
//     text: "Yellow parachute jump suit",
//   },
//   {
//     image: MyImg,
//     text: "Urban Street Wear",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/b3/34/c8/b334c8b573494374222e465046f90918.jpg",
//     text: "Classic Denim Jacket",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/b7/df/c9/b7dfc93da7c501c7834eaf8a640462f0.jpg",
//     text: "Silk Embroidered Kurta",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/a0/9d/bd/a09dbd8f6d037e501146ff35012e42aa.jpg",
//     text: "Bohemian Maxi Dress",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/b7/df/c9/b7dfc93da7c501c7834eaf8a640462f0.jpg",
//     text: "Silk Embroidered Kurta",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/a0/9d/bd/a09dbd8f6d037e501146ff35012e42aa.jpg",
//     text: "Bohemian Maxi Dress",
//   },
// ];

// const Slider = () => {
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [direction, setDirection] = useState(0);

//   const totalItems = 7;

//   const handleNext = () => {
//     setDirection(1);
//     setActiveIndex((prev) => (prev + 1) % totalItems);
//   };

//   const handlePrev = () => {
//     setDirection(-1);
//     setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
//   };

//   const renderedItems = useMemo(() => {
//     return defaultItems.map((item, index) => {
//       let offset = index - activeIndex;
//       if (offset < -3) offset += totalItems;
//       if (offset > 3) offset -= totalItems;
//       return { ...item, offset, originalIndex: index };
//     });
//   }, [activeIndex]);

//   return (
//     <div className="relative w-screen min-h-screen flex flex-col items-center justify-center overflow-x-hidden select-none py-6">
//       {/* Ambient background glows */}
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[600px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

//       {/* Section Title */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="text-center mb-5 z-10"
//       >
//         <span className=" text-4xl font-bold tracking-[0.20em] uppercase mb-1 block">
//           Desi roots. modern vibes.
//         </span>
//         <h2 className="text-black text-xl md:text-2xl font-light tracking-widest uppercase">
//           <span className="text-amber-400/80"> Ethinic wear </span> |
//           <span className="text-[#269E9E]/80"> Street wear </span> | for every
//           you
//         </h2>
//       </motion.div>

//       {/* Cards Viewport Container */}
//       <div className="relative w-full h-[450px] flex items-center justify-center z-10 overflow-visible">
//         {renderedItems.map((item) => {
//           const { offset, image, text, originalIndex } = item;
//           const isActive = offset === 0;

//           return (
//             <motion.div
//               key={originalIndex}
//               animate={{
//                 x:
//                   offset === 0
//                     ? 0
//                     : offset === -1
//                       ? -330
//                       : offset === 1
//                         ? 330
//                         : offset === -2
//                           ? -600
//                           : offset === 2
//                             ? 600
//                             : offset === -3
//                               ? -820
//                               : 820,
//                 y: offset === 0 ? -10 : offset === -2 || offset === 2 ? 70 : 45,
//                 rotate:
//                   offset === 0
//                     ? 0
//                     : offset === -1
//                       ? -4
//                       : offset === 1
//                         ? 4
//                         : offset === -2
//                           ? -6
//                           : 6,
//                 scale:
//                   offset === 0
//                     ? 1
//                     : Math.abs(offset) === 1
//                       ? 0.82
//                       : Math.abs(offset) === 2
//                         ? 0.7
//                         : 0.55,
//                 opacity:
//                   (direction === 1 && offset === 3) ||
//                   (direction === -1 && offset === -3)
//                     ? 0
//                     : offset === 0
//                       ? 1
//                       : Math.abs(offset) === 1
//                         ? 0.5
//                         : Math.abs(offset) === 2
//                           ? 0.3
//                           : 0.15,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 120,
//                 damping: 20,
//                 mass: 1.2,

//                 opacity: {
//                   duration: 0,
//                 },
//               }}
//               onClick={() => {
//                 if (offset === -1 || offset === -2) handlePrev();
//                 if (offset === 1 || offset === 2) handleNext();
//               }}
//               style={{
//                 zIndex: isActive ? 30 : 20,
//                 left: "50%",
//                 top: "50%",
//               }}
//               className="absolute -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[325px] h-[450px] md:h-[420px] rounded-2xl overflow-hidden cursor-pointer group"
//             >
//               {/* Outer glow ring for active card */}
//               {isActive && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute -inset-[2px] rounded-3xl bg-gradient-to-b from-amber-400/40 via-amber-600/20 to-transparent z-0 pointer-events-none"
//                 />
//               )}

//               {/* Card inner container */}
//               <div
//                 className={`relative w-full h-full rounded-xl overflow-hidden border border-white transition-all duration-500
//                    bg-neutral-900`}
//               >
//                 {/* Card Image */}
//                 <Image
//                   src={image}
//                   alt={text}
//                   fill
//                   draggable={false}
//                   className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-110"
//                 />

//                 {/* Shimmer effect on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

//                 {/* Text Content */}
//                 <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center flex-col p-6 pointer-events-none select-none">
//                   <span className="block text-white mix-blend-difference text-sm md:text-base font-semibold tracking-widest leading-snug">
//                     {text}
//                   </span>
//                   <div className="mt-3 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-amber-400/60 via-amber-500/30 to-transparent transition-all duration-700 ease-out" />
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Navigation Controls */}
//       <div className="flex items-center justify-center h-20 gap-5 mt-2">
//         {/* Prev Button */}
//         <motion.button
//           onClick={handlePrev}
//           whileTap={{ scale: 0.9 }}
//           className="w-12 h-12 rounded-full outline-0 bg-black/10 backdrop-blur-md flex items-center justify-center"
//           aria-label="Previous slide"
//         >
//           <ArrowLeft />
//         </motion.button>

//         <motion.button
//           whileTap={{ scale: 0.9 }}
//           className="px-10 py-3.5 overflow-hidden rounded-2xl text-white font-bold bg-neutral-950 text-sm tracking-[0.25em] uppercase"
//         >
//           Shop Now
//         </motion.button>
//         {/* Next Button */}
//         <motion.button
//           onClick={handleNext}
//           whileTap={{ scale: 0.9 }}
//           className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center"
//           aria-label="Next slide"
//         >
//           <ArrowRight />
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default Slider;


"use client"

import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const items = [
  {
    id: 1,
    title: "Yellow parachute jump suit",
    image: "https://i.pinimg.com/1200x/7a/b5/ae/7ab5ae6b781a99a806c84dd8d554243d.jpg",
  },
  {
    id: 2,
    title: "Yellow parachute jump suit",
    image: "https://i.pinimg.com/1200x/ca/69/2a/ca692a1003f3a0924411fad05a730d7c.jpg",
  },
  {
    id: 3,
    title: "Yellow parachute jump suit",
    image: "https://i.pinimg.com/1200x/22/39/47/2239474ebb42f959c247c52aa18d542f.jpg",
  },
  {
    id: 4,
    title: "Yellow parachute jump suit",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Yellow parachute jump suit",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Yellow parachute jump suit",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
  },
    {
    id: 7,
    title: "Yellow parachute jump suit",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    title: "Yellow parachute jump suit",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    title: "Yellow parachute jump suit",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 10,
    title: "Yellow parachute jump suit",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
  },
]

function Carouselsection() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      handleNext()
    } else if (isRightSwipe) {
      handlePrev()
    }
    setTouchStart(null)
    setTouchEnd(null)
  }

  // Calculate shortest circular path/relative index
  const getRelativeIndex = (index: number, activeIndex: number, total: number) => {
    let diff = index - activeIndex
    const half = total / 2
    if (diff > half) {
      diff -= total
    } else if (diff < -half) {
      diff += total
    }
    return diff
  }

  // Returns transform and styling based on relative position
  const getCardStyles = (r: number) => {
    if (r === 0) {
      return {
        transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)',
        opacity: 1,
        zIndex: 30,
        pointerEvents: 'auto' as const,
      }
    }
    if (r === -1) {
      return {
        transform: 'translateX(calc(-1 * var(--carousel-spacing))) translateY(var(--carousel-translate-y-side)) rotate(-6deg) scale(var(--carousel-scale-side))',
        opacity: 0.65,
        zIndex: 20,
        pointerEvents: 'auto' as const,
      }
    }
    if (r === 1) {
      return {
        transform: 'translateX(var(--carousel-spacing)) translateY(var(--carousel-translate-y-side)) rotate(6deg) scale(var(--carousel-scale-side))',
        opacity: 0.65,
        zIndex: 20,
        pointerEvents: 'auto' as const,
      }
    }
    if (r === -2) {
      return {
        transform: 'translateX(calc(-1 * var(--carousel-far-spacing))) translateY(var(--carousel-translate-y-far)) rotate(-12deg) scale(var(--carousel-scale-far))',
        opacity: 0.40,
        zIndex: 10,
        pointerEvents: 'auto' as const,
      }
    }
    if (r === 2) {
      return {
        transform: 'translateX(var(--carousel-far-spacing)) translateY(var(--carousel-translate-y-far)) rotate(12deg) scale(var(--carousel-scale-far))',
        opacity: 0.40,
        zIndex: 10,
        pointerEvents: 'auto' as const,
      }
    }
    
    // Hidden cards transitioning in/out from sides
    if (r < -2) {
      return {
        transform: 'translateX(calc(-1.2 * var(--carousel-far-spacing))) translateY(calc(1.2 * var(--carousel-translate-y-far))) rotate(-18deg) scale(calc(var(--carousel-scale-far) * 0.9))',
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none' as const,
      }
    }
    
    // r > 2
    return {
      transform: 'translateX(calc(1.2 * var(--carousel-far-spacing))) translateY(calc(1.2 * var(--carousel-translate-y-far))) rotate(18deg) scale(calc(var(--carousel-scale-far) * 0.9))',
      opacity: 0,
      zIndex: 0,
      pointerEvents: 'none' as const,
    }
  }

  return (
    <section className="w-full pt-24 pb-16 flex flex-col items-center justify-between bg-background min-h-screen overflow-hidden">
      {/* Title block */}
      <div className="flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-[0.15em] text-blackcolor mb-4 text-center">
          DESI ROOTS. MODERN VIBES.
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3 font-bold tracking-[0.15em] text-blackcolor text-center">
          <span className="text-orange text-xl md:text-2xl">ETHINIC WEAR</span>
          <span className="text-xl md:text-2xl">|</span>
          <span className="text-teal text-xl md:text-2xl">STREET WEAR</span>
          <span className="text-xl md:text-2xl">|</span>
          <span className="text-xl md:text-2xl">FOR EVERY YOU</span>
        </div>
      </div>

      {/* Carousel block */}
      <div 
        className="relative w-full h-[450px] sm:h-[520px] md:h-[600px] mt-8 flex justify-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, idx) => {
          const r = getRelativeIndex(idx, activeIndex, items.length)
          const styles = getCardStyles(r)

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className="absolute w-[220px] sm:w-[280px] md:w-[350px] h-[320px] sm:h-[400px] md:h-[500px] border border-[#1F1F1F1A] rounded-[24px] md:rounded-[32px] p-1.5 md:p-2 bg-background select-none cursor-pointer"
              style={{
                ...styles,
                transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), z-index 0.6s step-end',
              }}
            >
              <div
                className="h-full w-full rounded-[18px] md:rounded-[24px] border border-[#1F1F1F1A] bg-cover bg-center overflow-hidden relative"
                style={{
                  backgroundImage: `url('${item.image}')`,
                }}
              >
                {/* Text overlay matching design */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pt-16 pb-5 px-4 text-center ">
                  <p className="text-white text-xs sm:text-sm md:text-base font-light tracking-wide drop-shadow-sm ">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Control buttons & indicators */}
      <div className="flex flex-col items-center mt-6">
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-blackcolor flex items-center justify-center text-blackcolor hover:bg-blackcolor hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Previous Slide"
          >
            <ArrowLeft size={20} />
          </button>

          <button className="bg-blackcolor text-white px-8 py-3.5 rounded-full font-semibold tracking-wider hover:opacity-90 active:scale-95 transition-all duration-300 shadow-md">
            Shop Now
          </button>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-blackcolor flex items-center justify-center text-blackcolor hover:bg-blackcolor hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Next Slide"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Dots indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex ? 'w-5 bg-orange' : 'w-2 bg-[#1F1F1F33]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carouselsection