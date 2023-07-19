'use client';
import NextLink from 'next/link';
import Image from 'next/image';
import { Link } from 'react-scroll';
import CollapsibleHeader from '@/components/CollapsibleHeader';

const CardList = ({
  sidebarArray,
  contentArray,
  sidebarHeader,
  contentHeader,
}: {
  sidebarArray: { title: string; href: string; image: string; _id: string }[];
  contentArray: { title: string; href: string; _id: string }[];
  sidebarHeader: string;
  contentHeader: string;
}) => {
  return (
    <>
      <CollapsibleHeader
        initialHeight='h-28 text-6xl max-sm:text-3xl max-sm:h-24 max-md:text-center'
        finalHeight='h-20 text-3xl text-center'
      >
        <h1 className='max-w-7xl mx-auto w-full px-10 capitalize text-left font-bold font-inter inherit_text ease-linear transition-transform duration-300'>
          {contentHeader}
        </h1>
      </CollapsibleHeader>

      <div className='flex w-full justify-between mx-auto max-w-7xl sm:px-10 py-16 bg-white p-4 md:rounded-b-3xl relative  md:top-32'>
        <nav className='max-md:hidden h-[54rem] sticky top-44 lg:w-72 md:w-60 mr-4'>
          <ul role='list' className=' h-max rounded-2xl border-gray-300 border p-5 '>
            <h1 className='font-extrabold font-inter text-gray-700 mb-5  mr-3 text-3xl'>{sidebarHeader}</h1>
            {sidebarArray.map((item) => (
              <li
                key={item._id}
                className=' px-4 py-3 sm:px-0 text-md text-gray-500 hover:text-indigo-500 focus:text-indigo-600'
              >
                {/* <Link href={`#${item.title}`}>{item.title}</Link> */}
                <Link
                  to={item.title}
                  spy={true}
                  smooth={true}
                  duration={300}
                  offset={-130}
                  activeClass='active'
                  className='cursor-pointer'
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex-1  border-gray-300 lg:px-10 md:pl-10 rounded-r-xl'>
          <ul role='list' className='divide-y divide-gray-200 '>
            {sidebarArray.map((item) => (
              <li key={item._id} id={item.title} className='px-4 pb-4 sm:px-0'>
                <div className='bg-white overflow-hidden  border rounded-lg divide-y divide-gray-200'>
                  <div className='px-4 py-5 sm:px-6 font-bold text-gray-700 flex items-center gap-2 text-lg'>
                    {/* <Image width={30} height={30} src={item.image} alt='content images' /> */}
                    <NextLink href={`/subjects/${item.title}`}>{item.title}</NextLink>
                  </div>

                  <div className='px-4 py-5 sm:p-6 bg-gray-50'>
                    <ul className=' grid grid-cols-2 gap-2'>
                      {contentArray.map((items) => (
                        <li key={items._id} className='text-gray-600 text-md hover:underline'>
                          <NextLink href={`/subjects/${items.title}`}>{items.title}</NextLink>
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
    </>
  );
};

export default CardList;
