'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const fetchCategory_49 = async () => {
  const categories = await prisma.category_49.findMany();
  return categories;
};

export const deleteProduct_49 = async (formData: FormData) => {
  const id = Number(formData.get('id'));

  if (isNaN(id)) {
    throw new Error('Invalid product ID');
  }

  await prisma.shop_49.deleteMany({
    where: { pid: id },
  });

  revalidatePath('/mid_49');
};
