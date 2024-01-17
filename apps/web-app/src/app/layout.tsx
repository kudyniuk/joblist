import type { Metadata } from 'next';
import './globals.css';
import '@kudyniuk/components/style'
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Job List',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
