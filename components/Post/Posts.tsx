import React from "react";

import Postcard from "./PostCard";
export default function Posts({ posts }: any) {
  return (
    <div className="lg:col-span-8 col-span-1">
      {posts.map((post: any) => (
        <Postcard key={post.node.title} post={post.node} />
      ))}
    </div>
  );
}
