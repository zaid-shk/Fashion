"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronsUpDown, Check } from 'lucide-react';
import Button from '../ui/Button';
import { motion, AnimatePresence } from "motion/react";

interface ShortProps {
    onClick: (sort: string) => void;
    activeDropdown: "filter" | "short" | null;
    setActiveDropdown: (val: "filter" | "short" | null) => void;
}

const sortOptions = [
    "Featured",
    "Newest",
    "Popularity",
    "Best Selling",
    "Top Rated",
    "Price: Low to High",
    "Price: High to Low",
    "Discount: High to Low",
];

const ShortBy = ({ onClick, activeDropdown, setActiveDropdown }: ShortProps) => {
    const isOpen = activeDropdown === "short";
    const [selected, setSelected] = useState("Featured");
    const [displayText, setDisplayText] = useState("Featured");
    const indexRef = useRef(0);
    const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

    useEffect(() => {
        indexRef.current = 0;
        setDisplayText("");

        timerRef.current = setInterval(() => {
            indexRef.current++;
            setDisplayText(selected.slice(0, indexRef.current));
            if (indexRef.current >= selected.length && timerRef.current) {
                clearInterval(timerRef.current);
            }
        }, 40);

        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [selected]);

    const handleSelect = (item: string) => {
        setSelected(item);
        setActiveDropdown(null);
        onClick(item);
    };

    return (
        <div className='relative flex py-3 px-4.5'>
            <Button
                children={<span className="text-xs md:text-sm">Sort By: {displayText}<span className="animate-pulse">|</span></span>}
                leftIcon={<ChevronsUpDown size={16} />}
                className='px-2 py-1 flex items-center justify-center rounded-md min-w-[140px] md:min-w-[180px]'
                variant='outline'
                whileTap={{ scale: 0.90 }}
                loading={false}
                onClick={() => setActiveDropdown(isOpen ? null : "short")}
            />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[200px] overflow-hidden"
                    >
                        {sortOptions.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleSelect(item)}
                                className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-left hover:bg-zinc-50 transition-colors"
                            >
                                {item}
                                {selected === item && <Check size={16} className="text-teal" />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ShortBy;
