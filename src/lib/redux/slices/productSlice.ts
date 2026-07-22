import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type Product = {
  id: number;
  image: string;
  title: string;
  price: string;
  priceNum: number;
  category: string;
  gender: "men" | "women" | "featured";
  description?: string;
  sizes?: string[];
  colors?: string[];
  tag?: string;
};

const menProducts: Product[] = [
  { id: 1, image: "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg", title: "Linen Blend Lavender Shirt", price: "$5,600", priceNum: 5600, category: "T-Shirts", gender: "men", description: "Handcrafted linen-blend shirt with a relaxed fit. Perfect for summer days with a breathable fabric that keeps you cool and stylish.", sizes: ["S", "M", "L", "XL"], colors: ["#8B5E3C", "#2D4A3E", "#1A1A1A", "#D4C5B0"] },
  { id: 2, image: "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg", title: "Premium Cotton Tee", price: "$3,200", priceNum: 3200, category: "T-Shirts", gender: "men", description: "Premium cotton tee with a classic fit. Soft and durable fabric for everyday comfort.", sizes: ["S", "M", "L", "XL"], colors: ["#1A1A1A", "#D4C5B0", "#2D4A3E"] },
  { id: 3, image: "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg", title: "Slim Fit Oxford Shirt", price: "$4,800", priceNum: 4800, category: "Shirts", gender: "men", description: "Slim fit Oxford shirt in premium cotton. A wardrobe essential with a refined look.", sizes: ["S", "M", "L", "XL"], colors: ["#8B5E3C", "#1A1A1A", "#D4C5B0"] },
  { id: 4, image: "https://i.pinimg.com/736x/ca/0e/67/ca0e6738acbbd25bb708bce4fb1c17f2.jpg", title: "Classic Denim Jacket", price: "$8,900", priceNum: 8900, category: "Jackets", gender: "men", description: "Classic denim jacket with a timeless design. Durable denim fabric with a comfortable fit.", sizes: ["M", "L", "XL"], colors: ["#2D4A3E", "#1A1A1A"] },
  { id: 5, image: "https://i.pinimg.com/736x/86/ab/70/86ab700715f8d14e48488784a6d7606e.jpg", title: "Cargo Pants Beige", price: "$4,200", priceNum: 4200, category: "Pants", gender: "men", description: "Cargo pants in beige with multiple pockets. Rugged and stylish for any occasion.", sizes: ["S", "M", "L", "XL"], colors: ["#8B5E3C", "#D4C5B0"] },
  { id: 6, image: "https://i.pinimg.com/736x/3e/e7/b9/3ee7b93ded7291cbd2a6ec7aa57bc140.jpg", title: "Ripped Skinny Jeans", price: "$5,100", priceNum: 5100, category: "Jeans", gender: "men", description: "Ripped skinny jeans with a modern edge. Stretch denim for maximum comfort.", sizes: ["S", "M", "L", "XL"], colors: ["#5B4B3C", "#2D4A3E"] },
  { id: 7, image: "https://i.pinimg.com/736x/67/2b/98/672b98700a36f4a73d7b85f6147c5846.jpg", title: "Wool Blend Sweater", price: "$6,400", priceNum: 6400, category: "Sweaters", gender: "men", description: "Wool blend sweater with a soft touch. Perfect layering piece for colder months.", sizes: ["S", "M", "XL"], colors: ["#8B5E3C", "#1A1A1A", "#D4C5B0"] },
  { id: 8, image: "https://i.pinimg.com/736x/41/8e/6b/418e6b25838b802051a09835fcac7eba.jpg", title: "Casual Shorts Navy", price: "$2,800", priceNum: 2800, category: "Shorts", gender: "men", description: "Casual navy shorts in lightweight fabric. Comfortable and versatile for warm days.", sizes: ["S", "M", "L"], colors: ["#2D4A3E", "#D4C5B0", "#5B4B3C"] },
  { id: 9, image: "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg", title: "Leather Belt", price: "$1,900", priceNum: 1900, category: "Accessories", gender: "men" },
  { id: 10, image: "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg", title: "Linen Shirt White", price: "$4,400", priceNum: 4400, category: "Shirts", gender: "men" },
  { id: 11, image: "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg", title: "Summer Polo Shirt", price: "$3,600", priceNum: 3600, category: "T-Shirts", gender: "men" },
  { id: 12, image: "https://i.pinimg.com/736x/ca/0e/67/ca0e6738acbbd25bb708bce4fb1c17f2.jpg", title: "Bomber Jacket Black", price: "$9,500", priceNum: 9500, category: "Jackets", gender: "men" },
  { id: 13, image: "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg", title: "Denim Shirt Blue", price: "$4,700", priceNum: 4700, category: "Shirts", gender: "men" },
  { id: 14, image: "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg", title: "Chino Pants Khaki", price: "$3,900", priceNum: 3900, category: "Pants", gender: "men" },
  { id: 15, image: "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg", title: "Graphic Tee Black", price: "$2,500", priceNum: 2500, category: "T-Shirts", gender: "men" },
  { id: 16, image: "https://i.pinimg.com/736x/86/ab/70/86ab700715f8d14e48488784a6d7606e.jpg", title: "Puffer Vest Olive", price: "$7,200", priceNum: 7200, category: "Jackets", gender: "men" },
  { id: 17, image: "https://i.pinimg.com/736x/3e/e7/b9/3ee7b93ded7291cbd2a6ec7aa57bc140.jpg", title: "Track Pants Gray", price: "$3,400", priceNum: 3400, category: "Pants", gender: "men" },
  { id: 18, image: "https://i.pinimg.com/736x/67/2b/98/672b98700a36f4a73d7b85f6147c5846.jpg", title: "Hoodie Cream", price: "$5,800", priceNum: 5800, category: "Sweaters", gender: "men" },
  { id: 19, image: "https://i.pinimg.com/736x/41/8e/6b/418e6b25838b802051a09835fcac7eba.jpg", title: "Cargo Shorts Green", price: "$3,100", priceNum: 3100, category: "Shorts", gender: "men" },
  { id: 20, image: "https://i.pinimg.com/736x/ca/0e/67/ca0e6738acbbd25bb708bce4fb1c17f2.jpg", title: "Leather Sneakers", price: "$6,900", priceNum: 6900, category: "Accessories", gender: "men" },
  { id: 21, image: "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg", title: "Striped Polo Red", price: "$3,800", priceNum: 3800, category: "T-Shirts", gender: "men" },
  { id: 22, image: "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg", title: "Wool Coat Camel", price: "$12,500", priceNum: 12500, category: "Jackets", gender: "men" },
  { id: 23, image: "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg", title: "Linen Pants White", price: "$4,100", priceNum: 4100, category: "Pants", gender: "men" },
  { id: 24, image: "https://i.pinimg.com/736x/86/ab/70/86ab700715f8d14e48488784a6d7606e.jpg", title: "Silk Scarf", price: "$2,200", priceNum: 2200, category: "Accessories", gender: "men" },
];

