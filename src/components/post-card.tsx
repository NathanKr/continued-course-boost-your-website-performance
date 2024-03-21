import Link from "next/link";
import React, { FC } from "react";
import IPost, { PostMetadataFrontmatterDetails } from "src/types/i-post";
import stylesPost from "styles/post.module.css";
import styles from "styles/post-card.module.css";
import NextImageWithAspectRatioOccupyParentWidth from "./core-web-vitls/next-image-with-aspect-ratio-occupy-parent-width";
import IBaseImageWithAspectRatio from "src/types/core-web-vitls/i-base-image-with-aspect-ratio";

interface IProps {
  post: IPost;
  priority: boolean;
}

const ASPECT_RATIO = 1.506;

const PostCard: FC<IProps> = ({ post, priority }) => {
  const { excerpt, cover_image, date, title, link_title } =
    post.frontmatter as PostMetadataFrontmatterDetails;

  const baseInfo: IBaseImageWithAspectRatio = {
    aspectRatio: ASPECT_RATIO,
    imgSrc: cover_image,
    title,
  };
  return (
    <div className={`${stylesPost.card} ${styles.container_post_card}`}>
      <div>
        <h2>{title}</h2>
        <div className={styles.post_date}>Posted on {date}</div>
        <NextImageWithAspectRatioOccupyParentWidth
          baseInfo={baseInfo}
          priority={priority}
        />
        <p>{excerpt}</p>
      </div>
      <div className={styles.link_title_container}>
        <Link className="button_round_black_white" href={`/posts/${post.slug}`}>
          {link_title}
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
