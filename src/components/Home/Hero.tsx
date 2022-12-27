import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const Hero: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      // viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.2 }}
      className="relative py-10 overflow-hidden md:py-28"
    >
      <div className="container flex flex-col gap-8 md:gap-10 md:flex-row md:items-center md:justify-center">
        {/* circles backgorund */}
        {/* <div className="absolute inset-0 hidden w-full h-full -z-10 dark:brightness-75 lg:block">
          <Image
            src="/images/circles.png"
            alt="circles backgorund"
            fill
            className="img"
          />
        </div> */}

        <div className="relative flex-shrink-0 w-48 h-48 mx-auto select-none md:mx-0">
          <Image
            src="/images/logo2.webp"
            alt="Logo avatar"
            fill
            className="border-4 rounded-full img border-text-gradient-via"
          />
        </div>
        <div className="text-center md:text-left max-w-[750px]">
          <h2 className="text-xl">Hey, My name is Mohammad Atallah 👋</h2>

          <h1 className="my-8 text-5xl font-bold md:text-6xl gradient-text">
            I build websites with React
          </h1>

          <div className="mb-16 text-xl md:text-2xl text-accent-lighter">
            <p className="mx-auto mb-4 leading-relaxed md:mx-0">
              I am a self-taught{" "}
              <span className="text-xl font-bold text-accent">
                Frontend developer
              </span>{" "}
              and aspiring{" "}
              <span className="text-xl font-bold text-accent">
                Software Engineer
              </span>
              .
            </p>

            <p className="mx-auto md:mx-0">
              I love building websites that are responsive, accessible, and
              user-friendly with focus on clean code and scalability.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href={"/#projects"}
              className="inline-block text-xl btn--primary"
            >
              Explore projects
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
