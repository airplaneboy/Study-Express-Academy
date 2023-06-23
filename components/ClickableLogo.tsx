import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.svg';

const ClickableLogo = () => {
  return (
    <div className='flex items-center'>
      <Link href='#'>
        <Image className='block h-8 w-auto' src={logo} alt='logo' />
      </Link>
    </div>
  );
};

export default ClickableLogo;
