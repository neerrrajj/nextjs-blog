import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="m-auto text-center">
      <div className="text-xl mb-10">no post found</div>
      <Link href="/posts" className="bg-zinc-700 py-2 px-5 rounded text-white">
        go to posts
      </Link>
    </div>
  );
}
