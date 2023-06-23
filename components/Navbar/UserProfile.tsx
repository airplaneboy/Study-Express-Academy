import Image from 'next/image';

const UserProfile = ({ user }: { user: any }) => {
  return (
    <div className='max-w-3xl mx-auto px-4 flex items-center sm:px-6'>
      <div className='flex-shrink-0'>
        <Image className='h-10 w-10 rounded-full' width={256} height={256} src={user.imageUrl} alt='' />
      </div>
      <div className='ml-3'>
        <div className='text-base font-medium text-gray-800'>{user.name}</div>
        <div className='text-sm font-medium text-gray-500'>{user.email}</div>
      </div>
    </div>
  );
};

export default UserProfile;
