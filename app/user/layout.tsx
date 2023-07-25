import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sidebar from '@/containers/Sidebar';

export const metadata = {
  title: 'Homepage',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      <Navbar />
      <Sidebar>{children}</Sidebar>
      <Footer />
    </div>
  );
}
