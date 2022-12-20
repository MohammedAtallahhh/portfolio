import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import { motion } from "framer-motion";

import { VscColorMode } from "react-icons/vsc";

const links = [
  // {
  //   name: "",
  //   title: "Home",
  //   href: "/",
  // },
  // {
  //   name: "blog",
  //   title: "Blog",
  //   href: "/blog",
  // },
];

const Header = () => {
  const [pinned, setPinned] = useState(false);
  const [activeLink, setActive] = useState("");
  const { resolvedTheme, setTheme } = useTheme();

  const router = useRouter();

  useEffect(() => {
    setActive(router.pathname.split("/")[1]);
  }, [router]);

  return (
    <motion.header
      className="border-b border-background-light"
      initial={{ y: "-100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, duration: 0.2 }}
    >
      <div className="container flex items-center justify-between h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-12 h-12">
            <Image
              src={"/images/logo.webp"}
              fill
              alt="Logo avatar"
              className="object-cover object-center w-12 border-2 rounded-full border-text-gradient-via"
            />
          </div>

          <span className="items-center hidden font-sans gradient-text md:inline-block">
            @MohammedAtallah
          </span>
        </Link>

        <div className="flex flex-wrap items-center">
          <div className="flex items-center gap-4 mr-8 text-lg text-accent-lighter">
            {links.map(({ name, title, href }) => (
              <Link
                key={name}
                href={href}
                className={`transition-colors hover:text-accent ${
                  activeLink === name ? "font-semibold text-accent" : ""
                }`}
              >
                {title}
              </Link>
            ))}
          </div>

          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="w-8 h-8 bg-transparent rounded-full active:scale-105 focus:outline-none"
          >
            <VscColorMode className="w-full h-full" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
