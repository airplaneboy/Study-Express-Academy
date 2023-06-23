'use client';

import { Fragment } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import { HiMagnifyingGlass, HiBell, HiBars3, HiXMark } from 'react-icons/hi2';
import Link from 'next/link';
import Image from 'next/image';

import UserMenu from './UserMenu';
import Search from './Search';
import MobileMenuButton from './MobileMenuButton';
import ClickableLogo from './ClickableLogo';

const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Teams', href: '#', current: false },
  { name: 'Directory', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as='header'
        className={({ open }) =>
          classNames(
            open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
            'bg-white shadow-2xl lg:static lg:overflow-y-visible'
          )
        }
      >
        {({ open }) => (
          <>
            {/* Searchbar */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center'>
              <Search />
              <div className='absolute_center'>
                <ClickableLogo />
              </div>
              <div className='flex gap-5 items-center'>
                <MobileMenuButton open={open} />
                <UserMenu
                  classNames={classNames}
                  imageAlt='profile image'
                  imageUrl={user.imageUrl}
                  userNavigation={userNavigation}
                />
              </div>
            </div>

            {/* Mobile Sidebar */}
            <Popover.Panel as='nav' className='lg:hidden' aria-label='Global'>
              {/* Page Navigation Elements */}
              {/* <div className='max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                      'block rounded-md py-2 px-3 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div> */}

              {/* User Profile And Settings */}
              <div className='border-t border-gray-200 pt-4 pb-3'>
                {/* User Profile */}
                <div className='max-w-3xl mx-auto px-4 flex items-center sm:px-6'>
                  <div className='flex-shrink-0'>
                    <img className='h-10 w-10 rounded-full' src={user.imageUrl} alt='' />
                  </div>
                  <div className='ml-3'>
                    <div className='text-base font-medium text-gray-800'>{user.name}</div>
                    <div className='text-sm font-medium text-gray-500'>{user.email}</div>
                  </div>
                </div>

                {/* Settings and Navigation */}
                {/* <div className='mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4'>
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                    >
                      {item.name}
                    </a>
                  ))}
                </div> */}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}
