// 'use client';

// import { useState } from 'react';

// export default function NewPostForm() {
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();

//     // Call API route to add post
//     await fetch('/api/posts', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title, body }),
//     });

//     setTitle('');
//     setBody('');
//     // Optionally: refresh the page or use SWR/react-query to refresh posts
//     window.location.reload();
//   }

//   return (
//     <form onSubmit={handleSubmit} className="mb-6">
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         required
//         className="border p-2 rounded w-full mb-2"
//       />
//       <textarea
//         placeholder="Body"
//         value={body}
//         onChange={(e) => setBody(e.target.value)}
//         required
//         className="border p-2 rounded w-full mb-2"
//       />
//       <button
//         type="submit"
//         className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600"
//       >
//         Add Post
//       </button>
//     </form>
//   );
// }


'use client';

import { useTransition } from 'react';
import { createPost } from '@/app/df-sc-db-sqlite/action';

export default function NewPostForm() {
  const [isPending, startTransition] = useTransition();

  async function onSubmit(formData: FormData) {
    startTransition(async () => {
      await createPost(formData);
      // Optionally reset form or UI after submission
    });
  }

  return (
    <form action={onSubmit} className="flex flex-col gap-2 p-4 border rounded bg-slate-700 text-white">
      <input
        name="title"
        type="text"
        placeholder="Title"
        required
        className="p-2 rounded text-black"
      />
      <textarea
        name="body"
        placeholder="Body"
        required
        className="p-2 rounded text-black"
      />
      <button
        type="submit"
        disabled={isPending}
        className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded text-white"
      >
        {isPending ? 'Adding...' : 'Add Post'}
      </button>
    </form>
  );
}
