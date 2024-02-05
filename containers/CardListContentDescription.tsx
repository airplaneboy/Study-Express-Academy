const CardListContentDescription = ({ contentDescription }: { contentDescription?: string }) => {
  return (
    <>
      {contentDescription && (
        <div className='w-full mb-10 flex flex-col gap-5 max-sm:border-x-0 border-2 border-gray-700 text-gray-500 bg-gray-200 sm:rounded-2xl mx-4 max-sm:px-2 max-sm:py-2 max-sm:pb-2 sm:p-4'>
          <span className=' text-gray-600 font-extrabold underline-offset-8  underline decoration-purple-500'>
            Here<span className='text-purple-500 text-lg'>&apos;</span>s What you should know!
          </span>
          <span className='text-base'>{contentDescription}</span>
        </div>
      )}
    </>
  );
};

export default CardListContentDescription;
