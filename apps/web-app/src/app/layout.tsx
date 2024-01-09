import type { Metadata } from 'next';
import './globals.css';
import { Poppins, Volkhov } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500'],
});

const volkhov = Volkhov({
  subsets: ['latin'],
  variable: '--font-volkhov',
  weight: ['700'],
});

export const metadata: Metadata = {
  title: 'Adventure App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${volkhov.variable}`}>
        {children}
      </body>
    </html>
  );
}
