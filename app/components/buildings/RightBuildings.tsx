"use client";

import React, { useEffect, useState } from "react";
import { flicker } from "../animations/Flicker";

interface BuildingSpec {
    height: number;
    windows: number;
    outline: "cyan" | "magenta";
    width: number;
    opacity: number;
    layer: number; // 1 = back, 2 = middle, 3 = front
}

// Row 1 - Bottom row
const ROW_1: readonly BuildingSpec[] = [
    // Back layer - taller, more transparent, slowest movement
    { height: 140, windows: 7, outline: "cyan", width: 45, opacity: 0.4, layer: 1 },
    { height: 160, windows: 8, outline: "magenta", width: 50, opacity: 0.35, layer: 1 },
    { height: 130, windows: 6, outline: "cyan", width: 42, opacity: 0.4, layer: 1 },
    { height: 150, windows: 7, outline: "magenta", width: 48, opacity: 0.38, layer: 1 },
    { height: 145, windows: 7, outline: "cyan", width: 46, opacity: 0.36, layer: 1 },

    // Middle layer - medium speed
    { height: 100, windows: 5, outline: "magenta", width: 48, opacity: 0.6, layer: 2 },
    { height: 120, windows: 6, outline: "cyan", width: 52, opacity: 0.55, layer: 2 },
    { height: 90, windows: 4, outline: "magenta", width: 44, opacity: 0.6, layer: 2 },
    { height: 110, windows: 5, outline: "cyan", width: 50, opacity: 0.58, layer: 2 },
    { height: 105, windows: 5, outline: "magenta", width: 46, opacity: 0.6, layer: 2 },
    { height: 115, windows: 6, outline: "cyan", width: 48, opacity: 0.57, layer: 2 },

    // Front layer - shorter, more opaque, fastest movement
    { height: 70, windows: 3, outline: "magenta", width: 55, opacity: 0.85, layer: 3 },
    { height: 85, windows: 4, outline: "cyan", width: 58, opacity: 0.8, layer: 3 },
    { height: 75, windows: 3, outline: "magenta", width: 52, opacity: 0.85, layer: 3 },
    { height: 95, windows: 4, outline: "cyan", width: 60, opacity: 0.78, layer: 3 },
    { height: 80, windows: 4, outline: "magenta", width: 54, opacity: 0.82, layer: 3 },
    { height: 88, windows: 4, outline: "cyan", width: 56, opacity: 0.8, layer: 3 }
];

// Row 2
const ROW_2: readonly BuildingSpec[] = [
    { height: 135, windows: 6, outline: "magenta", width: 44, opacity: 0.38, layer: 1 },
    { height: 155, windows: 7, outline: "cyan", width: 49, opacity: 0.36, layer: 1 },
    { height: 125, windows: 6, outline: "magenta", width: 43, opacity: 0.4, layer: 1 },
    { height: 148, windows: 7, outline: "cyan", width: 47, opacity: 0.37, layer: 1 },

    { height: 95, windows: 4, outline: "cyan", width: 47, opacity: 0.58, layer: 2 },
    { height: 115, windows: 5, outline: "magenta", width: 51, opacity: 0.56, layer: 2 },
    { height: 108, windows: 5, outline: "cyan", width: 49, opacity: 0.59, layer: 2 },
    { height: 98, windows: 4, outline: "magenta", width: 45, opacity: 0.6, layer: 2 },
    { height: 112, windows: 5, outline: "cyan", width: 48, opacity: 0.57, layer: 2 },

    { height: 72, windows: 3, outline: "cyan", width: 54, opacity: 0.82, layer: 3 },
    { height: 82, windows: 4, outline: "magenta", width: 57, opacity: 0.8, layer: 3 },
    { height: 78, windows: 3, outline: "cyan", width: 53, opacity: 0.84, layer: 3 },
    { height: 90, windows: 4, outline: "magenta", width: 59, opacity: 0.79, layer: 3 },
    { height: 85, windows: 4, outline: "cyan", width: 55, opacity: 0.81, layer: 3 }
];

