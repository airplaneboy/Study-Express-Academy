import { Nunito } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const nunito = Nunito({ weight: ['400', '500', '600'], subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full'>
      <body className='h-full'>
        <div className={nunito.className}>
          <Navbar />
          <main>{children}</main>
        </div>
        <div className={nunito.className}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
