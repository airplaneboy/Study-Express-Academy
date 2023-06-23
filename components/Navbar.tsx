'use client';
import { Popover } from '@headlessui/react';

import UserMenu from './Navbar/UserMenu';
import Search from './Navbar/Search';
import MobileMenuButton from './Navbar/MobileMenuButton';
import ClickableLogo from './Navbar/ClickableLogo';
import UserProfile from './Navbar/UserProfile';
import UserNavigation from './Navbar/UserNavigation';
import PageNavigation from './Navbar/PageNavigation';
import Courses from './Navbar/Courses';

const user = {
  name: 'Chelsea Hagen',
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
const courses = [
  { name: 'Mathematics', href: '#' },
  { name: 'English', href: '#' },
  { name: 'Chemistry', href: '#' },
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
            open ? 'fixed inset-0 z-40 overflow-y-auto ' : '',
            'bg-gray-100 shadow-sm lg:static lg:overflow-y-visible'
          )
        }
      >
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center'>
              <Search />
              <div className='absolute_center'>
                <ClickableLogo />
              </div>
              <div className='flex gap-12 items-center'>
                <Courses courses={courses} classNames={classNames} />
                <MobileMenuButton open={open} />
                <UserMenu classNames={classNames} imageUrl={user.imageUrl} userNavigation={userNavigation} />
              </div>
            </div>

            {/* Mobile Sidebar */}
            <Popover.Panel as='nav' className='sm:hidden' aria-label='Global'>
              <PageNavigation classNames={classNames} navigation={navigation} />
              <div className='border-t border-gray-200 pt-4 pb-3'>
                <UserProfile user={user} />
                <UserNavigation userNavigation={userNavigation} />
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}