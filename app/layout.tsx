let classNames = require('classnames');
import '@/styles/globals.css';
import { Nunito, Inter } from 'next/font/google';
import Header from '@/components/Header';

const nunito = Nunito({ weight: ['500', '700'], subsets: ['latin'], variable: '--font-nunito' });
const inter = Inter({ weight: ['700', '800'], subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: process.env.TITLE,
  description: `Explore a wide range of educational subjects and courses on ${process.env.TITLE}. Learn math, science, and more. Access free interactive lessons, and practice exercises. Start your learning journey today.`,
  link: 'hello this is a link',
};

const classes = classNames(nunito.className, inter.variable, 'h-full');
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='h-full' lang='en'>
      <body className={classes}>{children}</body>
    </html>
  );
}
