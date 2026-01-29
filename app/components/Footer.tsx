"use client";

import Lottie from "lottie-react";
import neonPulse from "@/public/lottie/neonPulse.json";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 text-center text-xs flex items-center justify-center gap-3">
      <div className="w-8 h-8 opacity-80">
        <Lottie animationData={neonPulse} loop autoplay />
      </div>
      <div className="text-cyan-200">lambface 2026</div>
    </motion.footer>
  );
}