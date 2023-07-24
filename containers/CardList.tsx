'use client';
import kebabcase from 'lodash.kebabcase';
import NextLink from 'next/link';
import Image from 'next/image';
import { Link } from 'react-scroll';
import CollapsibleHeader from '@/components/CollapsibleHeader';
import CustomLink from '@/components/CustomLink';

interface SidebarItem {
  title: string;
  image: string;
  _id: string;
  units: {
    title: string;
    _id: string;
  }[];
}

interface ICardList {
  sidebarArray: SidebarItem[];
  contentArray?: string;
  contentDescription?: string;
  sidebarHeader: string;
  contentHeader: string;
}

const CardList = ({ sidebarArray, contentArray, sidebarHeader, contentHeader, contentDescription }: ICardList) => {
  return (
    <>
      {/* Header */}
      <CollapsibleHeader
        initialHeight='h-28 text-6xl max-sm:text-3xl max-sm:h-24 max-md:text-center '
        finalHeight='h-20 text-3xl text-center'>
        <h1 className='py-4 no_wrap mx-auto w-full px-10 capitalize text-left font-bold font-inter inherit_text ease-linear transition-transform duration-300'>
          {contentHeader}
        </h1>
      </CollapsibleHeader>

      <div className='flex flex-col mx-auto bg-white sm:px-10 py-8 md:top-32 relative'>
        {contentDescription && <h3 className='border-b text-gray-500 bg-white text-lg p-4'>{contentDescription}</h3>}

        <div className='flex mt-10 p-4'>
          {/* Sidebar */}
          <aside className='max-md:hidden'>
            <nav className=' h-[45rem] sticky top-44 lg:w-80 md:w-72 overflow-y-auto rounded-2xl border-gray-300 border'>
              <ul role='list' className='h-max p-5'>
                <h1 className='font-extrabold font-inter text-gray-700 mb-5 mr-3 text-3xl'>{sidebarHeader}</h1>
                {sidebarArray.map((sidebarItems) => (
                  <li
                    key={sidebarItems._id}
                    className=' px-4 py-3 sm:px-0 text-md text-gray-500 hover:text-indigo-500 focus:text-indigo-600 no_wrap'>
                    <Link
                      to={sidebarItems.title}
                      spy={true}
                      smooth={true}
                      duration={300}
                      offset={-130}
                      activeClass='active'
                      className='cursor-pointer'>
                      {sidebarItems.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content Header */}
          <div className='border-gray-300 lg:px-10 md:pl-10 w-full'>
            <ul role='list'>
              {sidebarArray.map((headerItem) => (
                <li key={headerItem._id} id={headerItem.title} className='pb-4'>
                  <div className='bg-white border rounded-lg'>
                    <div className='px-4 py-5 sm:px-6 font-bold text-gray-700 flex items-center gap-2 text-lg max-sm:text-base '>
                      {headerItem.image && (
                        <Image src={headerItem.image} alt={headerItem.title + ' image'} width={30} height={30}></Image>
                      )}

                      <CustomLink pathStrings={[contentHeader, headerItem.title]}>{headerItem.title}</CustomLink>
                    </div>

                    {/* Content List */}
                    <div className='px-4 py-5 sm:p-6 bg-gray-50'>
                      <ul className=' grid grid-cols-2 gap-2'>
                        {contentArray &&
                          (headerItem as any)[contentArray].map((listItem: any) => (
                            <li
                              key={listItem._id}
                              className='text-gray-600 text-md max-sm:text-sm hover:underline truncate'>
                              <CustomLink pathStrings={[contentHeader, headerItem.title, listItem.title]}>
                                {listItem.title}
                              </CustomLink>
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
      </div>
    </>
  );
};

export default CardList;
