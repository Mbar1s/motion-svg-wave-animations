"use client";
import BlobAnimation from "./components/BlobAnimation";
import GradientAnimation from "./components/GradientAnimation";
import Wave from "./components/WaveAnimation";
import { useState } from "react";

export default function Home() {
  const [selectedAnimation, setSelectedAnimation] = useState("wave");

  const handleAnimationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAnimation(event.target.value);
  };

  return (
    <main>
      <div className="z-50 absolute top-4 right-48">
        <select
          value={selectedAnimation}
          onChange={handleAnimationChange}
          className="px-4 py-2 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95 text-black"
        >
          <option value="blob">Blob Animation</option>
          <option value="wave">Wave Animation</option>
          <option value="gradient">Gradient Animation</option>
        </select>
      </div>

      {selectedAnimation === "blob" && <BlobAnimation />}
      {selectedAnimation === "wave" && <Wave />}
      {selectedAnimation === "gradient" && <GradientAnimation />}
    </main>
  );
}
