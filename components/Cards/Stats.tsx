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
    },
    {
      id: 2,
      name: 'Enrolled Courses',
      stat: userStats.numberOfCourses,
      icon: HiRectangleStack,
      color: 'bg-purple-700 decoration-purple-500 shadow-purple-200 ',
      imageColor: 'text-purple-500',
    },
    {
      id: 3,
      name: 'Completed Courses',
      stat: `${userStats.percentageOfCompletedCourses}%`,
      icon: HiAcademicCap,
      color: 'bg-green-700 decoration-green-500 shadow-green-200 ',
      imageColor: 'text-green-500',
    },
  ];

  return (
    <div className='sm:mb-24 mb-12'>
      <div className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 -z-10 relative'>
        {stats.map((item) => (
          <div
            key={item.id}
            className={`flex items-center justify-center gap-2 flex-col relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow-stats_shadow shadow-${item.color} rounded-lg overflow-hidden`}>
            <div className=' mb-2 flex gap-2 items-center '>
              <item.icon size={25} className={` ${item.imageColor}`} aria-hidden='true' />
              <span className='block text-md font-medium text-gray-500 truncate'>{item.name}</span>
            </div>
            <span
              className={`block text-6xl font-extrabold  text-gray-800 text_inset underline decoration-from-font ${item.color}`}>
              {item.stat}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
