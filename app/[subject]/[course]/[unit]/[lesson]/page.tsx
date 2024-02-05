const Lesson = () => {
  return (
    <div className='px-2 sm:px-16 py-4 flex flex-col justify-evenly h-full tracking-tight'>
      <span className='border-l-4 pl-2 border-blue-500  font-extrabold text-xs sm:text-lg text-gray-600'>
        Welcome to the Lessons Section.
      </span>
      <span className='mt-10 font-extrabold text-base sm:text-3xl lg:text-6xl text-gray-800'>
        You can start by selecting the <span className='text-blue-500'>lesson</span> you
        <span className='text-blue-500'>&apos;</span>re interested in on the{' '}
        <span className='text-blue-500'>sidebar</span>.
      </span>
      <div className=' block h-[65px] sm:h-14 bg-white border-dashed sm:border-solid border-t-2 sm:border-t absolute bottom-0 left-0 right-0 px-4 py-2 max-md:w-[90%] max-md:-translate-x-1/2 max-md:left-1/2'></div>
    </div>
  );
};

export default Lesson;
