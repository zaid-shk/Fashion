import Image from "next/image";
import { motion } from "motion/react";

const Card = ({ height, width, title, image, blur = false }) => {
  return (
    <div>
      <motion.div className={`relative w-[${width}] h-[${height}]`}>
        <img
          src={image}
          alt=""
          style={{
            width: width,
            height: height,
          }}
          draggable={false}
          className="object-cover rounded-3xl"
        />
        {blur && (
          <div className="absolute bg-neutral-900/10 backdrop-blur-xs pb-2 bottom-0 rounded-b-3xl flex items-center flex-col gap-3 w-full">
            <div className="h-[1px] bg-white/10 w-full"></div>
            <h3 className="text-xl text-white">{title}</h3>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Card;
