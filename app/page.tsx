"use client";
import WaveBackground from "./animation/WaveBackground";
import { useState } from "react";
import { CodeBlock } from "./components/CodeBlock";

// Helper function to generate gradient colors
const generateGradient = (
  startColor: string,
  endColor: string,
  steps: number
) => {
  const start = {
    r: parseInt(startColor.slice(1, 3), 16),
    g: parseInt(startColor.slice(3, 5), 16),
    b: parseInt(startColor.slice(5, 7), 16),
  };

  const end = {
    r: parseInt(endColor.slice(1, 3), 16),
    g: parseInt(endColor.slice(3, 5), 16),
    b: parseInt(endColor.slice(5, 7), 16),
  };

  const colors = [];
  for (let i = 0; i < steps; i++) {
    const r = Math.round(start.r + (end.r - start.r) * (i / (steps - 1)));
    const g = Math.round(start.g + (end.g - start.g) * (i / (steps - 1)));
    const b = Math.round(start.b + (end.b - start.b) * (i / (steps - 1)));
    colors.push(
      `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b
        .toString(16)
        .padStart(2, "0")}`
    );
  }
  return colors;
};

const colorSchemes = {
  blue: {
    colors: generateGradient("#000428", "#004e92", 12),
    background: "#000428",
  },
  purple: {
    colors: generateGradient("#2D0036", "#8E2DE2", 12),
    background: "#2D0036",
  },
  green: {
    colors: generateGradient("#004D40", "#00E676", 12),
    background: "#004D40",
  },
  sunset: {
    colors: generateGradient("#FF416C", "#FF4B2B", 12),
    background: "#FF416C",
  },
  ocean: {
    colors: generateGradient("#2193b0", "#6dd5ed", 12),
    background: "#2193b0",
  },
  midnight: {
    colors: generateGradient("#232526", "#414345", 12),
    background: "#232526",
  },
  aurora: {
    colors: generateGradient("#001F3F", "#00FF00", 12),
    background: "#001F3F",
  },
  fire: {
    colors: generateGradient("#FF0000", "#FFD700", 12),
    background: "#FF0000",
  },
  cosmic: {
    colors: generateGradient("#1A002A", "#FF69B4", 12),
    background: "#1A002A",
  },
  forest: {
    colors: generateGradient("#004225", "#2ECC71", 12),
    background: "#004225",
  },
  candy: {
    colors: generateGradient("#FF1493", "#FF69B4", 12),
    background: "#FF1493",
  },
  cyber: {
    colors: generateGradient("#000000", "#00FF00", 12),
    background: "#000000",
  },
};

export default function Home() {
  const [currentScheme, setCurrentScheme] = useState(colorSchemes.blue);
  const [startColor, setStartColor] = useState("#000000");
  const [endColor, setEndColor] = useState("#ffffff");
  const [showCode, setShowCode] = useState(false);

  const handleCustomColors = () => {
    const customScheme = {
      colors: generateGradient(startColor, endColor, 12),
      background: startColor,
    };
    setCurrentScheme(customScheme);
  };

  return (
    <main
      className="w-full h-full min-h-screen relative flex items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: currentScheme.background }}
    >
      <div className="z-50 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl flex flex-col gap-4 text-white max-w-2xl w-full mx-4">
        <h2 className="text-2xl font-bold text-center mb-4">
          Wave Background Generator
        </h2>

        <div className="grid grid-cols-3 gap-2 mb-6">
          {Object.entries(colorSchemes).map(([name, scheme]) => (
            <button
              key={name}
              onClick={() => setCurrentScheme(scheme)}
              className="px-4 py-2 rounded-md capitalize transition-colors"
              style={{
                backgroundColor: scheme.colors[0],
                color: "white",
              }}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="border-t border-white/20 pt-4 mb-4">
          <h3 className="text-lg font-semibold mb-3">Custom Colors</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <label>Start:</label>
              <input
                type="color"
                value={startColor}
                onChange={(e) => setStartColor(e.target.value)}
                className="w-full h-10 rounded cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-2">
              <label>End:</label>
              <input
                type="color"
                value={endColor}
                onChange={(e) => setEndColor(e.target.value)}
                className="w-full h-10 rounded cursor-pointer"
              />
            </div>
            <button
              onClick={handleCustomColors}
              className="px-4 py-2 bg-white/20 rounded-md hover:bg-white/30 transition-colors"
            >
              Apply Custom Colors
            </button>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4">
          <button
            onClick={() => setShowCode(!showCode)}
            className="w-full px-4 py-2 bg-white/20 rounded-md hover:bg-white/30 transition-colors"
          >
            {showCode ? "Hide Code" : "Show Code"}
          </button>
        </div>

        {showCode && (
          <div className="mt-4 bg-black/50 rounded-md overflow-x-auto">
            <CodeBlock colors={currentScheme.colors} />
          </div>
        )}
      </div>
      <WaveBackground colors={currentScheme.colors} />
    </main>
  );
}
