'use client';
import Image from 'next/image';
import AvatarSelectModal from './AvatarSelect';
import React, { useState } from 'react';
import { updateProfile } from '@/lib/data/userProfile';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

const Profile = () => {
  const [image, setImage] = useState<any>('');
  const [bio, setBio] = useState<any>();
  const { data: session } = useSession();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const userProfileUpdate = { image: image == '' ? undefined : image.source, bio: bio == '' ? undefined : bio };

    //Patch request
    try {
      if (JSON.stringify(userProfileUpdate) != '{}') {
        await toast.promise(
          updateProfile({ data: userProfileUpdate, userId: (session?.user as any).id }),
          {
            error: 'An error occurred. Try again or contact support',
            loading: 'Updating your profile..',
            success: 'Update successful!',
          },
          { error: { duration: 1 } }
        );
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

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
          <div className='mt-5 md:mt-0 md:col-span-2 '>
            <form onSubmit={submitHandler}>
              <div className=' border-2 overflow-hidden rounded-2xl'>
                <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>Photo</label>
                    <div className='mt-1 flex flex-col gap-5 items-center'>
                      <Image
                        src={image?.source || '/assets/profile-pics/KnowledgeSeeker.svg'}
                        className='bg-gray-200 rounded-full pt-2'
                        alt={image?.alt || 'user profile picture'}
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'contain',
                        }}
                        width={200}
                        height={200}
                      />
                      {/* <button
                        type='button'
                        className=' bg-white py-2 px-3 border-2 border-gray-300 rounded-md  text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Change
                      </button> */}
                      <AvatarSelectModal value={image} setValue={setImage} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor='about' className='block text-sm font-medium'>
                      About
                    </label>
                    <div className='mt-1'>
                      <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        id='about'
                        name='about'
                        maxLength={250}
                        rows={3}
                        className='min-h-[4rem] max-h-96 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-2 border-gray-300 rounded-2xl placeholder-gray-600'
                        placeholder='What would you like everyone to know about you?'
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-200 text-right sm:px-6'>
                  <button
                    type='submit'
                    className=' inline-flex justify-center py-2 px-4 border border-transparent  text-sm font-medium rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
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
