import { MdArrowDropDown } from 'react-icons/md';
import { Fragment } from 'react';
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
          <Menu.Items className='origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none'>
            {courses.map((item: any) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <Link
                    href={item.href}
                    className={classNames(active ? 'bg-indigo-100' : '', 'block py-2 px-4 text-sm text-gray-700')}
                  >
                    {item.name}
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
