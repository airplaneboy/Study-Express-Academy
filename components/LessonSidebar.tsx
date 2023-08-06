'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

const LessonSidebar = ({
  lesson,
}: {
  lesson: { course?: { title: string }; contents: { _id: string; title: string; slug: string }[] };
}) => {
  const segment = useSelectedLayoutSegment();

  console.log('==============================Active Segments==============================');
  console.log(segment);
  console.log('==============================End Active Segments==============================');

  return (
    <aside className='max-md:hidden'>
      <nav className=' h-[45rem] sticky top-44 lg:w-80 md:w-72 overflow-y-auto rounded-2xl border-gray-300 border-2'>
        <ul role='list' className='h-max p-5'>
          <h1 className='font-extrabold font-inter text-gray-700 mb-5 mr-3 text-3xl'>
            {lesson?.course?.title || 'Lessons'}
          </h1>

          {lesson?.contents?.map((content: { _id: string; title: string; slug: string }) => (
            <li
              key={content?._id}
              className=' px-4 py-3 sm:px-0 text-md text-gray-500 hover:text-indigo-500 focus:text-indigo-600 no_wrap'>
              <Link href={content?.slug}>{content?.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default LessonSidebar;
