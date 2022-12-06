import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import Headroom from "react-headroom";

import { VscColorMode } from "react-icons/vsc";
import { AiOutlineGithub } from "react-icons/ai";

const Header = () => {
  const [pinned, setPinned] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Headroom
      onPin={() => setPinned(true)}
      onUnfix={() => setPinned(false)}
      style={{
        transition: "all .5s ease-in-out",
      }}
    >
      <header
        className={
          pinned ? "h-32 bg-gray-300 dark:bg-gray-700 shadow-sm" : "h-24"
        }
      >
        <div className="container flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-12 h-12">
              <Image
                src={"/images/logo.webp"}
                fill
                alt="Logo avatar"
                className="object-cover object-center w-12 border-2 rounded-full border-text-gradient-via"
              />
            </div>

            <span className="flex items-center gradient-text">
              @MohammedAtallah
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/MohammedAtallahhh"
              target={"_blank"}
              className="w-8 h-8"
            >
              <AiOutlineGithub className="w-full h-full" />
            </Link>

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
      </header>
    </Headroom>
  );
};

export default Header;
