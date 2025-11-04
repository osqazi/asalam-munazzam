import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/next"
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'As Salam Munazzam (Private) Limited',
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
      <body className={inter.className}>
       
        {children}
        <Analytics />
        </body>
      </div>
      <Footer/>
    </html>
  );
}