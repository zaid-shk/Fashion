import Image from "next/image";
import img from "../../../public/images/two.png";

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
          className="h-full w-full rounded-2xl object-cover "
        />
      </div>
      <div className="absolute text-white font-bold xl:top-10 xl:left-15 lg:top-5 lg:left-10 md:top-5 md:left-10">
        <h3 className="uppercase py-5 xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl  leading-tight tracking-wide ">
          Flat 20% off on <br /> newest styles <br /> for you-
        </h3>
        <div className="rounded-xl cursor-pointer flex items-center justify-center bg-(--textcolor) backdrop-blur-sm w-45 py-2 px-4 ">
          <h3 className="text-xl text-(--secondrytext)">Discover more</h3>
        </div>
      </div>
      <div className="absolute bottom-10 right-5 hidden md:block">
          <p className="capitalize w-95 text-xl leading-tight tracking-wider">Explore the streets of fashion the way You never Imagined, we create The most unique blend of modern aesthetics and elegant S</p>
      </div>
    </div>
  );
};

export default Hero;
