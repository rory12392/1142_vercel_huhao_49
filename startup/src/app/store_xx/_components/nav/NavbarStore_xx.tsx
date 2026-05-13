import Link from 'next/link';
import LogoStore_xx from './LogoStore_xx';
import { ModeToggle_xx } from './ModeToggle_xx';
import { Button } from '@/components/ui/button';

const NavbarStore_xx = () => {
  return (
    <div className='flex items-center justify-around mx-auto py-4 bg-amber-100 dark:bg-gray-700'>
      <LogoStore_xx />
      <div className='flex items-center gap-4'>
        <Link href='/'>
          <Button variant='secondary'>TKUdemo</Button>
        </Link>
        <ModeToggle_xx />
      </div>
    </div>
  );
};

export default NavbarStore_xx;
