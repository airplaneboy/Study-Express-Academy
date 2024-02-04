import capitalize from 'lodash/capitalize';

const CardListContentDescription = ({ contentDescription }: { contentDescription?: string }) => {
  return (
    <>
      {contentDescription && (
        <div className='w-full mb-10 flex flex-col gap-5 sm:border-b border-y-2 text-gray-500 sm:bg-gray-200 sm:rounded-2xl mx-4 max-sm:px-2 max-sm:py-2 max-sm:pb-2 sm:p-4'>
          <span className='text-2xl text-gray-600 font-extrabold  underline decoration-purple-500'>
            Here<span className='text-purple-500'>&apos;</span>s What you should know!
          </span>
          <span className='text-base'>{capitalize(contentDescription)}</span>
        </div>
      )}
    </>
  );
};

export default CardListContentDescription;
