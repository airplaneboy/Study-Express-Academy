'use client';

import { Popover } from '@headlessui/react';
import { signOut } from 'next-auth/react';
import UserMenu from './Navbar/UserMenu';
import Search from './Navbar/Search';
import MobileMenuButton from './Navbar/MobileMenuButton';
import ClickableLogo from './Navbar/ClickableLogo';
import UserProfile from './Navbar/UserProfile';
import UserNavigation from './Navbar/UserNavigation';
import Courses from './Navbar/Courses';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

const userNavigation = [
  { name: 'Your Profile', href: '/user/profile' },
  { name: 'Settings', href: '/user/settings' },
  { name: 'Sign out', href: '#', onClick: signOut },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function NavbarContent({
  coursesData,
  userData,
}: {
  coursesData: { [key: string]: any };
  userData: { [key: string]: any };
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    //Navbar Scroll Shadow
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <div className='w-full sm:h-16 '>
        <Popover
          as='header'
          className={({ open }) =>
            classNames(
              open ? ' inset-0 z-40 overflow-y-auto' : '',
              `bg-white py-2 md:fixed inherit_width_height z-20 lg:overflow-y-visible transition-shadow duration-300  ${
                isScrolled ? 'shadow-md' : 'shadow-sm'
              }`
            )
          }>
          {({ open }) => (
            <>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-full items-center '>
                <Search />
                <div className='absolute_center'>
                  <ClickableLogo />
                </div>
                <div className='flex gap-12 items-center'>
                  <Courses courses={coursesData} classNames={classNames} />
                  <MobileMenuButton open={open} />
                  <UserMenu
                    classNames={classNames}
                    imageUrl={userData?.profile?.image}
                    userNavigation={userNavigation}
                    name={session?.user?.name ? session?.user?.name : (userData?.profile as any)?.username}
                  />
                </div>
              </div>

              {/* Mobile Sidebar */}
              <Popover.Panel as='nav' className='sm:hidden mt-3' aria-label='Global'>
                <div className='border-t border-gray-200 pt-4 pb-3 '>
                  <UserProfile
                    user={session?.user}
                    email={userData.email}
                    image={userData.profile.image}
                    name={session?.user?.name}
                    username={userData?.username}
                  />
                  <UserNavigation userNavigation={userNavigation} />
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
    </>
  );
}
