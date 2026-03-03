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
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
      <h1 className="text-5xl font-bold">{post.title}</h1>
    </div>
  );
}
