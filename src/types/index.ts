export type Post = {
  slug?: string;
  title?: string;
  author?: string;
  date?: Date | string;
  content?: string;
  excerpt?: string;
  time: string;
  [key: string]: any;
};
