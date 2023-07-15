import { MdArrowDropDown } from 'react-icons/md';
import { Fragment, Suspense } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

const Courses = ({ courses, classNames }: { courses: any; classNames: Function }) => {
  return (
    <div>
      <Menu as='div' className='flex-shrink-0 relative max-sm:hidden'>
        <Menu.Button
          type='button'
          className='max-sm:hidden inline-flex items-center px-4 py-2 border border-transparent  text-md font-bold rounded-md text-indigo-700 bg-transparent hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          {({ open }) => (
            <>
              <span className='sr-only'>Open courses menu</span>
              Courses
              <MdArrowDropDown
                size={25}
                className={classNames(open ? 'ml-2 -mr-1 rotate-180' : 'ml-2 -mr-1')}
                aria-hidden='true'
              />
            </>
          )}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='z-50 origin-top-right fixed left-1/2 -translate-x-1/2 mt-2 max-w-8xl w-4/5 rounded-md shadow-xl grid lg:grid-cols-3 md:grid-cols-2  gap-3 bg-white ring-1 ring-black ring-opacity-5 py-5 px-2 focus:outline-none'>
            {courses.map((item: any) => (
              <Menu.Item key={item._id}>
                {({ active }) => (
                  <Link
                    href='#'
                    className={classNames(
                      active ? 'bg-indigo-100 rounded-2xl text-indigo-900 underline ' : '',
                      'flex py-2 px-4 text-sm text-gray-700 items-center justify-start'
                    )}
                  >
                    {item.title}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Courses;
