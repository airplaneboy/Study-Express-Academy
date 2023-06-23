import Image from 'next/image';
import anim from '@/public/assets/anim.svg';

const Auth = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='min-h-full flex'>
      {children}
      <div className='hidden lg:block relative w-0 flex-1'>
        <Image quality={100} className='absolute inset-0 h-full w-full object-cover' src={anim} alt='' />
      </div>
    </main>
  );
};

export default Auth;
