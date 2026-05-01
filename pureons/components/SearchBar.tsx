"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
        <Search className="w-5 h-5 text-text-sub" />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search services, tools, courses..."
        className="w-full pl-14 pr-6 py-4 rounded-full bg-card-bg border border-border text-foreground placeholder:text-text-sub text-base shadow-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
      />
    </div>
  );
}
