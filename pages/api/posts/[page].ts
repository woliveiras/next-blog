import { listAll } from "lib/api/posts";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
    const { page } = req.query
    const allPostsData = listAll()
    const perPage = 5
    const totalPosts = allPostsData.length
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
        posts: allPostsData.slice(start, end)
    })
}