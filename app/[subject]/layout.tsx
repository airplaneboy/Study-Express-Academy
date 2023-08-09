import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      <Suspense fallback={<h1>Loading navbar...</h1>}>
        <Navbar></Navbar>
      </Suspense>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
