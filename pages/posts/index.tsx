/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { GetServerSideProps } from 'next'

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import dayjs from "dayjs";

type PostsProps = {
  pageCount: number,
  currentPage: number,
  posts: string[];
};

type PostType = {
  slug: string,
  frontmatter: Record<string, unknown>
}

export default function Posts({
  pageCount,
  currentPage,
  posts,
}: PostsProps) {
  const router = useRouter()
  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const paginationHandler = (page: any) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = page.selected + 1;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  let content;
  if (isLoading) {
    content = <span>Loading...</span>;
  } else {
    content = (
      <>
        {posts.map(({ slug, frontmatter }: any, index) => (
          <article key={index}>
            <h2>{frontmatter.title}</h2>
            <p>{frontmatter.description}</p>
            <span>{dayjs(frontmatter.date).format('DD/MM/YY')}</span>
            <Link href={`/posts/${slug}`}>
              <a>Ler o texto "{frontmatter.title.toLowerCase()}"</a>
            </Link>
          </article>
        ))}
      </>
    );
  }

  return (
    <div>
      <div>{content}</div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        activeClassName={"active"}
        containerClassName={"pagination"}
        initialPage={currentPage - 1}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={paginationHandler}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const response = await fetch(`http://localhost:4000/api/posts/${page}`);
  const posts = await response.json();
  
  return {
    props: {
      pageCount: posts.pageCount,
      currentPage: posts.currentPage,
      posts: posts.posts,
    },
  };
}
