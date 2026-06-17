import { prisma } from '@/lib/prisma';
import Link from 'next/link';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { IconButton } from '../../../_components/form/Buttons';
import FormContainer from '../../../_components/form/FormContainer';
import { deleteProductAction } from '../../../_utils/action';

export const dynamic = 'force-dynamic';

type Product = {
  pid: string;
  pname: string;
  cat_id: number;
  price: number;
  img_url: string;
  remote_img_url: string;
};

const FetchProductsByCategory_49 = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  console.log('category param:', category);

  const categoryRecord = await prisma.category2_49.findFirst({
    where: { cname: category },
  });

  if (!categoryRecord) {
    return <div>Category not found</div>;
  }

  const shop_49 = await prisma.shop2_49.findMany({
    where: { cat_id: categoryRecord.cid },
  });

  console.log('Products by category:', shop_49);

  return (
    <section>
      <div className='space-y-2'>
        <div className='flex items-center justify-between mr-16'>
          <h1 className='text-2xl text-bold capitalize'>{category}</h1>
          <div className='flex items-center gap-x-4'></div>
        </div>
      </div>
      <Separator className='my-4' />
      <Table>
        <TableCaption className='capitalize'>
          total products :{shop_49.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Category ID</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shop_49?.map((item) => {
            const { pid: pid, pname, cat_id, price } = item;
            return (
              <TableRow key={pid}>
                <TableCell>
                  <Link href='#'>{pid}</Link>
                </TableCell>
                <TableCell>
                  <Link href='#'>{pname}</Link>
                </TableCell>
                <TableCell>{cat_id}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell className='flex items-center gap-x-2'>
                  <Link href={`/final_49/admin_49/shop2_49/${pid}/edit`}>
                    <IconButton actionType='edit' />
                  </Link>
                  <DeleteProduct pid={pid} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
};

function DeleteProduct({ pid }: { pid: string }) {
  const deleteProduct = deleteProductAction.bind(null, { pid });
  return (
    <FormContainer action={deleteProduct}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
}

export default FetchProductsByCategory_49;
