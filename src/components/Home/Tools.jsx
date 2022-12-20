import Image from "next/image";

import { motion } from "framer-motion";

const base = "/images/stack/";
const tools = [
  { src: "nextjs.svg", title: "NextJS" },
  { src: "react.svg", title: "ReactJS" },
  { src: "redux.svg", title: "ReduxJS" },
  { src: "typescript.svg", title: "TypeScript" },
  { src: "firebase.svg", title: "Firebase" },
  { src: "tailwindcss.svg", title: "Tailwind CSS" },
  { src: "framer-motion.svg", title: "Framer Motion" },
  { src: "vs-code.svg", title: "VS Code" },
];

const Tools = () => {
  return (
    <motion.div
      className="py-16 bg-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <h2 className="mb-10 text-5xl text-center gradient-text">
          Some of my favourite tools.
        </h2>

        <div className="max-w-[850px] mx-auto flex flex-wrap items-center justify-center gap-x-16 gap-y-14">
          {tools.map((tool, i) => (
            <div
              key={tool.src}
              className={`relative max-w-[85px] ${
                i === 0 ? "dark:invert" : ""
              }`}
              title={tool.title}
            >
              <Image
                src={base + tool.src}
                alt={tool.title}
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
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
