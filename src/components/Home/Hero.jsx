import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      // viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.2, duration: 0.25 }}
      className="relative py-10 overflow-hidden md:py-20"
    >
      <div className="container flex flex-col gap-8 md:gap-10 md:flex-row md:items-center md:justify-center">
        {/* circles backgorund */}
        <div className="absolute inset-0 w-full h-full -z-10 dark:brightness-75">
          <Image
            src="/images/circles.png"
            alt="circles backgorund"
            fill
            className="img"
          />
        </div>

        <div className="relative flex-shrink-0 w-48 h-48 mx-auto select-none md:mx-0">
          <Image
            src="/images/logo2.webp"
            alt="Logo avatar"
            fill
            className="border-4 rounded-full img border-text-gradient-via"
          />
        </div>
        <div className="text-center md:text-left max-w-[750px]">
          <h2 className="text-xl text-accent-light">
            Hey, My name is Mohammad Atallah 👋
          </h2>

          <h1 className="my-8 text-5xl font-bold md:text-6xl gradient-text">
            I build websites with React
          </h1>

          <div className="mb-16 text-xl md:text-2xl text-accent-lighter">
            <p className="mx-auto mb-4 leading-relaxed md:mx-0">
              I am a self-taught{" "}
              <span className="text-xl font-medium text-indigo-500 bg-indigo-100 dark:text-indigo-100 dark:bg-indigo-500">
                Frontend developer
              </span>{" "}
              and aspiring{" "}
              <span className="text-xl font-medium text-pink-500 bg-pink-100 dark:text-pink-100 dark:bg-pink-500">
                Software Engineer
              </span>
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
              className="btn--primary text-xl focus:ring-offset-1 focus:ring-2 active:scale-[102%]"
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
