"use client";

import React, { useState, useEffect } from "react";
import GlowFrame from "../neon/GlowFrame";
import Lottie from "lottie-react";
import waveform from "@/public/lottie/waveform.json";
import { motion } from "framer-motion";

interface IdentityScreenProps {
  title?: string;
  subtitle?: string;
}

export default function IdentityScreen({
  title = "lambface",
  subtitle = "IDENTITY NODE"
}: IdentityScreenProps): JSX.Element {
  const [glitchActive, setGlitchActive] = useState(false);
  const [pulseIntensity, setPulseIntensity] = useState(0);

  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 100);
      }
    }, 2000);

    // Pulse intensity wave
    const pulseInterval = setInterval(() => {
      setPulseIntensity(Math.random());
    }, 150);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <GlowFrame color="cyan" title={subtitle} className="min-h-[180px] md:min-h-[260px]">
      <motion.div
        className="relative flex h-[180px] md:h-[260px] w-full items-center justify-center overflow-hidden bg-black/40"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, .15) 25%, rgba(0, 255, 255, .15) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, .15) 75%, rgba(0, 255, 255, .15) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, .15) 25%, rgba(0, 255, 255, .15) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, .15) 75%, rgba(0, 255, 255, .15) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px',
          }} />
          <motion.div
            className="absolute inset-0"
            animate={{ y: [0, 50] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `
                linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, .15) 25%, rgba(0, 255, 255, .15) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, .15) 75%, rgba(0, 255, 255, .15) 76%, transparent 77%, transparent),
                linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, .15) 25%, rgba(0, 255, 255, .15) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, .15) 75%, rgba(0, 255, 255, .15) 76%, transparent 77%, transparent)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Pulsing radial gradient */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              "radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 70%)",
              "radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.3) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Multiple waveform layers */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <Lottie animationData={waveform} loop autoplay />
        </div>
        <div className="absolute inset-0 opacity-20 pointer-events-none blur-sm">
          <Lottie animationData={waveform} loop autoplay />
        </div>

        {/* Scanning line effect */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
          animate={{ y: [0, 260] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Particle effects */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Corner brackets */}
        <div className="absolute inset-4 pointer-events-none">
          {/* Top left */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/60" />
          {/* Top right */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/60" />
          {/* Bottom left */}
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/60" />
          {/* Bottom right */}
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/60" />
        </div>

        {/* Title with enhanced effects */}
        <div className="relative z-10">
          <motion.h1
            className={`text-2xl md:text-4xl font-bold tracking-[0.3em] text-cyan-300 ${glitchActive ? 'glitch' : ''
              }`}
            animate={{
              textShadow: [
                "0 0 8px #00ffff, 0 0 16px #00ffff, 0 0 24px #00ffff",
                "0 0 16px #00ffff, 0 0 32px #00ffff, 0 0 48px #00ffff",
                "0 0 8px #00ffff, 0 0 16px #00ffff, 0 0 24px #00ffff",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              filter: glitchActive ? `hue-rotate(${Math.random() * 360}deg)` : 'none',
            }}
          >
            {title.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle bar */}
          <motion.div
            className="mt-4 flex items-center justify-center gap-2"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <motion.span
              className="text-xs md:text-sm tracking-widest text-cyan-500 font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              [ thanks for visiting ]
            </motion.span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </motion.div>

          {/* Status indicators */}
          <div className="mt-3 flex justify-center gap-3">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-cyan-400"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  boxShadow: [
                    "0 0 2px #00ffff",
                    "0 0 8px #00ffff",
                    "0 0 2px #00ffff",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Data stream effect */}
        <div className="absolute right-4 top-4 font-mono text-[8px] text-cyan-500/40 space-y-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {Math.random().toString(36).substring(2, 15)}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        .glitch {
          animation: glitch 0.3s infinite;
        }
      `}</style>
    </GlowFrame>
  );
}