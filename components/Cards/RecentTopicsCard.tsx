import Image from 'next/image';
import Link from 'next/link';
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { getCourses, getSubjectsAndCourses } from '@/sanity/sanity-utils';
import { getCurrentUser, updateCurrentUser } from '@/lib/data/user';
import AddCoursesModal from '../AddSubjectsModal';
//@ts-ignore
import cx from 'clsx/lite';

const RecentTopics = async () => {
  // const recentCourses = await getRecentCourses();
  const subjects = await getSubjectsAndCourses();
  const user = await getCurrentUser();
  const selectedSubjects: any[] = user?.selectedSubjects;
  const courses: any[] = await getCourses();
  const filteredCourses = courses.filter((item) => selectedSubjects.some((course) => course.id == item._id));

  const onSubmit = async (currentlySelected: any[]) => {
    'use server';

    return await updateCurrentUser({ data: { selectedSubjects: currentlySelected } });
  };

  return (
    <>
      <div className='sm:px-6'>
        <div className='flex flex-row justify-between items-center mb-7 sm:mb-10'>
          <span className='capitalize block max-sm:text-center text-md sm:text-2xl lg:text-4xl font-extrabold text-gray-800 '>
            My Courses
          </span>
          <AddCoursesModal submit={onSubmit} selectedSubjects={selectedSubjects} subjects={subjects} />
        </div>
        <ul className='columns-1 xl:columns-2 gap-10'>
          {filteredCourses.map(
            (course: {
              title: string;
              icon: any;
              _id: string;
              slug: string;
              subject: { slug: string };
              units: { title: string; _id: string; icon: string; slug: string; color?: string }[];
            }) => {
              return (
                <li key={course?._id} className='inline-block w-full mb-4 lg:mb-8'>
                  <div className='sm:h-16 rounded-t-3xl p-2 pl-5 sm:p-6 border-2 bg-gray-100 w-full flex justify-between items-center'>
                    <div className='flex items-center gap-5 max-sm:gap-3 relative w-full'>
                      <Image
                        style={{ width: '40px', height: '40px' }}
                        width={40}
                        height={40}
                        className='max-sm:hidden'
                        src={course?.icon || '/assets/subject-icons/math.png'}
                        alt='subject'
                      />
                      <Link
                        href={`/${course?.subject?.slug}/${course?.slug}` || 'not-found'}
                        className='text-blue-600 font-bold truncate absolute text-sm sm:text-base w-full sm:pl-14 hover:underline '>
                        {course?.title}
                      </Link>
                    </div>
                    <Link href='#'>
                      <HiEllipsisHorizontal size={24} className='text-gray-400 hover:text-gray-600' />
                    </Link>
                  </div>
                  <div className='w-full border-2 border-t-0 rounded-b-3xl sm:px-0 px-3 py-1 overflow-hidden'>
                    {/* Items */}
                    <div>
                      <ul className='divide-y divide-gray-100'>
                        {course?.units?.map(
                          (unit: { title: string; icon: any; _id: string; slug: string; unitColor?: string }) => {
                            return (
                              <li key={unit?._id}>
                                <Link
                                  href={`/${course?.subject?.slug}/${course?.slug}/${unit?.slug}`}
                                  className='flex items-center justify-between py-2 sm:px-4 px-2 my-0  hover:bg-gray-100 gap-1 '>
                                  <div className='flex w-full items-center gap-2 relative'>
                                    <Image
                                      className={cx(
                                        'md:w-8 max-sm:!w-5 max-sm:!h-5 rounded-full object-contain p-1 ',
                                        unit.unitColor != (undefined || null) && `bg-[${unit.unitColor}]`
                                      )}
                                      style={{ width: '40px', height: '40px' }}
                                      src={unit?.icon || '/assets/subject-icons/books.png'}
                                      alt='lesson-image'
                                      width={40}
                                      height={40}
                                    />

                                    <span className='text-sm tracking-tight max-h-6 w-full text-gray-600 absolute truncate pl-7 sm:pl-12 '>
                                      {unit?.title}
                                    </span>
                                  </div>
                                  <span className='hidden sm:block text-gray-400 text-xs ml-1 font-bold'>
                                    {Math.floor(Math.random() * 101)}%
                                  </span>
                                </Link>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </>
  );
};

// const RecentTopicsCardBlock = block(RecentTopicsCard);
export default RecentTopics;
