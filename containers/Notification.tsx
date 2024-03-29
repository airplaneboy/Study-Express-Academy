'use client';
import { useState } from 'react';
import { updateUser } from '@/lib/data/user';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { CgSpinnerTwo } from 'react-icons/cg';

const Notification = ({
  user,
}: {
  user: {
    notificationSettings: {
      commentNotification: boolean;
      authenticationNotification: boolean;
      offersNotification: boolean;
      pushNotification: string;
    };
  };
}) => {
  const [loading, setLoading] = useState(false);
  const [commentNotification, setCommentNotification] = useState(user.notificationSettings.commentNotification);
  const [authenticationNotification, setAuthenticationNotification] = useState(
    user.notificationSettings.authenticationNotification
  );
  const [offersNotification, setOffersNotification] = useState(user.notificationSettings.offersNotification);
  const [pushNotification, setPushNotification] = useState(user.notificationSettings.pushNotification);
  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const userUpdate = {
      notificationSettings: {
        commentNotification,
        authenticationNotification,
        offersNotification,
        pushNotification: pushNotification == '' ? undefined : pushNotification,
      },
    };

    //Patch request
    try {
      if (JSON.stringify(userUpdate) != '{}') {
        await toast.promise(
          updateUser({ data: userUpdate, userId: (session?.user as any).id }),
          {
            error: 'An error occurred. Try again or contact support',
            loading: 'Updating your settings..',
            success: 'Update successful!',
          },
          { error: { duration: 1 } }
        );
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      <div className='mt-10 sm:mt-0'>
        <div className='lg:grid lg:grid-cols-3 lg:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-2 sm:px-0'>
              <span className='text-lg font-medium leading-6 text-gray-900'>Notifications</span>
              <span className='mt-1 text-xs sm:text-sm text-gray-600 block'>
                Decide which communications you&apos;d like to receive.
              </span>
            </div>
          </div>

          <div className='mt-5 lg:mt-0 md:col-span-2 border-2 rounded-2xl overflow-hidden'>
            <form onSubmit={handleSubmit}>
              <div className=' overflow-hidden sm:rounded-md'>
                <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                  <fieldset>
                    <legend className='text-base font-medium text-gray-900'>By Email</legend>
                    <div className='mt-4 space-y-4'>
                      <div className='flex items-start'>
                        <div className='flex items-center h-5'>
                          <input
                            checked={commentNotification}
                            onChange={(e) => setCommentNotification(e.target.checked)}
                            id='comments'
                            name='comments'
                            type='checkbox'
                            className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded'
                          />
                        </div>

                        <div className='ml-3 text-sm'>
                          <label htmlFor='comments' className='font-medium text-gray-700'>
                            Comments
                          </label>
                          <span className='block text-xs sm:text-sm text-gray-500'>
                            Get notified when someones posts a comment on your posts.
                          </span>
                        </div>
                      </div>

                      <div className='flex items-start'>
                        <div className='flex items-center h-5'>
                          <input
                            checked={authenticationNotification}
                            onChange={(e) => setAuthenticationNotification(e.target.checked)}
                            id='authentication'
                            name='authentication'
                            type='checkbox'
                            className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded'
                          />
                        </div>

                        <div className='ml-3 text-sm'>
                          <label htmlFor='authentication' className='font-medium text-gray-700'>
                            Authentication
                          </label>
                          <span className='block text-xs sm:text-sm text-gray-500'>
                            Get notified every time your account is logged into.
                          </span>
                        </div>
                      </div>

                      <div className='flex items-start'>
                        <div className='flex items-center h-5'>
                          <input
                            checked={offersNotification}
                            onChange={(e) => setOffersNotification(e.target.checked)}
                            id='offers'
                            name='offers'
                            type='checkbox'
                            className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded'
                          />
                        </div>

                        <div className='ml-3 text-sm'>
                          <label htmlFor='offers' className='font-medium text-gray-700'>
                            Offers
                          </label>
                          <span className='block text-xs sm:text-sm text-gray-500'>
                            Receive offer messages from us.
                          </span>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset>
                    <div>
                      <legend className='text-base font-medium text-gray-900'>Push Notifications</legend>
                      <span className='block text-xs sm:text-sm text-gray-500'>
                        These are delivered via SMS to your mobile phone.
                      </span>
                    </div>
                    <div className='mt-4 space-y-4'>
                      <div className='flex items-center'>
                        <input
                          checked={pushNotification === 'everything'}
                          onChange={(e) => setPushNotification(e.target.value)}
                          value='everything'
                          id='push-everything'
                          name='push-notifications'
                          type='radio'
                          className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300'
                        />
                        <label htmlFor='push-everything' className='ml-3 block text-sm font-medium text-gray-700'>
                          Everything
                        </label>
                      </div>

                      <div className='flex items-center'>
                        <input
                          checked={pushNotification === 'important'}
                          onChange={(e) => setPushNotification(e.target.value)}
                          value='important'
                          id='push-important'
                          name='push-notifications'
                          type='radio'
                          className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300'
                        />
                        <label htmlFor='push-important' className='ml-3 block text-sm font-medium text-gray-700'>
                          Only Important
                        </label>
                      </div>

                      <div className='flex items-center'>
                        <input
                          checked={pushNotification === 'nothing'}
                          onChange={(e) => setPushNotification(e.target.value)}
                          value='nothing'
                          id='push-nothing'
                          name='push-notifications'
                          type='radio'
                          className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300'
                        />
                        <label htmlFor='push-nothing' className='ml-3 block text-sm font-medium text-gray-700'>
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className='px-4 py-3 bg-gray-200 text-right sm:px-6'>
                  <button
                    type='submit'
                    className={` inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-2xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}>
                    <CgSpinnerTwo className={`${loading ? 'animate-spin block' : 'hidden'}  h-5 w-5 mr-3  `} />
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

export default Notification;
