"use client";

import { useState } from "react";
import { Funnel, X } from 'lucide-react';
import Button from '../ui/Button';
import { motion, AnimatePresence } from "motion/react";

export interface FilterState {
    categories: string[];
    priceMin: string;
    priceMax: string;
}

interface FilterProps {
    onFilter: (filters: FilterState) => void;
    activeDropdown: "filter" | "short" | null;
    setActiveDropdown: (val: "filter" | "short" | null) => void;
}

const categories = ["All", "T-Shirts", "Shirts", "Pants", "Jeans", "Jackets", "Sweaters", "Shorts", "Accessories"];

const Filter = ({ onFilter, activeDropdown, setActiveDropdown }: FilterProps) => {
    const isOpen = activeDropdown === "filter";
    const [selected, setSelected] = useState<string[]>(["All"]);
    const [priceMin, setPriceMin] = useState("0");
    const [priceMax, setPriceMax] = useState("15000");

    const categoriesCount = selected.includes("All") ? 0 : selected.length;
    const activeCount = categoriesCount + (priceMin !== "0" || priceMax !== "15000" ? 1 : 0);

    const emitFilter = (cats: string[], min: string, max: string) => {
        onFilter({ categories: cats, priceMin: min, priceMax: max });
    };

    const toggleCategory = (cat: string) => {
        let next: string[];
        if (cat === "All") {
            if (!selected.includes("All")) next = ["All"];
            else return;
        } else {
            next = selected.includes(cat)
                ? selected.filter((c) => c !== cat).length === 0
                    ? ["All"]
                    : selected.filter((c) => c !== cat)
                : [...selected.filter((c) => c !== "All"), cat];
        }
        setSelected(next);
        emitFilter(next, priceMin, priceMax);
    };

    const clearAll = () => {
        setSelected(["All"]);
        setPriceMin("0");
        setPriceMax("15000");
        onFilter({ categories: ["All"], priceMin: "0", priceMax: "15000" });
    };

    return (
        <div className='relative flex py-3 px-4.5'>
            <Button
                children={<span className="text-xs md:text-sm">{activeCount > 0 ? `Filter (${activeCount})` : 'Filter'}</span>}
                leftIcon={activeCount > 0 ? <span onClick={clearAll} className="cursor-pointer"><X size={16} /></span> : <Funnel size={16} />}
                className='px-2 md:px-3 py-1 flex items-center justify-center rounded-md'
                variant='outline'
                whileTap={{ scale: 0.90 }}
                loading={false}
                onClick={() => setActiveDropdown(isOpen ? null : "filter")}
            />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full mt-1 lg:left-0 md:left-3 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[260px] p-4 right-0 md:right-auto max-h-[70vh] overflow-y-auto"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-sm">Filters</h4>
                            {activeCount > 0 && (
                                <button onClick={clearAll} className="text-xs text-teal hover:underline">Clear all</button>
                            )}
                        </div>

                        <div className="mb-4">
                            <h5 className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
                                Max Price: ${Number(priceMax).toLocaleString()}
                            </h5>
                            <input
                                type="range"
                                min="0"
                                max="15000"
                                step="100"
                                value={priceMax}
                                onChange={(e) => {
                                    setPriceMax(e.target.value);
                                    emitFilter(selected, priceMin, e.target.value);
                                }}
                                className="w-full accent-teal h-2"
                            />
                            <div className="flex justify-between text-xs text-gray-400 mt-1">
                                <span>$0</span>
                                <span>$15,000</span>
                            </div>
                        </div>

                        <div>
                            <h5 className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Category</h5>
                            <div className="space-y-1">
                                {categories.map((cat) => (
                                    <label
                                        key={cat}
                                        className="flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer hover:bg-zinc-50 transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selected.includes(cat)}
                                            onChange={() => toggleCategory(cat)}
                                            className="accent-teal"
                                        />
                                        <span className="text-sm">{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Filter;
