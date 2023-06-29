import Link from 'next/link';
import { block, For } from 'million/react';

const CardList = ({
  sidebarArray,
  contentArray,
  sidebarHeading,
}: {
  sidebarArray: { title: string; href: string; icon: any }[];
  contentArray: { title: string; href: string }[];
  sidebarHeading: string;
}) => {
  return (
    <div className='flex w-full justify-between mx-auto max-w-7xl sm:px-10 py-16 bg-gray-50 p-4 md:rounded-3xl'>
      <nav className='w-72 max-md:hidden h-[54rem] sticky top-48 '>
        <ul role='list' className=' inherit_width_height overflow-y-scroll p-5 '>
          <h1 className='font-bold font-inter text-gray-700 mb-5  mr-3 text-xl'>{sidebarHeading}</h1>
          {sidebarArray.map((item) => (
            <li
              key={item.title}
              className='px-4 py-3 sm:px-0 text-md font-semibold text-gray-600 hover:text-indigo-500'
            >
              <Link href={`#${item.title}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex-1 md:border-l-8 border-gray-300 px-10'>
        <ul role='list' className='divide-y divide-gray-200 '>
          {sidebarArray.map((item) => (
            <li key={item.title} id={item.title} className='px-4 py-4 sm:px-0'>
              <div className='bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200'>
                {/* Header */}
                <div className='px-4 py-5 sm:px-6 font-bold text-gray-700'>
                  <Link href={item.href}>{item.title}</Link>
                </div>

                {/* content */}
                <div className='px-4 py-5 sm:p-6'>
                  <ul className=' grid grid-cols-2 gap-2'>
                    {contentArray.map((items) => (
                      <li key={items.title} className='text-gray-600 text-sm hover:underline'>
                        <Link href={items.href}>{items.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardList;
