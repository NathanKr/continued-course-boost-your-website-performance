import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import PostCard from "src/components/post-card";
import IPost from "src/types/i-post";
import {
  getPostsFromDataDirectory,
  sortByDate,
} from "src/utils/server/posts-utils";
import styles from "styles/post.module.css";
import { getHeadTitle, getLang } from "src/utils/client/lang-utils";

interface IProps {
  posts: IPost[];
}

export const getStaticProps: GetStaticProps = async () => {
  let props: IProps = { posts: [] };
  const posts = await getPostsFromDataDirectory();
  props.posts = posts.sort(sortByDate);

  return {
    props, // will be passed to the page component as props
  };
};

const Blog: NextPage<IProps> = ({ posts }) => {
  const { curLang } = getLang();
  const elemPosts = posts.map((p, i) => (
    <PostCard key={i} post={p} priority={i == 0} />
  ));

  return (
    <>
      <Head>
        <title>{getHeadTitle(curLang, curLang.top_blog)}</title>
        <meta name="description" content={curLang.blog_head_description} />
      </Head>
      <div className={styles.container}>
        <div className={styles.posts}>{elemPosts}</div>
      </div>
    </>
  );
};

export default Blog;
