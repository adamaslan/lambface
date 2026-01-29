"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface NeonSignProps {
  text: string;
  className?: string;
}

export default function NeonSign({ text, className }: NeonSignProps) {
  return (
    <motion.h1 initial={{ y: -4 }} animate={{ y: 0 }} className={clsx("text-4xl font-bold neon-glow animate-glyph-flicker circadian", className)}>
      {text}
    </motion.h1>
  );
}