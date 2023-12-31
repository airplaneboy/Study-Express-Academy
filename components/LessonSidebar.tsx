'use client';
import Sparkles from '@/components/Sparkles';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import {
  HiOutlinePlay,
  HiOutlineDocumentText,
  HiOutlinePencilSquare,
  HiOutlineFolder,
  HiArrowRight,
  HiPlay,
  HiDocumentText,
  HiPencilSquare,
} from 'react-icons/hi2';
import { useState } from 'react';
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
  const segment = useSelectedLayoutSegment();

  const [index, setIndex] = useState(() => lesson.contents.findIndex((content) => content.slug == segment)!);
  const [nextSlug, setNextSlug] = useState(() => {
    const index = lesson.contents.findIndex((content) => content.slug == segment)!;
    return lesson.contents[index + 1]?.slug;
  });

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setIsScrolled(scrollTop > 0);
  };

  const getNextSlug = (index: number) => {
    if (index < lesson?.contents.length - 1) return lesson?.contents[index + 1]?.slug;

    return lesson?.contents[lesson?.contents.length - 1]?.slug;
  };

  return (
    <div>
      <aside className='max-md:hidden'>
        {/* <nav className=' h-[45rem] sticky top-44 lg:w-80 md:w-72 rounded-2xl border-gray-300 border-2 overflow-hidden'> */}
        <nav className='sticky top-44 lg:w-80 md:w-72 rounded-2xl border-gray-300 border-2 overflow-hidden'>
          <div
            className={`absolute w-full  transition-all duration-0 z-10 ${
              isScrolled ? 'backdrop-blur-md shadow-md ' : 'border-b-2 bg-white'
              // isScrolled ? 'backdrop-blur-md shadow-md ' : 'border-b-2 -z-10'
            }`}>
            <span className='block font-extrabold  text-gray-800 text-3xl p-4  '>{lesson?.title || 'Contents'}</span>
          </div>
          <ul
            role='list'
            id='lesson-sidebar'
            className='max-h-[448px] p-4 overflow-y-auto h-[30rem] top-20'
            onScroll={(e) => handleScroll(e)}>
            {lesson?.contents?.map((content: { _id: string; title: string; slug: string; _type: string }, index) => (
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
                        ? 'overflow-hidden text-yellow-700 shadow-yellow-500 shadow-sm font-semibold bg-yellow-200 px-3 py-5 block border-yellow-500 border-2 rounded-2xl '
                        : 'overflow-hidden text-yellow-700 hover:text-yellow-600 shadow-yellow-600 shadow-sm font-semibold bg-gradient-to-r from-yellow-400 hover:from-yellow-300 via-yellow-200 hover:via-yellow-100 to-yellow-400 hover:to-yellow-300 px-3 py-5 block border-yellow-600 hover:border-yellow-500 border rounded-2xl '
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
                            <HiOutlinePlay size={25} className='shrink-0' />
                          ))) ||
                          (content?._type == 'articles' &&
                            (content?.slug === segment ? (
                              <HiDocumentText size={25} className='shrink-0' />
                            ) : (
                              <HiOutlineDocumentText size={25} className='shrink-0' />
                            ))) ||
                          (content?._type == 'tests' &&
                            (content?.slug === segment ? (
                              <HiPencilSquare size={25} className='shrink-0' />
                            ) : (
                              <HiOutlinePencilSquare size={25} className='shrink-0' />
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
                        ? 'text-blue-700 font-semibold bg-blue-100 px-3 py-5 block border-blue-700 border-2 rounded-2xl '
                        : 'px-3 py-5 block border-gray-300 border-2 rounded-2xl hover:border-blue-200'
                    }>
                    <div className='flex gap-2 items-center justify-start'>
                      {(content?._type == 'videos' &&
                        (content?.slug === segment ? (
                          <HiPlay size={25} className='shrink-0' />
                        ) : (
                          <HiOutlinePlay size={25} className='shrink-0' />
                        ))) ||
                        (content?._type == 'articles' &&
                          (content?.slug === segment ? (
                            <HiDocumentText size={25} className='shrink-0' />
                          ) : (
                            <HiOutlineDocumentText size={25} className='shrink-0' />
                          ))) ||
                        (content?._type == 'tests' &&
                          (content?.slug === segment ? (
                            <HiPencilSquare size={25} className='shrink-0' />
                          ) : (
                            <HiOutlinePencilSquare size={25} className='shrink-0' />
                          ))) || <HiOutlineFolder size={25} className='shrink-0' />}
                      <span className='truncate'>{content?.title}</span>
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* <div className='bg-gray-300 h-[15rem] relative'>
          <FaQuoteRight size={60} className='-top-8 right-3 absolute text-gray-800' />
          <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 text-gray-800 overflow-y-auto'>
            Welcome to the lesson details section. Here, you&apos;ll find comprehensive information about the upcoming
            lesson. Dive into the curriculum, objectives, materials, and more to ensure you&apos;re fully prepared for
            an enriching learning experience. Let&apos;s embark on this educational journey together!
          </span>
        </div> */}
        </nav>
      </aside>
      <div className='backdrop-blur-sm border-t-[1px] fixed bottom-0 left-0 right-0 px-4 py-2 max-md:absolute max-md:bottom-0 max-md:w-[90%] max-md:-translate-x-1/2 max-md:left-1/2'>
        {/* {segment?.endsWith('test') || ( */}
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
        {/* )} */}
      </div>
    </div>
  );
};

export default LessonSidebar;
