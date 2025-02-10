"use client";
import { useState } from "react";

type CodeBlockProps = {
  colors: string[];
};

export const CodeBlock = ({ colors }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const codeString = `import { motion } from "framer-motion";

type Props = {
  colors: string[];
  rotation: number;
};

export default function WaveBackground({ colors, rotation }: Props) {
  const currentColors = ${JSON.stringify(colors, null, 2)};

  return (
    <motion.svg
      className="fixed bottom-0 left-0 object-cover object-center w-auto h-full transition-transform duration-500"
      viewBox="0 0 960 540"
      width="960"
      height="540"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
      transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
    >
      <motion.path
        animate={{
          d: [
            "M184 0L168 77L168 154L138 231L139 309L173 386L176 463L150 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
            "M166 0L183 129L181 257L157 386L224 514L178 643L207 771L230 900L0 900L0 771L0 643L0 514L0 386L0 257L0 129L0 0Z",
            "M184 0L168 77L168 154L138 231L139 309L173 386L176 463L150 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        fill={currentColors[0]}
      />
      {/* Add all other motion.path elements here */}
    </motion.svg>
  );
}`;

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
