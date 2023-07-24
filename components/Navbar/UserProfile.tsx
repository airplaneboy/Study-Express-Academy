import Image from 'next/image';
import { HiUser } from 'react-icons/hi2';

const UserProfile = ({ user }: { user: any }) => {
  return (
    <div className='max-w-3xl mx-auto px-4 flex items-center sm:px-6'>
      <div className='flex-shrink-0'>
        {/* <Image className='h-10 w-10 rounded-full' width={256} height={256} src={user.imageUrl} alt='' /> */}
        {/* <HiUser className='h-8 w-8 rounded-full bg-indigo-700 p-1 text-white' width={256} height={256} /> */}
        {user.image ? (
          <Image className='h-8 w-8 rounded-full' width={256} height={256} src={user.image} alt='Profile image' />
        ) : (
          // <HiUser className='h-8 w-8 rounded-full bg-indigo-700 p-1 text-white' width={256} height={256} />
          <h1 className='flex items-center justify-center bg-purple-800 h-8 w-8 rounded-full text-white uppercase text-lg text-center'>
            {user.name?.charAt(0)}
          </h1>
        )}
      </div>
      <div className='ml-3'>
        <div className='text-base font-medium text-gray-800'>{user.name}</div>
        <div className='text-sm font-medium text-gray-500'>{user.email}</div>
      </div>
    </div>
  );
};

export default UserProfile;
