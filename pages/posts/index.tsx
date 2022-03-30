import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

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
  const localFiles = fs.readdirSync("./pages/posts");
  const posts = localFiles.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`./pages/posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
