import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Curenta | Assisted Living Facility EMR',
  description:
    'Optimize assisted living operations with Curenta’s software. Minimize medication errors, centralize data, and improve family communication. Trusted by 550+ facilities for effective patient care.',
  title: 'Curenta | Assisted Living Facility EMR',
  description:
    'Optimize assisted living operations with Curenta’s software. Minimize medication errors, centralize data, and improve family communication. Trusted by 550+ facilities for effective patient care.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
