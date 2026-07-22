"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { easeIn, easeOut } from "motion";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useLenisResize } from "@/components/providers/LenisProvider";
import { useAppSelector } from "@/lib/redux/hooks";
import { selectFeaturedProducts } from "@/lib/redux/slices/productSlice";

const filters = ["All", "trending", "New", "summer", "Bestsellers"];

const Collections = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);
  const { resize } = useLenisResize();
  const allProducts = useAppSelector(selectFeaturedProducts);

  useEffect(() => {
    resize();
  }, [visibleCount]);

  const filtered =
    activeFilter === "All"
      ? allProducts
      : allProducts.filter((p) => p.tag === activeFilter);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section className="px-4 md:px-8 lg:px-16 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h3 className="text-xl md:text-2xl tracking-wider">Collections</h3>
        <div className="flex flex-wrap gap-3">
          {filters.map((name) => (
            <Button
              key={name}
              type="button"
              className="px-3 py-1 rounded-md capitalize text-sm md:text-md tracking-wide"
              whileTap={{ scale: 0.8 }}
              variant={activeFilter === name ? "primary" : "outline"}
              transition={{ duration: 0.2, ease: easeIn }}
              whileHover={{
                backgroundColor: "black",
                color: "white",
                transition: { duration: 0.9, ease: easeIn },
              }}
              animate={
                activeFilter === name
                  ? { backgroundColor: "black", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
              onClick={() => {
                setActiveFilter(name);
                setVisibleCount(4);
              }}
            >
              {name}
            </Button>
          ))}
        </div>
      </div>

      {visible.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-8">
          {visible.map((item) => (
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

      {hasMore && (
        <div className="flex justify-center py-5">
          <Button
            type="button"
            className="px-5 py-2 rounded-md capitalize text-lg md:text-xl tracking-wider"
            whileTap={{ scale: 0.8 }}
            variant="outline"
            transition={{ duration: 0.2, ease: easeOut }}
            whileHover={{
              backgroundColor: "black",
              color: "white",
              transition: { duration: 0.5 },
            }}
            animate={{ backgroundColor: "white", color: "black" }}
            onClick={() => setVisibleCount((prev) => prev + 4)}
          >
            Load More
          </Button>
        </div>
      )}
    </section>
  );
};

export default Collections;
