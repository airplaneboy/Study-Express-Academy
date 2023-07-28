import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sidebar from '@/containers/Sidebar';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

export const metadata = {
  title: 'Homepage',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      <Suspense fallback={<h1>Loading navbar...</h1>}>{<Navbar />}</Suspense>
      <Suspense fallback={<Loading />}>
        <Sidebar>{children}</Sidebar>
      </Suspense>
      <Footer />
    </div>
  );
}
