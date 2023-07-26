import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sidebar from '@/containers/Sidebar';
import { Suspense } from 'react';

export const metadata = {
  title: 'Homepage',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      <Navbar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Sidebar>{children}</Sidebar>
      </Suspense>
      <Footer />
    </div>
  );
}
