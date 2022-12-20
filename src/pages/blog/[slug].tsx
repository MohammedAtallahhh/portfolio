import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getAllPosts, getPostBySlug } from "../../lib/getPost";
import markdownToHtml from "../../lib/markdownToHtml";

import PageHead from "../../components/PageHead";
import { AnimatePage, BlogPost } from "../../components";

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
          <h2 className="font-bold">Loading…</h2>
        ) : (
          <div>
            <BlogPost post={post} />
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
    "img",
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
