// prisma/seed.ts

import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  await prisma.post.createMany({
    data: [
        { title: 'Hello SQLite', body: 'Using SQLite with Prisma and Next.js' },
        { title: 'Next.js Rocks', body: 'Server Components make SSR easier' },
        { title: 'Prisma is Awesome', body: 'Type-safe database access made easy' },
        { title: 'React Hooks', body: 'Simplify state and lifecycle management' },
        { title: 'Edge Functions', body: 'Run code closer to your users' },
        { title: 'PlanetScale Love', body: 'Serverless MySQL that scales automatically' },
        { title: 'Tailwind CSS', body: 'Rapidly build modern websites without leaving your HTML' },
        { title: 'TypeScript Power', body: 'Catch errors early and improve code quality' },
        { title: 'Vercel Deployments', body: 'Push to Git and deploy instantly' },
        { title: 'Full Stack with Next.js', body: 'Build complete apps using React, API routes, and more' },
        { title: 'Incremental Static Regeneration', body: 'Update static content without rebuilding the whole site' },
        { title: 'API Routes in Next.js', body: 'Easily create backend endpoints in your frontend project' }
    ],
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
