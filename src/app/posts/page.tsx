import PostsList from "@/components/posts-list";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="text-center pt-16 px-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-7">all posts</h1>
      <Suspense fallback="wait there monkey...">
        <PostsList />
      </Suspense>
    </main>
  );
}
