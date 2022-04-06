import Link from "next/link";
import { Router, useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

import { listAll } from "lib/api/posts";

type PostsList = {
  posts: string[];
};

export default function Posts({
  totalCount,
  pageCount,
  currentPage,
  perPage,
  posts,
}) {
  const router = useRouter()
  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  
  const paginationHandler = (page) => {
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
    content = <span className="visually-hidden">Loading...</span>;
  } else {
    content = (
      <>
        {posts.map(({ slug, frontmatter }, index) => (
          <div key={index}>
            <Link href={`/posts/${slug}`}>
              <a>
                <h2 className="p-4">{frontmatter.title}</h2>
              </a>
            </Link>
          </div>
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
        subContainerClassName={"pages pagination"}
        initialPage={currentPage - 1}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={paginationHandler}
      />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const page = query.page || 1; //if page empty we request the first page
  const response = await fetch(`http://localhost:4000/api/posts/${page}`);
  const posts = await response.json();

  return {
    props: {
      totalCount: posts.totalCount,
      pageCount: posts.pageCount,
      currentPage: posts.currentPage,
      perPage: posts.perPage,
      posts: posts.posts,
    },
  };
}
