// app/df-sc-sqlite/page.tsx

import { prisma } from '@/lib/prisma';
import type { Post } from '@/generated/prisma';

export default async function Page() {
  // const posts: Post[] = await prisma.post.findMany({ ... });
  const posts = await prisma.post.findMany({
    take: 10,
    orderBy: { id: "desc" },
  });

  return (
    <div className="p-6">
      <h2 className="text-4xl text-center my-5 text-yellow-400">
        Data from SQLite via Prisma
      </h2>
      <h1 className="text-xl font-bold mb-4">📄 Posts from DB</h1>
      <ul className="space-y-2">
        {posts.map((post: Post) => (
          <li
            key={post.id}
            className="p-3 border rounded-lg shadow-sm bg-slate-800 text-white hover:bg-yellow-300 hover:text-black transition-colors"
          >
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
