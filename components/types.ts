export type Author = {
  name: string;
  photo: {
    url: string;
  };
};

export type Category = {
  name: string;
  slug: string;
};

export type Post = {
  title: string;
  excerpt: string;
  slug: string;
  createdAt: string;
  featuredImage: {
    url: string;
  };
  author: Author;
  categories: Category;
  content: any;
};
