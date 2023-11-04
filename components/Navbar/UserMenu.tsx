'use client';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';

const UserMenu = ({
  userNavigation,
  classNames,
  imageUrl: image,
  name,
}: {
  userNavigation: any;
  classNames: Function;
  imageUrl?: any;
  name?: string | null;
}) => {
  return (
    // TODO: Should user menu be hidden on small screens?

    <Menu as='div' className='flex-shrink-0 relative max-sm:hidden'>
      <Menu.Button className=' bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
        <span className='sr-only'>Open user menu</span>
        {image ? (
          <div className='w-12 h-12 overflow-hidden rounded-full relative '>
            <Image
              className=' bg-gray-300 pt-1 absolute -top-3'
              width={100}
              height={100}
              src={image}
              alt='Profile image'
              style={{ objectFit: 'cover', width: '100px', height: '100px' }}
            />
          </div>
        ) : (
          // <HiUser className='h-8 w-8 rounded-full bg-indigo-700 p-1 text-white' width={256} height={256} />
          <span className='flex items-center justify-center bg-purple-800 h-8 w-8 rounded-full text-white uppercase text-lg text-center'>
            {name?.charAt(0)}
          </span>
        )}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'>
        <Menu.Items className='origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none'>
          {userNavigation.map((item: any) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <Link
                  href={item.href}
                  onClick={item.onClick}
                  className={classNames(active ? 'bg-gray-100' : '', 'block py-2 px-4 text-sm text-gray-700')}>
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
