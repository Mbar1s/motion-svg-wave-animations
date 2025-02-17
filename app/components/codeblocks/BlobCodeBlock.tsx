import React, { useState } from "react";
const codeString = `
import React from "react";
import { motion } from "motion/react";

interface Props {
  blobColor: string;
  animationDuration: number;
}

function Blob({ blobColor, animationDuration }: Props) {
  return (
    <motion.svg
      id="visual"
      viewBox="0 0 960 540"
      width="960"
      height="540"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      className="fixed inset-0 object-cover object-center w-screen h-screen transition-transform duration-500"
    >
      <g transform="translate(443.5802957135247 264.18559676066286)">
        <motion.path
          d="M171.1 -161.9C214.9 -127.3 239 -63.6 226.8 -12.1C214.7 39.4 166.4 78.7 122.6 117.9C78.7 157.1 39.4 196 -8.6 204.6C-56.6 213.2 -113.1 191.5 -138.8 152.3C-164.5 113.1 -159.2 56.6 -146.9 12.4C-134.5 -31.8 -115 -63.6 -89.3 -98.3C-63.6 -133 -31.8 -170.5 15.9 -186.4C63.6 -202.3 127.3 -196.6 171.1 -161.9"
          fill={blobColor}
          animate={{
            d: [
              "M171.1 -161.9C214.9 -127.3 239 -63.6 226.8 -12.1C214.7 39.4 166.4 78.7 122.6 117.9C78.7 157.1 39.4 196 -8.6 204.6C-56.6 213.2 -113.1 191.5 -138.8 152.3C-164.5 113.1 -159.2 56.6 -146.9 12.4C-134.5 -31.8 -115 -63.6 -89.3 -98.3C-63.6 -133 -31.8 -170.5 15.9 -186.4C63.6 -202.3 127.3 -196.6 171.1 -161.9",
              "M148.6 -158.4C192.4 -147.9 235.2 -118.1 246.4 -71.4C257.6 -24.7 237.2 37.9 202.8 84.9C168.4 131.9 119.9 162.6 71.4 173.8C22.9 185 -25.7 176.7 -70.6 154.4C-115.5 132.1 -148.6 95.8 -163.1 54.7C-177.6 13.6 -173.5 -32.6 -154.4 -77.5C-135.3 -122.4 -101.2 -166 -59.3 -182.8C-17.4 -199.6 32.6 -189.6 148.6 -158.4",
              "M168.9 -148.6C212.7 -129.7 255.5 -91.7 259.1 -39.9C262.7 11.9 227.1 77.5 182.9 114.9C138.7 152.3 85.8 161.5 38.4 164.3C-9.1 167.1 -45.7 163.5 -89.9 145.7C-134.1 127.9 -175.9 96.9 -186.4 57.7C-196.9 18.5 -176.1 -29.9 -149.3 -74.6C-122.5 -119.3 -90 -156.2 -49.4 -174.9C-8.8 -193.6 40.1 -194.1 168.9 -148.6",
              "M171.1 -161.9C214.9 -127.3 239 -63.6 226.8 -12.1C214.7 39.4 166.4 78.7 122.6 117.9C78.7 157.1 39.4 196 -8.6 204.6C-56.6 213.2 -113.1 191.5 -138.8 152.3C-164.5 113.1 -159.2 56.6 -146.9 12.4C-134.5 -31.8 -115 -63.6 -89.3 -98.3C-63.6 -133 -31.8 -170.5 15.9 -186.4C63.6 -202.3 127.3 -196.6 171.1 -161.9",
            ],
          }}
          transition={{
            duration: animationDuration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.path>
      </g>
    </motion.svg>
  );
}

export default Blob;
`;

interface BlobCodeBlockProps {
  blobColor: string;
  animationDuration: number;
}

export const BlobCodeBlock: React.FC<BlobCodeBlockProps> = ({
  blobColor,
  animationDuration,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  // Replace the dynamic values in the code string
  const formattedCode = codeString.replace(
    `fill={blobColor}`,
    `fill="${blobColor}"`
  ).replace(
    `duration: animationDuration`,
    `duration: ${animationDuration}`
  );

  const handleCopyClick = () => {
    navigator.clipboard.writeText(formattedCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="relative">
      <button
        className="absolute top-2 right-2 px-2 py-1 bg-gray-800 text-white rounded text-sm hover:bg-gray-700 focus:outline-none"
        onClick={handleCopyClick}
      >
        {isCopied ? "Copied!" : "Copy Code"}
      </button>
      <pre>
        <code>{formattedCode}</code>
      </pre>
    </div>
  );
}; 