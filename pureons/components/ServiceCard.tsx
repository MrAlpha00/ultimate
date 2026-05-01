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
      className="bg-card-bg border border-border rounded-xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="w-full h-40 rounded-lg bg-section-bg mb-5 flex items-center justify-center overflow-hidden">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
          <span className="text-primary text-xl font-semibold">
            {service.title.charAt(0)}
          </span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
      <p className="text-text-sub text-sm mb-5">{service.description}</p>

      <button className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all duration-300">
        Explore
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
