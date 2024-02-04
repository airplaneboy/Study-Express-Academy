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
import React, { Suspense, useEffect, useState } from 'react';
import RouterButton from './Navbar/RouterButton';
const userNavigation = [
  { name: 'Dashboard', href: '/user/dashboard' },
  { name: 'Your Profile', href: '/user/profile' },
  { name: 'Settings', href: '/user/settings' },
  { name: 'Sign out', href: '#', onClick: signOut },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

function NavbarContent({
  coursesData,
  userData,
  subjects: subject,
  courses,
}: {
  coursesData: { [key: string]: any };
  userData: { [key: string]: any };
  subjects: any[];
  courses: any[];
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    //Navbar Scroll Shadow
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    //Check if user is logged in

    if (userData) {
      setIsLoggedIn(true);
    }
    if (userData?.error) {
      setIsLoggedIn(false);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [userData]);

  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <div className='w-full sm:h-16 '>
        <Popover
          as='header'
          className={({ open }) =>
            classNames(
              open ? ' inset-0 z-40 overflow-y-auto' : '',
              `backdrop-blur-sm py-2 relative md:fixed inherit_width_height z-20 lg:overflow-y-visible transition-shadow duration-300  ${
                isScrolled ? 'shadow-md' : 'border-b-2 md:border-b'
              }`
            )
          }>
          {({ open }) => (
            <>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-full items-center '>
                <Search searchList={subject} otherLists={courses} options={{ keys: ['title'] }} />
                <div className='absolute_center'>
                  <ClickableLogo />
                </div>

                {/* Check if user is logged in to show login button or their profile */}
                {isLoggedIn ? (
                  <div className='flex gap-5 min-[550px]:gap-12 items-center'>
                    <Courses courses={coursesData} classNames={classNames} />
                    <MobileMenuButton open={open} />
                    <UserMenu
                      classNames={classNames}
                      imageUrl={userData?.profile?.image}
                      userNavigation={userNavigation}
                      name={(userData?.profile as any)?.username}
                    />
                  </div>
                ) : (
                  <RouterButton route='/auth/login' />
                )}
              </div>

              {/* Mobile Sidebar */}
              <Popover.Panel as='nav' className='sm:hidden mt-3' aria-label='Global'>
                {isLoggedIn ? (
                  <div className='border-t border-gray-200 pt-4 pb-3 '>
                    <Suspense fallback={<span>Fetching user&apos;s data...</span>}>
                      <UserProfile
                        email={userData?.email}
                        image={userData?.profile?.image}
                        // name={session?.user?.name}
                        username={userData?.username}
                      />
                    </Suspense>
                    <UserNavigation userNavigation={userNavigation} />
                  </div>
                ) : (
                  <RouterButton route='/auth/login' />
                )}
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
    </>
  );
}

export default React.memo(NavbarContent);
