import '@/styles/globals.css';
import Header from '@/components/Header';
import { Nunito, Inter } from 'next/font/google';

const nunito = Nunito({ weight: ['400', '500', '600'], subsets: ['latin'], variable: '--font-nunito' });
const inter = Inter({ weight: ['700', '800'], subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: process.env.TITLE,
  description: `Explore a wide range of educational subjects and courses on ${process.env.TITLE}. Learn math, science, and more. Access free interactive lessons, and practice exercises. Start your learning journey today.`,
  link: 'hello this is a link',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full'>
      <body className={`${inter.variable} h-full`}>{children}</body>
    </html>
  );
}
