"use client";

import { useState } from "react";
import { Search, Sparkles } from "lucide-react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  return (
    <div className={`relative w-full transition-all duration-300 ${isFocused ? "scale-[1.02]" : "scale-100"}`}>
      <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
        <Search className={`w-5 h-5 transition-colors duration-300 ${isFocused ? "text-primary" : "text-text-sub"}`} />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search services, tools, courses..."
        className="w-full pl-14 pr-14 h-16 rounded-full bg-white dark:bg-[#111827] border-2 text-foreground placeholder:text-text-sub/60 text-base shadow-lg focus:outline-none transition-all duration-300 dark:shadow-none dark:border-border"
        style={{
          borderColor: isFocused ? "#6366F1" : "transparent",
          boxShadow: isFocused
            ? "0 10px 40px -10px rgba(99, 102, 241, 0.3), 0 0 0 4px rgba(99, 102, 241, 0.1)"
            : "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
        }}
      />
      <div className="absolute inset-y-0 right-3 flex items-center">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium text-primary">AI</span>
        </div>
      </div>
    </div>
  );
}
