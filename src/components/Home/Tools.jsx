import Image from "next/image";
import React from "react";

const base = "/images/stack/";
const tools = [
  "nextjs.svg",
  "react.svg",
  "redux.svg",
  "typescript.svg",
  "firebase.svg",
  "tailwindcss.svg",
  "framer-motion.svg",
  "vs-code.svg",
];

const Tools = () => {
  return (
    <div className="py-20">
      <h2 className="mb-16 text-4xl text-center gradient-text">
        Some of my favourite tools.
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-14">
        {tools.map((tool, i) => (
          <div
            key={tool}
            className={`relative h-24 w-24  ${i === 0 ? "dark:invert" : ""}`}
          >
            <Image src={base + tool} alt="Tool logo" layout="fill" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
