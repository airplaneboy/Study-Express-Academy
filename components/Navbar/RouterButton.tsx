'use client';
import { useRouter } from 'next/navigation';

const RouterButton = ({ route }: { route: string }) => {
  const router = useRouter();
  return (
    <button
      type='button'
      onClick={() => router.push(route)}
      className=' text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center '>
      Login <span className='max-sm:hidden'>to Continue</span>
    </button>
  );
};

export default RouterButton;
