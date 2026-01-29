"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { driftMotion } from "../animations/DriftMotion";

interface NeonGlyphProps {
  glyphUrl: string;
  className?: string;
}

export default function NeonGlyph({ glyphUrl, className }: NeonGlyphProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    // Security check: Ensure we are fetching a local asset to prevent XSS via external SVG injection
    if (!glyphUrl.startsWith("/") || glyphUrl.includes("://")) {
      setError("Security Error: Only local assets are allowed.");
      return;
    }

    const fetchSvg = async () => {
      try {
        const response = await fetch(glyphUrl, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        setSvgContent(text);
      } catch (e: any) {
        if (e.name === "AbortError") return;
        setError(`Failed to load SVG: ${e.message}`);
        console.error(e);
      }
    };

    fetchSvg();

    return () => controller.abort();
  }, [glyphUrl]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!svgContent) {
    return <div className="w-16 h-16 bg-gray-800 animate-pulse" aria-hidden />; // Placeholder while loading
  }

  return (
    <motion.div whileHover={{ scale: 1.03 }} className={clsx("neon-svg-glow animate-glyph-flicker circadian", driftMotion(), className)} aria-hidden dangerouslySetInnerHTML={{ __html: svgContent }} />
  );
}