import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { useTheme } from "next-themes";

import { SparklesCore } from "../ui/Sparkles";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

import { projects } from "../../data/projects";

import { AiOutlineGithub } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";

const Projects = () => {
  const { theme } = useTheme();
  return (
    <section id="projects" className="relative">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="gradient-text"
        >
          Featured Projects
        </motion.h2>

        <div
          id="projects-container"
          className="grid grid-cols-1 gap-10 lg:grid-cols-2"
        >
          {projects.map(
            ({ id, name, description, image, tools, demo, code }, i) => (
              <CardContainer className="!py-0 inter-var" key={id + i}>
                <CardBody className="bg-blue-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-blue-400/[0.1] dark:bg-slate-800 dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {name}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="max-w-sm mt-2 text-sm text-neutral-500 dark:text-neutral-300"
                  >
                    {description}
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    className="w-full mt-4 cursor-pointer "
                  >
                    <Link href={demo ? demo : code}>
                      <Image
                        src={image}
                        height="1000"
                        width="1000"
                        className="object-cover w-full h-80 rounded-xl group-hover/card:shadow-xl"
                        alt="Project thumbnail"
                      />
                    </Link>
                  </CardItem>

                  <div className="mt-10">
                    <CardItem className="mb-2">
                      <div className="flex flex-wrap mt-3 gap-3 text-[12px] text-blue-500 dark:text-blue-300">
                        {tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-1 border border-blue-300 dark:border-blue-500"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </CardItem>

                    <div className="flex items-center justify-between">
                      {/* Demo Link */}
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 text-xs font-normal rounded-xl dark:text-white"
                      >
                        {demo && (
                          <Link
                            href={demo}
                            target="_blank"
                            className="inline-block p-2 transition rounded-full hover:scale-105 bg-slate-300 dark:bg-slate-700 "
                          >
                            <RxExternalLink
                              size={24}
                              className="text-slate-900 dark:text-white"
                            />
                          </Link>
                        )}
                      </CardItem>

                      {/* Code link */}
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2"
                      >
                        {code && (
                          <Link
                            href={code}
                            target="_blank"
                            className="inline-block p-2 transition rounded-full bg-slate-300 dark:bg-slate-700 hover:scale-105"
                          >
                            <AiOutlineGithub
                              size={24}
                              className="text-slate-900 dark:text-white"
                            />
                          </Link>
                        )}
                      </CardItem>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            )
          )}
        </div>

        {/* Sparkles */}
        {/* <div className="absolute inset-0 w-full -z-10">
          <SparklesCore
            id="projects-sprakles"
            background="transparent"
            minSize={0.3}
            maxSize={3}
            particleDensity={100}
            className="w-full h-full"
            particleColor={theme === "dark" ? "#9ed8ff" : "#003DFF"}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
