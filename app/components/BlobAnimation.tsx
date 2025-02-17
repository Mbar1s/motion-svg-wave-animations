"use client";

import React, { useState } from "react";
import Blob from "../animation/Blob";
import { BlobCodeBlock } from "./BlobCodeBlock";

function BlobAnimation() {
  const [blobColor, setBlobColor] = useState("#BB004B");
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [animationDuration, setAnimationDuration] = useState(5);
  const [panelVisible, setPanelVisible] = useState(true);
  const [showCode, setShowCode] = useState(false);

  const togglePanelVisibility = () => {
    setPanelVisible(!panelVisible);
  };

  const toggleShowCode = () => {
    setShowCode(!showCode);
  };

  return (
    <section
      className="w-full h-full min-h-screen relative flex items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: backgroundColor }}
    >
      {panelVisible && (
        <div className="z-50 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl flex flex-col gap-6 text-white max-w-2xl w-full mx-4 shadow-lg transition-all duration-300 ease-in-out">
          <h2 className="text-3xl font-bold text-center mb-2">Blob Controls</h2>

          <div className="mb-2">
            <label htmlFor="blobColor" className="block text-sm font-medium ">
              Blob Color:
            </label>
            <input
              type="color"
              id="blobColor"
              className="w-full h-10 rounded-xl cursor-pointer"
              value={blobColor}
              onChange={(e) => setBlobColor(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="backgroundColor"
              className="block text-sm font-medium "
            >
              Background Color:
            </label>
            <input
              type="color"
              id="backgroundColor"
              className="w-full h-10 rounded-xl cursor-pointer"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="animationDuration"
              className="block text-sm font-medium "
            >
              Animation Duration:
            </label>
            <input
              type="number"
              id="animationDuration"
              className="mt-1 p-2 w-full rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none text-black"
              value={animationDuration}
              onChange={(e) => setAnimationDuration(parseFloat(e.target.value))}
            />
          </div>

          <div className="border-t border-white/20 pt-5">
            <button
              onClick={toggleShowCode}
              className="w-full px-4 py-2 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95"
            >
              {showCode ? "Hide Code" : "Show Code"}
            </button>
          </div>

          {showCode && (
            <div className="mt-5 bg-black/50 rounded-xl overflow-x-auto">
              <BlobCodeBlock
                blobColor={blobColor}
                animationDuration={animationDuration}
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

      <Blob blobColor={blobColor} animationDuration={animationDuration} />
    </section>
  );
}

export default BlobAnimation;
