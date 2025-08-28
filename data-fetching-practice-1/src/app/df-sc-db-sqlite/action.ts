'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

// Create Post
export async function createPost(formData: FormData) {
  const title = formData.get('title')?.toString();
  const body = formData.get('body')?.toString();
  if (!title || !body) throw new Error('Missing title or body');

  await prisma.post.create({
    data: { title, body },
  });
  revalidatePath('/df-sc-db-sqlite');
}

// Delete Post
export async function deletePost(formData: FormData) {
  const id = formData.get('id');
  if (!id || typeof id !== 'string') throw new Error('Invalid ID');

  await prisma.post.delete({
    where: { id: Number(id) },
  });
  revalidatePath('/df-sc-db-sqlite');
}

// Update Post
export async function updatePost(formData: FormData) {
  const id = formData.get('id');
  const title = formData.get('title')?.toString();
  const body = formData.get('body')?.toString();

  if (!id || typeof id !== 'string') throw new Error('Invalid ID');
  if (!title || !body) throw new Error('Missing title or body');

  await prisma.post.update({
    where: { id: Number(id) },
    data: { title, body },
  });
  revalidatePath('/df-sc-db-sqlite');
}
