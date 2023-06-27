import { Dispatch, SetStateAction } from 'react';
import { HiChevronRight } from 'react-icons/hi2';
import Stats from '../Cards/Stats';

const Dashboard = ({
  setSidebarOpen,
  content,
}: {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  content: any;
}) => {
  return (
    <div className='flex flex-col flex-1  '>
      <div className='sticky top-0  md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100 shadow-md border-t-2'>
        <button
          type='button'
          className='-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-indigo-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
          onClick={() => setSidebarOpen(true)}
        >
          <span className='sr-only'>Open sidebar</span>
          <HiChevronRight className='h-6 w-6' aria-hidden='true' />
        </button>
      </div>
      <main className='flex-1'>
        <div className='py-6'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
            <h1 className='text-3xl font-extrabold text-gray-400 font-inter'>Dashboard</h1>
          </div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
            <div className='py-4'>
              {/* <div className='border-4 border-dashed border-gray-200 rounded-lg h-96' /> */}
              <Stats />
              {content}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
