// import Image from "next/image";
import { formatDate } from "../helpers";

const BlogPost = ({ post }) => {
  const { title, excerpt, content, date, time } = post;

  return (
    <article>
      <header>
        <h1 className="mb-4 text-4xl font-bold">{title}</h1>
        {excerpt ? (
          <p className="mt-2 text-xl text-accent-light">{excerpt}</p>
        ) : null}

        <div className="flex gap-2 mt-4 text-gray-400">
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
