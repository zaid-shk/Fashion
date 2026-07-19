import Image from "next/image";
import Button from "../ui/Button";

const Hero = () => {
  const img1 =
    "https://i.pinimg.com/1200x/9e/87/7a/9e877a0dad079c0f5d3c11670663b8a0.jpg";
  return (
    <div className="flex justify-center relative">
      <div className="border-2 border-white/40 rounded-3xl lg:h-[90vh] md:h-[50vh] h-[50vh] w-[97vw] m-1">
        <Image
          src={img1}
          alt="hero"
          width={1920}
          height={1080}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
      <div className="absolute text-white font-bold top-5 left-5 md:top-10 md:left-15">
        <h3 className="uppercase py-5 text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight tracking-wide">
          Flat 20% off on <br /> newest styles <br /> for you-
        </h3>
        <div>
          <Button
            variant="outline"
            className="px-5 py-1.5 md:px-6 md:py-2 tracking-widest rounded-lg bg-white/10 backdrop-blur-md border-white/30 text-white/90 hover:bg-black hover:text-white hover:border-0"
            whileTap={{ scale: 0.9 }}
          >
            Discover Now
          </Button>
        </div>
      </div>
      <div className="absolute bottom-5 right-5 md:bottom-10 md:right-15 hidden md:block">
        <p className="capitalize max-w-[300px] lg:max-w-[400px] text-sm lg:text-xl text-right leading-tight tracking-wider">
          Explore the streets of fashion the way You never Imagined, we create
          The most unique blend of modern aesthetics and elegant S
        </p>
      </div>
    </div>
  );
};

export default Hero;
