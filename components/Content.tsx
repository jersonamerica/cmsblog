import Posts from "../components/Post/Posts";
import PostWidget from "../components/PostWidget";
import Categories from "../components/Categories";

const Content = () => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
    <Posts />
    <div className="lg:col-span-4 col-span-1">
      <div className="lg:sticky relative top-8">
        <PostWidget />
        <Categories />
      </div>
    </div>
  </div>
);

export default Content;
