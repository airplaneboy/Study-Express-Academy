import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import NavbarSkeleton from '@/components/Navbar/NavbarSkeleton';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-sm:min-h-full sm:h-full'>
      <Suspense fallback={<NavbarSkeleton fixed={true} />}>
        <Navbar></Navbar>
      </Suspense>
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
