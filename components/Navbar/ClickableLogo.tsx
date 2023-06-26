import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.svg';

const ClickableLogo = () => {
  return (
    <div className='flex items-center'>
      <Link href='#'>
        <div className='flex items-center md:text-3xl font-bold gap-1 justify-center'>
          <Image className='block h-8 w-auto' src={logo} alt='logo' />
          <h1 className='max-md:hidden text-indigo-900 font-inter '>CompanyName</h1>
        </div>
      </Link>
    </div>
  );
};

export default ClickableLogo;
