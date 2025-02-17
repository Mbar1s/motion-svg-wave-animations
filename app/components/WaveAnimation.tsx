import React from "react";

import WaveBackground from "../animation/WaveBackground";
import { useState, useEffect } from "react";
import { CodeBlock } from "./codeblocks/CodeBlock";

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

function Wave() {
  const [currentScheme, setCurrentScheme] = useState(colorSchemes.blue);
  const [startColor, setStartColor] = useState("#1A002A");
  const [endColor, setEndColor] = useState("#FF69B4");
  const [showCode, setShowCode] = useState(false);
  const [panelVisible, setPanelVisible] = useState(true);

  // Use useEffect to apply custom colors when startColor or endColor changes
  useEffect(() => {
    const customScheme = {
      colors: generateGradient(startColor, endColor, 12),
      background: startColor,
    };
    setCurrentScheme(customScheme);
  }, [startColor, endColor]); // Dependency array ensures this runs when startColor or endColor changes

  const handleRandomColor = () => {
    const randomColor = () => {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    };
    const newStartColor = randomColor();
    const newEndColor = randomColor();

    setStartColor(newStartColor);
    setEndColor(newEndColor);
  };

  const togglePanelVisibility = () => {
    setPanelVisible(!panelVisible);
  };
  return (
    <section
      className="w-full h-full min-h-screen relative flex items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: currentScheme.background }}
    >
      {panelVisible && (
        <div className="z-50 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl flex flex-col gap-6 text-white max-w-2xl w-full mx-4 shadow-lg transition-all duration-300 ease-in-out">
          <h2 className="text-3xl font-bold text-center mb-2">
            Wave Background Generator
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {Object.entries(colorSchemes).map(([name, scheme]) => (
              <button
                key={name}
                onClick={() => setCurrentScheme(scheme)}
                className="px-4 py-2 rounded-xl capitalize transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95"
                style={{
                  backgroundColor: scheme.colors[0],
                  color: "white",
                }}
              >
                {name}
              </button>
            ))}
          </div>

          <button
            onClick={handleRandomColor}
            className="w-full px-4 py-2 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Random Color
          </button>

          <div className="border-t border-white/20 pt-5 mb-4">
            <h3 className="text-lg font-semibold mb-3">Custom Colors</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <label className="w-12">Start:</label>
                <input
                  type="color"
                  value={startColor}
                  onChange={(e) => setStartColor(e.target.value)}
                  className="w-full h-10 rounded-xl cursor-pointer"
                />
              </div>
              <div className="flex items-center gap-3">
                <label className="w-12">End:</label>
                <input
                  type="color"
                  value={endColor}
                  onChange={(e) => setEndColor(e.target.value)}
                  className="w-full h-10 rounded-xl cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-5">
            <button
              onClick={() => setShowCode(!showCode)}
              className="w-full px-4 py-2 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95"
            >
              {showCode ? "Hide Code" : "Show Code"}
            </button>
          </div>

          {showCode && (
            <div className="mt-5 bg-black/50 rounded-xl overflow-x-auto">
              <CodeBlock colors={currentScheme.colors} />
            </div>
          )}
        </div>
      )}

      <button
        onClick={togglePanelVisibility}
        className="z-50 absolute top-4 right-4 px-4 py-2 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95"
      >
        {panelVisible ? "Hide Panel" : "Show Panel"}
      </button>

      <WaveBackground colors={currentScheme.colors} />
    </section>
  );
}

export default Wave;
