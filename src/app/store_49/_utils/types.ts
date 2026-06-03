// import { Prisma } from '@prisma/client';

import { PrismaClient } from '@/generated/prisma/client';
import { Prisma } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

export type actionFunction = (
  prevState: { message: string },
  formData: FormData
) => Promise<{ message: string }>;
