import Image from "next/image";

import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const base = "/images/stack/";
const tools = [
  { src: "next-js.svg", title: "Next JS" },
  { src: "react.svg", title: "React" },
  { src: "redux.svg", title: "Redux" },
  { src: "javascript.svg", title: "JavaScript" },
  { src: "typescript.svg", title: "TypeScript" },
  { src: "firebase.svg", title: "Firebase" },
  { src: "tailwindcss.svg", title: "Tailwind CSS" },
  { src: "css.svg", title: "CSS" },
  { src: "framer-motion.svg", title: "Framer Motion" },
  { src: "vs-code.svg", title: "VS Code" },
  { src: "git.svg", title: "Git" },
];

const Tools = () => {
  return (
    <motion.div className="py-5 bg-primary">
      <h2 className="mb-10 text-3xl md:text-4xl">
        Some of my favourite tools.
      </h2>

      <motion.div className="flex flex-wrap gap-5">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.src}
            title={tool.title}
            className={`relative flex items-center shadow-sm bg-gray-100 dark:bg-gray-700 rounded-md dark:text-white`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ amount: 0.5, once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 24,
              delay: 0.05 * i,
            }}
          >
            <div className="w-[60px] h-[60px] p-2 rounded-md">
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

            <h4 className="px-4 font-semibold text-accent-light">
              {tool.title}
            </h4>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Tools;
