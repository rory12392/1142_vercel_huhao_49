import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';

import { ThemeProvider } from '@/components/providers/ThemeProvider';
import NavbarMain_49 from '@/components/NavbarMain_49';
import StyledComponentsRegistry from '@/lib/registry';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NavbarMain_49 />
          <StyledComponentsRegistry>
            <main className='mx-auto py-4 px-8'>{children}</main>
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
