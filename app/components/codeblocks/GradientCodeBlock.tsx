"use client";
import { useState } from "react";

interface GradientProps {
  color1: string;
  color2: string;
  duration: number;
}

export const GradientCodeBlock = ({
  color1,
  color2,
  duration,
}: GradientProps) => {
  const [copied, setCopied] = useState(false);

  const codeString = `import React from "react";
import { motion } from "motion/react";

interface GradientProps {
  color1: string;
  color2: string;
  duration: number;
}

function Gradient({ color1, color2, duration }: GradientProps) {

  return (
    <motion.svg
      id="visual"
      viewBox="0 0 960 540"
      width="960"
      height="540"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      className="w-full h-full"
    >
      <defs>
        <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="163"
            result="effect1_foregroundBlur"
          ></feGaussianBlur>
        </filter>
      </defs>
      <rect width="960" height="540" fill="${color2}"></rect>
      <g filter="url(#blur1)">
        <motion.circle
          cx="683"
          cy="54"
          fill="${color1}"
          r="363"
          animate={{
            cx: [683, 750, 683],
            cy: [54, 100, 54],
          }}
          transition={{ duration: ${duration}, repeat: Infinity, ease: "easeInOut" }}
        ></motion.circle>
        <motion.circle
          cx="455"
          cy="337"
          fill="${color2}"
          r="363"
          animate={{
            cx: [455, 500, 455],
            cy: [337, 380, 337],
          }}
          transition={{ duration: ${duration}, repeat: Infinity, ease: "easeInOut" }}
        ></motion.circle>
        <motion.circle
          cx="190"
          cy="122"
          fill="${color1}"
          r="363"
          animate={{
            cx: [190, 250, 190],
            cy: [122, 150, 122],
          }}
          transition={{ duration: ${duration}, repeat: Infinity, ease: "easeInOut" }}
        ></motion.circle>
        <motion.circle
          cx="82"
          cy="419"
          fill="${color1}"
          r="363"
          animate={{
            cx: [82, 120, 82],
            cy: [419, 450, 419],
          }}
          transition={{ duration: ${duration}, repeat: Infinity, ease: "easeInOut" }}
        ></motion.circle>
        <motion.circle
          cx="798"
          cy="239"
          fill="${color2}"
          r="363"
          animate={{
            cx: [798, 700, 798],
            cy: [239, 280, 239],
          }}
          transition={{ duration: ${duration}, repeat: Infinity, ease: "easeInOut" }}
        ></motion.circle>
        <motion.circle
          cx="263"
          cy="377"
          fill="${color1}"
          r="363"
          animate={{
            cx: [263, 900, 263],
            cy: [377, 400, 377],
          }}
          transition={{ duration: ${duration}, repeat: Infinity, ease: "easeInOut" }}
        ></motion.circle>
      </g>
    </motion.svg>
  );
}

export default Gradient;
`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md text-sm transition-colors"
      >
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <pre className="text-sm text-gray-300 overflow-x-auto p-4">
        <code>{codeString}</code>
      </pre>
    </div>
  );
};
