'use client';
import { useState } from 'react';
import { Link } from 'react-scroll';

interface SidebarItem {
  slug: string;
  title: string;
  image: string;
  _id: string;
  units: {
    title: string;
    _id: string;
  }[];
}
type CardListSidebar = {
  sidebarHeader: string;
  sidebarArray: SidebarItem[];
};

const CardListSidebar = ({ sidebarHeader, sidebarArray }: CardListSidebar) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <aside className='max-md:hidden border-r-2 '>
      <nav className=' sticky top-16 lg:w-80 md:w-72 overflow-y-auto rounded-2xl '>
        <ul role='list' className='h-max p-5 pr-0'>
          <span className='inline-block font-extrabold  text-gray-600 text-xs tracking-widest uppercase mb-5'>
            {sidebarHeader}
          </span>
          {sidebarArray?.map((sidebarItems, index) => (
            <li key={sidebarItems?._id}>
              <Link
                delay={0}
                spyThrottle={0}
                onClick={() => setActiveIndex(index)}
                isDynamic
                to={sidebarItems?.title}
                spy={true}
                smooth={true}
                duration={0}
                offset={-200}
                activeClass='active'
                className={
                  activeIndex == index
                    ? 'border-l-4 cursor-pointer block bg-blue-100 font-semibold !text-blue-800 transition-all  border-blue-600 px-4 py-2 text-lg hover:text-blue-500 focus:text-blue-600 truncate'
                    : 'border-l ml-[3px] cursor-pointer block px-4 py-2 text-lg text-gray-500 hover:text-blue-500 focus:text-blue-600 truncate'
                }
                onSetActive={() => setActiveIndex(index)}>
                <div className='flex flex-col'>
                  <span className='text-sm text-gray-700 font-normal focus:text-gray-500 mb-2'>
                    {sidebarHeader} {index + 1}
                  </span>
                  <span className='block whitespace-normal text-xs tracking-wider'>{sidebarItems?.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default CardListSidebar;
