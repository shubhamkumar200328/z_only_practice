// df-cc-api-call/page.tsx     // Client Component Data Fetching using API call

"use client";

import { useEffect, useState } from "react";

type Post = {
    id: number;   
    title: string;
    body: string;
};

export default function ClientDataFetching() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setPosts(data.slice(0, 15)); // limit to 5 posts for demo
      } catch (err) {
          if (err instanceof Error){
            setError(err.message);
          } else {
              setError("An unknown error occured");
          }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-6">
      <h2 className=" text-4xl text-center my-5 text-cyan-400">Client-Component Fetching Data Using API call</h2>
      <h1 className="text-xl font-bold mb-4">📌 Client Data Fetching</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-3 border rounded-lg shadow-sm hover:bg-pink-300 bg-cyan-950 text-white hover:text-black transition-colors"
          >
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
