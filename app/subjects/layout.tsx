import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
