import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts, getPostBySlug } from "../../lib/getPost";
import markdownToHtml from "../../lib/markdownToHtml";

import PageHead from "../../components/PageHead";
import { AnimatePage } from "../../components";

export default function PostPage({ post }: any) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <AnimatePage>
      <div className="container max-w-[800px] py-10">
        <PageHead
          title={post.title || "My blog"}
          description="A Frontend developer with focus on React, Nextjs and CSS. I have 2 years of experience working on JavaScript and React projects considering responsive design, accessibility and clean code."
          keywords={[]}
        />

        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <div>
            <article>
              <header>
                <h1 className="text-4xl font-bold">{post.title}</h1>
                {post.excerpt ? (
                  <p className="mt-2 text-xl">{post.excerpt}</p>
                ) : null}
                <time className="flex mt-2 text-gray-400">
                  {distanceToNow(new Date(post.date))}
                </time>
              </header>

              <div
                className="mt-10 space-y-4 prose text-accent-light [&>h2]:text-xl [&>h2]:font-semibold"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* <Comment /> */}
          </div>
        )}
      </div>
    </AnimatePage>
  );
}

export async function getStaticProps({ params }: any) {
  const post = getPostBySlug(params.slug, [
    "slug",
    "title",
    "excerpt",
    "date",
    "content",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
