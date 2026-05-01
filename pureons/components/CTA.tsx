"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 px-6 lg:px-12">
      <motion.div
        className="max-w-4xl mx-auto bg-section-bg rounded-2xl p-12 md:p-16 text-center border border-border"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
          Start your project today
        </h2>
        <p className="text-text-sub text-lg mb-8 max-w-xl mx-auto">
          Join thousands of developers and creators building the future with PUREons.
        </p>
        <motion.button
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started Free
        </motion.button>
      </motion.div>
    </section>
  );
}
