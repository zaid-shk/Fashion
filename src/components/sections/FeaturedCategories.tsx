"use client";

import Link from "next/link";
import { motion } from "motion/react";

const categories = [
  {
    image:
      "https://i.pinimg.com/736x/20/7e/88/207e884568c8bc8a2748db9751c81e83.jpg",
    title: "Men",
    href: "/men",
  },
  {
    image:
      "https://i.pinimg.com/736x/93/a4/4b/93a44be9d316ef33af5492f60dc8256b.jpg",
    title: "Women",
    href: "/women",
  },
  {
    image:
      "https://i.pinimg.com/736x/b3/34/c8/b334c8b573494374222e465046f90918.jpg",
    title: "Latest Collection",
    href: "/newarrivals",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-12">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xl md:text-2xl tracking-wider">
          Featured Categories
        </h2>
        <div className="flex-1 h-px bg-gray-300/50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((item, index) => (
          <Link key={index} href={item.href}>
            <motion.div
              className="relative overflow-hidden rounded-3xl group cursor-pointer bg-cover bg-center"
              style={{
                height: "clamp(300px, 50vh, 500px)",
                backgroundImage: `url('${item.image}')`,
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-all duration-500 group-hover:from-black/80" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="h-px bg-white/20 w-full mb-4 transition-all duration-500 group-hover:w-1/2" />
                <h3 className="text-2xl md:text-3xl text-white font-semibold tracking-wide">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
