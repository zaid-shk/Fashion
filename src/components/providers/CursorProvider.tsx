"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function CursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const cursorX = useSpring(mouseX, { stiffness: 250, damping: 20, mass: 0.3 });
  const cursorY = useSpring(mouseY, { stiffness: 250, damping: 20, mass: 0.3 });

  const dotX = useSpring(mouseX, { stiffness: 500, damping: 30, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 30, mass: 0.1 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onHover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onHover);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {children}

      {!isTouchDevice && (
        <motion.div
          className="fixed top-0 left-0 z-[9999] pointer-events-none"
          style={{ x: cursorX, y: cursorY }}
        >
          <motion.div
            className="-translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#1f1f1f]"
            animate={{
              width: hovering ? 56 : 36,
              height: hovering ? 56 : 36,
              backgroundColor: hovering ? "rgba(31,31,31,0.08)" : "transparent",
            }}
            transition={{ duration: 0.25 }}
          />
        </motion.div>
      )}

      {!isTouchDevice && (
        <motion.div
          className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{ x: dotX, y: dotY }}
        >
          <motion.div
            className="h-2 w-2 rounded-full bg-[#1f1f1f]"
            animate={{ scale: hovering ? 0.6 : 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      )}
    </>
  );
}
