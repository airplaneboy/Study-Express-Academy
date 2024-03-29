import { getInternationalSubjects } from '@/sanity/sanity-utils';

import LordIcon from '@/components/LordIcon';
import Link from 'next/link';

const International = async () => {
  const subjects = await getInternationalSubjects();
  const tailwindTextColors = [
    'text-red-700',
    'text-blue-700',
    'text-green-700',
    'text-yellow-700',
    'text-blue-700',
    'text-pink-700',
    'text-purple-700',
    'text-gray-700',
    'text-teal-700',
    'text-orange-700',
    'text-red-500',
    'text-blue-500',
    'text-green-500',
    'text-yellow-500',
    'text-blue-500',
    'text-pink-500',
    'text-purple-500',
    'text-gray-500',
    'text-teal-500',
    'text-orange-500',
  ];
  const tailwindShadowColors = [
    'hover:shadow-red-700',
    'hover:shadow-blue-700',
    'hover:shadow-green-700',
    'hover:shadow-yellow-700',
    'hover:shadow-blue-700',
    'hover:shadow-pink-700',
    'hover:shadow-purple-700',
    'hover:shadow-gray-700',
    'hover:shadow-teal-700',
    'hover:shadow-orange-700',
    'hover:shadow-red-500',
    'hover:shadow-blue-500',
    'hover:shadow-green-500',
    'hover:shadow-yellow-500',
    'hover:shadow-blue-500',
    'hover:shadow-pink-500',
    'hover:shadow-purple-500',
    'hover:shadow-gray-500',
    'hover:shadow-teal-500',
    'hover:shadow-orange-500',
  ];

  return (
    <div>
      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {subjects?.map(
          (
            subject: {
              title: string;
              _id: string;
              animatedIcon: string;
              courses: { title: string }[];
              description: string;
              icon: string;
              slug: string;
            },
            index: number
          ) => {
            return (
              <li key={subject._id} className='mb-5'>
                <div
                  className={`overflow-hidden hover:border-transparent hover:shadow-lg ${tailwindShadowColors[index]} border-2 flex flex-col justify-between items-end rounded-2xl p-3 relative text-gray-300 hover:${tailwindTextColors[index]} transition-all`}>
                  {/* <button className='px-2 py-1 border-2 rounded-2xl text-blue-600 hover:border-blue-600 duration-150 ease-in-out'>
                    Explore
                  </button> */}

                  <LordIcon src={subject.animatedIcon} size={500} className='absolute left-[-30%] top-[-40%]' />

                  <span
                    // href={`/${subject.slug}`}
                    className='z-10 rounded-2xl bg-gray-200  p-[2px]'>
                    {/* className='z-10 rounded-2xl bg-gray-200 hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]'> */}
                    <div className=' bg-white rounded-2xl'>
                      <span className='px-2 py-1 text-gray-600  font-extrabold inline-block cursor-default'>
                        Unavailable
                      </span>
                    </div>
                  </span>

                  <div className='flex flex-col gap-5 items-center justify-center w-full min-h-[200px]'>
                    <span
                      className={`bg-clip-text sm:ml-[30%] text-5xl font-extrabold  z-[9] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
                      {subject.title}
                    </span>
                  </div>
                  <div>
                    <span className='text-gray-600 font-semibold z-10'>
                      {subject.courses?.length ?? 0} {subject.courses?.length != 1 ? 'courses' : 'course'}
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

export default International;
