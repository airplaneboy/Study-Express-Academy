'use client';
import CollapsibleHeader from '@/components/CollapsibleHeader';
import { useState } from 'react';
//@ts-ignore
import CardListSidebar from '@/components/CardList/CardListSidebar';
import CardListContentDescription from './CardListContentDescription';
import CardListGoldContentItem from './CardListGoldContentItem';
import CardListContentItem from './CardListContentItem';
// import dynamic from 'next/dynamic';
// const CardListGoldContentItem = dynamic(() => import('./CardListGoldContentItem'));
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

interface ICardList {
  sidebarArray: SidebarItem[];
  contentArray: string;
  contentDescription?: string;
  sidebarHeader: string;
  contentHeader: string;
  slug: string;
  completedContents?: string[];
  completedLessons?: { id: number; createdAt: Date }[];
}

const CardList = ({
  sidebarArray,
  contentArray,
  sidebarHeader,
  contentHeader,
  contentDescription,
  slug,
  completedContents,
  completedLessons,
}: ICardList) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className='flex flex-row justify-between '>
        <CardListSidebar sidebarArray={sidebarArray} sidebarHeader={sidebarHeader} />

        <div className='w-full pb-96'>
          <CollapsibleHeader
            initialHeight='h-24 sm:h-28 text-lg sm:text-6xl max-md:text-center '
            finalHeight='h-20 text-md sm:text-3xl text-center'>
            <span className='py-4 no_wrap mx-auto w-full px-10 capitalize text-left font-extrabold  ease-linear transition-transform duration-300'>
              {contentHeader}
            </span>
          </CollapsibleHeader>

          <div className='items-center flex flex-col sm:pt-5 max-sm:mt-5 p-4 w-full'>
            {/* Content Header */}
            <CardListContentDescription contentDescription={contentDescription} />

            <div className='border-gray-300  md:px-3 w-full'>
              <ul role='list'>
                {sidebarArray?.map((headerItem) => {
                  return (
                    <li key={headerItem?._id} id={headerItem?.title} className='pb-4 relative overflow-hidden'>
                      {completedLessons?.some((item: any) => item.id == headerItem._id) ? (
                        <CardListGoldContentItem
                          contentArray={contentArray}
                          headerItem={headerItem}
                          sidebarHeader={sidebarHeader}
                          slug={slug}
                          completedContents={completedContents}
                        />
                      ) : (
                        <CardListContentItem
                          contentArray={contentArray}
                          headerItem={headerItem}
                          sidebarHeader={sidebarHeader}
                          slug={slug}
                          completedContents={completedContents}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
    </>
  );
};

export default CardList;
