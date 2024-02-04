'use client';
import { HiClock } from 'react-icons/hi2';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import { Link } from 'react-scroll';
import CollapsibleHeader from '@/components/CollapsibleHeader';
import CustomLink from '@/components/CustomLink';
import capitalize from 'lodash/capitalize';
import { useState } from 'react';
import ShineEffect from '@/components/ShineEffect';
import Sparkles from '@/components/Sparkles';
//@ts-ignore
import cx from 'clsx/lite';
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
            <ul role='list' className='h-max p-5 pr-0'>
              <span className='inline-block font-extrabold  text-gray-600 text-xs tracking-widest uppercase mb-5'>
                {sidebarHeader}
              </span>
              {sidebarArray?.map((sidebarItems, index) => (
                <li key={sidebarItems?._id}>
                  <Link
                    delay={0}
                    spyThrottle={0}
                    onClick={() => setActiveIndex(index)}
                    isDynamic
                    to={sidebarItems?.title}
                    spy={true}
                    smooth={true}
                    duration={0}
                    offset={-200}
                    activeClass='active'
                    className={
                      activeIndex == index
                        ? 'border-l-4 cursor-pointer block bg-blue-100 font-semibold !text-blue-800 transition-all  border-blue-600 px-4 py-2 text-lg hover:text-blue-500 focus:text-blue-600 no_wrap'
                        : 'border-l ml-[3px] cursor-pointer block px-4 py-2 text-lg text-gray-500 hover:text-blue-500 focus:text-blue-600 no_wrap'
                    }
                    onSetActive={() => setActiveIndex(index)}>
                    <div className='flex flex-col'>
                      <span className='text-sm text-gray-700 font-normal focus:text-gray-500 mb-2'>
                        {sidebarHeader} {index + 1}
                      </span>
                      <span className='block whitespace-normal text-xs tracking-wider'>{sidebarItems?.title}</span>
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
                                'overflow-hidden font-black shadow-yellow-600 shadow-inner  bg-gradient-to-r from-yellow-400  via-yellow-200 to-yellow-400 px-3 py-5 block border-yellow-600 border rounded-2xl '
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
                              <div className='px-4 py-5 sm:p-6 flex'>
                                <ul className='flex flex-col gap-2 overflow-hidden max-w-[50%] flex-1'>
                                  {sidebarHeader.toLowerCase() == 'units' ? (
                                    <span className='text-sm font-normal mb-5 block text-yellow-800'>Lessons</span>
                                  ) : (
                                    <span className='text-sm font-normal mb-5 block text-yellow-800'>Contents</span>
                                  )}
                                  {contentArray &&
                                    (headerItem as any)[contentArray]?.map((listItem: any) => {
                                      if (!listItem.slug.endsWith('test'))
                                        return (
                                          <li
                                            key={listItem?._id}
                                            className='text-yellow-800 text-base word-spacing-1 tracking-wide hover:underline truncate'>
                                            <div className='flex gap-2 items-center'>
                                              {listItem.slug.endsWith('video') ? (
                                                <Image
                                                  className=' p-[2px] rounded-md border-yellow-700'
                                                  src='/assets/contents-icon/icons8-checkmark-gold.svg'
                                                  alt='gold and yellow stencil round play button video icon'
                                                  width={26}
                                                  height={26}
                                                />
                                              ) : (
                                                <Image
                                                  className=' p-[2px] rounded-md border-yellow-700'
                                                  src='/assets/contents-icon/icons8-check-file-gold.png'
                                                  alt='black and blue stencil document icon for article'
                                                  width={26}
                                                  height={26}
                                                />
                                              )}

                                              <CustomLink pathStrings={[slug, headerItem?.slug, listItem?.slug]}>
                                                {listItem?.title}
                                              </CustomLink>
                                            </div>
                                          </li>
                                        );
                                    })}
                                </ul>

                                {/* ====================================Cut Here==================================== */}
                                {(headerItem as any)[contentArray]?.some((item: any) => item.slug.endsWith('test')) && (
                                  <div className='pl-10 flex-1'>
                                    <span className='text-sm font-normal mb-5 block text-yellow-800'>Quizzes</span>
                                    <ul className='gap-2 flex flex-col'>
                                      {contentArray &&
                                        (headerItem as any)[contentArray]?.map((listItem: any) => {
                                          if (listItem.slug.endsWith('test'))
                                            return (
                                              <li key={listItem?._id}>
                                                <CustomLink
                                                  className={cx(
                                                    completedContents?.some((item) => item == listItem?._id)
                                                      ? 'bg-purple-100 text-purple-600 border-purple-600 hover:bg-purple-200'
                                                      : 'bg-neutral-100 text-neutral-600 border-neutral-600 hover:bg-neutral-200',
                                                    'border-r-8 my-[1px] ml-[1px] font-semibold block p-3 hover:my-0 hover:ml-0 hover:border-y hover:border-l rounded-lg  text-base word-spacing-1 tracking-wide '
                                                  )}
                                                  pathStrings={[slug, headerItem?.slug, listItem?.slug]}>
                                                  <div className='flex flex-col'>
                                                    {listItem?.title}
                                                    <span className='text-sm text-gray-400 font-normal slashed-zero'>
                                                      {listItem?.numberOfQuestions || 0} Questions
                                                    </span>
                                                    <span
                                                      className={cx(
                                                        completedContents?.some((item) => item == listItem?._id)
                                                          ? ''
                                                          : 'text-transparent',
                                                        'text-xs text-gray-500 font-normal mt-2 '
                                                      )}>
                                                      Completed
                                                    </span>
                                                  </div>
                                                </CustomLink>
                                              </li>
                                            );
                                        })}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                          </Sparkles>
                        ) : (
                          // Not Complete
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
                            <div className='px-4 py-5 sm:p-6 flex'>
                              <ul className='flex flex-col gap-2 overflow-hidden max-w-[50%]'>
                                {sidebarHeader.toLowerCase() == 'units' ? (
                                  <span className='text-sm font-light mb-5 block text-gray-400'>Lessons</span>
                                ) : (
                                  <span className='text-sm font-light mb-5 block text-gray-400'>Contents</span>
                                )}

                                {contentArray &&
                                  (headerItem as any)[contentArray]?.map((listItem: any) => {
                                    if (!listItem.slug.endsWith('test'))
                                      return (
                                        <li
                                          key={listItem?._id}
                                          className='text-gray-600 text-base word-spacing-1 tracking-wide group  truncate max-w-full'>
                                          <div className='flex gap-2 items-center group-hover:cursor-pointer max-w-full'>
                                            <CustomLink
                                              className={cx(
                                                completedContents?.some((item) => item == listItem?._id)
                                                  ? 'text-green-500 bg-green-100 hover:border-green-500'
                                                  : 'hover:border-gray-300',
                                                'flex items-center py-1 px-3 gap-3 max-w-full w-full border-transparent border rounded-lg'
                                              )}
                                              pathStrings={[slug, headerItem?.slug, listItem?.slug]}>
                                              {listItem.slug.endsWith('video') ? (
                                                completedContents?.some((item) => item == listItem?._id) ? (
                                                  <Image
                                                    className='border p-1 rounded-md  border-green-300 bg-white'
                                                    src='/assets/contents-icon/icons8-checkmark.svg'
                                                    alt='black and blue stencil document icon'
                                                    width={32}
                                                    height={32}
                                                  />
                                                ) : (
                                                  <Image
                                                    className='border p-1 rounded-md'
                                                    src='/assets/contents-icon/icons8-circled-play-32.png'
                                                    alt='black and blue stencil round play button video icon'
                                                    width={32}
                                                    height={32}
                                                  />
                                                )
                                              ) : listItem.slug.endsWith('article') ? (
                                                completedContents?.some((item) => item == listItem?._id) ? (
                                                  <Image
                                                    className='border p-1 rounded-md border-green-300 bg-white'
                                                    src='/assets/contents-icon/icons8-check-file-32.png'
                                                    alt='black and green stencil document with checkmark for article icon'
                                                    width={32}
                                                    height={32}
                                                  />
                                                ) : (
                                                  <Image
                                                    className='border p-1 rounded-md '
                                                    src='/assets/contents-icon/icons8-document.svg'
                                                    alt='black and blue stencil document icon for article'
                                                    width={32}
                                                    height={32}
                                                  />
                                                )
                                              ) : (
                                                <Image
                                                  className='border p-1 rounded-md '
                                                  src='/assets/contents-icon/icons8-lesson-32.png'
                                                  alt='black and blue stencil classroom with students and a teacher icon for lesson'
                                                  width={34}
                                                  height={34}
                                                />
                                              )}

                                              <span className='truncate'>{listItem?.title}</span>
                                            </CustomLink>
                                          </div>
                                        </li>
                                      );
                                  })}
                              </ul>
                              {/* ====================================Cut Here==================================== */}
                              {(headerItem as any)[contentArray]?.some((item: any) => item.slug.endsWith('test')) && (
                                <div className='pl-10'>
                                  <span className='text-sm font-light mb-5 block text-gray-400'>Quizzes</span>
                                  <ul className='gap-2 flex flex-col'>
                                    {contentArray &&
                                      (headerItem as any)[contentArray]?.map((listItem: any) => {
                                        if (listItem.slug.endsWith('test'))
                                          return (
                                            <li key={listItem?._id}>
                                              <CustomLink
                                                className={cx(
                                                  completedContents?.some((item) => item == listItem?._id)
                                                    ? 'bg-purple-100 text-purple-600 border-purple-600 hover:bg-purple-200'
                                                    : 'bg-neutral-100 text-neutral-600 border-neutral-600 hover:bg-neutral-200',
                                                  'border-r-8 my-[1px] ml-[1px] font-semibold block p-3 hover:my-0 hover:ml-0 hover:border-y hover:border-l rounded-lg  text-base word-spacing-1 tracking-wide '
                                                )}
                                                pathStrings={[slug, headerItem?.slug, listItem?.slug]}>
                                                <div className='flex flex-col'>
                                                  {listItem?.title}
                                                  <span className='text-sm text-gray-400 font-normal slashed-zero'>
                                                    {listItem?.numberOfQuestions || 0} Questions
                                                  </span>
                                                  <span
                                                    className={cx(
                                                      completedContents?.some((item) => item == listItem?._id)
                                                        ? ''
                                                        : 'text-transparent',
                                                      'text-xs text-gray-500 font-normal mt-2 '
                                                    )}>
                                                    Completed
                                                  </span>
                                                </div>
                                              </CustomLink>
                                            </li>
                                          );
                                      })}
                                  </ul>
                                </div>
                              )}
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
