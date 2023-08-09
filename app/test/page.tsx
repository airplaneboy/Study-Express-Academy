import Navbar from '@/components/Navbar';
import { HiMagnifyingGlass, HiBars3 } from 'react-icons/hi2';

const NavbarSkeleton = () => {
  return (
    <Navbar />
    // <div className=' border-b border-gray-300'>
    //   <div className='flex justify-evenly items-center md:gap-2 max-w-7xl mx-auto h-16 py-2 px-8 animate-[pulse_1s_ease-in-out_infinite] '>
    //     <div className='w-full h-full flex items-center'>
    //       <HiMagnifyingGlass size={24} className='sm:hidden text-gray-400' />
    //       <div className='h-full bg-gray-200 w-[75%] max-md:w-[100%] max-sm:w-max rounded-2xl'></div>
    //     </div>

    //     <div className='w-full h-full justify-center items-center flex'>
    //       <div className='h-full bg-gray-200 w-full max-md:max-w-[48px] flex-shrink-0 rounded-md'></div>
    //     </div>

    //     <div className='w-full h-full flex justify-end items-center gap-12'>
    //       <HiBars3 size={24} className='sm:hidden text-gray-400' />
    //       <div className='h-full bg-gray-200 w-full max-w-[122px] rounded-2xl max-sm:hidden'></div>
    //       <div className='bg-gray-200 w-12 h-12 rounded-full flex-shrink-0 max-sm:hidden'></div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NavbarSkeleton;
