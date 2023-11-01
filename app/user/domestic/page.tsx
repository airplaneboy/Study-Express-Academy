import { getSubjects } from '@/sanity/sanity-utils';
import Image from 'next/image';

const Domestic = async () => {
  const subjects = await getSubjects();
  const tailwindTextColors = [
    'text-red-500',
    'text-blue-500',
    'text-green-500',
    'text-yellow-500',
    'text-indigo-500',
    'text-pink-500',
    'text-purple-500',
    'text-gray-500',
    'text-teal-500',
    'text-orange-500',
    'text-red-700',
    'text-blue-700',
    'text-green-700',
    'text-yellow-700',
    'text-indigo-700',
    'text-pink-700',
    'text-purple-700',
    'text-gray-700',
    'text-teal-700',
    'text-orange-700',
  ];

  return (
    <div>
      <ul className='grid grid-cols-2 gap-6 '>
        {subjects?.map(
          (
            subject: { title: string; _id: string; courses: { title: string }[]; description: string },
            index: number
          ) => {
            return (
              <li key={subject._id} className='mb-5'>
                {/* <div>
                <Image
                  src='/assets/subject-icons/art-subject.jpg'
                  alt={`${subject.title} icon`}
                  width={300}
                  height={100}
                  style={{ objectFit: 'cover', height: '100px' }}
                  // fill={true}
                  quality={100}
                  priority={true}
                />
                <header className='text-3xl font-bold tracking-tight'>{subject.title}</header>
                <p className='text-xl'>{subject.description}</p>
                 <ul>
                  {subject.courses.map((course: any) => {
                    return <li key={course.title}>{course.title}</li>;
                  })}
                </ul>
              </div> */}
                <div className='border-2 flex flex-col justify-between items-end rounded-2xl p-3 relative'>
                  {/* <button className='px-2 py-1 border-2 rounded-2xl text-blue-600 hover:border-blue-600 duration-150 ease-in-out'>
                    Explore
                  </button> */}
                  <Image
                    src='/assets/subject-icons/wired-flat-1953-african-culture.webp'
                    alt={`${subject.title} icon`}
                    width={200}
                    height={200}
                    style={{ objectFit: 'contain' }}
                    quality={100}
                    className='absolute -z-10'
                  />
                  <div className=' rounded-2xl bg-gray-200 hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]'>
                    <button className='px-2 py-1 rounded-2xl text-blue-600 font-inter font-medium bg-white'>
                      Explore
                    </button>
                  </div>

                  <div className='flex flex-col gap-5 items-center justify-center w-full min-h-[200px]'>
                    {/* <span className={`text-5xl font-bold ${tailwindTextColors[index + 10]} font-inter`}>{subject.title}</span> */}
                    <span className={`text-5xl font-bold text-gray-700 font-inter`}>{subject.title}</span>
                  </div>
                  <div>
                    <span className='text-gray-600 font-semibold'>
                      {subject.courses.length} {subject.courses.length > 1 ? 'courses' : 'course'}
                    </span>
                  </div>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Domestic;
