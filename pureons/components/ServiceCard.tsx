"use client";

import { motion } from "framer-motion";
import { Service } from "@/data/services";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      className="glass rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:glow-purple group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="w-full h-40 rounded-xl bg-gradient-main mb-4 flex items-center justify-center overflow-hidden">
        <div className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">
          {service.image.startsWith("/images/") ? (
            <div className="w-16 h-16 rounded-full btn-gradient flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                {service.title.charAt(0)}
              </span>
            </div>
          ) : (
            <span>{service.image}</span>
          )}
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{service.description}</p>

      <button className="btn-gradient text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 group-hover:btn-gradient-hover transition-all duration-300">
        Explore
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </motion.div>
  );
}
