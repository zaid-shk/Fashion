import Hero from "@/components/sections/Hero";
import Slider from "@/components/sections/Slider";
import FeaturedCategories from "@/components/sections/FeaturedCategories";
import Collections from "@/components/sections/Collections";
import BestSeller from "@/components/sections/BestSeller";
import Line from "@/components/sections/Line";

export default function Home() {
  return (
    <div>
      <Hero />
      <Slider />
      <FeaturedCategories />
      <Collections />
      <BestSeller />
      <Line />
    </div>
  );
}
