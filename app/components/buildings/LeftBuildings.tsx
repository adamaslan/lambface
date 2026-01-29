"use client";

import React from "react";
import { flicker } from "../animations/Flicker";

interface BuildingSpec {
  height: number;
  windows: number;
  outline: "cyan" | "magenta";
}

const BUILDINGS: readonly BuildingSpec[] = [
  { height: 60, windows: 3, outline: "cyan" },
  { height: 75, windows: 4, outline: "cyan" },
  { height: 90, windows: 5, outline: "cyan" },
  { height: 110, windows: 6, outline: "cyan" },
  { height: 95, windows: 4, outline: "cyan" }
];

function outlineToClasses(outline: "cyan" | "magenta") {
  return outline === "magenta" ? "border-magenta-400/60" : "border-cyan-400/60";
}

export default function LeftBuildings(): JSX.Element {
  return (
    <div className="absolute left-4 top-20 hidden sm:flex sm:flex-col gap-3 pointer-events-none select-none" aria-hidden>
      {BUILDINGS.map((b, i) => (
        <div
          key={i}
          className={`relative w-[28px] bg-[#0f0f16] ${outlineToClasses(b.outline)} rounded-sm overflow-hidden`}
          style={{ height: `${b.height}px` }}
        >
          {[...Array(b.windows)].map((_, w) => (
            <div
              key={w}
              className={`${flicker()} absolute left-1 h-[5px] w-[6px] rounded-sm`}
              style={{ top: `${(w + 1) * 18}px`, background: b.outline === "magenta" ? "#ff00ff" : "#00ffff", opacity: 0.85 }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}