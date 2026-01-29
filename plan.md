LAMBFACE — FULL PROJECT FOLDER TREE (ASCII)**
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
