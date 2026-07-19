"use client";

import { MapPin } from "lucide-react";
import SearchBar from "../ui/SearchBar";

interface SecondNavProps {
    result: number;
    maxResult: number;
}

const SecondNav = ({ result, maxResult }: SecondNavProps) => {
    const user = 'username'
    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 px-4 md:px-10">
            <div className="flex items-center gap-2 text-sm md:text-base"><MapPin size={16} /><div className="flex flex-col"><p>Delivering To {user}</p><h3 className="text-xs md:text-sm">123, Blue Street, Sector 42</h3></div></div>
            <div className="w-full md:w-auto"><SearchBar className="border border-[#1f1f1f1f] px-4 py-1.5 rounded-2xl w-full md:w-auto text-sm" /></div>
            <div className="text-sm md:text-base">Showing <span className="font-bold text-amber-500 tracking-wider">{result} Result</span> from {maxResult}</div>
        </div>
    );
};

export default SecondNav;