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
    <section id="features" className="py-20 px-6 lg:px-12 bg-section-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose PUREons
          </h2>
          <p className="text-text-sub text-lg max-w-xl mx-auto">
            Built for developers, creators, and teams
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-card-bg border border-border rounded-xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-text-sub leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
