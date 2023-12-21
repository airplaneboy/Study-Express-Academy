'use client';
import { TbProgress, TbProgressCheck } from 'react-icons/tb';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import { Link } from 'react-scroll';
import CollapsibleHeader from '@/components/CollapsibleHeader';
import CustomLink from '@/components/CustomLink';
import capitalize from 'lodash/capitalize';
import { useState } from 'react';
import ShineEffect from '@/components/ShineEffect';
import Sparkles from '@/components/Sparkles';
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
  completedContents?: string[];
  completedLessons?: { id: number; createdAt: Date }[];
}

const CardList = ({
  sidebarArray,
  contentArray,
  sidebarHeader,
  contentHeader,
  contentDescription,
  slug,
  completedContents,
  completedLessons,
}: ICardList) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className='flex flex-row justify-between '>
        <aside className='max-md:hidden border-r-2 '>
          <nav className=' sticky top-16 lg:w-80 md:w-72 overflow-y-auto rounded-2xl '>
            <ul role='list' className='h-max p-5'>
              <span className='inline-block font-extrabold  text-gray-600 text-xs tracking-widest uppercase mb-5'>
                {sidebarHeader}
              </span>
              {sidebarArray?.map((sidebarItems, index) => (
                <li key={sidebarItems?._id}>
                  <Link
                    onClick={() => setActiveIndex(index)}
                    isDynamic
                    to={sidebarItems?.title}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-200}
                    activeClass='active'
                    className={
                      activeIndex == index
                        ? 'border-l-4 rounded-r-3xl cursor-pointer block bg-blue-100 font-extrabold !text-blue-800 transition-all  border-blue-600 px-4 py-3 text-lg hover:text-blue-500 focus:text-blue-600 no_wrap'
                        : 'border-l cursor-pointer block px-4 py-3 text-lg text-gray-500 hover:text-blue-500 focus:text-blue-600 no_wrap'
                    }
                    onSetActive={() => setActiveIndex(index)}>
                    <div className='flex flex-col'>
                      <span className='text-sm text-gray-400 font-normal focus:text-gray-500'>
                        {sidebarHeader} {index + 1}
                      </span>
                      {sidebarItems?.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className='w-full pb-96'>
          <CollapsibleHeader
            initialHeight='h-28 text-6xl max-sm:text-3xl max-sm:h-24 max-md:text-center '
            finalHeight='h-20 text-3xl text-center'>
            <span className='py-4 no_wrap mx-auto w-full px-10 capitalize text-left font-extrabold  ease-linear transition-transform duration-300'>
              {contentHeader}
            </span>
          </CollapsibleHeader>

          <div className='flex flex-row mx-auto bg-red sm:px-5 relative '>
            <div className='items-center flex flex-col sm:pt-5 max-sm:mt-5 p-4 w-full'>
              {/* Content Header */}{' '}
              {contentDescription && (
                <div className='w-full mb-10 flex flex-col gap-5 sm:border-b border-y-2 text-gray-500 sm:bg-gray-200 sm:rounded-2xl mx-4 max-sm:px-2 max-sm:py-2 max-sm:pb-2 sm:p-4'>
                  <span className='text-2xl text-gray-600 font-extrabold  underline decoration-purple-500'>
                    Here<span className='text-purple-500'>&apos;</span>s What you should know!
                  </span>
                  <span className='text-base'>{capitalize(contentDescription)}</span>
                </div>
              )}
              <div className='border-gray-300  md:px-3 w-full'>
                <ul role='list'>
                  {sidebarArray?.map((headerItem) => {
                    return (
                      <li key={headerItem?._id} id={headerItem?.title} className='pb-4 relative overflow-hidden'>
                        {completedLessons?.some((item: any) => item.id == headerItem._id) ? (
                          <Sparkles color='#fef9c3' delay={{ min: 500, max: 1000 }}>
                            <ShineEffect />
                            <div className='absolute h-full w-full background-stripe mix-blend-multiply pointer-events-none' />
                            <div
                              className={
                                'overflow-hidden font-black shadow-yellow-600 shadow-sm  bg-gradient-to-r from-yellow-400  via-yellow-200 to-yellow-400 px-3 py-5 block border-yellow-600 border rounded-2xl '
                              }>
                              <div className='px-4 py-3 sm:px-6 flex items-center gap-2 '>
                                {headerItem?.image && (
                                  <Image
                                    src={headerItem?.image}
                                    alt={headerItem?.title + ' image'}
                                    width={30}
                                    height={30}></Image>
                                )}
                                <CustomLink pathStrings={[slug, headerItem?.slug]}>
                                  <span className='text-yellow-900/80 shadow-inner hover:bg-yellow-200/50 shadow-yellow-900 px-4 py-2 rounded-2xl'>
                                    {headerItem?.title}
                                  </span>
                                </CustomLink>
                              </div>

                              {/* Content List */}
                              <div className='px-4 py-5 sm:p-6'>
                                <ul className=' grid grid-cols-2 gap-2'>
                                  {contentArray &&
                                    (headerItem as any)[contentArray]?.map((listItem: any) => (
                                      <li
                                        key={listItem?._id}
                                        className='text-yellow-800 text-md max-sm:text-sm hover:underline truncate'>
                                        <div className='flex gap-2 items-center'>
                                          {completedContents?.some((item) => item == listItem?._id) ? (
                                            <FaCheck className='text-yellow-800 rounded-lg cursor-pointer' size={20} />
                                          ) : (
                                            <TbProgress className='text-gray-500 cursor-pointer' size={25} />
                                          )}
                                          <CustomLink pathStrings={[slug, headerItem?.slug, listItem?.slug]}>
                                            {listItem?.title}
                                          </CustomLink>
                                        </div>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            </div>
                          </Sparkles>
                        ) : (
                          <div className={'bg-white border-2 rounded-lg overflow-hidden'}>
                            <div className='px-4 py-3 sm:px-6 font-bold text-gray-700 flex items-center gap-2 text-lg max-sm:text-base '>
                              {headerItem?.image && (
                                <Image
                                  src={headerItem?.image}
                                  alt={headerItem?.title + ' image'}
                                  width={30}
                                  height={30}></Image>
                              )}
                              <CustomLink pathStrings={[slug, headerItem?.slug]}>
                                <span className='text-blue-700 hover:text-blue-800  text-base'>
                                  {headerItem?.title}
                                </span>
                              </CustomLink>
                            </div>

                            {/* Content List */}
                            <div className='px-4 py-5 sm:p-6'>
                              <ul className=' grid grid-cols-2 gap-2'>
                                {contentArray &&
                                  (headerItem as any)[contentArray]?.map((listItem: any) => (
                                    <li
                                      key={listItem?._id}
                                      className='text-gray-600 text-md max-sm:text-sm hover:underline truncate'>
                                      <div className='flex gap-2 items-center'>
                                        {completedContents?.some((item) => item == listItem?._id) ? (
                                          <FaCheck className='text-green-500 rounded-lg cursor-pointer' size={25} />
                                        ) : (
                                          <TbProgress className='text-gray-500 cursor-pointer' size={25} />
                                        )}
                                        <CustomLink pathStrings={[slug, headerItem?.slug, listItem?.slug]}>
                                          {listItem?.title}
                                        </CustomLink>
                                      </div>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        )}
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
