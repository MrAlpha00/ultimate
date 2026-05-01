"use client";

import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden bg-white dark:bg-[#0B0B0F]">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/40 to-cyan-50/30 dark:from-[#0B0B0F] dark:via-purple-950/20 dark:to-cyan-950/10" />

      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-300/15 dark:bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300/10 dark:bg-purple-500/5 rounded-full blur-2xl animate-float-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-cyan-300/10 dark:bg-cyan-500/5 rounded-full blur-2xl animate-float-delayed" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto text-center gap-6">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#0F172A] dark:text-white">Everything you need.</span>
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            One platform.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-text-sub max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Services, tools, courses — all in PUREons
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-2xl"
        >
          <SearchBar />
        </motion.div>
      </div>
    </section>
  );
}
