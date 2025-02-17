"use client";

import React, { useState } from "react";
import Gradient from "../animation/Gradient";
import { GradientCodeBlock } from "./codeblocks/GradientCodeBlock";

const colorPresets = {
  Serenity: { color1: "#E0EAFC", color2: "#CFDEF3" },
  Aurora: { color1: "#74EBD5", color2: "#9FACE6" },
  Citrus: { color1: "#FFEFBA", color2: "#FFE17A" },
  Twilight: { color1: "#5C258D", color2: "#4389A2" },
  Emerald: { color1: "#283c86", color2: "#45a247" },
  Sunrise: { color1: "#F7971E", color2: "#FFD200" },
  "Cool Sky": { color1: "#2980B9", color2: "#6DD5FA" },
  Cherry: { color1: "#e53935", color2: "#e35d5b" },
  "Deep Blue": { color1: "#6441A5", color2: "#2a0845" },
  "Rose Gold": { color1: "#B79891", color2: "#94716B" },
};

function GradientAnimation() {
  const [color1, setColor1] = useState("#00CC99");
  const [color2, setColor2] = useState("#6600FF");
  const [duration, setDuration] = useState(10);
  const [panelVisible, setPanelVisible] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const togglePanelVisibility = () => {
    setPanelVisible(!panelVisible);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleRandomColor = () => {
    setColor1(getRandomColor());
    setColor2(getRandomColor());
  };

  return (
    <section className="w-full h-full min-h-screen relative flex items-center justify-center transition-colors duration-500 ">
      {panelVisible && (
        <div className="z-50 bg-white/10 backdrop-blur-md border border-white/20 p-6 bg-slate-950  bg-opacity-70 rounded-3xl flex flex-col gap-6 text-white max-w-2xl w-full mx-4 shadow-lg transition-all duration-300 ease-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-3xl font-bold text-center mb-2">
            Gradient Control Panel
          </h2>
          <div>
            <label
              htmlFor="color1"
              className="block text-sm font-medium text-white"
            >
              Color 1:
            </label>
            <input
              type="color"
              id="color1"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
              className="w-full h-10 rounded-xl cursor-pointer bg-gray-800 border-gray-700"
            />
          </div>
          <div>
            <label
              htmlFor="color2"
              className="block text-sm font-medium text-white"
            >
              Color 2:
            </label>
            <input
              type="color"
              id="color2"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
              className="w-full h-10 rounded-xl cursor-pointer bg-gray-800 border-gray-700"
            />
          </div>
          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-white"
            >
              Duration:
            </label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full h-10 rounded-xl bg-gray-800 border-gray-700 text-white"
            />
          </div>
          <button
            onClick={handleRandomColor}
            className="w-full px-4 py-2 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Random Colors
          </button>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {Object.entries(colorPresets).map(([name, preset]) => (
              <button
                key={name}
                onClick={() => {
                  setColor1(preset.color1);
                  setColor2(preset.color2);
                }}
                className="px-4 py-2 rounded-xl capitalize transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95"
                style={{
                  backgroundColor: preset.color1,
                  color: "white",
                }}
              >
                {name}
              </button>
            ))}
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
            <div className="mt-5 bg-black/50 rounded-xl overflow-x-auto overflow-y-auto max-h-64">
              <GradientCodeBlock
                color1={color1}
                color2={color2}
                duration={duration}
              />
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
      <Gradient color1={color1} color2={color2} duration={duration} />
    </section>
  );
}

export default GradientAnimation;
