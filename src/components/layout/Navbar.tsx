"use client";

import { useState } from "react";
import logo from "@/../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { User, ShoppingCart, Heart, Menu, X } from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";

type LinkItem = {
  to: string;
  name: string;
  color?: string;
};

type NavbarProps = {
  links?: LinkItem[];
  showSearch?: boolean;
  showIcons?: boolean;
  showLogo?: boolean;
  logoSize?: { width: number; height: number };
  className?: string;
};

const defaultLinks: LinkItem[] = [
  { to: "/", name: "Home" },
  { to: "/men", name: "Men" },
  { to: "/women", name: "Women" },
  { to: "/newarrivals", name: "New Arrivals", color: "#c3a707" },
];

const Navbar = ({
  links = defaultLinks,
  showSearch = true,
  showIcons = true,
  showLogo = true,
  logoSize = { width: 40, height: 40 },
  className = "",
}: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`flex items-center px-4 md:px-8 pt-2 pb-1 relative ${className}`}
    >
      <div className="flex-1 flex items-center">
        {showLogo && (
          <Link href="/">
            <Image
              src={logo}
              width={logoSize.width}
              height={logoSize.height}
              alt="Logo"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </Link>
        )}
      </div>

      <div className="flex-1 hidden md:flex justify-center gap-6">
        {links.map((item) => (
          <Link
            key={item.to}
            href={item.to}
            className="text-black uppercase font-thin text-sm"
            style={{ color: item.color }}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex-1 flex items-center justify-end gap-2 md:gap-4">
        {showSearch && (
          <SearchBar
            className="hidden md:flex"
            inputClassName="w-24 lg:w-auto"
          />
        )}
        <div className="flex items-center gap-3 md:gap-4">
          {showIcons && (
            <>
              <User size={18} className="md:size-5" fill="black" />
              <ShoppingCart size={18} className="md:size-5" fill="black" />
              <Heart size={18} className="md:size-5" fill="black" />
            </>
          )}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#fffbf4] border-t border-gray-200 flex flex-col items-center gap-4 py-6 md:hidden z-50">
          {links.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className="text-black uppercase font-thin text-lg"
              style={{ color: item.color }}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
