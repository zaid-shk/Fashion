"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@/lib/redux/slices/cartSlice";
import { toggleWishlist } from "@/lib/redux/slices/wishlistSlice";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.cart.items);

  const subtotal = items.reduce((sum, i) => sum + i.priceNum * i.quantity, 0);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

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
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          >
            <ShoppingBag
              size={80}
              className="mx-auto text-black/10 mb-6"
              strokeWidth={1}
            />
          </motion.div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Your Cart is Empty
          </h1>
          <p className="mt-3 text-black/50 text-sm md:text-base tracking-wide">
            Looks like you haven&apos;t added anything yet.
            <br />
            Let&apos;s find something for you.
          </p>
          <Link href="/men">
            <Button
              variant="primary"
              className="mt-8 px-6 py-2 tracking-wider rounded-lg"
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft size={16} />
              Start Shopping
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
            My Shopping Cart
          </h1>
          <button
            onClick={() => dispatch(clearCart())}
            className="text-sm font-bold text-black/40 hover:text-red-500 transition-colors tracking-wider underline underline-offset-4"
          >
            Clear All
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex gap-4 md:gap-6 p-3 md:p-4 border border-[#1f1f1f1f] rounded-2xl hover:shadow-sm transition-shadow"
              >
                <div className="relative w-24 h-28 md:w-28 md:h-32 shrink-0 rounded-xl overflow-hidden bg-zinc-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 min-w-0 flex-col gap-1">
                  <div className="flex justify-between gap-3">
                    <h3 className="text-sm md:text-base font-medium truncate">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 border border-black/10 rounded-lg overflow-hidden shrink-0">
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: item.quantity - 1,
                            })
                          )
                        }
                        className="p-1.5 hover:bg-zinc-100 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: item.quantity + 1,
                            })
                          )
                        }
                        className="p-1.5 hover:bg-zinc-100 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm md:text-base font-semibold tracking-widest">
                    {item.price}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <Button onClick={() => { dispatch(toggleWishlist({ id: item.id, title: item.title, price: item.price, priceNum: item.priceNum, image: item.image })); toast.success("Added to wishlist!"); }} children='Move to Wishlist' className="px-4 py-3 w-full mr-5 rounded-lg border border-[#1f1f1f1f] tracking-wider" animate={{ backgroundColor: "white", color: "black" }} whileHover={{ backgroundColor: 'black', color: 'white', transition: { duration: 0.5 } }}
                      whileTap={{ scale: 0.95 }} />

                    <motion.button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-white/90 bg-black/40 backdrop-blur-md px-3.5 py-3.5 rounded-full shrink-0"
                      whileHover={{ backgroundColor: "Red", color: 'white', transition: { duration: 0.3 } }}
                      whileTap={{ scale: 0.90 }}
                    >
                      <Trash2 size={19} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:w-80 shrink-0">
            <div className="border h-80 border-[#1f1f1f1f] rounded-2xl p-5 md:p-6 sticky top-24">
              <h2 className="text-lg font-bold tracking-tight mb-4">
                Order Summary
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-black/60">
                  <span>Items ({totalItems})</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-black/60">
                  <span>Shipping</span>
                  <span className="text-teal font-medium">Free</span>
                </div>
                <div className="h-px bg-black/5 my-3" />
                <div className="flex justify-between text-base font-bold">
                  <span>Total</span>
                  <span className="tracking-widest">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
              </div>
              <Button
                variant="primary"
                className="w-full mt-6 py-2.5 tracking-wider rounded-lg text-sm"
                whileTap={{ scale: 0.95 }}
              >
                Checkout — ${subtotal.toLocaleString()}
              </Button>
              <Link href="/men">
                <Button
                  variant="outline"
                  className="w-full mt-2 py-2.5 tracking-wider rounded-lg text-sm"
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft size={14} />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
