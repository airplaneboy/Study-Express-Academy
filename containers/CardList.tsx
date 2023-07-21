'use client';
import NextLink from 'next/link';
import Image from 'next/image';
import { Link } from 'react-scroll';
import CollapsibleHeader from '@/components/CollapsibleHeader';

const CardList = ({
  sidebarArray,
  // contentArray,
  sidebarHeader,
  contentHeader,
}: {
  sidebarArray: { title: string; image: string; _id: string; units: { title: string; _id: string }[] }[];
  // contentArray: { title: string; href: string; _id: string }[];
  sidebarHeader: string;
  contentHeader: string;
}) => {
  return (
    <>
      {/* Header */}
      <CollapsibleHeader
        initialHeight='h-28 text-6xl max-sm:text-3xl max-sm:h-24 max-md:text-center '
        finalHeight='h-20 text-3xl text-center'
      >
        <h1 className='no_wrap mx-auto w-full px-10 capitalize text-left font-bold font-inter inherit_text ease-linear transition-transform duration-300'>
          {contentHeader}
        </h1>
      </CollapsibleHeader>

      <div className='flex mx-auto sm:px-10 py-16 bg-white p-4 md:top-32 relative'>
        {/* Sidebar */}
        <aside className='max-md:hidden'>
          <nav className=' h-[45rem] sticky top-44 lg:w-80 md:w-72 overflow-y-auto rounded-2xl border-gray-300 border'>
            <ul role='list' className='h-max p-5'>
              <h1 className='font-extrabold font-inter text-gray-700 mb-5 mr-3 text-3xl'>{sidebarHeader}</h1>
              {sidebarArray.map((sidebarItems) => (
                <li
                  key={sidebarItems._id}
                  className=' px-4 py-3 sm:px-0 text-md text-gray-500 hover:text-indigo-500 focus:text-indigo-600 no_wrap'
                >
                  <Link
                    to={sidebarItems.title}
                    spy={true}
                    smooth={true}
                    duration={300}
                    offset={-130}
                    activeClass='active'
                    className='cursor-pointer'
                  >
                    {sidebarItems.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Content Header */}
        <div className='border-gray-300 lg:px-10 md:pl-10 w-full'>
          <ul role='list'>
            {sidebarArray.map((headerItem) => (
              <li key={headerItem._id} id={headerItem.title} className='pb-4'>
                <div className='bg-white border rounded-lg'>
                  <div className='px-4 py-5 sm:px-6 font-bold text-gray-700 flex items-center gap-2 text-lg max-sm:text-base '>
                    <NextLink className='max-md:truncate' href={`/${contentHeader}/${headerItem.title}`}>
                      {headerItem.title}
                    </NextLink>
                  </div>

                  {/* Content List */}
                  <div className='px-4 py-5 sm:p-6 bg-gray-50'>
                    <ul className=' grid sm:grid-cols-2 gap-2'>
                      {headerItem.units.map((listItem) => (
                        <li
                          key={listItem._id}
                          className='text-gray-600 text-md max-sm:text-sm hover:underline truncate'
                        >
                          <NextLink href={`/${contentHeader}/${headerItem.title}/${listItem.title}`} className=''>
                            {listItem.title}
                          </NextLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardList;
