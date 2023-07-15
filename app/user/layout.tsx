// import NavbarContent from '@/components/NavbarContent';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      <div>
        <Navbar />
        <main>
          <Sidebar content={children} />
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
