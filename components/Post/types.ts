export type Post = {
  title: string;
  excerpt: string;
  slug: string;
  createdAt: string;
  featuredImage: {
    url: string;
  };
  author: {
    name: string;
    photo: {
      url: string;
    };
  };
};
