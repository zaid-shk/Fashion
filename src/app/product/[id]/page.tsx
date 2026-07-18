"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { Heart, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

const products = [
  {
    id: "1",
    image:
      "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
    description:
      "Handcrafted linen-blend shirt with a relaxed fit. Perfect for summer days with a breathable fabric that keeps you cool and stylish.",
    category: "Men",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#8B5E3C", "#2D4A3E", "#1A1A1A", "#D4C5B0"],
  },
  {
    id: "2",
    image:
      "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
    description:
      "Handcrafted linen-blend shirt with a relaxed fit. Perfect for summer days with a breathable fabric that keeps you cool and stylish.",
    category: "Women",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#5B4B3C", "#2D4A3E", "#1A1A1A"],
  },
  {
    id: "3",
    image:
      "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
    description:
      "Handcrafted linen-blend shirt with a relaxed fit. Perfect for summer days with a breathable fabric that keeps you cool and stylish.",
    category: "New Arrivals",
    sizes: ["S", "M", "L"],
    colors: ["#8B5E3C", "#1A1A1A", "#D4C5B0"],
  },
  {
    id: "4",
    image:
      "https://i.pinimg.com/736x/ca/0e/67/ca0e6738acbbd25bb708bce4fb1c17f2.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
    description:
      "Handcrafted linen-blend shirt with a relaxed fit. Perfect for summer days with a breathable fabric that keeps you cool and stylish.",
    category: "Men",
    sizes: ["M", "L", "XL"],
    colors: ["#2D4A3E", "#1A1A1A"],
  },
  {
    id: "5",
    image:
      "https://i.pinimg.com/736x/86/ab/70/86ab700715f8d14e48488784a6d7606e.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
    description:
      "Handcrafted linen-blend shirt with a relaxed fit. Perfect for summer days with a breathable fabric that keeps you cool and stylish.",
    category: "Women",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#8B5E3C", "#D4C5B0"],
  },
  {
    id: "6",
    image:
      "https://i.pinimg.com/736x/3e/e7/b9/3ee7b93ded7291cbd2a6ec7aa57bc140.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
    description:
      "Handcrafted linen-blend shirt with a relaxed fit. Perfect for summer days with a breathable fabric that keeps you cool and stylish.",
    category: "New Arrivals",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#5B4B3C", "#2D4A3E"],
  },
  {
    id: "7",
    image:
      "https://i.pinimg.com/736x/67/2b/98/672b98700a36f4a73d7b85f6147c5846.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
    description:
      "Handcrafted linen-blend shirt with a relaxed fit. Perfect for summer days with a breathable fabric that keeps you cool and stylish.",
    category: "Men",
    sizes: ["S", "M", "XL"],
    colors: ["#8B5E3C", "#1A1A1A", "#D4C5B0"],
  },
  {
    id: "8",
    image:
      "https://i.pinimg.com/736x/41/8e/6b/418e6b25838b802051a09835fcac7eba.jpg",
    title: "Linen Blend Lavender Shirt",
    price: "$5,600",
    description:
      "Handcrafted linen-blend shirt with a relaxed fit. Perfect for summer days with a breathable fabric that keeps you cool and stylish.",
    category: "Women",
    sizes: ["S", "M", "L"],
    colors: ["#2D4A3E", "#D4C5B0", "#5B4B3C"],
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  const product = products.find((p) => p.id === id) || products[0];
  const images = [product.image, product.image, product.image];

  return (
    <main className="min-h-screen px-4 md:px-8 lg:px-16 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-3xl bg-[#f5f0eb]">
            <motion.div
              key={imageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative h-[400px] md:h-[600px]"
            >
              <Image
                src={images[imageIndex]}
                alt={product.title}
                fill
                className="object-cover"
              />
            </motion.div>

            <button
              onClick={() =>
                setImageIndex(
                  (prev) => (prev - 1 + images.length) % images.length,
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() =>
                setImageIndex((prev) => (prev + 1) % images.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImageIndex(i)}
                  className={`w-2 h-2 rounded-full transition cursor-pointer ${
                    i === imageIndex ? "bg-black w-4" : "bg-black/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setImageIndex(i)}
                className={`relative h-20 md:h-24 rounded-xl overflow-hidden border-2 transition cursor-pointer ${
                  i === imageIndex ? "border-black" : "border-transparent"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm text-gray-400 tracking-wider uppercase">
              {product.category}
            </p>
            <h1 className="text-2xl md:text-4xl font-semibold tracking-wide mt-2">
              {product.title}
            </h1>
            <p className="text-2xl md:text-3xl font-bold tracking-widest mt-3 text-neutral-900">
              {product.price}
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {product.description}
          </p>

          <div>
            <p className="text-sm font-semibold tracking-wider mb-3">SIZE</p>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-10 w-14 rounded-lg border text-sm font-medium transition cursor-pointer ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "border-gray-300 text-gray-600 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wider mb-3">COLOR</p>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition cursor-pointer ${
                    selectedColor === color
                      ? "border-black scale-110"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              className="flex-1 py-3 rounded-xl text-base tracking-wider"
              variant="primary"
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart size={18} />
              Add to Cart
            </Button>
            <Button
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              variant="outline"
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={18} />
            </Button>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-2 text-sm text-gray-500 space-y-2">
            <p>Free shipping on orders over $100</p>
            <p>Estimated delivery: 3-5 business days</p>
            <p>Easy 30-day returns</p>
          </div>
        </div>
      </div>
    </main>
  );
}
