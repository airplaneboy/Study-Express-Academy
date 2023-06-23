import '@/styles/globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: process.env.TITLE,
  description: `Explore a wide range of educational subjects and courses on ${process.env.TITLE}. Learn math, science, and more. Access free interactive lessons, and practice exercises. Start your learning journey today.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full'>
      <body className='h-full'>{children}</body>
    </html>
  );
}