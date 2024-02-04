import CustomLink from '@/components/CustomLink';
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
type CardListContent = {
  sidebarHeader: string;
  contentArray: string;
  slug: string;
  headerItem: SidebarItem;
  completedContents?: string[];
};

const CardListContentItem = ({ headerItem, sidebarHeader, contentArray, completedContents, slug }: CardListContent) => {
  return (
    <div className={'bg-white border-2 rounded-lg overflow-hidden'}>
      <div className='px-4 py-3 sm:px-6 font-bold text-gray-700 flex items-center gap-2 text-lg max-sm:text-base '>
        {headerItem?.image && (
          <Image src={headerItem?.image} alt={headerItem?.title + ' image'} width={30} height={30}></Image>
        )}
        <CustomLink pathStrings={[slug, headerItem?.slug]}>
          <span className='text-blue-700 hover:text-blue-800  text-base'>{headerItem?.title}</span>
        </CustomLink>
      </div>

      {/* Content List */}
      <div className='px-4 py-5 sm:p-6 flex'>
        <ul
          className={cx(
            sidebarHeader.toLowerCase() == 'units' ? '' : 'max-w-[50%]',
            'flex flex-col gap-2 overflow-hidden'
          )}>
          {sidebarHeader.toLowerCase() == 'units' ? (
            <span className='text-sm font-light mb-5 block text-gray-400'>Lessons</span>
          ) : (
            <span className='text-sm font-light mb-5 block text-gray-400'>Contents</span>
          )}

          {contentArray &&
            (headerItem as any)[contentArray]?.map((listItem: any) => {
              if (!listItem.slug.endsWith('test'))
                return (
                  <li
                    key={listItem?._id}
                    className='text-gray-600 text-base word-spacing-1 tracking-wide group  truncate max-w-full'>
                    <div className='flex gap-2 items-center group-hover:cursor-pointer max-w-full'>
                      <CustomLink
                        className={cx(
                          completedContents?.some((item) => item == listItem?._id)
                            ? 'text-green-500 bg-green-100 hover:border-green-500'
                            : 'hover:border-gray-300',
                          'flex items-center py-1 px-3 gap-3 max-w-full w-full border-transparent border rounded-lg'
                        )}
                        pathStrings={[slug, headerItem?.slug, listItem?.slug]}>
                        {listItem.slug.endsWith('video') ? (
                          completedContents?.some((item) => item == listItem?._id) ? (
                            <Image
                              className='border p-1 rounded-md  border-green-300 bg-white'
                              src='/assets/contents-icon/icons8-checkmark.svg'
                              alt='black and blue stencil document icon'
                              width={32}
                              height={32}
                            />
                          ) : (
                            <Image
                              className='border p-1 rounded-md'
                              src='/assets/contents-icon/icons8-circled-play-32.png'
                              alt='black and blue stencil round play button video icon'
                              width={32}
                              height={32}
                            />
                          )
                        ) : listItem.slug.endsWith('article') ? (
                          completedContents?.some((item) => item == listItem?._id) ? (
                            <Image
                              className='border p-1 rounded-md border-green-300 bg-white'
                              src='/assets/contents-icon/icons8-check-file-32.png'
                              alt='black and green stencil document with checkmark for article icon'
                              width={32}
                              height={32}
                            />
                          ) : (
                            <Image
                              className='border p-1 rounded-md '
                              src='/assets/contents-icon/icons8-document.svg'
                              alt='black and blue stencil document icon for article'
                              width={32}
                              height={32}
                            />
                          )
                        ) : (
                          <Image
                            className='border p-1 rounded-md '
                            src='/assets/contents-icon/icons8-lesson-32.png'
                            alt='black and blue stencil classroom with students and a teacher icon for lesson'
                            width={34}
                            height={34}
                          />
                        )}

                        <span className='truncate'>{listItem?.title}</span>
                      </CustomLink>
                    </div>
                  </li>
                );
            })}
        </ul>
        {/* ====================================Cut Here==================================== */}
        {(headerItem as any)[contentArray]?.some((item: any) => item.slug.endsWith('test')) && (
          <div className='pl-10'>
            <span className='text-sm font-light mb-5 block text-gray-400'>Quizzes</span>
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
  );
};

export default CardListContentItem;
