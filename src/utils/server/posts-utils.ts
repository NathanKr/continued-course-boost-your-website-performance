import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import dayjs from "dayjs";
import IPost, { PostMetadataFrontmatterDetails } from "src/types/i-post";

export async function getPostsFromDataDirectory(): Promise<IPost[]> {
  const dir = path.join("data", "posts");

  const filesName = await fs.readdir(dir);
  const posts: IPost[] = [];

  for (const fileName of filesName) {
    const fileFullPath = path.join(dir, fileName);
    const markdownWithMeta = await fs.readFile(fileFullPath, "utf-8");
    const { data, content } = matter(markdownWithMeta);

    const slug = fileName.replace(".md", ""); // all files are .md files
    posts.push({ slug, frontmatter: data, content });
  }

  return posts;
}

export async function getPostFromDataDirectory(
  slug: string
): Promise<IPost | undefined> {
  const posts = await getPostsFromDataDirectory();

  return posts.find((p) => p.slug == slug);
}

/**
 *
 * @param post1
 * @param post2
 * @param dateFormat e.g 'March 5, 2021'
 * @returns
 */
export const sortByDate = (
  post1: IPost,
  post2: IPost,
  dateFormat: string = "MMMM D, YYYY"
): number => {
  const date1 = dayjs(
    (post1.frontmatter as PostMetadataFrontmatterDetails).date,
    { format: dateFormat }
  );
  const date2 = dayjs(
    (post2.frontmatter as PostMetadataFrontmatterDetails).date,
    { format: dateFormat }
  );

  return date2.diff(date1);
};


