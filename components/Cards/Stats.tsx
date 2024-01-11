import { HiRectangleStack, HiAcademicCap, HiTrophy } from 'react-icons/hi2';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Stats({ userStats }: { userStats: any }) {
  const stats = [
    {
      id: 1,
      name: 'Achievements',
      stat: userStats.numberOfAchievements,
      icon: HiTrophy,
      color: 'bg-pink-700 decoration-pink-500 shadow-pink-200',
      imageColor: 'text-pink-500',
      borderColor: 'border-pink-200',
    },
    {
      id: 2,
      name: 'Enrolled Courses',
      stat: userStats.numberOfCourses,
      icon: HiRectangleStack,
      color: 'bg-purple-700 decoration-purple-500 shadow-purple-200 ',
      imageColor: 'text-purple-500',
      borderColor: 'border-purple-200',
    },
    {
      id: 3,
      name: 'Completed Courses',
      stat: (
        <>
          {userStats.percentageOfCompletedCourses}
          <span className='max-sm:text-sm lg:text-sm'>%</span>
        </>
      ),
      icon: HiAcademicCap,
      color: 'bg-green-700 decoration-green-500 shadow-green-200 ',
      imageColor: 'text-green-500',
      borderColor: 'border-green-200',
    },
  ];

  return (
    <div className='sm:mb-24 mb-12'>
      <ul className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 -z-10 relative'>
        {stats.map((item) => (
          <li
            key={item.id}
            className={`flex border ${item.borderColor} items-center justify-between sm:justify-center group last:sm:justify-between last:sm:flex-row last:lg:flex-col last:sm:col-span-full last:lg:col-span-1 last:sm:py-6 last:lg:pt-6 last:lg:pb-12 last:sm:px-8 gap-2 sm:flex-col relative bg-white pt-4 pb-4 px-4 sm:pb-12 sm:pt-6 sm:px-6 shadow-stats_shadow shadow-${item.color} rounded-lg overflow-hidden`}>
            <div className=' sm:mb-2 flex gap-2 items-center '>
              <item.icon size={25} className={`sm:w-auto sm:h-auto w-4 ${item.imageColor}`} aria-hidden='true' />
              <span className='block text-xs group-last:sm:text-lg group-last:lg:text-sm sm:text-sm font-medium text-gray-500 truncate'>
                {item.name}
              </span>
            </div>
            <span
              className={`block text-4xl sm:text-6xl font-extrabold  text-gray-800 text_inset underline decoration-from-font ${item.color}`}>
              {item.stat}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
