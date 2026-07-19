"use client";

import { useMemo, useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import Link from "next/link";

type Product = {
    id: number;
    image: string;
    title: string;
    price: string;
    priceNum: number;
    category: string;
};

const ProductData: Product[] = [
    { id: 1, image: "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg", title: "Linen Blend Lavender Shirt", price: "$5,600", priceNum: 5600, category: "T-Shirts" },
    { id: 2, image: "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg", title: "Premium Cotton Tee", price: "$3,200", priceNum: 3200, category: "T-Shirts" },
    { id: 3, image: "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg", title: "Slim Fit Oxford Shirt", price: "$4,800", priceNum: 4800, category: "Shirts" },
    { id: 4, image: "https://i.pinimg.com/736x/ca/0e/67/ca0e6738acbbd25bb708bce4fb1c17f2.jpg", title: "Classic Denim Jacket", price: "$8,900", priceNum: 8900, category: "Jackets" },
    { id: 5, image: "https://i.pinimg.com/736x/86/ab/70/86ab700715f8d14e48488784a6d7606e.jpg", title: "Cargo Pants Beige", price: "$4,200", priceNum: 4200, category: "Pants" },
    { id: 6, image: "https://i.pinimg.com/736x/3e/e7/b9/3ee7b93ded7291cbd2a6ec7aa57bc140.jpg", title: "Ripped Skinny Jeans", price: "$5,100", priceNum: 5100, category: "Jeans" },
    { id: 7, image: "https://i.pinimg.com/736x/67/2b/98/672b98700a36f4a73d7b85f6147c5846.jpg", title: "Wool Blend Sweater", price: "$6,400", priceNum: 6400, category: "Sweaters" },
    { id: 8, image: "https://i.pinimg.com/736x/41/8e/6b/418e6b25838b802051a09835fcac7eba.jpg", title: "Casual Shorts Navy", price: "$2,800", priceNum: 2800, category: "Shorts" },
    { id: 9, image: "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg", title: "Leather Belt", price: "$1,900", priceNum: 1900, category: "Accessories" },
    { id: 10, image: "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg", title: "Linen Shirt White", price: "$4,400", priceNum: 4400, category: "Shirts" },
    { id: 11, image: "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg", title: "Summer Polo Shirt", price: "$3,600", priceNum: 3600, category: "T-Shirts" },
    { id: 12, image: "https://i.pinimg.com/736x/ca/0e/67/ca0e6738acbbd25bb708bce4fb1c17f2.jpg", title: "Bomber Jacket Black", price: "$9,500", priceNum: 9500, category: "Jackets" },
    { id: 13, image: "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg", title: "Denim Shirt Blue", price: "$4,700", priceNum: 4700, category: "Shirts" },
    { id: 14, image: "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg", title: "Chino Pants Khaki", price: "$3,900", priceNum: 3900, category: "Pants" },
    { id: 15, image: "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg", title: "Graphic Tee Black", price: "$2,500", priceNum: 2500, category: "T-Shirts" },
    { id: 16, image: "https://i.pinimg.com/736x/86/ab/70/86ab700715f8d14e48488784a6d7606e.jpg", title: "Puffer Vest Olive", price: "$7,200", priceNum: 7200, category: "Jackets" },
    { id: 17, image: "https://i.pinimg.com/736x/3e/e7/b9/3ee7b93ded7291cbd2a6ec7aa57bc140.jpg", title: "Track Pants Gray", price: "$3,400", priceNum: 3400, category: "Pants" },
    { id: 18, image: "https://i.pinimg.com/736x/67/2b/98/672b98700a36f4a73d7b85f6147c5846.jpg", title: "Hoodie Cream", price: "$5,800", priceNum: 5800, category: "Sweaters" },
    { id: 19, image: "https://i.pinimg.com/736x/41/8e/6b/418e6b25838b802051a09835fcac7eba.jpg", title: "Cargo Shorts Green", price: "$3,100", priceNum: 3100, category: "Shorts" },
    { id: 20, image: "https://i.pinimg.com/736x/ca/0e/67/ca0e6738acbbd25bb708bce4fb1c17f2.jpg", title: "Leather Sneakers", price: "$6,900", priceNum: 6900, category: "Accessories" },
    { id: 21, image: "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg", title: "Striped Polo Red", price: "$3,800", priceNum: 3800, category: "T-Shirts" },
    { id: 22, image: "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg", title: "Wool Coat Camel", price: "$12,500", priceNum: 12500, category: "Jackets" },
    { id: 23, image: "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg", title: "Linen Pants White", price: "$4,100", priceNum: 4100, category: "Pants" },
    { id: 24, image: "https://i.pinimg.com/736x/86/ab/70/86ab700715f8d14e48488784a6d7606e.jpg", title: "Silk Scarf", price: "$2,200", priceNum: 2200, category: "Accessories" },
];

interface ProductsProps {
    sortBy: string;
    activeFilters: { categories: string[]; priceMin: string; priceMax: string };
    onCount: (pageItems: number, totalItems: number) => void;
}

const ITEMS_PER_PAGE = 12;

const Products = ({ sortBy, activeFilters, onCount }: ProductsProps) => {
    const [page, setPage] = useState(1);

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
                        <Link
                            key={item.id}
                            href={`/product/${item.id}`}
                            className="group flex flex-col items-center border border-[#1f1f1f1f] rounded-2xl md:rounded-3xl px-2 py-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <Card image={item.image} height='250px' width='100%' />
                            <div className="py-3 px-3 flex flex-col gap-1.5 w-full">
                                <h3 className="text-sm md:text-lg tracking-wide text-black/60 group-hover:text-black transition-colors">{item.title}</h3>
                                <p className="text-lg md:text-2xl tracking-widest font-semibold">{item.price}</p>
                            </div>
                        </Link>
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
