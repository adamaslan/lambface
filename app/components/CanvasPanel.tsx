"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import glitch from "@/public/lottie/glitch.json";

export default function CanvasPanel({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden p-4 md:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-10 md:opacity-30">
        <Lottie animationData={glitch} loop autoplay />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.05 }}
        className={twMerge("relative grid gap-6 md:grid-cols-2 lg:grid-cols-3")}
      >
        {children}
      </motion.div>
    </section>
  );
}