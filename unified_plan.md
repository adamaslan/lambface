# Unified Plan: lambface-landing

This document combines the project structure, starter code, and cyberpunk UI concepts into a single, cohesive plan.

---

## 1. Project Structure

This is the definitive folder tree for the project.

```
lambface-landing/
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.json
├── .prettierrc.json
├── .gitignore
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── CanvasPanel.tsx
│   │   │
│   │   ├── screens/
│   │   │   ├── IdentityScreen.tsx
│   │   │   ├── SoundCloudScreen.tsx
│   │   │   └── ShowsScreen.tsx
│   │   │
│   │   ├── buildings/
│   │   │   ├── LeftBuildings.tsx
│   │   │   └── RightBuildings.tsx
│   │   │
│   │   ├── neon/
│   │   │   ├── NeonGlyph.tsx
│   │   │   ├── NeonSign.tsx
│   │   │   └── GlowFrame.tsx
│   │   │
│   │   └── animations/
│   │       ├── Flicker.ts
│   │       ├── GlowPulse.ts
│   │       └── DriftMotion.ts
│   │
│   └── (optional future routes…)
│
├── domain/
│   ├── errors/
│   │   ├── AppError.ts
│   │   ├── ValidationError.ts
│   │   └── NotFoundError.ts
│   │
│   ├── models/
│   │   ├── Show.ts
│   │   └── SocialLink.ts
│   │
│   └── services/
│       └── ShowsService.ts
│
├── utils/
│   ├── classNames.ts
│   ├── soundcloud.ts
│   ├── logger.ts
│   └── constants.ts
│
├── styles/
│   ├── animations.css
│   ├── glows.css
│   └── scanlines.css
│
├── public/
│   ├── logo.svg
│   ├── noise.png
│   ├── favicon.ico
│   │
│   ├── glyphs/
│   │   ├── glyph-1.svg
│   │   ├── glyph-2.svg
│   │   └── glyph-3.svg
│   │
│   └── lottie/
│       ├── waveform.json
│       ├── neonPulse.json
│       └── glitch.json
│
└── tests/
    ├── components/
    ├── utils/
    └── domain/
```

---

## 2. File Contents

This section provides the starter code for each file in the project structure.

### Root Config Files

**package.json**
```json
{
  "name": "lambface-landing",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.1.0",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "typescript": "^5.3.3",
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.33",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.56.0",
    "eslint-config-next": "14.1.0",
    "prettier": "^3.2.4"
  }
}
```

**tsconfig.json**
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "preserve",
    "paths": { "@/*": ["./*"] }
  }
}
```

**tailwind.config.js**
```js
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { neon: "#00ffff" }
    }
  },
  plugins: []
};
```

**postcss.config.js**
```js
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };
```

### App Layer

**app/layout.tsx**
```tsx
import "./globals.css";
import "@/styles/animations.css";
import "@/styles/glows.css";
import "@/styles/scanlines.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-cyan-300 font-mono">{children}</body>
    </html>
  );
}
```

**app/page.tsx**
```tsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import CanvasPanel from "./components/CanvasPanel";
import IdentityScreen from "./components/screens/IdentityScreen";
import SoundCloudScreen from "./components/screens/SoundCloudScreen";
import ShowsScreen from "./components/screens/ShowsScreen";

export default function Page() {
  return (
    <main>
      <Header />
      <CanvasPanel>
        <IdentityScreen />
        <SoundCloudScreen />
        <ShowsScreen />
      </CanvasPanel>
      <Footer />
    </main>
  );
}
```

**app/globals.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Core Components

**app/components/Header.tsx**
```tsx
export default function Header() {
  return <header className="p-4 text-xl">LAMBFACE</header>;
}
```

**app/components/Footer.tsx** (Placeholder)
```tsx
export default function Footer() {
  return <footer className="p-4 text-center text-xs">Signal Feed © 2026</footer>;
}
```

**app/components/CanvasPanel.tsx**
```tsx
export default function CanvasPanel({ children }: { children: React.ReactNode }) {
  return <section className="p-6 space-y-8">{children}</section>;
}
```

### Screens

**app/components/screens/IdentityScreen.tsx**
```tsx
export default function IdentityScreen() {
  return <div className="border p-4">Artist / Signal / Identity</div>;
}
```

**app/components/screens/SoundCloudScreen.tsx**
```tsx
export default function SoundCloudScreen() {
  return (
    <iframe
      width="100%"
      height="166"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/0"
    />
  );
}
```

**app/components/screens/ShowsScreen.tsx**
```tsx
export default function ShowsScreen() {
  return <div className="border p-4">Upcoming Shows</div>;
}
```

### Neon UI Components (Placeholders)

**app/components/neon/NeonGlyph.tsx**
```tsx
// TODO: Implement SVG glyph with neon effects
export default function NeonGlyph({ glyphUrl }: { glyphUrl: string }) {
  return <img src={glyphUrl} alt="Neon Glyph" className="w-16 h-16" />;
}
```

**app/components/neon/NeonSign.tsx**
```tsx
// TODO: Implement text with neon sign effect
export default function NeonSign({ text }: { text: string }) {
  return <h1 className="text-4xl font-bold text-neon">{text}</h1>;
}
```

**app/components/neon/GlowFrame.tsx**
```tsx
export default function GlowFrame({ title, children }: any) {
  return (
    <div className="border border-cyan-400 p-4 shadow-[0_0_20px_#0ff]">
      <h2 className="mb-2">{title}</h2>
      {children}
    </div>
  );
}
```

### Domain Layer

**domain/models/Show.ts**
```ts
export interface Show {
  id: string;
  venue: string;
  date: string;
}
```

**domain/models/SocialLink.ts** (Placeholder)
```ts
export interface SocialLink {
  platform: string;
  url: string;
}
```

**domain/services/ShowsService.ts**
```ts
import { Show } from "../models/Show";

