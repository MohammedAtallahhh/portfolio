import type { InferGetStaticPropsType } from "next";
import Link from "next/link";

import { AnimatePage } from "../../components";

import { formatDate } from "../../helpers";
import { getAllPosts } from "../../lib/getPost";

export default function NotePage({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <AnimatePage>
      <div className="container !max-w-[800px] py-20">
        <h2 className="mb-10 text-4xl font-bold md:text-5xl">My Blog</h2>
        <div>
          {allPosts.length ? (
            allPosts.map((post: any) => (
              <article
                key={post.slug}
                className="p-5 mb-5 hover:bg-[#eee] dark:hover:bg-background-light transition-colors"
              >
                <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                  <h2 className="mb-1 text-2xl font-bold leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-lg text-accent-light">{post.excerpt}</p>
                  <div className="text-accent-lighter">
                    <time>{formatDate(post.date)}</time>
                    {` • `}
                    <time>{post.time}</time>
                  </div>
                </Link>
              </article>
            ))
          ) : (
            <p>No blog posted yet :/</p>
          )}
        </div>
      </div>
    </AnimatePage>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "excerpt", "date"]);

  return {
    props: { allPosts },
  };
}
