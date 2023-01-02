import Image from "next/image";
import Link from "next/link";

import { projects } from "../../data/projects";

import { motion } from "framer-motion";

import { AiOutlineGithub } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="projects" className="container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="gradient-text"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">
        {projects.map(
          ({ id, name, description, image, tools, demo, code }, i) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.1 * i }}
              key={id}
              className="flex flex-col"
            >
              <div
                // href={demo}
                // target="_blank"
                className="relative flex-grow group"
              >
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="!relative shadow-sm shadow-[rgba(139,139,139,0.75)] object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center invisible gap-3 transition opacity-0 bg-black/70 group-hover:opacity-100 group-hover:visible">
                  {code && (
                    <Link
                      href={code}
                      target="_blank"
                      className="p-2 transition bg-black rounded-full hover:scale-105"
                    >
                      <AiOutlineGithub size={30} color="white" />
                    </Link>
                  )}

                  {demo && (
                    <Link
                      href={demo}
                      target="_blank"
                      className="p-2 transition bg-black rounded-full hover:scale-105"
                    >
                      <RxExternalLink size={30} color="white" />
                    </Link>
                  )}
                </div>
              </div>

              <div className="flex justify-between mt-5">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">{name}</h3>

                  {description && (
                    <h4 className="text-accent-lighter">{description}</h4>
                  )}

                  <div className="flex flex-wrap mt-3 gap-3 text-[12px] text-blue-500 dark:text-blue-300">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="border border-blue-300 dark:border-blue-500 py-1 px-2"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  {code && (
                    <Link
                      href={code}
                      target="_blank"
                      className="p-2 transition rounded-full bg-accent hover:scale-105"
                    >
                      <AiOutlineGithub
                        size={24}
                        className="text-white dark:text-black"
                      />
                    </Link>
                  )}

                  {demo && (
                    <Link
                      href={demo}
                      target="_blank"
                      className="p-2 transition rounded-full bg-accent hover:scale-105"
                    >
                      <RxExternalLink
                        size={24}
                        className="text-white dark:text-black"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
