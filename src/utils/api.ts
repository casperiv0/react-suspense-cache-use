const BASE_URL = "https://jsonplaceholder.typicode.com";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function fetchPostById(id: number | string) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    const data = await response.json();
    if (!data.id) {
      throw new Error("Post not found.");
    }
    return data as Post;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
