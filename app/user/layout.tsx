import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'Homepage',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      <div>
        <Navbar />
        <main>
          <Sidebar>{children}</Sidebar>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
