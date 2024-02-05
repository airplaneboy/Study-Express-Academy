import Link from 'next/link';
import Image from 'next/image';

const ClickableLogo = () => {
  return (
    <div className='flex items-center'>
      <Link href='/user/dashboard'>
        <div className='flex items-center md:text-3xl font-bold gap-1 justify-center'>
          <Image
            className='block h-10 w-auto max-md:hidden'
            src='/assets/logo/logo-alt.svg'
            width={305}
            height={40}
            alt='logo'
            priority
          />
          <Image
            className=' h-10 w-10 hidden max-md:block'
            width={40}
            height={40}
            src='/assets/logo/logo-alt-icon.svg'
            alt='logo'
            priority
          />
          {/* <span className='max-md:hidden text-gray-400  tracking-tighter '>Study Express Academy</span> */}
        </div>
      </Link>
    </div>
  );
};

export default ClickableLogo;
