import Link from "next/link";

import { listAll } from 'lib/api/posts'

type PostsList = {
    posts: string[]
};

export default function Posts({ posts }: PostsList) {
  return (
    <div>
      {posts.map(({ slug, frontmatter }: any, index) => (
        <div key={index}>
          <Link href={`/posts/${slug}`}>
            <a>
              <h2 className="p-4">{frontmatter.title}</h2>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await listAll()

  return {
    props: {
      posts,
    },
  };
}
