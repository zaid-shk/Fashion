"use client";

import { useMemo, useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Heart } from "lucide-react";

type Product = {
    id: number;
    image: string;
    title: string;
    price: string;
    priceNum: number;
    category: string;
};

const ProductData: Product[] = [
    { id: 1, image: "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg", title: "Floral Summer Dress", price: "$6,200", priceNum: 6200, category: "T-Shirts" },
    { id: 2, image: "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg", title: "Cotton Blend Tee", price: "$3,400", priceNum: 3400, category: "T-Shirts" },
    { id: 3, image: "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg", title: "Silk Blouse White", price: "$5,800", priceNum: 5800, category: "Shirts" },
    { id: 4, image: "https://i.pinimg.com/736x/ca/0e/67/ca0e6738acbbd25bb708bce4fb1c17f2.jpg", title: "Denim Jacket Blue", price: "$9,200", priceNum: 9200, category: "Jackets" },
    { id: 5, image: "https://i.pinimg.com/736x/86/ab/70/86ab700715f8d14e48488784a6d7606e.jpg", title: "High Waist Pants", price: "$4,800", priceNum: 4800, category: "Pants" },
    { id: 6, image: "https://i.pinimg.com/736x/3e/e7/b9/3ee7b93ded7291cbd2a6ec7aa57bc140.jpg", title: "Skinny Jeans Black", price: "$5,500", priceNum: 5500, category: "Jeans" },
    { id: 7, image: "https://i.pinimg.com/736x/67/2b/98/672b98700a36f4a73d7b85f6147c5846.jpg", title: "Cashmere Sweater", price: "$7,800", priceNum: 7800, category: "Sweaters" },
    { id: 8, image: "https://i.pinimg.com/736x/41/8e/6b/418e6b25838b802051a09835fcac7eba.jpg", title: "Pleated Skirt Beige", price: "$3,900", priceNum: 3900, category: "Shorts" },
    { id: 9, image: "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg", title: "Leather Handbag", price: "$12,500", priceNum: 12500, category: "Accessories" },
    { id: 10, image: "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg", title: "Linen Shirt Olive", price: "$4,600", priceNum: 4600, category: "Shirts" },
    { id: 11, image: "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg", title: "Striped Crop Top", price: "$2,800", priceNum: 2800, category: "T-Shirts" },
    { id: 12, image: "https://i.pinimg.com/736x/ca/0e/67/ca0e6738acbbd25bb708bce4fb1c17f2.jpg", title: "Puffer Jacket Cream", price: "$10,200", priceNum: 10200, category: "Jackets" },
    { id: 13, image: "https://i.pinimg.com/736x/86/ab/70/86ab700715f8d14e48488784a6d7606e.jpg", title: "Wide Leg Pants", price: "$4,400", priceNum: 4400, category: "Pants" },
    { id: 14, image: "https://i.pinimg.com/736x/3e/e7/b9/3ee7b93ded7291cbd2a6ec7aa57bc140.jpg", title: "Bootcut Jeans Blue", price: "$5,200", priceNum: 5200, category: "Jeans" },
    { id: 15, image: "https://i.pinimg.com/736x/67/2b/98/672b98700a36f4a73d7b85f6147c5846.jpg", title: "Knit Sweater Pink", price: "$6,100", priceNum: 6100, category: "Sweaters" },
    { id: 16, image: "https://i.pinimg.com/736x/41/8e/6b/418e6b25838b802051a09835fcac7eba.jpg", title: "Denim Shorts Light", price: "$3,200", priceNum: 3200, category: "Shorts" },
    { id: 17, image: "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg", title: "Gold Chain Necklace", price: "$2,500", priceNum: 2500, category: "Accessories" },
    { id: 18, image: "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg", title: "Ribbed Knit Top", price: "$3,600", priceNum: 3600, category: "T-Shirts" },
    { id: 19, image: "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg", title: "Trench Coat Beige", price: "$13,800", priceNum: 13800, category: "Jackets" },
    { id: 20, image: "https://i.pinimg.com/736x/ca/0e/67/ca0e6738acbbd25bb708bce4fb1c17f2.jpg", title: "Satin Skirt Burgundy", price: "$4,100", priceNum: 4100, category: "Shorts" },
    { id: 21, image: "https://i.pinimg.com/736x/86/ab/70/86ab700715f8d14e48488784a6d7606e.jpg", title: "Oversized Blazer", price: "$9,600", priceNum: 9600, category: "Shirts" },
    { id: 22, image: "https://i.pinimg.com/736x/3e/e7/b9/3ee7b93ded7291cbd2a6ec7aa57bc140.jpg", title: "Cargo Pants Khaki", price: "$4,700", priceNum: 4700, category: "Pants" },
    { id: 23, image: "https://i.pinimg.com/736x/67/2b/98/672b98700a36f4a73d7b85f6147c5846.jpg", title: "Ripped Mom Jeans", price: "$5,900", priceNum: 5900, category: "Jeans" },
    { id: 24, image: "https://i.pinimg.com/736x/41/8e/6b/418e6b25838b802051a09835fcac7eba.jpg", title: "Wool Scarf Checkered", price: "$2,100", priceNum: 2100, category: "Accessories" },
];

interface ProductsProps {
    sortBy: string;
    activeFilters: { categories: string[]; priceMin: string; priceMax: string };
    onCount: (pageItems: number, totalItems: number) => void;
}

const ITEMS_PER_PAGE = 12;

const Products = ({ sortBy, activeFilters, onCount }: ProductsProps) => {
    const [page, setPage] = useState(1);
    const [likedIds, setLikedIds] = useState<Set<number>>(new Set());

    const toggleLike = (id: number) => {
        setLikedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

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
                                    onClick={() => toggleLike(item.id)}
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
                                <Button variant="outline" className="px-5 py-1.5 text-xs md:text-sm tracking-wider rounded-lg flex-1" whileTap={{ scale: 0.90 }}>Add to Cart</Button>
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

export default Products;
