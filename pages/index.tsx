import Head from "next/head";
import { getPosts } from "services";
import PostCard from "components/PostCard";

import PostWidget from "components/PostWidget";
import Categories from "components/Categories";
import { Post } from "components/types";
// import FeaturedPosts from "../section/FeaturedPosts";

export default function Home(props: { posts: Array<Post> }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <FeaturedPosts /> */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {props.posts.map((post: Post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
