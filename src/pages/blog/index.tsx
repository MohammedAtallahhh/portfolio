import type { InferGetStaticPropsType } from "next";
import Link from "next/link";

import { AnimatePage } from "../../components";

import distanceToNow from "../../lib/dateRelative";
import { getAllPosts } from "../../lib/getPost";

export default function NotePage({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <AnimatePage>
      <div className="container !max-w-[800px] py-10">
        {allPosts.length ? (
          allPosts.map((post: any) => (
            <article
              key={post.slug}
              className="p-5 mb-5 hover:bg-background-light"
            >
              <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                <h2 className="mb-1 text-2xl font-bold leading-snug">
                  {post.title}
                </h2>
                <p className="text-lg text-accent-light">{post.excerpt}</p>
                <div className="text-accent-lighter">
                  <time>{distanceToNow(new Date(post.date))}</time>
                </div>
              </Link>
            </article>
          ))
        ) : (
          <p>No blog posted yet :/</p>
        )}
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
