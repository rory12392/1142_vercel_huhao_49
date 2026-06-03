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
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

import { formatCurrency, formatDate } from '../../_utils/format';
import { fetchAdminOrders } from '../../_utils/action';

async function SalesPage() {
  const orders = await fetchAdminOrders();
  // console.log('orders', orders);
  return (
    <>
      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-bold'>Sales_49</h1>
          <Button asChild variant='default'>
            <Link href='/store_49/admin_49/sales_49/create'>Create Sales</Link>
          </Button>
        </div>
      </div>
      <Separator className='my-4' />
      <Table>
        <TableCaption>Total Orders : {orders?.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Products</TableHead>
            <TableHead>Order Total</TableHead>
            <TableHead>Tax</TableHead>
            <TableHead>Shipping</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders?.map((order) => {
            const { products, orderTotal, tax, shipping, createdAt, email } =
              order;
            return (
              <TableRow key={order.id}>
                <TableCell>{email}</TableCell>
                <TableCell>{products}</TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <TableCell>{formatCurrency(tax)}</TableCell>
                <TableCell>{formatCurrency(shipping)}</TableCell>
                <TableCell>{formatDate(createdAt)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
export default SalesPage;
