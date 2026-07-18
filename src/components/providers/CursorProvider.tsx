"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export default function CursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const mouseX = useMotionValue(755);
  const mouseY = useMotionValue(-100);

  // Smooth follow
  const x = useSpring(mouseX, {
    stiffness: 300,
    damping: 25,
    mass: 0.2,
  });

  const y = useSpring(mouseY, {
    stiffness: 300,
    damping: 25,
    mass: 0.2,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 8);
      mouseY.set(e.clientY - 7);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      {children}

      <motion.div
        className="fixed top-0 left-0 z-[9999] h-3 w-3 rounded-full bg-white mix-blend-difference pointer-events-none"
        style={{
          x,
          y,
        }}
      />
    </>
  );
}