// Row 3
const ROW_3: readonly BuildingSpec[] = [
    { height: 142, windows: 7, outline: "cyan", width: 46, opacity: 0.39, layer: 1 },
    { height: 158, windows: 8, outline: "magenta", width: 51, opacity: 0.35, layer: 1 },
    { height: 138, windows: 6, outline: "cyan", width: 44, opacity: 0.4, layer: 1 },
    { height: 152, windows: 7, outline: "magenta", width: 49, opacity: 0.37, layer: 1 },

    { height: 102, windows: 5, outline: "magenta", width: 49, opacity: 0.59, layer: 2 },
    { height: 118, windows: 6, outline: "cyan", width: 53, opacity: 0.56, layer: 2 },
    { height: 92, windows: 4, outline: "magenta", width: 45, opacity: 0.6, layer: 2 },
    { height: 107, windows: 5, outline: "cyan", width: 50, opacity: 0.58, layer: 2 },
    { height: 113, windows: 5, outline: "magenta", width: 47, opacity: 0.57, layer: 2 },

    { height: 68, windows: 3, outline: "magenta", width: 56, opacity: 0.83, layer: 3 },
    { height: 87, windows: 4, outline: "cyan", width: 60, opacity: 0.79, layer: 3 },
    { height: 76, windows: 3, outline: "magenta", width: 54, opacity: 0.85, layer: 3 },
    { height: 92, windows: 4, outline: "cyan", width: 58, opacity: 0.78, layer: 3 }
];

// Row 4
const ROW_4: readonly BuildingSpec[] = [
    { height: 145, windows: 7, outline: "magenta", width: 47, opacity: 0.38, layer: 1 },
    { height: 162, windows: 8, outline: "cyan", width: 52, opacity: 0.34, layer: 1 },
    { height: 133, windows: 6, outline: "magenta", width: 43, opacity: 0.4, layer: 1 },
    { height: 149, windows: 7, outline: "cyan", width: 48, opacity: 0.38, layer: 1 },

    { height: 97, windows: 4, outline: "cyan", width: 48, opacity: 0.59, layer: 2 },
    { height: 122, windows: 6, outline: "magenta", width: 54, opacity: 0.55, layer: 2 },
    { height: 88, windows: 4, outline: "cyan", width: 44, opacity: 0.6, layer: 2 },
    { height: 109, windows: 5, outline: "magenta", width: 51, opacity: 0.58, layer: 2 },
    { height: 116, windows: 6, outline: "cyan", width: 49, opacity: 0.56, layer: 2 },

    { height: 74, windows: 3, outline: "cyan", width: 55, opacity: 0.84, layer: 3 },
    { height: 84, windows: 4, outline: "magenta", width: 59, opacity: 0.8, layer: 3 },
    { height: 79, windows: 4, outline: "cyan", width: 53, opacity: 0.82, layer: 3 },
    { height: 94, windows: 4, outline: "magenta", width: 61, opacity: 0.77, layer: 3 },
    { height: 81, windows: 4, outline: "cyan", width: 57, opacity: 0.81, layer: 3 }
];

function outlineToClasses(outline: "cyan" | "magenta") {
    return outline === "magenta" ? "border-magenta-400/60" : "border-cyan-400/60";
}

function BuildingRow({ buildings, offsetY, scrollY }: { buildings: readonly BuildingSpec[], offsetY: number, scrollY: number }) {
    const getParallaxOffset = (layer: number) => {
        const speedMultiplier = layer === 1 ? 0.1 : layer === 2 ? 0.3 : 0.5;
        return scrollY * speedMultiplier;
    };

    return (
        <div
            className="absolute right-4 hidden sm:flex sm:flex-row gap-2 items-end pointer-events-none select-none"
            style={{ bottom: `${offsetY}px` }}
            aria-hidden
        >
            {buildings.map((b, i) => (
                <div
                    key={i}
                    className={`relative bg-[#0f0f16] border ${outlineToClasses(b.outline)} rounded-sm overflow-hidden transition-transform duration-0`}
                    style={{
                        height: `${b.height}px`,
                        width: `${b.width}px`,
                        opacity: b.opacity,
                        transform: `translateY(${getParallaxOffset(b.layer)}px)`
                    }}
                >
                    {[...Array(b.windows)].map((_, w) => (
                        <div
                            key={w}
                            className={`${flicker()} absolute left-1/2 -translate-x-1/2 h-[6px] w-[10px] rounded-sm`}
                            style={{
                                top: `${(w + 1) * (b.height / (b.windows + 1))}px`,
                                background: b.outline === "magenta" ? "#ff00ff" : "#00ffff",
                                opacity: 0.85
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default function RightBuildings(): JSX.Element {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <BuildingRow buildings={ROW_1} offsetY={0} scrollY={scrollY} />
            <BuildingRow buildings={ROW_2} offsetY={200} scrollY={scrollY} />
            <BuildingRow buildings={ROW_3} offsetY={400} scrollY={scrollY} />
            <BuildingRow buildings={ROW_4} offsetY={600} scrollY={scrollY} />
        </>
    );
}