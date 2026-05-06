'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { blogData2_xx } from './data/blogData';

export const deleteBlog_49 = async (id: number) => {
  await prisma.blog_49.delete({ where: { id } });
  revalidatePath('/quiz1_49/p1_49');
};

export const deleteAllBlog_49 = async () => {
  await prisma.blog_49.deleteMany();
  revalidatePath('/quiz1_49/p1_49');
};

export const SeedBlog_49 = async () => {
  // console.log('blogData2_49:', blogData2_49);
  await prisma.blog_49.createMany({
    data: blogData2_xx,
    skipDuplicates: true,
  });
  revalidatePath('/quiz1_49/p1_49');
};