const womenProducts: Product[] = [
  { id: 25, image: "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg", title: "Floral Summer Dress", price: "$6,200", priceNum: 6200, category: "T-Shirts", gender: "women", description: "Beautiful floral summer dress in lightweight fabric. Perfect for warm days with a flattering fit.", sizes: ["S", "M", "L", "XL"], colors: ["#8B5E3C", "#D4C5B0", "#5B4B3C"] },
  { id: 26, image: "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg", title: "Cotton Blend Tee", price: "$3,400", priceNum: 3400, category: "T-Shirts", gender: "women", description: "Cotton blend tee with a relaxed silhouette. Soft and breathable for everyday wear.", sizes: ["S", "M", "L", "XL"], colors: ["#2D4A3E", "#D4C5B0"] },
  { id: 27, image: "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg", title: "Silk Blouse White", price: "$5,800", priceNum: 5800, category: "Shirts", gender: "women", description: "Elegant silk blouse in white. Luxurious fabric with a timeless design.", sizes: ["S", "M", "L"], colors: ["#1A1A1A", "#D4C5B0"] },
  { id: 28, image: "https://i.pinimg.com/736x/ca/0e/67/ca0e6738acbbd25bb708bce4fb1c17f2.jpg", title: "Denim Jacket Blue", price: "$9,200", priceNum: 9200, category: "Jackets", gender: "women", description: "Classic denim jacket in blue. A versatile layering piece for any wardrobe.", sizes: ["S", "M", "L", "XL"], colors: ["#8B5E3C", "#2D4A3E"] },
  { id: 29, image: "https://i.pinimg.com/736x/86/ab/70/86ab700715f8d14e48488784a6d7606e.jpg", title: "High Waist Pants", price: "$4,800", priceNum: 4800, category: "Pants", gender: "women", description: "High waist pants with a sleek silhouette. Tailored fit for a polished look.", sizes: ["S", "M", "L", "XL"], colors: ["#5B4B3C", "#1A1A1A"] },
  { id: 30, image: "https://i.pinimg.com/736x/3e/e7/b9/3ee7b93ded7291cbd2a6ec7aa57bc140.jpg", title: "Skinny Jeans Black", price: "$5,500", priceNum: 5500, category: "Jeans", gender: "women", description: "Skinny jeans in classic black. Stretch denim for a comfortable fit.", sizes: ["S", "M", "L"], colors: ["#1A1A1A", "#2D4A3E"] },
  { id: 31, image: "https://i.pinimg.com/736x/67/2b/98/672b98700a36f4a73d7b85f6147c5846.jpg", title: "Cashmere Sweater", price: "$7,800", priceNum: 7800, category: "Sweaters", gender: "women", description: "Luxurious cashmere sweater with a soft touch. A timeless investment piece.", sizes: ["S", "M", "L", "XL"], colors: ["#D4C5B0", "#5B4B3C", "#8B5E3C"] },
  { id: 32, image: "https://i.pinimg.com/736x/41/8e/6b/418e6b25838b802051a09835fcac7eba.jpg", title: "Pleated Skirt Beige", price: "$3,900", priceNum: 3900, category: "Shorts", gender: "women", description: "Pleated skirt in beige with a feminine silhouette. Lightweight and elegant.", sizes: ["S", "M", "L"], colors: ["#8B5E3C", "#D4C5B0"] },
  { id: 33, image: "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg", title: "Leather Handbag", price: "$12,500", priceNum: 12500, category: "Accessories", gender: "women" },
  { id: 34, image: "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg", title: "Linen Shirt Olive", price: "$4,600", priceNum: 4600, category: "Shirts", gender: "women" },
  { id: 35, image: "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg", title: "Striped Crop Top", price: "$2,800", priceNum: 2800, category: "T-Shirts", gender: "women" },
  { id: 36, image: "https://i.pinimg.com/736x/ca/0e/67/ca0e6738acbbd25bb708bce4fb1c17f2.jpg", title: "Puffer Jacket Cream", price: "$10,200", priceNum: 10200, category: "Jackets", gender: "women" },
  { id: 37, image: "https://i.pinimg.com/736x/86/ab/70/86ab700715f8d14e48488784a6d7606e.jpg", title: "Wide Leg Pants", price: "$4,400", priceNum: 4400, category: "Pants", gender: "women" },
  { id: 38, image: "https://i.pinimg.com/736x/3e/e7/b9/3ee7b93ded7291cbd2a6ec7aa57bc140.jpg", title: "Bootcut Jeans Blue", price: "$5,200", priceNum: 5200, category: "Jeans", gender: "women" },
  { id: 39, image: "https://i.pinimg.com/736x/67/2b/98/672b98700a36f4a73d7b85f6147c5846.jpg", title: "Knit Sweater Pink", price: "$6,100", priceNum: 6100, category: "Sweaters", gender: "women" },
  { id: 40, image: "https://i.pinimg.com/736x/41/8e/6b/418e6b25838b802051a09835fcac7eba.jpg", title: "Denim Shorts Light", price: "$3,200", priceNum: 3200, category: "Shorts", gender: "women" },
  { id: 41, image: "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg", title: "Gold Chain Necklace", price: "$2,500", priceNum: 2500, category: "Accessories", gender: "women" },
  { id: 42, image: "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg", title: "Ribbed Knit Top", price: "$3,600", priceNum: 3600, category: "T-Shirts", gender: "women" },
  { id: 43, image: "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg", title: "Trench Coat Beige", price: "$13,800", priceNum: 13800, category: "Jackets", gender: "women" },
  { id: 44, image: "https://i.pinimg.com/736x/ca/0e/67/ca0e6738acbbd25bb708bce4fb1c17f2.jpg", title: "Satin Skirt Burgundy", price: "$4,100", priceNum: 4100, category: "Shorts", gender: "women" },
  { id: 45, image: "https://i.pinimg.com/736x/86/ab/70/86ab700715f8d14e48488784a6d7606e.jpg", title: "Oversized Blazer", price: "$9,600", priceNum: 9600, category: "Shirts", gender: "women" },
  { id: 46, image: "https://i.pinimg.com/736x/3e/e7/b9/3ee7b93ded7291cbd2a6ec7aa57bc140.jpg", title: "Cargo Pants Khaki", price: "$4,700", priceNum: 4700, category: "Pants", gender: "women" },
  { id: 47, image: "https://i.pinimg.com/736x/67/2b/98/672b98700a36f4a73d7b85f6147c5846.jpg", title: "Ripped Mom Jeans", price: "$5,900", priceNum: 5900, category: "Jeans", gender: "women" },
  { id: 48, image: "https://i.pinimg.com/736x/41/8e/6b/418e6b25838b802051a09835fcac7eba.jpg", title: "Wool Scarf Checkered", price: "$2,100", priceNum: 2100, category: "Accessories", gender: "women" },
];

