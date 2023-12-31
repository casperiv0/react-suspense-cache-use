import { Suspense } from "react";
import { Post } from "./components/post";
import { Posts, PostsLoadingSkeleton } from "./components/posts";
import { ErrorBoundary } from "react-error-boundary";

export function App() {
  return (
    <main className="w-full grid grid-cols-3 p-6 gap-6">
      <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
        <Suspense fallback={<PostsLoadingSkeleton />}>
          <Posts />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <Post />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
