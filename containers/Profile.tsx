'use client';
import Image from 'next/image';

const Profile = () => {
  return (
    <>
      <div>
        <div className='lg:grid lg:grid-cols-3 lg:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>Profile</h3>
              <p className='mt-1 text-sm text-gray-600'>This information will be displayed publicly.</p>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2 border-2 overflow-hidden rounded-2xl'>
            <form action='#' method='POST'>
              <div className='sm:rounded-md sm:overflow-hidden'>
                <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>Photo</label>
                    <div className='mt-1 flex flex-col gap-5 items-center'>
                      <Image
                        src='/assets/profile-pics/Asset 1.svg'
                        className='bg-gray-200 rounded-full pt-2'
                        alt='user profile picture'
                        style={{ width: 100, height: 100 }}
                        width={100}
                        height={100}
                      />
                      <button
                        type='button'
                        className=' bg-white py-2 px-3 border-2 border-gray-300 rounded-md  text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Change
                      </button>
                    </div>
                  </div>
                  <div>
                    <label htmlFor='about' className='block text-sm font-medium text-gray-400'>
                      About
                    </label>
                    <div className='mt-1'>
                      <textarea
                        disabled
                        id='about'
                        name='about'
                        rows={3}
                        className='min-h-[4rem] focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-2 border-gray-200 rounded-2xl placeholder-gray-400'
                        placeholder='Bio is currently unavailable'
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-200 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent  text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
