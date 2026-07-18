"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const menWomenLinks = [
  { to: "/", name: "Home" },
  { to: "/men", name: "Men" },
  { to: "/women", name: "Women" },
  { to: "/newarrivals", name: "New Arrivals", color: "#c3a707" },
];

const defaultLinks = [
  { to: "/", name: "Home" },
  { to: "/men", name: "Men" },
  { to: "/women", name: "Women" },
  { to: "/newarrivals", name: "New Arrivals", color: "#c3a707" },
];

const NavbarWrapper = () => {
  const pathname = usePathname();

  if (pathname === "/men" || pathname === "/women") {
    return (
      <Navbar
        links={menWomenLinks}
        showLogo={true}
        showSearch={false}
        showIcons={true}
      />
    );
  }

  return <Navbar />;
};

export default NavbarWrapper;
