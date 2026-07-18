"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  iconSize?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (value: string) => void;
};

const SearchBar = ({
  placeholder = "Search",
  className = "",
  inputClassName = "",
  iconSize = 16,
  value,
  onChange,
  onSearch,
}: SearchBarProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch((e.target as HTMLInputElement).value);
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <Search size={iconSize} />
      <input
        type="text"
        name="search"
        id="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className={`px-2 py-1 outline-0 text-sm ${inputClassName}`}
      />
    </div>
  );
};

export default SearchBar;
