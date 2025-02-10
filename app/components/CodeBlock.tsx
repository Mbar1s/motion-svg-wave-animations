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
};

export default function WaveBackground({ colors }: Props) {
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
        fill="${colors[0]}"
      />
      <motion.path
        animate={{
          d: [
            "M227 0L187 77L178 154L203 231L202 309L155 386L214 463L165 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
            "M161 0L191 129L155 257L157 386L162 514L207 643L159 771L150 900L0 900L0 771L0 643L0 514L0 386L0 257L0 129L0 0Z",
            "M227 0L187 77L178 154L203 231L202 309L155 386L214 463L165 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        fill="${colors[1]}"
      />
      <motion.path
        animate={{
          d: [
            "M184 0L168 77L168 154L138 231L139 309L173 386L176 463L150 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
            "M157 0L132 129L193 257L141 386L154 514L142 643L185 771L145 900L0 900L0 771L0 643L0 514L0 386L0 257L0 129L0 0Z",
            "M184 0L168 77L168 154L138 231L139 309L173 386L176 463L150 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        fill="${colors[2]}"
      />
      <motion.path
        animate={{
          d: [
            "M186 0L131 77L153 154L168 231L131 309L124 386L174 463L177 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
            "M153 0L177 129L162 257L124 386L141 514L165 643L126 771L177 900L0 900L0 771L0 643L0 514L0 386L0 257L0 129L0 0Z",
            "M186 0L131 77L153 154L168 231L131 309L124 386L174 463L177 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        fill="${colors[3]}"
      />
      <motion.path
        animate={{
          d: [
            "M144 0L152 77L164 154L125 231L149 309L113 386L138 463L123 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
            "M133 0L107 129L117 257L155 386L141 514L112 643L116 771L155 900L0 900L0 771L0 643L0 514L0 386L0 257L0 129L0 0Z",
            "M144 0L152 77L164 154L125 231L149 309L113 386L138 463L123 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        fill="${colors[4]}"
      />
      <motion.path
        animate={{
          d: [
            "M136 0L148 77L110 154L130 231L146 309L106 386L149 463L103 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
            "M100 0L139 129L109 257L119 386L98 514L102 643L134 771L131 900L0 900L0 771L0 643L0 514L0 386L0 257L0 129L0 0Z",
            "M136 0L148 77L110 154L130 231L146 309L106 386L149 463L103 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        fill="${colors[5]}"
      />
      <motion.path
        animate={{
          d: [
            "M121 0L93 77L119 154L110 231L127 309L88 386L85 463L131 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
            "M105 0L106 129L101 257L82 386L91 514L83 643L102 771L85 900L0 900L0 771L0 643L0 514L0 386L0 257L0 129L0 0Z",
            "M121 0L93 77L119 154L110 231L127 309L88 386L85 463L131 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
          ],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        fill="${colors[6]}"
      />
      <motion.path
        animate={{
          d: [
            "M97 0L94 77L79 154L82 231L79 309L109 386L78 463L108 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
            "M66 0L78 129L68 257L88 386L88 514L103 643L65 771L78 900L0 900L0 771L0 643L0 514L0 386L0 257L0 129L0 0Z",
            "M97 0L94 77L79 154L82 231L79 309L109 386L78 463L108 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        fill="${colors[7]}"
      />
      <motion.path
        animate={{
          d: [
            "M78 0L72 77L90 154L71 231L80 309L81 386L82 463L70 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
            "M72 0L52 129L55 257L73 386L86 514L55 643L78 771L55 900L0 900L0 771L0 643L0 514L0 386L0 257L0 129L0 0Z",
            "M78 0L72 77L90 154L71 231L80 309L81 386L82 463L70 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        fill="${colors[8]}"
      />
      <motion.path
        animate={{
          d: [
            "M61 0L62 77L69 154L70 231L50 309L47 386L62 463L49 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
            "M53 0L59 129L44 257L64 386L63 514L55 643L59 771L56 900L0 900L0 771L0 643L0 514L0 386L0 257L0 129L0 0Z",
            "M61 0L62 77L69 154L70 231L50 309L47 386L62 463L49 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        fill="${colors[9]}"
      />
      <motion.path
        animate={{
          d: [
            "M40 0L52 77L34 154L33 231L43 309L46 386L43 463L35 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
            "M48 0L35 129L26 257L31 386L44 514L34 643L48 771L31 900L0 900L0 771L0 643L0 514L0 386L0 257L0 129L0 0Z",
            "M40 0L52 77L34 154L33 231L43 309L46 386L43 463L35 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
          ],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        fill="${colors[10]}"
      />
      <motion.path
        animate={{
          d: [
            "M25 0L14 77L21 154L34 231L24 309L28 386L13 463L15 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
            "M14 0L12 129L29 257L14 386L24 514L14 643L21 771L18 900L0 900L0 771L0 643L0 514L0 386L0 257L0 129L0 0Z",
            "M25 0L14 77L21 154L34 231L24 309L28 386L13 463L15 540L0 540L0 463L0 386L0 309L0 231L0 154L0 77L0 0Z",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        fill="${colors[11]}"
      />
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
