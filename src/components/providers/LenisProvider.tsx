"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });

    lenis.on("scroll", ({ progress }) => {
      setScrollProgress(progress);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {children}

      <div className="custom-scrollbar">
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
