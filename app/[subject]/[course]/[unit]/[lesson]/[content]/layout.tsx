import { HiArrowRight } from 'react-icons/hi2';

export default function LessonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full flex flex-col'>
      {children}
      <div className='bg-black rounded-t-2xl px-6 py-3 max-md:absolute max-md:bottom-0 max-md:w-[90%] max-md:-translate-x-1/2 max-md:left-1/2'>
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl flex items-center justify-center gap-2 ml-auto max-md:mr-auto max-md:w-[80%]'>
          <span>Next</span>
          <HiArrowRight />
        </button>
      </div>
    </div>
  );
}
