export type Author = {
  name: string;
  photo: {
    url: string;
  };
  bio: string;
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
  content: {
    raw: {
      children: Array<Record<string, any>>;
    };
  };
};

export type Comment = {
  name: string;
  email: string;
  createdAt: string;
  comment: string;
};
