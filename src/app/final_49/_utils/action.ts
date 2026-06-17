'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { Prisma } from '@/generated/prisma/client';
import { redirect } from 'next/navigation';

import { shop2Schema } from './schemas';

import { validateWithZodSchema } from './schemas';

export type typeShop2_49 = Prisma.Shop2_49GetPayload<object>;

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : 'an error occurred',
  };
};

export const fetchCategory_49 = async () => {
  const categories2 = await prisma.category2_49.findMany();
  return categories2;
};

export const deleteProduct_49 = async (formData: FormData) => {};

export const fetchAdminShops = async () => {
  const shops = await prisma.shop2_49.findMany();
  return shops;
};

export const deleteProductAction = async (prevState: { pid: string }) => {
  const { pid } = prevState;
  // await getAdminUser();
  try {
    const blog = await prisma.shop2_49.delete({
      where: {
        pid: pid,
      },
    });
    // await deleteImage(blog.image);
    revalidatePath(`/final_49/admin_49/shop2_49`);
    return { message: 'blog removed' };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchAdminProductDetails = async (pid: string) => {};

export const updateProductAction = async (
  prevState: any,
  formData: FormData
) => {};

export const createProductAction2 = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  // const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = shop2Schema.parse(rawData);

    await prisma.shop2_49.create({
      data: {
        ...validatedFields,
        // clerkId: 'userid',
      },
    });
    return { message: 'shop product created' };
  } catch (error) {
    return renderError(error);
  }
};
