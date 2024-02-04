import CustomLink from '@/components/CustomLink';
import ShineEffect from '@/components/ShineEffect';
import Sparkles from '@/components/Sparkles';
import Image from 'next/image';
//@ts-ignore
import cx from 'clsx/lite';

type SidebarItem = {
  slug: string;
  title: string;
  image: string;
  _id: string;
  units: {
    title: string;
    _id: string;
  }[];
};
type CardListGoldContent = {
  sidebarHeader: string;
  contentArray: string;
  slug: string;
  headerItem: SidebarItem;
  completedContents?: string[];
};
const CardListGoldContentItem = ({
  headerItem,
  slug,
  sidebarHeader,
  contentArray,
  completedContents,
}: CardListGoldContent) => {
  return (
    <Sparkles color='#fef9c3' delay={{ min: 500, max: 1000 }}>
      <ShineEffect />
      <div className='absolute h-full w-full background-stripe mix-blend-multiply pointer-events-none' />
      <div
        className={
          'overflow-hidden font-black shadow-yellow-600 shadow-inner  bg-gradient-to-r from-yellow-400  via-yellow-200 to-yellow-400 px-3 py-5 block border-yellow-600 border rounded-2xl '
        }>
        <div className='px-4 py-3 sm:px-6 flex items-center gap-2 '>
          {headerItem?.image && (
            <Image src={headerItem?.image} alt={headerItem?.title + ' image'} width={30} height={30}></Image>
          )}
          <CustomLink pathStrings={[slug, headerItem?.slug]}>
            <span className='text-yellow-900/80 shadow-inner hover:bg-yellow-200/50 shadow-yellow-900 px-4 py-2 rounded-2xl'>
              {headerItem?.title}
            </span>
          </CustomLink>
        </div>

        {/* Content List */}
        <div className='px-4 py-5 sm:p-6 flex'>
          <ul
            className={cx(
              sidebarHeader.toLowerCase() == 'units' ? '' : 'max-w-[50%]',
              'flex flex-col gap-2 overflow-hidden  flex-1'
            )}>
            {sidebarHeader.toLowerCase() == 'units' ? (
              <span className='text-sm font-normal mb-5 block text-yellow-800'>Lessons</span>
            ) : (
              <span className='text-sm font-normal mb-5 block text-yellow-800'>Contents</span>
            )}
            {contentArray &&
              (headerItem as any)[contentArray]?.map((listItem: any) => {
                if (!listItem.slug.endsWith('test'))
                  return (
                    <li
                      key={listItem?._id}
                      className='text-yellow-800 text-base word-spacing-1 tracking-wide hover:underline truncate'>
                      <div className='flex gap-2 items-center'>
                        {listItem.slug.endsWith('video') ? (
                          <Image
                            className=' p-[2px] rounded-md border-yellow-700'
                            src='/assets/contents-icon/icons8-checkmark-gold.svg'
                            alt='gold and yellow stencil round play button video icon'
                            width={26}
                            height={26}
                          />
                        ) : (
                          <Image
                            className=' p-[2px] rounded-md border-yellow-700'
                            src='/assets/contents-icon/icons8-check-file-gold.png'
                            alt='black and blue stencil document icon for article'
                            width={26}
                            height={26}
                          />
                        )}

                        <CustomLink pathStrings={[slug, headerItem?.slug, listItem?.slug]}>
                          {listItem?.title}
                        </CustomLink>
                      </div>
                    </li>
                  );
              })}
          </ul>

          {/* ====================================Cut Here==================================== */}
          {(headerItem as any)[contentArray]?.some((item: any) => item.slug.endsWith('test')) && (
            <div className='pl-10 flex-1'>
              <span className='text-sm font-normal mb-5 block text-yellow-800'>Quizzes</span>
              <ul className='gap-2 flex flex-col'>
                {contentArray &&
                  (headerItem as any)[contentArray]?.map((listItem: any) => {
                    if (listItem.slug.endsWith('test'))
                      return (
                        <li key={listItem?._id}>
                          <CustomLink
                            className={cx(
                              completedContents?.some((item) => item == listItem?._id)
                                ? 'bg-purple-100 text-purple-600 border-purple-600 hover:bg-purple-200'
                                : 'bg-neutral-100 text-neutral-600 border-neutral-600 hover:bg-neutral-200',
                              'border-r-8 my-[1px] ml-[1px] font-semibold block p-3 hover:my-0 hover:ml-0 hover:border-y hover:border-l rounded-lg  text-base word-spacing-1 tracking-wide '
                            )}
                            pathStrings={[slug, headerItem?.slug, listItem?.slug]}>
                            <div className='flex flex-col'>
                              {listItem?.title}
                              <span className='text-sm text-gray-400 font-normal slashed-zero'>
                                {listItem?.numberOfQuestions || 0} Questions
                              </span>
                              <span
                                className={cx(
                                  completedContents?.some((item) => item == listItem?._id) ? '' : 'text-transparent',
                                  'text-xs text-gray-500 font-normal mt-2 '
                                )}>
                                Completed
                              </span>
                            </div>
                          </CustomLink>
                        </li>
                      );
                  })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Sparkles>
  );
};

export default CardListGoldContentItem;
