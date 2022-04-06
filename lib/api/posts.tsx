import fs from "fs";
import matter from "gray-matter";
import { config } from 'infra/config'

export const listAll = () => {
    const postsDir = `./${config.CONTENT_PATH}/posts`
    const localFiles = fs.readdirSync(postsDir);
    const posts = localFiles.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(`${postsDir}/${fileName}`, "utf-8");
        const { data: frontmatter } = matter(readFile);

        return {
            slug,
            frontmatter,
        };
    });

    return posts
}