import { Nunito } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const nunito = Nunito({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full'>
      <body className='h-full'>
        <div className={nunito.className}>
          <Navbar />
        </div>
        {children}
        <div className={nunito.className}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
