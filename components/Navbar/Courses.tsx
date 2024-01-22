import { MdArrowDropDown } from 'react-icons/md';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import kebabCase from 'lodash/kebabcase';
import Link from 'next/link';
import React from 'react';

const Courses = ({ courses, classNames }: { courses: any; classNames: Function }) => {
  return (
    <div>
      <Menu as='div' className='flex-shrink-0  max-sm:hidden'>
        <Menu.Button
          type='button'
          className='max-sm:hidden relative inline-flex items-center px-4 py-2 border border-transparent  text-md font-bold rounded-md text-blue-700 bg-transparent hover:bg-blue-200/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
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
          leaveTo='transform opacity-0 scale-95'>
          {/* */}
          <div className='origin-top-right fixed left-1/2 -translate-x-1/2 mt-2 max-w-[90vw] w-auto max-h-[90vh] h-auto border overflow-scroll z-50 rounded-md shadow-xl bg-white px-2'>
            <Menu.Items as='ul' className='lg:columns-3 columns-1 sm:columns-2 gap-3'>
              {courses?.map((subject: any) => (
                <Menu.Item as='li' key={subject?._id}>
                  {({ active }) => (
                    <div className=' px-8 text-sm text-gray-700 flex-col capitalize pt-5 inline-block max-w-full'>
                      <Link
                        href={`/${subject?.slug}`}
                        className={classNames(active ? 'text-blue-800 underline' : '', 'mb-4 ')}>
                        {subject?.title}
                      </Link>
                      <ul>
                        {subject?.courses?.map((course: { _id: string; title: string; slug: string }) => (
                          <li key={course?._id} className='text-blue-500 truncate hover:underline py-2 text-base'>
                            <Link href={`/${subject?.slug}/${course?.slug}`}>{course?.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </div>
        </Transition>
      </Menu>
    </div>
  );
};

export default React.memo(Courses);
