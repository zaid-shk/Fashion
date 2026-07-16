"use client";

import Image from "next/image";
import Card from "../ui/Card";
import { title } from "process";

const FeaturedCategories = () => {
  const products = [
    {
      image:
        "https://i.pinimg.com/736x/20/7e/88/207e884568c8bc8a2748db9751c81e83.jpg",
      text: "Yellow parachute jump suit",
      title: "Men",
    },
    {
      image:
        "https://i.pinimg.com/736x/93/a4/4b/93a44be9d316ef33af5492f60dc8256b.jpg",
      text: "Urban Street Wear",
      title: "Women",
    },
    {
      image:
        "https://i.pinimg.com/736x/b3/34/c8/b334c8b573494374222e465046f90918.jpg",
      text: "Classic Denim Jacket",
      title: "Latest Collection",
    },
  ];
  return (
    <div className=" h-screen">
      <h2 className="text-2xl px-12 tracking-wider py-2">
        Featured Categories
      </h2>
      <div className="flex justify-between px-20 py-5">
        {products.map((item, index) => {
          // console.log(item);

          return (
            <Card
              key={index}
              image={item.image}
              width="370px"
              height="500px"
              title={item.title}
              blur={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedCategories;
