import Image from 'next/image';
import { HiUser } from 'react-icons/hi2';

const UserProfile = ({
  image,
  username,
  // name,
  email,
}: {
  image: string;
  username: string;
  // name: string | undefined | null;
  email: string;
}) => {
  return (
    <div className='max-w-3xl mx-auto px-4 flex items-center sm:px-6'>
      <div className='flex-shrink-0'>
        {/* <Image className='h-10 w-10 rounded-full' width={256} height={256} src={user.imageUrl} alt='' /> */}
        {/* <HiUser className='h-8 w-8 rounded-full bg-indigo-700 p-1 text-white' width={256} height={256} /> */}
        {image ? (
          <div className='w-12 h-12 overflow-hidden rounded-full relative '>
            <Image
              className=' bg-gray-300 pt-1 absolute -top-3'
              width={100}
              height={100}
              src={image}
              alt='Profile image'
              style={{ objectFit: 'cover', width: '100px', height: '100px' }}
            />
          </div>
        ) : (
          // <HiUser className='h-8 w-8 rounded-full bg-indigo-700 p-1 text-white' width={256} height={256} />
          <span className='flex items-center justify-center bg-purple-800 h-8 w-8 rounded-full text-white uppercase text-lg text-center'>
            {username ? username?.charAt(0) : username?.charAt(0)}
          </span>
        )}
      </div>
      <div className='ml-3'>
        <div className='text-base font-medium text-gray-800'>{username}</div>
        <div className='text-sm font-medium text-gray-500'>{email}</div>
      </div>
    </div>
  );
};

export default UserProfile;
