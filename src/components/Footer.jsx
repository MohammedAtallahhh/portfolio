import React from "react";
import Link from "next/link";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail, AiOutlineCopyright } from "react-icons/ai";

const social_links = [
  {
    Icon: BsLinkedin,
    color: "#0A66C2",
    link: "https://www.linkedin.com/in/mo-atallah",
  },
  {
    Icon: BsGithub,
    color: "#22272E",
    link: "https://github.com/MohammedAtallahhh",
  },
];

const data = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full py-4 bg-gray-100">
      <div className="container flex flex-wrap items-center justify-between gap-5">
        <p className="flex items-center text-sm font-medium text-gray-700">
          <span className="flex items-center gap-1 mr-1">
            <AiOutlineCopyright size={16} /> {data}
          </span>
          Mohammed Atallah
        </p>

        {/* Social links */}
        <div className="flex items-center">
          {social_links.map(({ link, Icon, color }) => (
            <Link
              key={link}
              href={link}
              target="_blank"
              className={`p-2 transition-all rounded-md opacity-75 hover:bg-gray-200 hover:opacity-100`}
            >
              <Icon size={20} color={color} />
            </Link>
          ))}

          {/* Gmail */}
          <Link
            href="mailto:mohamedatallahh2017@gamil.com"
            className="flex items-center gap-2 ml-2 opacity-75 group hover:opacity-100"
          >
            <AiOutlineMail size={20} color="#EA4335" />
            <span className="text-gray-600 text-sm transition-colors group-hover:text-[#EA4335] hidden md:inline">
              mohamedatallahh2017@gmail.com
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
