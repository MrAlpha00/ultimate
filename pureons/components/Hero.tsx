"use client";

import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-section-bg px-6 lg:px-12 pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Everything you need.{" "}
          <br className="hidden sm:block" />
          <span className="text-primary">One platform.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-text-sub mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          Services, tools, courses — all in PUREons
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="w-full max-w-2xl mx-auto"
        >
          <SearchBar />
        </motion.div>
      </div>
    </section>
  );
}
