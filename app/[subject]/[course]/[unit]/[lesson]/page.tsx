const Lesson = () => {
  return (
    <div className='px-8 py-4 flex flex-col justify-evenly h-full tracking-tight'>
      <span className='border-l-4 pl-2 border-purple-500 font-inter font-bold text-lg text-gray-600'>
        Welcome to the Lessons Section.
      </span>
      <span className='font-inter font-extrabold text-3xl lg:text-6xl text-gray-800'>
        You can start by selecting the <span className='text-purple-500'>lesson</span> you
        <span className='text-purple-500'>&apos;</span>re interested in on the{' '}
        <span className='text-purple-500'>sidebar</span>.
      </span>
      <div className='block h-14 bg-white border-t-[1px] fixed bottom-0 left-0 right-0 px-4 py-2 max-md:absolute max-md:bottom-0 max-md:w-[90%] max-md:-translate-x-1/2 max-md:left-1/2'>
        {/* {segment?.endsWith('test') || ( */}
        {/* <Link
          href={nextSlug}
          className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl flex items-center justify-center gap-2 ml-auto w-fit max-md:mr-auto max-md:w-[80%]'
          onClick={() => {
            setNextSlug(getNextSlug(index + 1));
            setIndex((prev) => prev + 1);
          }}>
          <span>Next</span>
          <HiArrowRight />
        </Link> */}
        {/* )} */}
      </div>
    </div>
  );
};

export default Lesson;
