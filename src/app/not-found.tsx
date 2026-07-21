"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Home } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-[10rem] md:text-[14rem] font-bold leading-none tracking-tighter text-black/5 select-none"
            animate={{ opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            404
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="-mt-10 md:-mt-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
            Out of Style
          </h1>
          <p className="mt-4 text-base md:text-lg text-black/50 leading-relaxed tracking-wide">
            The page you are looking for doesn&apos;t exist.
            <br />
            Maybe it never was in fashion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Link href="/">
            <Button
              variant="primary"
              className="px-6 py-2 tracking-wider rounded-lg"
              whileTap={{ scale: 0.9 }}
            >
              <Home size={16} />
              Home
            </Button>
          </Link>
          <Button
            variant="outline"
            className="px-6 py-2 tracking-wider rounded-lg"
            whileTap={{ scale: 0.9 }}
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={16} />
            Go Back
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
