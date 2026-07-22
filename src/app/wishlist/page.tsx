"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Heart, ShoppingBag, ArrowLeft, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { toggleWishlist, clearWishlist } from "@/lib/redux/slices/wishlistSlice";
import { addToCart } from "@/lib/redux/slices/cartSlice";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";

export default function WishlistPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.wishlist.items);

  if (items.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-sm"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          >
            <Heart
              size={80}
              className="mx-auto text-black/10 mb-6"
              strokeWidth={1}
            />
          </motion.div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Your Wishlist is Empty
          </h1>
          <p className="mt-3 text-black/50 text-sm md:text-base tracking-wide">
            Save your favorite items here and come back anytime.
          </p>
          <Link href="/women">
            <Button
              variant="primary"
              className="mt-8 px-6 py-2 tracking-wider rounded-lg"
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft size={16} />
              Explore Products
            </Button>
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 md:px-8 lg:px-16 py-6 md:py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            My Wishlist ({items.length})
          </h1>
          <button
            onClick={() => dispatch(clearWishlist())}
            className="text-sm text-black/40 hover:text-red-500 transition-colors tracking-wide underline underline-offset-4"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group flex flex-col border border-[#1f1f1f1f] rounded-2xl md:rounded-3xl px-2 py-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full">
                <Link href={`/product/${item.id}`} className="block w-full">
                  <div className="relative w-full h-[300px] rounded-xl overflow-hidden bg-zinc-50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                <button
                  onClick={() => {
                    dispatch(toggleWishlist(item));
                    toast.success("Removed from wishlist");
                  }}
                  className="absolute top-3 right-3 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="py-3 px-3 flex flex-col gap-1.5 w-full">
                <h3 className="text-sm md:text-base tracking-wide text-black/60 group-hover:text-black transition-colors truncate">
                  {item.title}
                </h3>
                <p className="text-lg md:text-xl tracking-widest font-semibold">
                  {item.price}
                </p>
              </div>
              <div className="px-3 pb-3 w-full">
                <Button
                  variant="primary"
                  className="w-full py-1.5 text-xs md:text-sm tracking-wider rounded-lg"
                  whileTap={{ scale: 0.90 }}
                  onClick={() => {
                    dispatch(addToCart({ id: item.id, title: item.title, price: item.price, priceNum: item.priceNum, image: item.image }));
                    toast.success("Added to cart!");
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
