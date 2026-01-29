"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface GlowFrameProps {
  title?: string;
  color?: "cyan" | "magenta" | "green";
  children?: React.ReactNode;
  className?: string;
}

export default function GlowFrame({ title, color = "cyan", children, className }: GlowFrameProps) {
  const glowClass = color === "magenta" ? "glow-magenta" : color === "green" ? "glow-green" : "glow-cyan";
  const base = "rounded-md border p-4 shadow-[0_0_20px_var(--glow-color)] bg-black/40";
  const merged = twMerge(base, className || "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      className={clsx(merged, glowClass)}
      role="region"
      aria-label={title}
    >
      {title && (
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-200 drop-shadow-[0_0_8px]">
          {title}
        </h2>
      )}

      {children}
    </motion.div>
  );
}