import React from "react";
import Link from "next/link";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail, AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  const data = new Date().getFullYear();

  return (
    <footer className="py-4 bg-background-light">
      <div className="container flex flex-wrap items-center justify-between gap-5">
        <p className="flex items-center text-sm font-medium text-accent-light">
          <span className="flex items-center gap-1 mr-1">
            <AiOutlineCopyright size={16} /> {data}
          </span>
          Mohammed Atallah
        </p>

        {/* Social links */}
        <div className="flex items-center">
          <Link
            href={"https://www.linkedin.com/in/mo-atallah"}
            target="_blank"
            className={`p-2 transition-all rounded-md opacity-75 hover:bg-gray-300 dark:hover:bg-gray-700 hover:opacity-100`}
          >
            <BsLinkedin size={20} className="text-[#0A66C2]" />
          </Link>

          <Link
            href={"https://www.github.com/MohammedAtallahhh"}
            target="_blank"
            className={`p-2 transition-all rounded-md opacity-75 hover:bg-gray-300 dark:hover:bg-gray-700 hover:opacity-100`}
          >
            <BsGithub size={20} className="text-[#22272E] dark:text-gray-200" />
          </Link>

          {/* Gmail */}
          <Link
            href="mailto:mohamedatallahh2017@gamil.com"
            className="flex items-center gap-2 ml-2 opacity-75 group hover:opacity-100"
          >
            <AiOutlineMail
              size={20}
              className="text-[#EA4335] dark:text-[#ff9a91]"
            />
            <span className="text-gray-600 dark:text-gray-400 text-sm transition-colors group-hover:text-[#EA4335] dark:group-hover:text-[#ff9a91] hidden md:inline">
              mohamedatallahh2017@gmail.com
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
