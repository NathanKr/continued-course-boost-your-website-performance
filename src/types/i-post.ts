type PostMetadataFrontmatter = {
  // PostMetadataFrontmatterDetails
  [key: string]: any;
};

export type PostMetadataFrontmatterDetails = {
  title: string;
  date: string;
  updateDate?: string;
  excerpt: string;
  cover_image: string;
  link_title : string;
  cover_image_width_px : number;
  cover_image_height_px : number;
};

export default interface IPost {
  slug: string;
  // frontmatter: { [key: string]: any };
  frontmatter: PostMetadataFrontmatter;
  content : string;
}
