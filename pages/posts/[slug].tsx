import fs from "fs";
import matter from "gray-matter";
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'

import { GetServerSideProps } from "next";

import { config } from "infra/config";

export default function PostTemplate({ frontmatter, content } : {
    frontmatter: Record<string, any>, 
    content: string
}) {
  return (
    <div className="prose mx-auto">
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug } = query;
  const postsDir = `.${config.CONTENT_PATH}/posts/${slug}.md`;
  const file = fs.readFileSync(postsDir);
  const { data: frontmatter, content } = matter(file);
  console.log({ frontmatter, content });

  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  };
};
