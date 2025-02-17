"use client";
import BlobAnimation from "./components/BlobAnimation";
import Wave from "./components/WaveAnimation";
import { useState } from "react";

export default function Home() {
  const [showBlob, setShowBlob] = useState(true);

  const toggleAnimation = () => {
    setShowBlob(!showBlob);
  };

  return (
    <main>
      <button
        onClick={toggleAnimation}
        className="z-50 absolute top-4 right-48 px-4 py-2 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95"
      >
        Show {showBlob ? "Wave" : "Blob"} Animation
      </button>
      {showBlob ? <BlobAnimation /> : <Wave />}
    </main>
  );
}
