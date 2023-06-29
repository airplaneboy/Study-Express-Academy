import Link from 'next/link';
import Image from 'next/image';
import { block, For } from 'million/react';

const CardList = ({
  sidebarArray,
  contentArray,
  sidebarHeader,
  contentHeader,
}: {
  sidebarArray: { title: string; href: string; icon: any; image: string }[];
  contentArray: { title: string; href: string }[];
  sidebarHeader: string;
  contentHeader: string;
}) => {
  return (
    <div className='flex w-full justify-between mx-auto max-w-7xl sm:px-10 py-16 bg-white p-4 md:rounded-b-3xl'>
      <nav className='max-md:hidden h-[54rem] sticky top-32 w-72 '>
        <ul role='list' className=' inherit_width_height overflow-y-scroll p-5 '>
          <h1 className='font-extrabold font-inter text-gray-700 mb-5  mr-3 text-3xl'>{sidebarHeader}</h1>
          {sidebarArray.map((item) => (
            <li
              key={item.title}
              className='px-4 py-3 sm:px-0 text-lg text-gray-500 hover:text-indigo-500 focus:text-indigo-600'
            >
              <Link href={`#${item.title}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex-1 md:border-l-8 border-gray-300 lg:px-10 md:pl-10 rounded-r-xl'>
        <h1 className='text-left max-sm:text-5xl max-md:text-center mb-8 font-bold font-inter text-7xl text-gray-500'>
          {contentHeader}
        </h1>
        <ul role='list' className='divide-y divide-gray-200 '>
          {sidebarArray.map((item) => (
            <li key={item.title} id={item.title} className='px-4 py-4 sm:px-0'>
              <div className='bg-white overflow-hidden shadow border rounded-lg divide-y divide-gray-200'>
                <div className='px-4 py-5 sm:px-6 font-bold text-gray-700 flex items-center gap-2'>
                  <Image width={30} height={30} src={item.image} alt='content images' />
                  <Link href={item.href}>{item.title}</Link>
                </div>

                <div className='px-4 py-5 sm:p-6 bg-gray-50'>
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
