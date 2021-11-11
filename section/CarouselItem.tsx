import React, { FC } from "react";

import { Post } from "../components/types";

type Props = {
  post: Post;
};

const FeaturedPosts: FC<Props> = ({ post }) => {
  return (
    <div className="relative overflow-hidden shadow-md pb-80 mb-6 text-center px-4">
      <img
        src={post.featuredImage.url}
        alt={post.title}
        className="object-top absolute h-80 w-full object-cover"
      />
      <h2 className="text-white my-4">{post.title}</h2>
    </div>
  );
};

export default FeaturedPosts;
