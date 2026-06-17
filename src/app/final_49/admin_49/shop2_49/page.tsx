import EmptyList from '../../_components/global/EmptyList';

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
import { IconButton } from '../../_components/form/Buttons';
import FormContainer from '../../_components/form/FormContainer';
import { fetchAdminShops, deleteProductAction } from '../../_utils/action';

export const dynamic = 'force-dynamic';

async function AdminShopsPage() {
  const items = await fetchAdminShops();
  console.log('admin blogs', items);
  return (
    <section>
      <div className='space-y-2'>
        <div className='flex items-center justify-between mr-16'>
          <h1 className='text-2xl text-bold'>Shops_49</h1>
          <div className='flex items-center gap-x-4'></div>
        </div>
      </div>
      <Separator className='my-4' />
      <Table>
        <TableCaption className='capitalize'>
          total products :{items.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Cat_ID</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items?.map((item) => {
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
                  <DeleteBlog pid={pid} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}

function DeleteBlog({ pid }: { pid: string }) {
  const deleteBlog = deleteProductAction.bind(null, { pid });
  return (
    <FormContainer action={deleteBlog}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
}

export default AdminShopsPage;
