import { getPost } from "@/lib/post";
import { notFound } from "next/navigation";

export default async function RoutePagePost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    notFound();
  }
  
  return (
    <div className="flex flex-col max-w-4xl max-auto gap-4 min-h-screen">
        <div classNAme="flex flex-cols gap-4">
          <span className="text-muted-foreground text-sm">
          {post.publishedAt}
          </span>
          <h1 className="text-5xl font-bold">{post.title}</h1>
          <div/>
    </div>
  );
}
