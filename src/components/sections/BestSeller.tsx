"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import Card from "../ui/Card";

type Product = {
  id: number;
  image: string;
  title: string;
  price: string;
  category: string;
};

const allProducts: Product[] = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
    category: "trending",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
    category: "New",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
    category: "summer",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/ca/0e/67/ca0e6738acbbd25bb708bce4fb1c17f2.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
    category: "Bestsellers",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/736x/86/ab/70/86ab700715f8d14e48488784a6d7606e.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
    category: "trending",
  },
  {
    id: 6,
    image:
      "https://i.pinimg.com/736x/3e/e7/b9/3ee7b93ded7291cbd2a6ec7aa57bc140.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
    category: "New",
  },
  {
    id: 7,
    image:
      "https://i.pinimg.com/736x/67/2b/98/672b98700a36f4a73d7b85f6147c5846.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
    category: "summer",
  },
  {
    id: 8,
    image:
      "https://i.pinimg.com/736x/41/8e/6b/418e6b25838b802051a09835fcac7eba.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
    category: "Bestsellers",
  },
];

const filters = ["All", "trending", "New", "summer", "Bestsellers"];

const BestSeller = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeFilter);

  return (
    <section className="px-4 md:px-8 lg:px-16 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h3 className="text-xl md:text-2xl tracking-widest">Best Seller</h3>
        <div className="flex flex-wrap gap-3">
          {filters.map((name) => (
            <Button
              key={name}
              type="button"
              className="px-3 py-1 rounded-md capitalize text-sm md:text-md tracking-wide"
              whileTap={{ scale: 0.8 }}
              variant={activeFilter === name ? "primary" : "outline"}
              transition={{ duration: 0.2 }}
              whileHover={{
                backgroundColor: "black",
                color: "white",
                transition: { duration: 0.9 },
              }}
              animate={
                activeFilter === name
                  ? { backgroundColor: "black", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
              onClick={() => setActiveFilter(name)}
            >
              {name}
            </Button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-8">
          {filtered.map((item) => (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className="flex flex-col border border-[#1f1f1f1f] rounded-3xl p-2 hover:shadow-lg transition-shadow"
            >
              <Card image={item.image} height="400px" width="100%" />
              <div className="flex flex-col px-3 md:px-5 py-3">
                <p className="text-sm md:text-lg tracking-wide text-zinc-700/80">
                  {item.title}
                </p>
                <h4 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-widest">
                  {item.price}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 py-12">No products found</p>
      )}
    </section>
  );
};

export default BestSeller;
