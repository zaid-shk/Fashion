"use client";

import { useState, useCallback } from "react";
import SecondNav from "@/components/layout/SecondNav";
import Filter, { type FilterState } from "@/components/sections/Filter";
import ShortBy from "@/components/sections/ShortBy";
import Products from "./Components/Products";

export default function MenPage() {
  const [sortBy, setSortBy] = useState("Featured");
  const [activeDropdown, setActiveDropdown] = useState<"filter" | "short" | null>(null);
  const [activeFilters, setActiveFilters] = useState<FilterState>({ categories: ["All"], priceMin: "0", priceMax: "15000" });
  const [count, setCount] = useState({ result: 0, total: 0 });

  const handleSort = useCallback((sort: string) => {
    setSortBy(sort);
  }, []);

  const handleFilter = useCallback((filters: FilterState) => {
    setActiveFilters(filters);
  }, []);

  const handleCount = useCallback((pageItems: number, totalItems: number) => {
    setCount({ result: pageItems, total: totalItems });
  }, []);

  return (
    <main className="min-h-screen px-3 md:px-8 py-4 md:py-8">
      <SecondNav result={count.result} maxResult={count.total} />
      <div className="flex items-center">
        <div className="flex items-center justify-start md:justify-center gap-1 md:gap-2 px-2 md:px-6">

          <ShortBy onClick={handleSort} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
          <Filter onFilter={handleFilter} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
        </div>
      </div>
      <Products sortBy={sortBy} activeFilters={activeFilters} onCount={handleCount} />
    </main>
  );
}
