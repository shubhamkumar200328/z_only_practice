'use client';

import { Suspense, useState } from 'react';
import { deletePost } from '@/app/df-sc-db-sqlite/action';
import UpdatePostForm from '@/app/df-sc-db-sqlite/update-form';

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostsListProps = {
  posts: Post[];
};

export default function PostsList({ posts }: PostsListProps) {
  const [editingId, setEditingId] = useState<number | null>(null);

  return (
    <>
      <h2 className="text-4xl text-center my-10 text-emerald-400">
        Server-Component Fetching Data Using SQLite Database
      </h2>
      <h1 className="text-xl font-bold mb-4">📌 Server Data Fetching</h1>
      <ul className="mt-8 space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded bg-slate-800 text-white"
          >
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm">{post.body}</p>

            {editingId === post.id ? (
              <UpdatePostForm
                id={post.id}
                initialTitle={post.title}
                initialBody={post.body}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <>
                <button
                  onClick={() => setEditingId(post.id)}
                  className="text-yellow-400 hover:underline mt-2"
                >
                  Edit
                </button>

                <form action={deletePost} className="mt-2">
                  <input type="hidden" name="id" value={post.id} />
                  <button
                    type="submit"
                    className="text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </form>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