const featuredProducts: Product[] = [
  { id: 101, image: "https://i.pinimg.com/736x/af/bb/06/afbb062db79a6cad71a87c5d0d2d6d5b.jpg", title: "Linen Blend Lavender Shirt", price: "$5,600", priceNum: 5600, category: "trending", gender: "featured", tag: "trending" },
  { id: 102, image: "https://i.pinimg.com/736x/08/5c/0a/085c0ad135f525871cc48848f004e3b4.jpg", title: "Premium Cotton Tee", price: "$3,200", priceNum: 3200, category: "New", gender: "featured", tag: "New" },
  { id: 103, image: "https://i.pinimg.com/1200x/72/2c/91/722c912d31ec627c640127d08314eb7b.jpg", title: "Slim Fit Oxford Shirt", price: "$4,800", priceNum: 4800, category: "summer", gender: "featured", tag: "summer" },
  { id: 104, image: "https://i.pinimg.com/736x/ca/0e/67/ca0e6738acbbd25bb708bce4fb1c17f2.jpg", title: "Classic Denim Jacket", price: "$8,900", priceNum: 8900, category: "Bestsellers", gender: "featured", tag: "Bestsellers" },
  { id: 105, image: "https://i.pinimg.com/736x/86/ab/70/86ab700715f8d14e48488784a6d7606e.jpg", title: "Cargo Pants Beige", price: "$4,200", priceNum: 4200, category: "trending", gender: "featured", tag: "trending" },
  { id: 106, image: "https://i.pinimg.com/736x/3e/e7/b9/3ee7b93ded7291cbd2a6ec7aa57bc140.jpg", title: "Ripped Skinny Jeans", price: "$5,100", priceNum: 5100, category: "New", gender: "featured", tag: "New" },
  { id: 107, image: "https://i.pinimg.com/736x/67/2b/98/672b98700a36f4a73d7b85f6147c5846.jpg", title: "Wool Blend Sweater", price: "$6,400", priceNum: 6400, category: "summer", gender: "featured", tag: "summer" },
  { id: 108, image: "https://i.pinimg.com/736x/41/8e/6b/418e6b25838b802051a09835fcac7eba.jpg", title: "Casual Shorts Navy", price: "$2,800", priceNum: 2800, category: "Bestsellers", gender: "featured", tag: "Bestsellers" },
];

type ProductsState = { items: Product[] };

const initialState: ProductsState = {
  items: [...menProducts, ...womenProducts, ...featuredProducts],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const selectAllProducts = (state: RootState) => state.products.items;
export const selectMenProducts = (state: RootState) =>
  state.products.items.filter((p) => p.gender === "men");
export const selectWomenProducts = (state: RootState) =>
  state.products.items.filter((p) => p.gender === "women");
export const selectFeaturedProducts = (state: RootState) =>
  state.products.items.filter((p) => p.gender === "featured");
export const selectProductById = (id: number) => (state: RootState) =>
  state.products.items.find((p) => p.id === id);
export const selectProductsByTag = (tag: string) => (state: RootState) =>
  state.products.items.filter((p) => p.tag === tag);
export const selectMenCategories = (state: RootState): string[] => {
  const cats = state.products.items
    .filter((p) => p.gender === "men")
    .map((p) => p.category);
  return [...new Set(cats)];
};
export const selectWomenCategories = (state: RootState): string[] => {
  const cats = state.products.items
    .filter((p) => p.gender === "women")
    .map((p) => p.category);
  return [...new Set(cats)];
};

export default productSlice.reducer;
