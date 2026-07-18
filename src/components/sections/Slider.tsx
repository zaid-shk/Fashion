"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const items = [
  {
    id: 1,
    title: "Yellow parachute jump suit",
    image:
      "https://i.pinimg.com/1200x/7a/b5/ae/7ab5ae6b781a99a806c84dd8d554243d.jpg",
  },
  {
    id: 2,
    title: "Yellow parachute jump suit",
    image:
      "https://i.pinimg.com/1200x/ca/69/2a/ca692a1003f3a0924411fad05a730d7c.jpg",
  },
  {
    id: 3,
    title: "Yellow parachute jump suit",
    image:
      "https://i.pinimg.com/1200x/22/39/47/2239474ebb42f959c247c52aa18d542f.jpg",
  },
  {
    id: 4,
    title: "Yellow parachute jump suit",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Yellow parachute jump suit",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Yellow parachute jump suit",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    title: "Yellow parachute jump suit",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    title: "Yellow parachute jump suit",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    title: "Yellow parachute jump suit",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 10,
    title: "Yellow parachute jump suit",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
  },
];

function Carouselsection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Calculate shortest circular path/relative index
  const getRelativeIndex = (
    index: number,
    activeIndex: number,
    total: number,
  ) => {
    let diff = index - activeIndex;
    const half = total / 2;
    if (diff > half) {
      diff -= total;
    } else if (diff < -half) {
      diff += total;
    }
    return diff;
  };

  // Returns transform and styling based on relative position
  const getCardStyles = (r: number) => {
    if (r === 0) {
      return {
        transform: "translateX(0) translateY(0) rotate(0deg) scale(1)",
        opacity: 1,
        zIndex: 30,
        pointerEvents: "auto" as const,
      };
    }
    if (r === -1) {
      return {
        transform:
          "translateX(calc(-1 * var(--carousel-spacing))) translateY(var(--carousel-translate-y-side)) rotate(-6deg) scale(var(--carousel-scale-side))",
        opacity: 0.65,
        zIndex: 20,
        pointerEvents: "auto" as const,
      };
    }
    if (r === 1) {
      return {
        transform:
          "translateX(var(--carousel-spacing)) translateY(var(--carousel-translate-y-side)) rotate(6deg) scale(var(--carousel-scale-side))",
        opacity: 0.65,
        zIndex: 20,
        pointerEvents: "auto" as const,
      };
    }
    if (r === -2) {
      return {
        transform:
          "translateX(calc(-1 * var(--carousel-far-spacing))) translateY(var(--carousel-translate-y-far)) rotate(-12deg) scale(var(--carousel-scale-far))",
        opacity: 0.4,
        zIndex: 10,
        pointerEvents: "auto" as const,
      };
    }
    if (r === 2) {
      return {
        transform:
          "translateX(var(--carousel-far-spacing)) translateY(var(--carousel-translate-y-far)) rotate(12deg) scale(var(--carousel-scale-far))",
        opacity: 0.4,
        zIndex: 10,
        pointerEvents: "auto" as const,
      };
    }

    // Hidden cards transitioning in/out from sides
    if (r < -2) {
      return {
        transform:
          "translateX(calc(-2.5 * var(--carousel-far-spacing))) translateY(calc(1.5 * var(--carousel-translate-y-far))) rotate(-20deg) scale(0.4)",
        opacity: 0,
        zIndex: 0,
        pointerEvents: "none" as const,
      };
    }

    // r > 2
    return {
      transform:
        "translateX(calc(2.5 * var(--carousel-far-spacing))) translateY(calc(1.5 * var(--carousel-translate-y-far))) rotate(20deg) scale(0.4)",
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none" as const,
    };
  };

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
          const r = getRelativeIndex(idx, activeIndex, items.length);
          const styles = getCardStyles(r);

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className="absolute w-[220px] sm:w-[280px] md:w-[350px] h-[320px] sm:h-[400px] md:h-[500px] border border-[#1F1F1F1A] rounded-[24px] md:rounded-[32px] p-1.5 md:p-2 bg-background select-none cursor-pointer"
              style={{
                ...styles,
                transition:
                  "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
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
          );
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
                idx === activeIndex ? "w-5 bg-orange" : "w-2 bg-[#1F1F1F33]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carouselsection;
