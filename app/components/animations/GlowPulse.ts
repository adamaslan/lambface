// app/components/animations/GlowPulse.ts

/**
 * Applies a pulsing neon glow effect.
 *
 * Usage:
 *   <div className={glowPulse("cyan")} />
 */
export function glowPulse(color: "cyan" | "magenta" | "green" = "cyan"): string {
  return `animate-glow-pulse glow-${color}`;
}
