import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="px-6 pt-16 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  );
}
