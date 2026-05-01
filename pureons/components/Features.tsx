"use client";

import { motion } from "framer-motion";
import { Search, Brain, Layers } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find exactly what you need with AI-powered search that understands context.",
  },
  {
    icon: Brain,
    title: "AI Powered",
    description: "Leverage cutting-edge artificial intelligence to boost your productivity.",
  },
  {
    icon: Layers,
    title: "All-in-One Platform",
    description: "Everything integrated seamlessly. No more switching between tools.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-gradient mb-4">
          Why Choose PUREons
        </h2>
        <p className="text-gray-400 text-lg">
          Built for developers, creators, and teams
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:glow-purple"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full btn-gradient flex items-center justify-center glow-purple">
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
