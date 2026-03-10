import { getPosts } from "@/lib/post";
import { PostCard } from "@app/BlP/posts/ui/components/PostCard";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-5xl px-6 prose">

        <div className="mb-12">
          <h1 className="text-4xl text-primary font-bold mb-2">Blog Posts</h1>
          <p className="text-muted-foreground">
            Discover our latest articles and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
