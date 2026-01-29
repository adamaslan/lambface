Got you, Adam — you want **every animation file fully built out**, clean, production‑ready, matching your architecture, and written in a way that respects your TypeScript discipline, immutability, SRP, and composability.

Below is the **complete animation system**, broken into the exact files you already have:

```
app/components/animations/
  Flicker.ts
  GlowPulse.ts
  DriftMotion.ts
styles/animations.css
styles/glows.css
styles/scanlines.css
```

Everything below is **ready to paste** into your project.

---

# 🎛️ `app/components/animations/Flicker.ts`

A pure function that returns a className string.  
No side effects.  
No randomness at runtime (CSS handles randomness).

```ts
// app/components/animations/Flicker.ts

/**
 * Applies a neon flicker animation to any element.
 * 
 * Usage:
 *   <div className={flicker()} />
 */
export function flicker(): string {
  return "animate-flicker";
}
```

---

# 🔥 `app/components/animations/GlowPulse.ts`

A soft glow expansion/contraction loop.

```ts
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
```

---

# 🌬️ `app/components/animations/DriftMotion.ts`

Slow floating drift for glyphs and ambient UI elements.

```ts
// app/components/animations/DriftMotion.ts

/**
 * Applies a slow drift motion to floating UI elements.
 *
 * Usage:
 *   <NeonGlyph className={driftMotion()} />
 */
export function driftMotion(): string {
  return "animate-drift";
}
```

---

# 🎨 `styles/animations.css`

This file defines all keyframes used by the animation functions.

```css
/* styles/animations.css */

/* ----------------------------------------
   Flicker (randomized neon instability)
---------------------------------------- */
@keyframes flicker {
  0%   { opacity: 1; }
  5%   { opacity: 0.4; }
  10%  { opacity: 0.85; }
  15%  { opacity: 0.3; }
  20%  { opacity: 1; }
  25%  { opacity: 0.7; }
  30%  { opacity: 1; }
  35%  { opacity: 0.5; }
  40%  { opacity: 1; }
  100% { opacity: 1; }
}

.animate-flicker {
  animation: flicker 0.18s infinite steps(2, end);
}


/* ----------------------------------------
   Glow Pulse (breathing neon)
---------------------------------------- */
@keyframes glowPulse {
  0%   { filter: drop-shadow(0 0 4px var(--glow-color)); }
  50%  { filter: drop-shadow(0 0 14px var(--glow-color)); }
  100% { filter: drop-shadow(0 0 4px var(--glow-color)); }
}

.animate-glow-pulse {
  animation: glowPulse 2s ease-in-out infinite;
}


/* ----------------------------------------
   Drift Motion (ambient floating)
---------------------------------------- */
@keyframes drift {
  0%   { transform: translateY(0px) translateX(0px); }
  50%  { transform: translateY(-6px) translateX(3px); }
  100% { transform: translateY(0px) translateX(0px); }
}

.animate-drift {
  animation: drift 6s ease-in-out infinite;
}


/* ----------------------------------------
   Circadian Hue Drift (global)
---------------------------------------- */
@keyframes circadian {
  0%   { filter: hue-rotate(0deg); }
  50%  { filter: hue-rotate(25deg); }
  100% { filter: hue-rotate(0deg); }
}

.circadian {
  animation: circadian 180s ease-in-out infinite;
}


/* ----------------------------------------
   Signal Noise (idle degradation)
---------------------------------------- */
.signal-noise {
  filter: blur(1.2px) contrast(0.9) brightness(0.85);
  transition: filter 0.25s ease-out;
}

.signal-noise:hover {
  filter: blur(0px) contrast(1.05) brightness(1);
}


/* ----------------------------------------
   CRT Curvature
---------------------------------------- */
.crt {
  transform: perspective(1200px) rotateX(1.2deg);
  position: relative;
}

.crt::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  box-shadow: inset 0 0 60px rgba(0,0,0,0.6);
}
```

---

# 💡 `styles/glows.css`

Defines glow color variables used by GlowPulse.

```css
/* styles/glows.css */

.glow-cyan {
  --glow-color: #00ffff;
}

.glow-magenta {
  --glow-color: #ff00ff;
}

.glow-green {
  --glow-color: #00ff88;
}
```

---

# 📺 `styles/scanlines.css`

Scanline overlay for the entire dashboard.

```css
/* styles/scanlines.css */

.bg-scanlines {
  background-image: repeating-linear-gradient(
    to bottom,
    rgba(255,255,255,0.05) 0px,
    rgba(255,255,255,0.05) 1px,
    transparent 3px
  );
}
```

---

# 🧩 How These Files Work Together

### **Component → Animation Function → CSS Class → Keyframes**

Example:

```tsx
<div className={`${flicker()} ${driftMotion()} glow-cyan`}>
  <NeonGlyph />
</div>
```

This resolves to:

- `animate-flicker` → flicker keyframes  
- `animate-drift` → drift keyframes  
- `glow-cyan` → sets `--glow-color`  
- `animate-glow-pulse` (if added) → glowPulse keyframes  

Everything is:

- Declarative  
- Composable  
- Zero JS loops  
- GPU-accelerated  
- Tailwind-friendly  

---
