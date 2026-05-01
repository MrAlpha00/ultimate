"use client";

import { motion } from "framer-motion";
import { categories } from "@/data/services";

interface CategoryBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryBar({
  activeCategory,
  onCategoryChange,
}: CategoryBarProps) {
  return (
    <motion.div
      className="flex gap-3 overflow-x-auto py-4 px-4 scrollbar-hide"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? "btn-gradient text-white glow-purple"
              : "glass text-gray-300 hover:text-white hover:border-primary/40"
          }`}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
}
