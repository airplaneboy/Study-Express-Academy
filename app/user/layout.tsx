import { Nunito_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const nunito = Nunito_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full'>
      <body className='h-full'>
        <div className={nunito.className}>
          <Navbar />
          <main>
            <Sidebar content={children} />
          </main>
        </div>
        <div className={nunito.className}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
