import dayjs from "dayjs";
import type { NextApiRequest, NextApiResponse } from 'next'

import { listAll } from "lib/api/posts";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req: NextApiRequest, res: NextApiResponse) {
    const { page } = req.query
    const allPostsData = listAll()
    const sortedPosts = allPostsData.sort((a, b) =>
        dayjs(b.frontmatter.date).isAfter(a.frontmatter.date) ? 1 : -1
    );
    const perPage = 5
    const totalPosts = sortedPosts.length
    const totalPages = totalPosts / perPage
    const start = (page - 1) * perPage
    let end = start + perPage

    if (end > totalPosts) {
        end = totalPosts
    }

    res.status(200).json({
        currentPage: page,
        perPage: perPage,
        totalCount: totalPosts,
        pageCount: totalPages,
        start: start,
        end: end,
        posts: sortedPosts.slice(start, end)
    })
}
