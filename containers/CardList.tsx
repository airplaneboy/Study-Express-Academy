'use client';

import Image from 'next/image';
import { Link } from 'react-scroll';
import CollapsibleHeader from '@/components/CollapsibleHeader';
import CustomLink from '@/components/CustomLink';
import capitalize from 'lodash.capitalize';
import { useState } from 'react';
interface SidebarItem {
  slug: string;
  title: string;
  image: string;
  _id: string;
  units: {
    title: string;
    _id: string;
  }[];
}

interface ICardList {
  sidebarArray: SidebarItem[];
  contentArray: string;
  contentDescription?: string;
  sidebarHeader: string;
  contentHeader: string;
  slug: string;
}

const CardList = ({
  sidebarArray,
  contentArray,
  sidebarHeader,
  contentHeader,
  contentDescription,
  slug,
}: ICardList) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className='flex flex-row justify-between '>
        <aside className='max-md:hidden border-r-2 '>
          <nav className=' sticky top-16 lg:w-80 md:w-72 overflow-y-auto rounded-2xl '>
            <ul role='list' className='h-max p-5'>
              <span className='inline-block font-extrabold font-inter text-gray-600 text-xs tracking-widest uppercase mb-5'>
                {sidebarHeader}
              </span>
              {sidebarArray?.map((sidebarItems, index) => (
                <li
                  key={sidebarItems?._id}
                  className={
                    activeIndex == index
                      ? 'bg-blue-100 font-extrabold !text-blue-800 transition-all rounded-2xl border-blue-600 px-4 py-3 text-lg hover:text-blue-500 focus:text-blue-600 no_wrap'
                      : 'px-4 py-3 text-lg text-gray-500 hover:text-blue-500 focus:text-blue-600 no_wrap'
                  }>
                  <Link
                    onClick={() => setActiveIndex(index)}
                    isDynamic
                    to={sidebarItems?.title}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-130}
                    activeClass='active'
                    className='cursor-pointer'
                    onSetActive={() => setActiveIndex(index)}>
                    {sidebarItems?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className='w-full'>
          <CollapsibleHeader
            initialHeight='h-28 text-6xl max-sm:text-3xl max-sm:h-24 max-md:text-center '
            finalHeight='h-20 text-3xl text-center'>
            <span className='py-4 no_wrap mx-auto w-full px-10 capitalize text-left font-extrabold font-inter ease-linear transition-transform duration-300'>
              {contentHeader}
            </span>
          </CollapsibleHeader>

          <div className='flex flex-row mx-auto bg-white sm:px-5 relative '>
            {/* Sidebar */}

            <div className='items-center flex flex-col sm:pt-5 max-sm:mt-5 p-4 w-full'>
              {/* Content Header */}{' '}
              {contentDescription && (
                <div className='w-full mb-10 flex flex-col gap-5 sm:border-b border-y-2 text-gray-500 sm:bg-gray-200 sm:rounded-2xl mx-4 max-sm:px-2 max-sm:py-2 max-sm:pb-2 sm:p-4'>
                  <span className='text-2xl text-gray-600 font-bold font-inter underline decoration-purple-500'>
                    Here<span className='text-purple-500'>&apos;</span>s What you should know!
                  </span>
                  <span className='text-base'>{capitalize(contentDescription)}</span>
                </div>
              )}
              <div className='border-gray-300  md:px-3 w-full'>
                <ul role='list'>
                  {sidebarArray?.map((headerItem) => {
                    return (
                      <li key={headerItem?._id} id={headerItem?.title} className='pb-4'>
                        <div className='bg-white border-2 rounded-lg overflow-hidden'>
                          <div className='px-4 py-3 sm:px-6 font-bold text-gray-700 flex items-center gap-2 text-lg max-sm:text-base '>
                            {headerItem?.image && (
                              <Image
                                src={headerItem?.image}
                                alt={headerItem?.title + ' image'}
                                width={30}
                                height={30}></Image>
                            )}

                            <CustomLink pathStrings={[slug, headerItem?.slug]}>
                              <span className='text-blue-700 hover:text-blue-800 font-plusJakartaSans text-base'>
                                {headerItem?.title}
                              </span>
                            </CustomLink>
                          </div>

                          {/* Content List */}
                          <div className='px-4 py-5 sm:p-6 bg-gray-100'>
                            <ul className=' grid grid-cols-2 gap-2'>
                              {contentArray &&
                                (headerItem as any)[contentArray]?.map((listItem: any) => (
                                  <li
                                    key={listItem?._id}
                                    className='text-gray-600 text-md max-sm:text-sm hover:underline truncate'>
                                    <CustomLink pathStrings={[slug, headerItem?.slug, listItem?.slug]}>
                                      {listItem?.title}
                                    </CustomLink>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
    </>
  );
};

export default CardList;
