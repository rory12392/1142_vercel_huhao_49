import type { Metadata } from 'next';

import Navbar_49 from './_components/NavbarShopNode_49';

import StyledComponentsRegistry from '@/lib/registry';

import localFont from 'next/font/local';

const geistLocalFont = localFont({
  src: '../_assets/fonts/geist.woff2',
  display: 'swap',
});

const geistMonoLocalFont = localFont({
  src: '../_assets/fonts/geist-mono.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Next.js Introduction',
  description: 'Given for basic understanding of Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar_49 />
      <StyledComponentsRegistry>
        <main className='max-w-7xl mx-auto py-4 px-8'>
          {children}
        </main>
      </StyledComponentsRegistry>
    </>
  );
}


