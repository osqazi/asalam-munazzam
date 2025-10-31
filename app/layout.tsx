import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'As Salam Munazzam - Hajj 2026',
  description: 'Premium Hajj Packages for 2026 - Your Spiritual Journey Awaits',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header/>
      <div className='mt-56 md:mt-36'>
      <body className={inter.className}>{children}</body>
      </div>
      <Footer/>
    </html>
  );
}