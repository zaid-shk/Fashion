"use client";

import { MapPin } from "lucide-react";
import SearchBar from "../ui/SearchBar";


const SecondNav = () => {
    const user = 'username'
    const result = 120
    const maxResult = 200
    return (
        <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-2"><MapPin /><div className="flex flex-col"><p>Delivering To {user}</p><h3>123,Blue Street,42 Sector , MV Delhi</h3></div></div>
            <div className=""><SearchBar className="border border-[#1f1f1f1f] px-5 py-1 rounded-2xl" /></div>
            <div className="">Showing <span className="font-bold text-amber-500 tracking-wider">{result} Result</span> from {maxResult}</div>
        </div>
    );
};

export default SecondNav;