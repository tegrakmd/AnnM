import { getPosts } from "@/lib/post";
import { PostCard } from "@app/BlP/posts/ui/components/PostCard";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen px-4 py-12 font-ubuntu">
      <div className="mx-auto max-w-5xl  md:px-6 ">
        <div className="mb-14 md:mb-20">
          <h1 className="text-primary dark:text-white  text-3xl md:text-5xl font-bold mb-2">
            Blog Posts
          </h1>
          <p className="text-muted-foreground">
            Discover our latest articles and insights
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts found yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
