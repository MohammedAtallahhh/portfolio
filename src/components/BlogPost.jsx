import Image from "next/image";
import React from "react";
import distanceToNow from "../lib/dateRelative";

const BlogPost = ({ post }) => {
  return (
    <article>
      <header>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        {post.excerpt ? <p className="mt-2 text-xl">{post.excerpt}</p> : null}
        <time className="flex mt-2 text-gray-400">
          {distanceToNow(new Date(post.date))}
        </time>
      </header>

      {/* <div className="py-8">
        <Image src={post.img} alt="" fill className="!relative" />
      </div> */}

      <div
        className="mt-10 space-y-4 prose text-accent-light"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default BlogPost;
