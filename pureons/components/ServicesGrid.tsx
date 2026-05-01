"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CategoryBar from "./CategoryBar";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

export default function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-gradient mb-4">
          Explore Our Services
        </h2>
        <p className="text-gray-400 text-lg">
          Find the perfect tool for your next project
        </p>
      </motion.div>

      <div className="flex justify-center mb-10">
        <CategoryBar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        {filteredServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </motion.div>

      {filteredServices.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          No services found for this category.
        </div>
      )}
    </section>
  );
}
