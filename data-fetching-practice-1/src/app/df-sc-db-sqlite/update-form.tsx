'use client';

import { useState, useTransition } from 'react';
import { updatePost } from '@/app/df-sc-db-sqlite/action';

type UpdatePostFormProps = {
  id: number;
  initialTitle: string;
  initialBody: string;
  onCancel: () => void;
};

export default function UpdatePostForm({ id, initialTitle, initialBody, onCancel }: UpdatePostFormProps) {
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const [isPending, startTransition] = useTransition();

  async function onSubmit(formData: FormData) {
    startTransition(async () => {
      await updatePost(formData);
      onCancel(); // Close edit mode after update
    });
  }

  return (
    <form action={onSubmit} className="mt-4 flex flex-col gap-2">
      <input type="hidden" name="id" value={id} />
      <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className="p-2 rounded text-black"
      />
      <textarea
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        required
        className="p-2 rounded text-black"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
        >
          {isPending ? 'Updating...' : 'Update'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}