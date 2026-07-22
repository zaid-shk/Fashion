"use client";

import { useMemo, useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Heart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { addToCart } from "@/lib/redux/slices/cartSlice";
import { toggleWishlist } from "@/lib/redux/slices/wishlistSlice";
import { selectWomenProducts } from "@/lib/redux/slices/productSlice";
import toast from "react-hot-toast";

interface ProductsProps {
    sortBy: string;
    activeFilters: { categories: string[]; priceMin: string; priceMax: string };
    onCount: (pageItems: number, totalItems: number) => void;
}

const ITEMS_PER_PAGE = 12;

const WomenProducts = ({ sortBy, activeFilters, onCount }: ProductsProps) => {
    const [page, setPage] = useState(1);
    const dispatch = useAppDispatch();
    const ProductData = useAppSelector(selectWomenProducts);
    const wishlistItems = useAppSelector((s) => s.wishlist.items);
    const likedIds = new Set(wishlistItems.map((i) => i.id));

    const filtered = useMemo(() => {
        let result = [...ProductData];

        const cats = activeFilters.categories;
        if (cats.length > 0 && !cats.includes("All")) {
            result = result.filter((p) => cats.includes(p.category));
        }

        const min = Number(activeFilters.priceMin);
        const max = Number(activeFilters.priceMax);
        result = result.filter((p) => p.priceNum >= min && p.priceNum <= max);

        switch (sortBy) {
            case "Price: Low to High":
                result.sort((a, b) => a.priceNum - b.priceNum);
                break;
            case "Price: High to Low":
                result.sort((a, b) => b.priceNum - a.priceNum);
                break;
            case "Newest":
                result.reverse();
                break;
            case "Best Selling":
                result.sort((a, b) => b.priceNum - a.priceNum);
                break;
            default:
                break;
        }

        return result;
    }, [sortBy, activeFilters]);

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    useEffect(() => {
        setPage(1);
    }, [sortBy, activeFilters]);

    useEffect(() => {
        onCount(paginated.length, filtered.length);
    }, [paginated.length, filtered.length, onCount]);

    return (
        <div>
            {paginated.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 py-5">
                    {paginated.map((item) => (
                        <div key={item.id} className="group flex flex-col items-center border border-[#1f1f1f1f] rounded-2xl md:rounded-3xl px-2 py-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="relative w-full">
                                <Link
                                    href={`/product/${item.id}`}
                                    className="block w-full"
                                >
                                    <Card image={item.image} height='350px' width='100%' />
                                </Link>
                                <button
                                    onClick={() => { const isRemoving = likedIds.has(item.id); dispatch(toggleWishlist({ id: item.id, title: item.title, price: item.price, priceNum: item.priceNum, image: item.image })); toast.success(isRemoving ? "Removed from wishlist" : "Added to wishlist!"); }}
                                    className="absolute top-3 right-4 p-1.5 rounded-full transition-colors"
                                >
                                    <Heart
                                        fill={likedIds.has(item.id) ? "#ef4444" : "none"}
                                        color={likedIds.has(item.id) ? "#ef4444" : "white"}
                                        size={25}
                                    />
                                </button>
                            </div>
                            <div className="py-3 px-3 flex flex-col gap-1.5 w-full">
                                <h3 className="text-sm md:text-lg tracking-wide text-black/60 group-hover:text-black transition-colors">{item.title}</h3>
                                <p className="text-lg md:text-2xl tracking-widest font-semibold">{item.price}</p>
                            </div>
                            <div className="flex gap-4 pb-2 px-3 w-full">
                                <Link href={`/product/${item.id}`}>
                                    <Button variant="primary" className="px-5 py-1.5 text-xs md:text-sm tracking-wider rounded-lg flex-1" whileTap={{ scale: 0.90 }}>Buy Now</Button></Link>
                                <Button variant="outline" className="px-5 py-1.5 text-xs md:text-sm tracking-wider rounded-lg flex-1" whileTap={{ scale: 0.90 }} onClick={() => { dispatch(addToCart({ id: item.id, title: item.title, price: item.price, priceNum: item.priceNum, image: item.image })); toast.success("Added to cart!"); }}>Add to Cart</Button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-400 py-16 text-lg">No products match your filters</p>
            )}
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
    );
};

export default WomenProducts;
