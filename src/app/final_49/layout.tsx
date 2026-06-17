import type { Metadata } from 'next';
import '../globals.css';

import { ClerkProvider } from '@clerk/nextjs';

import NavbarFinal_49 from './_components/navbar/NavbarFinal_49';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

import Container from './_components/global/Container';

import { Toaster } from '@/components/ui/sonner';

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
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistLocalFont.className} ${geistMonoLocalFont.className} antialiased`}
      >
        <ClerkProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <NavbarFinal_49 />
            <Container className='py-4'>{children}</Container>
            <Toaster />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
