"use client";

import logo from "@/../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingCart, Heart } from "lucide-react";

const Navbar = () => {
  const links = [
    { to: "/", name: "Home" },
    { to: "/men", name: "Men" },
    { to: "/women", name: "Women" },
    { to: "/newarrivals", name: "New Arrivals", color: "#c3a707" },
  ];

  return (
    <div className="flex items-center justify-between px-8 pt-2 pb-1">
      <div className="flex items-center gap-10">
        <div>
          <Image
            src={logo}
            width={40}
            height={40}
            alt="Logo"
            className="w-10 h-10"
          />
        </div>

        <div className="flex gap-6">
          {links.map((item) => {

            return (
              <Link
                key={item.to}
                href={item.to}
                className={`text-black uppercase font-thin`}
                style={{ color: item.color }}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex items-center">
        <div className="md:flex items-center hidden">
          <Search size={18} />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="px-2 py-1 outline-0 "
          />
        </div>
        <div className="flex gap-4">
          <Search />
          <User fill="black" />
          <ShoppingCart fill="black" />
          <Heart fill="black" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
