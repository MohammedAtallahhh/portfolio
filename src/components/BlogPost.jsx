// import Image from "next/image";
import React from "react";
import { formatDate } from "../helpers";

const BlogPost = ({ post }) => {
  const { title, excerpt, content, date, time } = post;

  return (
    <article>
      <header>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {excerpt ? (
          <p className="mt-2 text-xl text-accent-light">{excerpt}</p>
        ) : null}

        <div className="flex mt-4 gap-2 text-gray-400">
          <span>{formatDate(date)}</span>
          {` • `}
          <time>{time}</time>
        </div>
      </header>

      {/* <div className="py-8">
        <Image src={post.img} alt="" fill className="!relative" />
      </div> */}

      <div
        className="mt-10 space-y-4 prose text-accent-light"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};

export default BlogPost;
