// df-sc-api-call/page.tsx     // Server Component Data Fetching using API call

import React from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data: Post[] = await res.json();
  return data.slice(0, 15);
}

export default async function ServerDataFetching() {
  const posts = await getPosts();

  return (
    <div className="p-6">
      <h2 className="text-4xl text-center my-5 text-emerald-400">
        Server-Component Fetching Data Using API Call
      </h2>
      <h1 className="text-xl font-bold mb-4">📌 Server Data Fetching</h1>
      <ul className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="w-60 max-w-60 aspect-square p-4 border rounded-lg shadow-md bg-emerald-950 text-white hover:bg-lime-300 hover:text-black transition-colors flex flex-col justify-between"
          >
            <div>
              <h2 className="font-semibold text-lg mb-1 truncate">{post.title}</h2>
              <p className="text-sm line-clamp-3">{post.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}



// import React from "react";

// // Define Post type
// type Post = {
//   id: number;
//   title: string;
//   body: string;
// };

// // Server-side data fetching function
// async function getPosts(): Promise<Post[]> {
//   const res = await fetch("https://jsonplaceholder.typicode.com/post", {
//     next: { revalidate: 60 }, // optional: ISR (cache for 60 seconds)
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch posts");
//   }

//   const data: Post[] = await res.json();
//   return data.slice(0, 15); // limit to 15 posts for demo
// }

// // Default export is a Server Component
// export default async function ServerDataFetching() {
//   const posts: Post[] = await getPosts();

// //   try {
// //     posts = await getPosts();
// //   } catch (error) {
// //     return (
// //       <div className="p-6">
// //         <h2 className="text-4xl text-center my-5 text-red-400">
// //           Error Fetching Posts
// //         </h2>
// //         <p className="text-red-500">
// //           {(error instanceof Error && error.message) ||
// //             "An unknown error occurred"}
// //         </p>
// //       </div>
// //     );
// //   }

//   return (
//     <div className="p-6">
//       <h2 className="text-4xl text-center my-5 text-emerald-400">
//         Server-Component Fetching Data Using API call
//       </h2>
//       <h1 className="text-xl font-bold mb-4">📌 Server Data Fetching</h1>
//       <ul className="space-y-2">
//         {posts.map((post) => (
//           <li
//             key={post.id}
//             className="p-3 border rounded-lg shadow-sm hover:bg-lime-300 bg-emerald-950 text-white hover:text-black transition-colors"
//           >
//             <h2 className="font-semibold">{post.title}</h2>
//             <p className="text-sm">{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // Note: Error and Loading states are handled in separate files (error.tsx and loading.tsx)