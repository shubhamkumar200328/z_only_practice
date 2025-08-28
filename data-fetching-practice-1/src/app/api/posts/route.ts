import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const { title, body } = await req.json();

  if (!title || !body) {
    return NextResponse.json({ error: 'Missing title or body' }, { status: 400 });
  }

  const post = await prisma.post.create({
    data: { title, body },
  });

  return NextResponse.json(post);
}
