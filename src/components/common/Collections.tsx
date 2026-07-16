"use client";

import { easeIn, easeOut } from "motion";
import Button from "../ui/Button";
import Card from "../ui/Card";

const Products = [
  {
    image:
      "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
  },
  {
    image:
      "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
  },
  {
    image:
      "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
  },
  {
    image:
      "https://i.pinimg.com/736x/ca/0e/67/ca0e6738acbbd25bb708bce4fb1c17f2.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
  },
  {
    image:
      "https://i.pinimg.com/736x/86/ab/70/86ab700715f8d14e48488784a6d7606e.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
  },
  {
    image:
      "https://i.pinimg.com/736x/3e/e7/b9/3ee7b93ded7291cbd2a6ec7aa57bc140.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
  },
  {
    image:
      "https://i.pinimg.com/736x/67/2b/98/672b98700a36f4a73d7b85f6147c5846.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
  },
  {
    image:
      "https://i.pinimg.com/736x/41/8e/6b/418e6b25838b802051a09835fcac7eba.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
  },
];

const Collections = () => {
  const Link = [
    { name: "trending" },
    { name: "New" },
    { name: "summer" },
    { name: "Bestsellers" },
  ];
  // console.log(Images);

  return (
    <div>
      <div className="flex justify-between items-center px-12">
        <h3 className="text-2xl tracking-wider py-2">Collections</h3>
        <div className="flex gap-5 ">
          {Link.map((item, index) => {
            // console.log(item, index);

            return (
              <div key={index} className="">
                <Button
                  children={item.name}
                  type="button"
                  className="px-3 py-1 rounded-md capitalize text-md tracking-wide"
                  whileTap={{ scale: 0.8 }}
                  variant="outline"
                  transition={{
                    duration: 0.2,
                    ease: easeIn,
                  }}
                  whileHover={{
                    backgroundColor: "black",
                    color: "white",
                    transition: {
                      duration: 0.9,
                      ease: easeIn,
                    },
                  }}
                  animate={{ backgroundColor: "white", color: "black" }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap gap-8 items-center justify-center py-8">
        {Products.map((item, index) => {
          return (
            <div key={index} className="flex flex-col">
              <Card image={item.image} height="450px" width="300px" />
              <div className="flex flex-col px-5 ">
                <p className="text-xl tracking-wide text-zinc-700/80">
                  {item.title}
                </p>
                <h4 className="text-lg font-bold text-neutral-900 tracking-widest">
                  {item.price}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center py-5">
        <Button
          children="Load More"
          type="button"
          className="px-5 py-2 rounded-md capitalize text-xl tracking-wider"
          whileTap={{ scale: 0.8 }}
          variant="outline"
          transition={{ duration: 0.2, ease: easeOut }}
          whileHover={{ backgroundColor: "black", color: "white" }}
          animate={{ backgroundColor: "white", color: "black" }}
        />
      </div>
    </div>
  );
};

export default Collections;
