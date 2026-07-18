"use client";

import { motion } from "motion/react";

const Line = () => {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-gray-300 text-4xl md:text-5xl font-serif leading-none">
            &ldquo;
          </span>
          <p className="capitalize text-base md:text-xl tracking-widest text-gray-600 italic -mt-3">
            Turning Fashion into necessity
          </p>
          <span className="text-gray-300 text-4xl md:text-5xl font-serif leading-none block -mt-2">
            &rdquo;
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full bg-gradient-to-r from-teal via-teal/80 to-teal rounded-xl md:rounded-2xl flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 py-5 md:py-7 px-6 md:px-10 shadow-lg"
        >
          <span className="text-white/90 text-lg sm:text-xl md:text-2xl font-light tracking-widest uppercase">
            Flat
          </span>
          <span className="text-orange text-2xl sm:text-3xl md:text-5xl font-bold capitalize tracking-wide">
            20% discount
          </span>
          <span className="text-white/90 text-lg sm:text-xl md:text-2xl font-light tracking-widest uppercase">
            for first customers
          </span>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-xs mt-8"
        />
      </div>
    </section>
  );
};

export default Line;
