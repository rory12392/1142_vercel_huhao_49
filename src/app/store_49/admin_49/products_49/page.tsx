import EmptyList from '../../_components/global/EmptyList';

import Link from 'next/link';

import { formatCurrency } from '../../_utils/format';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IconButton } from '../../_components/form/Buttons';
import FormContainer from '../../_components/form/FormContainer';

async function AdminProductsPage() {
  return (
    <section>
      <Table>
        <TableCaption className='capitalize'>total products :</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <h2>Products Page</h2>
        </TableBody>
      </Table>
    </section>
  );
}

export default AdminProductsPage;
