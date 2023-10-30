let classNames = require('classnames');
import '@/styles/globals.css';
import Script from 'next/script';
import { Nunito, Inter, Major_Mono_Display, Josefin_Slab, Plus_Jakarta_Sans } from 'next/font/google';
import Providers from '@/context/Provider';
// import Header from '@/components/Header';
import ToasterContext from '@/context/Toaster';

const nunito = Nunito({ weight: ['500', '700'], subsets: ['latin'], variable: '--font-nunito', style: 'normal' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', style: 'normal' });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-PlusJakartaSans', style: 'normal' });
// const josefinSlab = Josefin_Slab({ subsets: ['latin'], variable: '--font-josefinSlab' });
// const majorMonoDisplay = Major_Mono_Display({
//   weight: ['400'],
//   subsets: ['latin'],
//   variable: '--font-majorMonoDisplay',
// });
<Script
  defer
  src='https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js'
  integrity='sha384-XjKyOOlGwcjNTAIQHIpgOno0Hl1YQqzUOEleOLALmuqehneUG+vnGctmUb0ZY0l8'
  crossOrigin='anonymous'
/>;

<Script
  defer
  src='https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js'
  integrity='sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05'
  crossOrigin='anonymous'
  onLoad={() => {
    renderMathInElement(document.body);
  }}
/>;

export const metadata = {
  title: process.env.TITLE,
  description: `Explore a wide range of educational subjects and courses on ${process.env.TITLE}. Learn math, science, and more. Access free interactive lessons, and practice exercises. Start your learning journey today.`,
  link: [
    {
      // rel: 'stylesheet',
      url: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      // integrity: 'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV',
      // crossorigin: 'anonymous',
    },
  ],
};

const classes = classNames(nunito.className, inter.variable, plusJakartaSans.variable, 'h-full');
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='h-full' lang='en'>
      <body className={classes}>
        <Providers>
          <ToasterContext /> {children}
        </Providers>
      </body>
    </html>
  );
}
