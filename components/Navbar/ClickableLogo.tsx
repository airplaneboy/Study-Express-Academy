import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.svg';

const ClickableLogo = () => {
  return (
    <div className='flex items-center'>
      <Link href='/'>
        <div className='flex items-center md:text-3xl font-bold gap-1 justify-center'>
          <Image
            className='block h-10 w-auto max-md:hidden'
            src='/assets/logo/logo-alt.svg'
            width={40}
            height={40}
            alt='logo'
            priority
          />
          <Image
            className=' h-10 w-auto hidden max-md:block'
            width={40}
            height={40}
            src='/assets/logo/logo-alt-icon.svg'
            alt='logo'
            priority
          />
          {/* <h1 className='max-md:hidden text-gray-400 font-inter tracking-tighter '>Study Express Academy</h1> */}
        </div>
      </Link>
    </div>
  );
};

export default ClickableLogo;
