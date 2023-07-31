'use client';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import SidebarItems from './Sidebar/SidebarItems';
import sidebarData from './Sidebar/data';
import { HiChevronRight, HiOutlineXMark } from 'react-icons/hi2';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function SidebarContent({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className='flex max-w-7xl mx-auto justify-between md:px-5 lg:px-10'>
        {/* Mobile Sidebar Open */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as='div' className='fixed inset-0 flex z-40 md:hidden max-[350px]:w-72' onClose={setSidebarOpen}>
            {/* Panel Background Overlay */}
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
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
              leaveTo='-translate-x-full'>
              <div className='relative flex-1 flex flex-col max-w-xs w-full bg-white'>
                {/* Close Button */}
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'>
                  <div className='absolute top-0 right-0 -mr-12 pt-2'>
                    <button
                      type='button'
                      className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none '
                      onClick={() => setSidebarOpen(false)}>
                      <span className='sr-only'>Close sidebar</span>
                      <HiOutlineXMark className='h-6 w-6 text-white' aria-hidden='true' />
                    </button>
                  </div>
                </Transition.Child>

                {/* Contents */}
                <div className='flex-1 h-0 pt-5 pb-4 overflow-y-auto'>
                  <SidebarItems navigation={sidebarData} classNames={classNames} />
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className=' flex flex-col  inset-y-0  shadow-indigo-300  w-64 h-[calc(100vh-128px)] sticky top-16 max-md:hidden'>
          <SidebarItems classNames={classNames} navigation={sidebarData} />
        </div>

        {/* Mobile Toggle */}

        <div className='flex flex-col flex-1'>
          <div className='sticky top-0 w-full md:hidden p-1 px-6  shadow-md border-t-2 backdrop-blur-md z-40'>
            <button
              type='button'
              className='p-2 w-max -ml-0.5 -mt-0.5 h-12 inline-flex items-center justify-center rounded-md text-indigo-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              onClick={() => setSidebarOpen(true)}>
              <span className='sr-only'>Open sidebar</span>
              <h4>Sidebar</h4>
              <HiChevronRight className='h-6 w-6 ml-1' aria-hidden='true' />
            </button>
          </div>
          {/* Content */}
          {children}
        </div>
      </div>
    </>
  );
}
