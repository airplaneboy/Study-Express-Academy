import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import NavbarSkeleton from '@/components/Navbar/NavbarSkeleton';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar></Navbar>
      </Suspense>
      <main className='h-full'>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
