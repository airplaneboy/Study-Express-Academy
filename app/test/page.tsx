const OverflowCheckComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex justify-center w-full h-full p-10 gap-5'>
      <div aria-live='polite' aria-busy='true' className='flex-1 flex flex-col justify-between'>
        <span className='inline-flex w-full h-8 animate-pulse select-none rounded-md bg-gray-300 leading-none '>‌</span>
        <span className='inline-flex w-full h-8 animate-pulse select-none rounded-md bg-gray-300 leading-none '>‌</span>
        <span className='inline-flex w-full h-8 animate-pulse select-none rounded-md bg-gray-300 leading-none '>‌</span>
        <span className='inline-flex w-full h-8 animate-pulse select-none rounded-md bg-gray-300 leading-none '>‌</span>
        <span className='inline-flex w-full h-8 animate-pulse select-none rounded-md bg-gray-300 leading-none '>‌</span>
        <span className='inline-flex w-full h-8 animate-pulse select-none rounded-md bg-gray-300 leading-none '>‌</span>
        <span className='inline-flex w-full h-8 animate-pulse select-none rounded-md bg-gray-300 leading-none '>‌</span>
      </div>

      <svg className=' animate-pulse rounded bg-gray-300 flex-1' />
    </div>
  );
};

export default OverflowCheckComponent;
