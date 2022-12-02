import { useTheme } from "next-themes";
import Image from "next/image";

import { FiAtSign } from "react-icons/fi";
import { VscColorMode } from "react-icons/vsc";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header>
      <div className="container flex items-center justify-between h-24">
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

        <div>
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="w-10 h-10 bg-transparent rounded-full active:scale-105 focus:outline-none"
          >
            <VscColorMode size={30} className="w-full h-full" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
