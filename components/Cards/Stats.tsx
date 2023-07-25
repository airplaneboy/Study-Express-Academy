import { HiRectangleStack, HiAcademicCap, HiTrophy } from 'react-icons/hi2';

const stats = [
  {
    id: 1,
    name: 'Achievements',
    stat: '71,897',
    icon: HiTrophy,
    change: '122',
    changeType: 'increase',
    color: 'decoration-pink-500 shadow-pink-200 ',
    imageColor: 'text-pink-500',
  },
  {
    id: 2,
    name: 'Enrolled Courses',
    stat: '58.16%',
    icon: HiRectangleStack,
    change: '5.4%',
    changeType: 'increase',
    color: 'decoration-purple-500 shadow-purple-200 ',
    imageColor: 'text-purple-500',
  },
  {
    id: 3,
    name: 'Completed Courses',
    stat: '24.57%',
    icon: HiAcademicCap,
    change: '3.2%',
    changeType: 'decrease',
    color: 'decoration-green-500 shadow-green-200 ',
    imageColor: 'text-green-500',
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className='sm:mb-24 mb-12'>
      <h3 className='text-md leading-6 font-extrabold text-gray-300 font-inter uppercase max-sm:hidden'>
        Last 30 days
      </h3>

      <div className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 -z-10 relative'>
        {stats.map((item) => (
          <div
            key={item.id}
            className={`flex items-center justify-center gap-2 flex-col relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow-stats_shadow shadow-${item.color} rounded-lg overflow-hidden`}>
            <div className=' mb-2 flex gap-2 items-center '>
              <item.icon size={25} className={` ${item.imageColor}`} aria-hidden='true' />
              <p className='text-sm font-medium text-gray-500 truncate'>{item.name}</p>
            </div>
            <p
              className={`text-5xl font-extrabold font-inter text-gray-800 underline decoration-from-font ${item.color}`}>
              {item.stat}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
