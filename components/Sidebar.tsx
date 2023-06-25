'use client';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import SidebarItems from './Sidebar/SidebarItems';
import {
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineFolder,
  HiOutlineHome,
  HiOutlineInbox,
  HiOutlineBars3,
  HiOutlineUser,
  HiOutlineXMark,
  HiCalendar,
  HiChartBar,
  HiFolder,
  HiHome,
  HiInbox,
  HiUser,
} from 'react-icons/hi2';
import Dashboard from './Sidebar/Dashboard';

const navigation = [
  { name: 'Dashboard', href: '#', icon: HiOutlineHome, iconFill: HiHome, current: true },
  { name: 'Team', href: '#', icon: HiOutlineUser, iconFill: HiUser, current: false },
  { name: 'Projects', href: '#', icon: HiOutlineFolder, iconFill: HiFolder, current: false },
  { name: 'Calendar', href: '#', icon: HiOutlineCalendar, iconFill: HiCalendar, current: false },
  { name: 'Documents', href: '#', icon: HiOutlineInbox, iconFill: HiInbox, current: false },
  { name: 'Reports', href: '#', icon: HiOutlineChartBar, iconFill: HiChartBar, current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar({ content }: { content: any }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className='flex max-w-7xl mx-auto justify-between md:px-5 lg:px-10'>
        {/* Mobile Sidebar Open */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as='div' className='fixed inset-0 flex z-40 md:hidden' onClose={setSidebarOpen}>
            {/* Panel Background Overlay */}
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>

            {/* Panel Foreground Overlay */}
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='relative flex-1 flex flex-col max-w-xs w-full bg-white'>
                {/* Close Button */}
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-0 right-0 -mr-12 pt-2'>
                    <button
                      type='button'
                      className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none '
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <HiOutlineXMark className='h-6 w-6 text-white' aria-hidden='true' />
                    </button>
                  </div>
                </Transition.Child>

                {/* Contents */}
                <div className='flex-1 h-0 pt-5 pb-4 overflow-y-auto'>
                  <SidebarItems navigation={navigation} classNames={classNames} />
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='w-64 h-full max-md:hidden'>
          <div className=' flex flex-col fixed inherit_width_height mt-16 inset-y-0'>
            <SidebarItems classNames={classNames} navigation={navigation} />
          </div>
        </div>

        {/* Dashboard */}
        <Dashboard content={content} setSidebarOpen={setSidebarOpen} />
      </div>
    </>
  );
}
