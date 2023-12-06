'use client';
import { useSelectedLayoutSegment } from 'next/navigation';
import lowerCase from 'lodash.lowercase';

const MainContent = ({ children }: { children: any }) => {
  const segment = useSelectedLayoutSegment();

  return (
    <main className='flex-1'>
      <div className='py-6'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 sm:mb-10'>
          <span className='max-sm:text-4xl sm:text-5xl font-extrabold text-gray-800  max-sm:text-center capitalize'>
            {lowerCase(segment!)}
          </span>
        </div>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 md:px-8'>
          <div className='py-4'>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
