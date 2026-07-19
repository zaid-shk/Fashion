import Image from "next/image";
import { motion } from "motion/react";

type CardProps = {
  height?: number | string;
  width?: number | string;
  title?: string;
  blur?: boolean;
  image?: string;
  className?: string;
};

const Card = ({
  height,
  width,
  title,
  image,
  blur = false,
  className,
}: CardProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl group ${className || ""}`}
      style={{ width, height }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {image && (
        <Image
          src={image}
          alt={title || ""}
          fill
          draggable={false}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      {blur && (
        <div className="absolute bg-neutral-900/10 backdrop-blur-xs pb-2 bottom-0 rounded-b-3xl flex items-center flex-col gap-3 w-full">
          <div className="h-[1px] bg-white/10 w-full" />
          <h3 className="text-lg md:text-xl text-white">{title}</h3>
        </div>
      )}
    </motion.div>
  );
};

export default Card;
