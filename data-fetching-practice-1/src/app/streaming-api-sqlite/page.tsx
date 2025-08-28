import { Suspense } from "react"
import ServerDataFetching from "../df-sc-api-call/page";
import PostsList from "../df-sc-db-sqlite/PostsList";
import { prisma } from '@/lib/prisma';

export default async function Page() {

  const posts = await prisma.post.findMany({
    orderBy: { id: 'desc' },
  });

  return(
    <>
        <div className=" text-5xl text-center my-5">Steaming Post from API call and with SQLite - Page</div>
        <div className="flex flex-row gap-6 p-6 m-auto my-10 max-w-screen-xl border rounded-lg shadow-md">
          {/* Left Card: API Posts */}
          <div className="flex-1 max-h-[600px] overflow-y-auto bg-slate-800 text-white rounded-lg p-4">
            <h1 className="text-3xl font-bold mb-6">API Posts</h1>
            <Suspense fallback={<div>Loading... posts through API call</div>}>
              <ServerDataFetching />
            </Suspense>
          </div>

          {/* Right Card: SQLite Posts */}
          <div className="flex-1 max-h-[600px] overflow-y-auto bg-slate-800 text-white rounded-lg p-4">
            <h1 className="text-3xl font-bold mb-6">SQLite Posts</h1>
            <Suspense fallback={<div>Loading... posts through SQLite database</div>}>
              <PostsList posts={posts} />
            </Suspense>
          </div>
        </div>

    </>
  );
}