import Link from 'next/link';
import LogoStore_49 from './LogoStore_49';
import { ModeToggle } from './ModeToggle';
import { Button } from '@/components/ui/button';
import StoreSignInOutAuth_49 from './StoreSigninOutAuth_49';
import NavSearch_49 from './NavSearch_49';
import CartButton_49 from './CartButton_49';

const NavbarStore_49 = () => {
  return (
    <div className='flex items-center justify-around mx-auto py-4 bg-amber-100 dark:bg-gray-700'>
      <LogoStore_49 />
      <NavSearch_49 />

      <div className='flex items-center gap-4'>
        <Link href='/'>
          <Button variant='secondary'>TKUdemo</Button>
        </Link>
        <CartButton_49 />

        <ModeToggle />

        <StoreSignInOutAuth_49 />
      </div>
    </div>
  );
};

export default NavbarStore_49;
