let classNames = require('classnames');
import '@/styles/globals.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Providers from '@/context/Provider';
// import Header from '@/components/Header';
import ToasterContext from '@/context/Toaster';

// const nunito = Nunito({
//   weight: ['500', '700'],
//   subsets: ['latin'],
//   variable: '--font-nunito',
//   style: 'normal',
//   display: 'swap',
// });

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   style: 'normal',
//   display: 'swap',
// });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-PlusJakartaSans',
  style: 'normal',
  // display: 'swap',
});

export const metadata = {
  title: process.env.TITLE,
  description: `Explore a wide range of educational subjects and courses on ${process.env.TITLE}. Learn math, science, and more. Access free interactive lessons, and practice exercises. Start your learning journey today.`,
};

// const classes = classNames(nunito.className, plusJakartaSans.variable, inter.variable, 'h-full');
const classes = classNames(plusJakartaSans.className, 'h-full');
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='h-full !subpixel-antialiased selection:bg-blue-300 selection:text-blue-900' lang='en'>
      <body className={classes}>
        <Providers>
          <ToasterContext /> {children}
        </Providers>
      </body>
    </html>
  );
}
