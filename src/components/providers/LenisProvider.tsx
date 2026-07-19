"use client";

import { useEffect, createContext, useContext, useRef } from "react";
import Lenis from "lenis";

type LenisContextType = {
  resize: () => void;
};

const LenisContext = createContext<LenisContextType>({ resize: () => {} });

export const useLenisResize = () => useContext(LenisContext);

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    lenisRef.current = lenis;

    lenis.on("scroll", ({ progress }) => {
      if (thumbRef.current) {
        thumbRef.current.style.top = `${progress * 100}%`;
      }
    });

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const resize = () => {
    lenisRef.current?.resize();
  };

  return (
    <LenisContext.Provider value={{ resize }}>
      {children}

      <div className="custom-scrollbar">
        <div
          ref={thumbRef}
          className="custom-scrollbar-thumb"
        />
      </div>
    </LenisContext.Provider>
  );
}
