/* eslint-disable react/jsx-key */
import Image from 'next/image';
import Link from 'next/link';
import SubjectImage from '@/public/assets/logo.svg';
import { HiEllipsisHorizontal } from 'react-icons/hi2';

const subject = [
  {
    title: 'Math',
    image: SubjectImage,
  },
  {
    title: 'English',
    image: SubjectImage,
  },
  {
    title: 'Science',
    image: SubjectImage,
  },
  {
    title: 'Arts',
    image: SubjectImage,
  },
  {
    title: 'Language',
    image: SubjectImage,
  },
];

const courses = [
  { title: 'Physics', image: SubjectImage },
  { title: 'Organic Chemistry', image: SubjectImage },
  { title: 'English', image: SubjectImage },
  { title: 'Advanced Math', image: SubjectImage },
  { title: 'Algebra', image: SubjectImage },
  { title: 'Part of Speech', image: SubjectImage },
];

const lessons = [
  { title: 'Momentum', image: SubjectImage },
  { title: 'Kinetics', image: SubjectImage },
  { title: 'Pronouns', image: SubjectImage },
  { title: 'Integration', image: SubjectImage },
  { title: 'Addition of letters', image: SubjectImage },
  { title: 'Functions', image: SubjectImage },
];

const RecentTopicsCard = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-10 sm:px-6'>
      {courses.map((course) => {
        return (
          <div>
            <div className='h-16 rounded-t-3xl p-6 border bg-gray-100 w-full flex justify-between items-center'>
              <div className='flex items-center gap-5 max-sm:gap-3'>
                <Image className='max-sm:w-6' src={SubjectImage} alt='subject'></Image>
                <h1 className='text-gray-600 font-bold no_wrap max-h-6'>{course.title}</h1>
              </div>
              <Link href='#'>
                <HiEllipsisHorizontal size={24} className='text-gray-400 hover:text-gray-600' />
              </Link>
            </div>
            <div className='w-full border border-t-0 rounded-b-3xl sm:px-6 px-3 py-1'>
              {/* Items */}
              <div>
                <ul className='divide-y divide-gray-100'>
                  {lessons.map((lesson) => {
                    return (
                      <li>
                        <Link
                          href='#'
                          className='flex items-center justify-between py-2 sm:px-4 px-2 my-1 hover:bg-gray-100 rounded-2xl gap-1 '
                        >
                          <div className='flex w-full items-center gap-2'>
                            <Image
                              className='md:w-8 max-sm:w-7 rounded-full bg-indigo-200'
                              src={SubjectImage}
                              alt='lesson-image'
                            />
                            <h1 className='no_wrap max-h-6 w-full text-gray-600'>{lesson.title}</h1>
                          </div>
                          <h1 className='text-gray-400'>100%</h1>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// const RecentTopicsCardBlock = block(RecentTopicsCard);
export default RecentTopicsCard;
