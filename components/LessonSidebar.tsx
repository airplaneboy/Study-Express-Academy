'use client';
import Sparkles from '@/components/Sparkles';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { HiOutlineFolder, HiArrowRight, HiPlay, HiChevronUpDown } from 'react-icons/hi2';
import { useState } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
//@ts-ignore
import cx from 'clsx/lite';
// import { FaQuoteRight } from 'react-icons/fa';

const LessonSidebar = ({
  lesson,
  params,
  completedContents,
}: {
  completedContents: any[];
  lesson: {
    title: string;
    slug: string;
    description: string;
    contents: { _id: string; title: string; slug: string; _type: string }[];
  };
  params: { subject: string; course: string; unit: string; lesson: string };
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShowing, setIsShowing] = useState(true);

  const segment = useSelectedLayoutSegment();

  const [index, setIndex] = useState(() => lesson.contents?.findIndex((content) => content.slug == segment)!);
  const [nextSlug, setNextSlug] = useState(() => {
    const index = lesson.contents?.findIndex((content) => content.slug == segment)!;
    return index ? lesson.contents[index + 1]?.slug : '';
  });

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setIsScrolled(scrollTop > 0);
  };

  const getNextSlug = (index: number) => {
    if (index < lesson?.contents.length - 1) return lesson?.contents[index + 1]?.slug;

    return lesson?.contents[lesson?.contents.length - 1]?.slug;
  };
  // #9f9f9f #848484

  return (
    <>
      <button
        className={cx(
          isShowing ? 'bg-blue-200' : 'bg-blue-50',
          'w-full h-min md:h-auto md:w-min flex justify-center items-center md:bg-neutral-300 rounded-md border-2 border-blue-400 md:border-neutral-400 md:mb-10 md:opacity-30 hover:opacity-100 transition-opacity z-10'
        )}
        onClick={() => setIsShowing((isShowing) => !isShowing)}>
        <HiChevronUpDown className='md:rotate-90 text-blue-400 md:text-neutral-400' size={20} />
      </button>

      <div className='mb-20 sm:mb-0 md:max-h-[calc(100vh_-_64px_-_40px_-_58px)] md:pb-10 md:sticky top-[104px] order-first'>
        <Transition
          show={isShowing}
          enter='transition ease-in-out duration-500 md:duration-300 transform'
          enterFrom='max-md:-translate-y-full md:-translate-x-full opacity-0'
          enterTo='max-md:translate-y-0 md:translate-x-0 opacity-100'
          leave='transition ease-in-out duration-500 md:duration-300 transform'
          leaveFrom='max-md:translate-y-0 md:translate-x-0 opacity-100'
          leaveTo='max-md:-translate-y-full md:-translate-x-full opacity-0'
          className=' relative h-full md:max-w-sm md:w-96 rounded-2xl border-gray-300 border-2 overflow-hidden'>
          <div
            className={`absolute w-full transition-all duration-0 z-10 ${
              isScrolled ? 'backdrop-blur-md shadow-md ' : 'border-b-2 bg-white'
            }`}>
            <span className='block font-extrabold  text-gray-800 text-sm sm:text-base md:text-xl px-4 py-2 sm:py-3 md:p-4  md:truncate'>
              {lesson?.title || 'Contents'}
            </span>
          </div>

          <ul
            role='list'
            id='lesson-sidebar'
            className='p-2 sm:p-4 overflow-y-auto h-full'
            onScroll={(e) => handleScroll(e)}>
            {!index ? (
              <span className='block first:mt-20 text-md text-gray-500 italic capitalize'>No Contents</span>
            ) : (
              lesson?.contents?.map((content: { _id: string; title: string; slug: string; _type: string }, index) => (
                <li
                  onClick={() => {
                    setIndex(index);
                    setNextSlug(getNextSlug(index));
                  }}
                  key={content?._id}
                  className='first:mt-20 rounded-2xl text-md text-gray-500 hover:text-blue-500 hover:bg-blue-50 focus:text-blue-600 mb-3'>
                  {completedContents.some((item) => item == content._id) ? (
                    <Sparkles
                      color='#fef9c3'
                      delay={{ min: 1000, max: 3000 }}
                      className={
                        content?.slug === segment
                          ? 'text-xs sm:text-base overflow-hidden text-yellow-700 shadow-yellow-500 shadow-sm font-semibold bg-yellow-200 px-3 py-3 sm:py-4 md:py-5 block border-yellow-500 border-2 rounded-2xl '
                          : 'text-xs sm:text-base overflow-hidden text-yellow-700 hover:text-yellow-600 shadow-yellow-600 shadow-sm font-semibold bg-gradient-to-r from-yellow-400 hover:from-yellow-300 via-yellow-200 hover:via-yellow-100 to-yellow-400 hover:to-yellow-300 px-3 py-3 sm:py-4 md:py-5 block border-yellow-600 hover:border-yellow-500 border rounded-2xl '
                      }>
                      <div
                        className={`bg-[linear-gradient(45deg,transparent_25%,rgba(254,249,195,.7)_50%,transparent_75%,transparent_100%)]  absolute inset-0 w-full h-full  bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat  transition-[background-position_0s_ease] duration-0 animate-shine pointer-events-none`}
                      />
                      <Link
                        href={`/${params?.subject}/${params?.course}/${params?.unit}/${params?.lesson}/${content?.slug}`}>
                        <div className='flex gap-2 items-center justify-start'>
                          {(content?._type == 'videos' &&
                            (content?.slug === segment ? (
                              <HiPlay size={25} className='shrink-0' />
                            ) : (
                              // <HiOutlinePlay size={25} className='shrink-0' />icons8-play-gold
                              <Image
                                className='min-w-[24px] sm:min-w-[26px] max-w-[24px] sm:max-w-[26px] p-[2px] rounded-md border-yellow-700'
                                src='/assets/contents-icon/icons8-checkmark-gold.svg'
                                alt='gold and yellow stencil round play button video icon'
                                width={26}
                                height={26}
                              />
                            ))) ||
                            (content?._type == 'articles' &&
                              (content?.slug === segment ? (
                                // <HiDocumentText size={25} className='shrink-0' />
                                <Image
                                  className='min-w-[24px] sm:min-w-[26px] max-w-[24px] sm:max-w-[26px] p-[2px] rounded-md border-yellow-700'
                                  src='/assets/contents-icon/icons8-check-file-gold.png'
                                  alt='black and blue stencil document icon for article'
                                  width={26}
                                  height={26}
                                />
                              ) : (
                                // <HiOutlineDocumentText size={25} className='shrink-0' />icons8-check-file-gold
                                <Image
                                  className='min-w-[24px] sm:min-w-[26px] max-w-[24px] sm:max-w-[26px] p-[2px] rounded-md border-yellow-700'
                                  src='/assets/contents-icon/icons8-check-file-gold.png'
                                  alt='gold and yellow stencil document icon for article'
                                  width={26}
                                  height={26}
                                />
                              ))) ||
                            (content?._type == 'tests' &&
                              (content?.slug === segment ? (
                                // <HiPencilSquare size={25} className='shrink-0' />
                                <Image
                                  className='min-w-[24px] sm:min-w-[26px] max-w-[24px] sm:max-w-[26px] p-[2px] rounded-md border-yellow-700'
                                  src='/assets/contents-icon/icons8-report-card-gold.png'
                                  alt='gold and yellow stencil checklist icon for test'
                                  width={26}
                                  height={26}
                                />
                              ) : (
                                // <HiOutlinePencilSquare size={25} className='shrink-0' />
                                <Image
                                  className='min-w-[24px] sm:min-w-[26px] max-w-[24px] sm:max-w-[26px] p-[2px] rounded-md border-yellow-700'
                                  src='/assets/contents-icon/icons8-report-card-gold.png'
                                  alt='gold and yellow stencil checklist icon for test'
                                  width={26}
                                  height={26}
                                />
                              ))) || <HiOutlineFolder size={25} className='shrink-0' />}
                          <span className='truncate'>{content?.title}</span>
                        </div>
                      </Link>
                    </Sparkles>
                  ) : (
                    <Link
                      href={`/${params?.subject}/${params?.course}/${params?.unit}/${params?.lesson}/${content?.slug}`}
                      className={
                        content?.slug === segment
                          ? 'text-xs sm:text-base text-blue-700 font-semibold bg-blue-100 px-3 py-3 sm:py-4 md:py-5 block border-blue-700 border-2 rounded-2xl '
                          : 'text-xs sm:text-base block border-gray-300 border-2 rounded-2xl px-3 py-3 sm:py-4 md:py-5 hover:border-blue-200'
                      }>
                      <div className='flex gap-2 items-center justify-start'>
                        {(content?._type == 'videos' &&
                          (content?.slug === segment ? (
                            // <HiPlay size={25} className='shrink-0' />
                            <Image
                              className='min-w-[26px] sm:min-w-[32px] max-w-[26px] sm:max-w-none border p-[2px] rounded-md border-blue-300'
                              src='/assets/contents-icon/icons8-circled-play-32.png'
                              alt='black and blue stencil round play button video icon'
                              width={32}
                              height={32}
                            />
                          ) : (
                            // <HiOutlinePlay size={25} className='shrink-0' />
                            <Image
                              className='min-w-[26px] sm:min-w-[32px] max-w-[26px] sm:max-w-none border p-[2px] rounded-md'
                              src='/assets/contents-icon/icons8-circled-play-32.png'
                              alt='black and blue stencil round play button video icon'
                              width={32}
                              height={32}
                            />
                          ))) ||
                          (content?._type == 'articles' &&
                            (content?.slug === segment ? (
                              // <HiDocumentText size={25} className='shrink-0' />
                              <Image
                                className='min-w-[26px] sm:min-w-[32px] max-w-[26px] sm:max-w-none border p-[2px] rounded-md border-blue-300'
                                src='/assets/contents-icon/icons8-document.svg'
                                alt='black and blue stencil document icon for article'
                                width={32}
                                height={32}
                              />
                            ) : (
                              // <HiOutlineDocumentText size={25} className='shrink-0' />
                              <Image
                                className='min-w-[26px] sm:min-w-[32px] max-w-[26px] sm:max-w-none border p-[2px] rounded-md'
                                src='/assets/contents-icon/icons8-document.svg'
                                alt='black and blue stencil document icon for article'
                                width={32}
                                height={32}
                              />
                            ))) ||
                          (content?._type == 'tests' &&
                            (content?.slug === segment ? (
                              // <HiPencilSquare size={25} className='shrink-0' />
                              <Image
                                className='min-w-[26px] sm:min-w-[32px] max-w-[26px] sm:max-w-none border p-[2px] rounded-md border-blue-300'
                                src='/assets/contents-icon/icons8-test-32.png'
                                alt='black and blue stencil checklist icon for test'
                                width={32}
                                height={32}
                              />
                            ) : (
                              <Image
                                className='min-w-[26px] sm:min-w-[32px] max-w-[26px] sm:max-w-none border p-[2px] rounded-md'
                                src='/assets/contents-icon/icons8-test-32.png'
                                alt='black and blue stencil checklist icon for test'
                                width={32}
                                height={32}
                              />
                              // <HiOutlinePencilSquare size={25} className='shrink-0' />
                            ))) || <HiOutlineFolder size={25} className='shrink-0' />}
                        <span className='truncate'>{content?.title}</span>
                      </div>
                    </Link>
                  )}
                </li>
              ))
            )}
          </ul>
        </Transition>
      </div>

      {/* Next Button */}
      <div className='backdrop-blur-sm border-t-[1px] bottom-0 left-0 right-0 px-4 py-2 absolute sm:fixed max-md:w-[90%] max-md:-translate-x-1/2 max-md:left-1/2'>
        <Link
          href={nextSlug}
          className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl flex items-center justify-center gap-2 ml-auto w-fit max-md:mr-auto max-md:w-[80%]'
          onClick={() => {
            setNextSlug(getNextSlug(index + 1));
            setIndex((prev) => prev + 1);
          }}>
          <span>Next</span>
          <HiArrowRight />
        </Link>
      </div>
    </>
  );
};

export default LessonSidebar;
