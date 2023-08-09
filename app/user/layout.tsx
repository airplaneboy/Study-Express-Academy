import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sidebar from '@/containers/Sidebar';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
import NavbarSkeleton from '@/components/Navbar/NavbarSkeleton';

export const metadata = {
  title: 'Homepage',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      <Suspense fallback={<NavbarSkeleton />}>{<Navbar />}</Suspense>
      <Suspense fallback={<Loading />}>
        <Sidebar>{children}</Sidebar>
      </Suspense>
      <Footer />
    </div>
  );
}
