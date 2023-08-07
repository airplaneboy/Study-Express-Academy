'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { HiOutlinePlay, HiOutlineDocumentText, HiOutlinePencilSquare, HiOutlineFolder } from 'react-icons/hi2';
import { FaQuoteRight } from 'react-icons/fa';
import { useState } from 'react';

const LessonSidebar = ({
  lesson,
  params,
}: {
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

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setIsScrolled(scrollTop > 0);
  };

  return (
    <aside className='max-md:hidden'>
      <nav className=' h-[45rem] sticky top-44 lg:w-80 md:w-72 rounded-2xl border-gray-300 border-2 overflow-hidden'>
        <div
          className={`absolute w-full  transition-all duration-100 ${
            isScrolled ? 'backdrop-blur-md shadow-md ' : 'border-b-2 -z-10'
          }`}>
          <h1 className='font-extrabold font-inter text-gray-800 text-3xl p-4  '>{lesson?.title || 'Contents'}</h1>
        </div>
        <ul role='list' className='p-4 overflow-y-auto h-[30rem] top-20' onScroll={(e) => handleScroll(e)}>
          {lesson?.contents?.map((content: { _id: string; title: string; slug: string; _type: string }) => (
            <li
              key={content?._id}
              className='first:mt-20  text-md text-gray-500 hover:text-indigo-500 focus:text-indigo-600 no_wrap   mb-3 truncate'>
              <Link
                href={`/${params?.subject}/${params?.course}/${params?.unit}/${params?.lesson}/${content?.slug}`}
                className={
                  content?.slug === segment
                    ? 'text-blue-800 bg-blue-100 px-3 py-5 block border-blue-900 border-2 rounded-2xl '
                    : 'px-3 py-5 block border-gray-300 border-2 rounded-2xl'
                }>
                <div className='flex gap-2 items-center justify-start'>
                  {(content?._type == 'videos' && <HiOutlinePlay size={25} className='shrink-0' />) ||
                    (content?._type == 'articles' && <HiOutlineDocumentText size={25} className='shrink-0' />) ||
                    (content?._type == 'tests' && <HiOutlinePencilSquare size={25} className='shrink-0' />) || (
                      <HiOutlineFolder size={25} className='shrink-0' />
                    )}
                  <span className='truncate'>{content?.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className='bg-gray-300 h-[15rem] relative'>
          <FaQuoteRight size={60} className='-top-8 right-3 absolute text-gray-800' />
          <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 text-gray-800 overflow-y-auto'>
            | Welcome to the lesson details section. Here, you&apos;ll find comprehensive information about the upcoming
            lesson. Dive into the curriculum, objectives, materials, and more to ensure you&apos;re fully prepared for
            an enriching learning experience. Let&apos;s embark on this educational journey together!
          </p>
        </div>
      </nav>
    </aside>
  );
};

export default LessonSidebar;
