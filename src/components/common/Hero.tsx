import Image from "next/image";
import img from "../../../public/images/two.png";
import Button from "../ui/Button";

const Hero = () => {
  const img1 =
    "https://i.pinimg.com/1200x/9e/87/7a/9e877a0dad079c0f5d3c11670663b8a0.jpg";
  return (
    <div className="flex justify-center relative">
      <div className="border-2 border-white/40 rounded-3xl lg:h-[90vh] lg:w-[97vw] md:h-[50vh] md:w-[97vw] h-[40vh] w-[100vw]  m-1">
        <Image
          src={img1}
          alt="hero"
          width={1920}
          height={1080}
          className="h-full w-full rounded-xl object-cover "
        />
      </div>
      <div className="absolute text-white font-bold xl:top-10 xl:left-15 lg:top-5 lg:left-10 md:top-5 md:left-10">
        <h3 className="uppercase py-5 xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl  leading-tight tracking-wide ">
          Flat 20% off on <br /> newest styles <br /> for you-
        </h3>
        <div className="">
          <Button
            children="Discover Now"
            variant="outline"
            className="px-5 py-1.5 tracking-wider rounded-lg bg-neutral-900/10 backdrop-blur-sm transition-all duration-300 outline-0"
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              duration: 0.1,
            }}
            animate={{ color: "black", backgroundColor: "none", }}
          />
        </div>
      </div>
      <div className="absolute bottom-10 right-15 hidden md:block">
        <p className="capitalize w-95 text-xl text-right leading-tight tracking-wider">
          Explore the streets of fashion the way You never Imagined, we create
          The most unique blend of modern aesthetics and elegant S
        </p>
      </div>
    </div>
  );
};

export default Hero;
