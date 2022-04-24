import fs from "fs";
import matter from "gray-matter";
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { GetServerSideProps } from "next";

import { config } from "infra/config";

export default function PostTemplate({ frontmatter, content } : {
    frontmatter: Record<string, any>, 
    content: string
}) {
  return (
    <div className="prose mx-auto">
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown 
        rehypePlugins={[rehypeRaw]}
        components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >{content}</ReactMarkdown>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug } = query;
  const postsDir = `.${config.CONTENT_PATH}/posts/${slug}.md`;
  const file = fs.readFileSync(postsDir);
  const { data: frontmatter, content } = matter(file);

  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  };
};
