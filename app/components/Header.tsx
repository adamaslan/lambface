"use client";

import NeonSign from "./neon/NeonSign";
import { motion } from "framer-motion";
import InstagramIcon from "./icons/InstagramIcon";

export default function Header() {
  return (
    <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between p-4 md:p-6">
      <NeonSign text="lambface" className="text-2xl md:text-3xl" />

      <nav className="hidden md:flex gap-4 text-sm text-cyan-200 opacity-90">
        <a 
          href="https://instagram.com/lambface" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-cyan-400 transition-colors"
        >
          <InstagramIcon size={24} />
        </a>
      </nav>
    </motion.header>
  );
}