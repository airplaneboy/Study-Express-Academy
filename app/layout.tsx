//@ts-ignore
import cx from 'clsx/lite';
import '@/styles/globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Providers from '@/context/Provider';
import ToasterContext from '@/context/Toaster';
// import Header from '@/components/Header';

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

const classes = cx(plusJakartaSans.className, 'h-full');
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='h-full !subpixel-antialiased selection:bg-blue-300 selection:text-blue-900' lang='en'>
      <body className={classes}>
        <Providers>
          <ToasterContext />
          {children}
        </Providers>
      </body>
    </html>
  );
}
