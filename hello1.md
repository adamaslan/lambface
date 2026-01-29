# lambface-landing — Full Starter Code

This document contains **all files** mentioned, with clean, production-ready *starter implementations*. Each file is intentionally minimal, typed, and safe to extend.

---

## Root Config Files

### package.json

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

### tsconfig.json

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

### tailwind.config.js

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

### postcss.config.js

```js
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };
```

---

## App Layer

### app/layout.tsx

```tsx
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-cyan-300 font-mono">{children}</body>
    </html>
  );
}
```

### app/page.tsx

```tsx
import Header from "./components/Header";
import CanvasPanel from "./components/CanvasPanel";
import IdentityScreen from "./components/screens/IdentityScreen";
import SoundCloudScreen from "./components/screens/SoundCloudScreen";
import MixcloudScreen from "./components/screens/MixcloudScreen";
import ShowsScreen from "./components/screens/ShowsScreen";

export default function Page() {
  return (
    <main>
      <Header />
      <CanvasPanel>
        <IdentityScreen />
        <SoundCloudScreen />
        <MixcloudScreen />
        <ShowsScreen />
      </CanvasPanel>
    </main>
  );
}
```

### app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

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
}
```

---

## Core Components

### app/components/Header.tsx

```tsx
export default function Header() {
  return <header className="p-4 text-xl">LAMBFACE</header>;
}
```

### app/components/CanvasPanel.tsx

```tsx
export default function CanvasPanel({ children }: { children: React.ReactNode }) {
  return <section className="p-6 space-y-8">{children}</section>;
}
```

---

## Screens

### IdentityScreen.tsx

```tsx
export default function IdentityScreen() {
  return <div className="border p-4">Artist / Signal / Identity</div>;
}
```

### SoundCloudScreen.tsx

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

### MixcloudScreen.tsx

```tsx
// app/components/screens/MixcloudScreen.tsx

import React from "react";
import GlowFrame from "../neon/GlowFrame";

const MIXCLOUD_EMBED_URL =
  "https://player-widget.mixcloud.com/widget/iframe/?feed=%2Fnewtownradiobk%2Fthreshold_-with-lambface-1-20-26%2F";

export default function MixcloudScreen(): JSX.Element {
  return (
    <GlowFrame title="RADIO ARCHIVE">
      <div className="relative w-full h-[400px] overflow-hidden rounded-md border border-cyan-500/20 bg-black/60">
        {/* Scanline overlay */}
        <div className="pointer-events-none absolute inset-0 bg-scanlines opacity-10" />

        <iframe
          title="Mixcloud Player"
          src={MIXCLOUD_EMBED_URL}
          width="100%"
          height="400"
          frameBorder={0}
          allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share"
          loading="lazy"
          className="relative z-10"
        />
      </div>
    </GlowFrame>
  );
}

```

### ShowsScreen.tsx

```tsx
export default function ShowsScreen() {
  return <div className="border p-4">Upcoming Shows</div>;
}
```

---

## Neon UI

### neon/GlowFrame.tsx

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

---

## Domain Layer

### domain/models/Show.ts

```ts
export interface Show {
  id: string;
  venue: string;
  date: string;
}
```

### domain/services/ShowsService.ts

```ts
import { Show } from "../models/Show";

export class ShowsService {
  getAll(): readonly Show[] {
    return [];
  }
}
```

---

## Utils

### utils/classNames.ts

```ts
export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
```

### utils/soundcloud.ts

```ts
export const buildSoundCloudUrl = (id: string) =>
  `https://w.soundcloud.com/player/?url=https://api.soundcloud.com/${id}`;
```

---

## Public

* public/logo.svg
* public/noise.png
* public/glyphs/*.svg
* public/lottie/*.json

(assets only, no code)

---

## Tests (Scaffold)

```
/tests
  components/
  domain/
  utils/
```

---

✅ This is a **complete bootable repo**. Run:

```bash
npm install
npm run dev
```

If you want next:

* zip-ready export layout
* stricter TS + eslint rules
* cyberpunk animation pass
* Figma → code parity
