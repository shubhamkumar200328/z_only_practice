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
