import NavbarContent from '@/components/NavbarContent';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      <div>
        <NavbarContent>i got the kids</NavbarContent>
        <main>{children}</main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
