'use client';
import { useSelectedLayoutSegment } from 'next/navigation';
import lowerCase from 'lodash/lowercase';

const MainContent = ({ children }: { children: any }) => {
  const segment = useSelectedLayoutSegment();

  return (
    <main className='flex-1 min-h-[calc(100vh-56px-56px-82px)] sm:min-h-[calc(100vh-64px-56px-50px)] md:min-h-[calc(100vh-64px-50px)]'>
      <div className='py-6 px-2'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 md:px-8 sm:mb-10'>
          <span className='max-sm:text-4xl sm:text-5xl font-extrabold text-gray-800  max-sm:text-center capitalize'>
            {lowerCase(segment!)}
          </span>
        </div>
        <div className='max-w-7xl mx-auto sm:px-6 md:px-8'>
          <div className='py-4 px-2'>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
