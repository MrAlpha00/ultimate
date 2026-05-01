"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
          Start your project today
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of developers and creators building the future with
          PUREons.
        </p>
        <motion.button
          className="btn-gradient text-white px-8 py-4 rounded-xl text-lg font-semibold glow-purple hover:btn-gradient-hover transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Free
        </motion.button>
      </motion.div>
    </section>
  );
}
