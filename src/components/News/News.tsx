import useQueryBlogPosts from "../../hooks/useQueryBlogPosts";
import BlogPost from "./BlogPost";

export default function News() {
  const { blogPosts, error, isLoading } = useQueryBlogPosts();

  if (error) {
    return <div>Oh No! Some error occurred.</div>;
  }

  if (isLoading) {
    return <div>Loading blog posts!</div>;
  }

  return (
    <section className="px-24 py-36">
      <div className="m-auto max-w-389">
        <h2 className="tracking-6 mb-34 text-center text-[3.25rem] font-semibold">
          Latest news from us
        </h2>
        <ul className="flex flex-col gap-y-34">
          {blogPosts?.map((post) => <BlogPost post={post} key="post.id" />)}
        </ul>
      </div>
    </section>
  );
}
