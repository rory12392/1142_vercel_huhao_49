import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import Link from 'next/link';

import { ModeToggle } from './ModeToggle';
import { Button } from '@/components/ui/button';

const NavbarMain_49 = () => {
  return (
    <div className='flex items-center justify-around mx-auto py-4 bg-amber-100 dark:bg-gray-700'>
      <Link href='/'>
        <div className='text-[18px]'>TKUdemo_49</div>
      </Link>
      <Menubar className='w-72'>
        <MenubarMenu>
          <MenubarTrigger>Demo</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <Link href='/counter_49'>Counter_49</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href='/tours_49'>Tours_49</Link>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                <Link href='/users_db_49'>Users_db_49</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href='/grocery_49'>Grocery_49</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href='/grocery_db_49'>Grocery_db_49</Link>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                Print... <MenubarShortcut>Ctrl+P</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Quiz1</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <Link href='/quiz1_49/blog_49'>Quiz1:Blog_49</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href='/quiz1_49/blog_db_49'>Quiz1:Blog_db_49</Link>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Midterm</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <Link href='/mid_49'>mid_49</Link>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Quiz2</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value='benoit'>
              <MenubarRadioItem value='andy'>Andy</MenubarRadioItem>
              <MenubarRadioItem value='benoit'>Benoit</MenubarRadioItem>
              <MenubarRadioItem value='Luis'>Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Edit...</MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Final</MenubarTrigger>
          <MenubarContent className='w-44'>
            <MenubarGroup>
              <MenubarItem>
                <Link href='/final_49'>Final_49</Link>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className='flex items-center gap-4'>
        <Link href='/store_49'>
          <Button variant='outline'>Store</Button>
        </Link>
        <Link href='/'>
          <Button variant='outline'>TKUdemo</Button>
        </Link>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavbarMain_49;
