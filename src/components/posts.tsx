import * as React from "react";
import { Post, fetchPosts } from "../utils/api";

// @ts-expect-error - types are not yet supported
const getPosts = React.cache(fetchPosts);

export function Posts() {
  // @ts-expect-error - types are not yet supported
  const posts = React.use(getPosts()) as Post[];

  function onPostClick(postId: number) {
    window.location.search = `?postId=${postId}`;
  }

  return (
    <ul className="w-full col-span-1 bg-stone-700 p-3 rounded shadow-md flex flex-col gap-y-3 overflow-auto max-h-[calc(100vh-48px)]">
      {posts.map((post) => (
        <li
          onClick={() => onPostClick(post.id)}
          className="p-3 rounded shadow-sm bg-stone-500 hover:bg-stone-600 cursor-pointer"
          key={post.id}>
          <h2 className="font-bold mb-2">{post.title}</h2>
          <p className="text-sm">{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

const fakeArray = Array.from({ length: 15 }, (_, i) => i);

export function PostsLoadingSkeleton() {
  return (
    <ul className="w-full col-span-1 bg-stone-700 p-3 rounded shadow-md flex flex-col gap-y-3 overflow-auto max-h-[calc(100vh-48px)]">
      {fakeArray.map((item) => (
        <li key={item} className="min-h-28 p-3 rounded shadow-sm bg-stone-500 animate-pulse" />
      ))}
    </ul>
  );
}