export class ShowsService {
  getAll(): readonly Show[] {
    // TODO: Fetch from a real data source
    return [
        { id: '1', venue: 'Public Records', date: '2026-02-15' },
        { id: '2', venue: 'Nowadays', date: '2026-03-01' },
    ];
  }
}
```

### Utils

**utils/classNames.ts**
```ts
export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
```

**utils/soundcloud.ts**
```ts
export const buildSoundCloudUrl = (id: string) =>
  `https://w.soundcloud.com/player/?url=https://api.soundcloud.com/${id}`;
```

**utils/logger.ts** (Placeholder)
```ts
export const logger = {
  log: (...args: any[]) => console.log(...args),
  error: (...args: any[]) => console.error(...args),
};
```

---

## 3. Cyberpunk UI Integration

This section details how to implement the cyberpunk visual effects from `hello.md` into the Next.js project.

### **styles/scanlines.css**

Add the CRT scanline effect.

```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255,255,255,0.03),
    rgba(255,255,255,0.03) 1px,
    transparent 1px,
    transparent 3px
  );
  pointer-events: none;
  z-index: 9999;
}
```

### **styles/animations.css**

Contains animations for signal noise, flicker, and drift.

```css
/* Signal Degradation */
.signal-noise {
  filter: blur(1.2px) contrast(0.9) brightness(0.85);
  transition: filter 0.4s ease;
}
.signal-noise:hover {
  filter: blur(0) contrast(1.05) brightness(1);
}

/* Glyph Flicker */
@keyframes glyphFlicker {
  0%, 100% { opacity: 0.85; }
  20% { opacity: 0.4; }
  22% { opacity: 1; }
  70% { opacity: 0.6; }
}

.animate-glyph-flicker {
    animation: glyphFlicker 3.5s infinite;
}

/* Circadian Hue Shift */
@keyframes circadian {
  0%, 100% { --neon-cyan-hue: 190; }
  50% { --neon-cyan-hue: 215; }
}

:root {
  --neon-cyan-hue: 190;
}

body {
  animation: circadian 180s ease-in-out infinite;
}
```

### **styles/glows.css**

CSS for neon glows and shadows.

```css
.neon-glow {
  --neon-glow-color: #00faff;
  text-shadow:
    0 0 5px var(--neon-glow-color),
    0 0 10px var(--neon-glow-color),
    0 0 20px var(--neon-glow-color),
    0 0 40px var(--neon-glow-color);
}

.neon-box-shadow {
    --neon-shadow-color: #00faff;
    box-shadow: 0 0 20px var(--neon-shadow-color);
}
```

### Implementing Time-Based Glow Drift

Create a client-side component or hook to manage the hue rotation.

**app/components/animations/DriftMotion.tsx**
```tsx
'use client';

import { useEffect } from 'react';

export default function DriftMotion() {
  useEffect(() => {
    let t = 0;
    function drift() {
      t += 0.0005;
      const hue = 190 + Math.sin(t) * 25;
      document.documentElement.style.setProperty('--neon-cyan-hue', `${hue}`);
      requestAnimationFrame(drift);
    }
    const frameId = requestAnimationFrame(drift);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return null; // This component does not render anything
}
```

Then, add `<DriftMotion />` to `app/layout.tsx`. Update `tailwind.config.js` and `animations.css` to use the HSL variable.

**tailwind.config.js (updated)**
```js
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: 'hsl(var(--neon-cyan-hue, 190), 100%, 60%)',
      }
    }
  },
  plugins: []
};
```

This unified plan provides a clear path forward for building the `lambface-landing` project with all the desired features and aesthetics.
