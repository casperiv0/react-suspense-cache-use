import * as React from "react";
import { fetchPostById } from "../utils/api";

  // @ts-expect-error - types are not yet supported
const getPost = React.cache(fetchPostById);

export function Post() {
  const searchParams = new URLSearchParams(document.location.search);
  const postId = searchParams.get("postId");

  if (!postId) {
    return null;
  }

  // @ts-expect-error - types are not yet supported
  const post = React.use(getPost(postId));

  return (
    <article className="col-span-2 bg-stone-700 p-3 rounded shadow-md flex flex-col gap-y-3 overflow-auto">
      <h1 className="text-xl text-balance font-semibold max-w-lg">{post.title}</h1>

      <p className="max-w-lg">{post.body}</p>
    </article>
  );
}
