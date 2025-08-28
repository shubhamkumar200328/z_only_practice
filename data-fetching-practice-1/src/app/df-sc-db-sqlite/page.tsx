import { prisma } from '@/lib/prisma';
import NewPostForm from '@/app/df-sc-db-sqlite/new-form';
import PostsList from '@/app/df-sc-db-sqlite/PostsList';

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    orderBy: { id: 'desc' },
  });

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-emerald-500">
        Posts (SQLite + Prisma)
      </h1>

      <NewPostForm />

      <PostsList posts={posts} />
    </div>
  );
}
