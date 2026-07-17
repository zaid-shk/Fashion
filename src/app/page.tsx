import Image from "next/image";
import Hero from "@/components/common/Hero";
import Slider from "@/components/common/Slider";
import FeaturedCategories from "@/components/product/FeaturedCategories";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Collections from "@/components/common/Collections";
import BestSeller from "@/components/common/BestSeller";
import Line from "@/components/common/Line";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Slider />
      <FeaturedCategories />
      <Collections />
      <BestSeller />
      <Line />
      {/* <Card height="400px" width="300px" title='Men' /> */}
    </div>
  );
}
