import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import { FloatingNav } from 'components/ui/floating-navbar';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Curenta | Assisted Living Facility EMR',
  description:
    'Optimize assisted living operations with Curenta’s software. Minimize medication errors, centralize data, and improve family communication. Trusted by 550+ facilities for effective patient care.',
};

const navItems = [
  {
    name: 'Home',
    link: '/',
    icon: <IconHome className='h-4 w-4 text-neutral-500 dark:text-white' />,
  },
  {
    name: 'About',
    link: '/about',
    icon: <IconUser className='h-4 w-4 text-neutral-500 dark:text-white' />,
  },
  {
    name: 'Contact',
    link: '/contact',
    icon: <IconMessage className='h-4 w-4 text-neutral-500 dark:text-white' />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <FloatingNav navItems={navItems} />
        {children}
      </body>
    </html>
  );
}
