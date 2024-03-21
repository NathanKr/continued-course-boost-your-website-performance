import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { marked } from "marked";
import {
  getPostFromDataDirectory,
  getPostsFromDataDirectory,
} from "src/utils/server/posts-utils";
import IPost, { PostMetadataFrontmatterDetails } from "src/types/i-post";
import styles from "styles/post.module.css";
import { getHeadTitle, getLang } from "src/utils/client/lang-utils";
import JoinMyNewsletter from "src/components/join-my-newsletter";
import NextImageWithAspectRatioVariableParentWidth from "src/components/core-web-vitls/next-image-with-aspect-ratio-variable-parent-width";
import IImageWithAspectRatioVariableParentWidth from "src/types/core-web-vitls/i-image-with-aspect-ratio-variable-parent-width";
import { highlightCodeInHTMLString } from "src/utils/server/prism-utils";
import loadLanguages from "prismjs/components/index";
import "prismjs/themes/prism-tomorrow.css";

interface IProps {
  post: IPost | undefined;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as any; // -- zero based

  // Load all languages.
  loadLanguages();

  const post = await getPostFromDataDirectory(slug);

  let props: IProps = { post };
  if (props.post) {
    props.post.content = highlightCodeInHTMLString(props.post.content);
  }

  return {
    props, // will be passed to the page component as props
  };
};

interface IPath {
  params: { slug: string };
}

async function getParams(): Promise<IPath[]> {
  const posts = await getPostsFromDataDirectory();

  return posts.map((p) => ({ params: { slug: `${p.slug}` } }));
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getParams(),
    fallback: false,
  };
};

const Post: NextPage<IProps> = ({ post }) => {
  const { curLang } = getLang();
  const {
    excerpt,
    cover_image,
    date,
    updateDate,
    title,
    cover_image_width_px,
    cover_image_height_px,
  } = post?.frontmatter as PostMetadataFrontmatterDetails;

  let elemMain = <p>{post?.slug}</p>;
  const aspectRatio = cover_image_width_px / cover_image_height_px;
  const priority = true;
  const info: IImageWithAspectRatioVariableParentWidth = {
    parentMaxWidthPx: 768, // ---as in .container of post.module.css. todo nath can i share it
    aspectRatio,
    imgSrc: cover_image,
    title,
  };
  const updateElem = updateDate && (
    <div className={styles.post_date}>
      Post updated on {updateDate} By Nathan Krasney
    </div>
  );
  elemMain = post ? (
    <div className={`${styles.card} ${styles.card_page}`}>
      <h1 className={styles.post_title}>{title}</h1>
      <div className={styles.post_date}>Posted on {date} By Nathan Krasney</div>
      <NextImageWithAspectRatioVariableParentWidth
        info={info}
        priority={priority}
      />
      <div
        className={styles.post_body}
        dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }}
      ></div>
      {updateElem}
    </div>
  ) : (
    <p>post does not exist</p>
  );

  return (
    <>
      <Head>
        <title>{getHeadTitle(curLang, title)}</title>
        <meta name="description" content={excerpt} />
      </Head>
      <div className={styles.container}>
        {elemMain}
        <div className={styles.join_my_newsletter_wrapper}>
          <JoinMyNewsletter />
        </div>
      </div>
    </>
  );
};

export default Post;
