import Image from "next/image";

import { motion } from "framer-motion";

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
    <motion.div
      className="py-16 bg-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container">
        <h2 className="mb-10 text-4xl text-center gradient-text">
          Some of my favourite tools.
        </h2>

        <div className="max-w-[850px] mx-auto flex flex-wrap items-center justify-center gap-x-16 gap-y-14">
          {tools.map((tool, i) => (
            <div
              key={tool}
              className={`relative max-w-[85px] ${
                i === 0 ? "dark:invert" : ""
              }`}
            >
              <Image
                src={base + tool}
                alt="Tool logo"
                fill
                className="!relative"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Tools;
