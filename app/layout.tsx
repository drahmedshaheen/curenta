import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Curenta: Assisted Living Facility EMR',
  description:
    'Optimize assisted living operations with Curenta’s software. Minimize medication errors, centralize data, and improve family communication. Trusted by 550+ facilities for effective patient care.',
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={`${ibmPlexSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
