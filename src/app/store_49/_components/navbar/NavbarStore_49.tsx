'use client';

import Link from 'next/link';
import LogoStore_49 from './LogoStore_49';
import { ModeToggle } from './ModeToggle';

const NavbarStore_49 = () => {
  return (
    <div className='flex items-center justify-around mx-auto py-4 bg-amber-100 dark:bg-gray-700'>
      <LogoStore_49 />
      <div className='flex items-center gap-4'></div>
      <ModeToggle />
    </div>
  );
};

export default NavbarStore_49;
