import { Popover } from '@headlessui/react';
import { HiBars3, HiXMark } from 'react-icons/hi2';

const MobileMenuButton = ({ open }: { open: boolean }) => {
  return (
    <div className='flex items-center sm:hidden'>
      <Popover.Button className='-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
        <span className='sr-only'>Open menu</span>
        {open ? (
          <HiXMark className='block h-6 w-6' aria-hidden='true' />
        ) : (
          <HiBars3 className='block h-6 w-6' aria-hidden='true' />
        )}
      </Popover.Button>
    </div>
  );
};

export default MobileMenuButton;
