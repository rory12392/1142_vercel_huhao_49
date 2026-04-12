'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const fetchUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const createUser = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const newUser = { name, email };

  try {
    await prisma.user.create({
      data: newUser,
    });

    revalidatePath('/users_db_49');
  } catch (error) {
    console.log(error);
  }
};

export const createUser2 = async (
  prevState: string | null,
  formData: FormData
): Promise<string> => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  try {
    await prisma.user.create({
      data: { name, email },
    });

    revalidatePath('/users_db_49');

    return ' User created successfully';
  } catch (error) {
    console.error(error);
    return ' Failed to create user';
  }
};

export const removeUser = async (id: number, formData: FormData) => {
  console.log('id', id);

  await prisma.user.delete({
    where: { id },
  });

  revalidatePath('/users_db_49');
};