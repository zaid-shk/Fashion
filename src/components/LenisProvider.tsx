"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolling, setScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    let timeout: ReturnType<typeof setTimeout>;

    lenis.on("scroll", ({ progress }) => {
      setScrolling(true);
      setScrollProgress(progress);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setScrolling(false);
      }, 400);
    });

    return () => {
      lenis.destroy();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {children}

      <div className={`custom-scrollbar ${scrolling ? "is-scrolling" : ""}`}>
        <div
          className="custom-scrollbar-thumb"
          style={{
            top: `${scrollProgress * 100}%`,
          }}
        />
      </div>
    </>
  );
}