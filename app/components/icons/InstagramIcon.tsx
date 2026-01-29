"use client";

import { motion } from "framer-motion";

interface InstagramIconProps {
  size?: number;
  className?: string;
}

export default function InstagramIcon({ size = 24, className = "" }: InstagramIconProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Rounded square border */}
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />

      {/* Lowercase i dot */}
      <circle cx="12" cy="7" r="1" fill="currentColor" />

      {/* Lowercase i stem */}
      <line x1="12" y1="11" x2="12" y2="17" strokeWidth="2.5" />
    </motion.svg>
  );
}