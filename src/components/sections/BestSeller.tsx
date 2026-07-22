"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useAppSelector } from "@/lib/redux/hooks";
import { selectFeaturedProducts } from "@/lib/redux/slices/productSlice";

const filters = ["All", "trending", "New", "summer", "Bestsellers"];

const BestSeller = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const allProducts = useAppSelector(selectFeaturedProducts);

  const filtered =
    activeFilter === "All"
      ? allProducts
      : allProducts.filter((p) => p.tag === activeFilter);

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
