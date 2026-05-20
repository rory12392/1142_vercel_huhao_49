'use client';

import { Button } from '@/components/ui/button';

import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from '@clerk/nextjs';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { LuAlignLeft } from 'react-icons/lu';
import UserIcon_49 from './UserIcon_49';
import Link from 'next/link';

import { links, linksAdmin } from './links';
import StoreSignOut_49 from './StoreSignOut_49';

//let isAdminUser = true;
interface StoreSignInOutProps {
  isAdminUser: boolean;
}

const StoreSignInOut_49 = ({ isAdminUser }: StoreSignInOutProps) => {
  const { isSignedIn, user } = useUser();
  // console.log('isSignedIn', isSignedIn);
  // console.log('isAdminUser', isAdminUser);
  // console.log('user', user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary'>
          <LuAlignLeft className='w-6 h-6' />
          {isSignedIn && user?.imageUrl ? (
            <img
              src={user.imageUrl}
              alt='User Avatar'
              className='w-6 h-6 object-cover rounded-full'
            />
          ) : (
            <UserIcon_49 />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Show when='signed-out'>
          <DropdownMenuItem>
            <SignInButton>
              <Link href='#' className='w-full text-left'>
                Login
              </Link>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton>
              <Link href='#' className='w-full text-left'>
                Register
              </Link>
            </SignUpButton>
          </DropdownMenuItem>
        </Show>
        <Show when='signed-in'>
          <DropdownMenuGroup>
            {links.map((link) => {
              return (
                <DropdownMenuItem key={link.href}>
                  <Link href={link.href} className='w-full capitalize'>
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
            {isAdminUser && (
              <>
                <DropdownMenuSeparator />
                {linksAdmin.map((link) => {
                  return (
                    <DropdownMenuItem key={link.href}>
                      <Link href={link.href} className='w-full capitalize'>
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </>
            )}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <StoreSignOut_49 />
          </DropdownMenuItem>
        </Show>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StoreSignInOut_49;

/*        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>*/
