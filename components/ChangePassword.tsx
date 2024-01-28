'use client';
import { updateUserPassword } from '@/lib/data/user';
import { useState, useEffect } from 'react';
import { CgSpinnerTwo } from 'react-icons/cg';
import { HiEyeSlash, HiEye } from 'react-icons/hi2';
import isStrongPassword from 'validator/lib/isStrongPassword';

const ChangePassword = ({ userId }: { userId: string }) => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isToggled, setIsToggled] = useState({ password: false, newPassword: false, confirmPassword: false });
  const [loading, setLoading] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [isStrong, setIsStrong] = useState<boolean | null>(null);

  useEffect(() => {
    if (newPassword == '') return setPasswordMatch(false);
    setIsStrong(
      isStrongPassword(newPassword, {
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minUppercase: 0,
        minSymbols: 0,
      })
    );
    if (password == '') return setPasswordMatch(false);

    newPassword === confirmNewPassword ? setPasswordMatch(true) : setPasswordMatch(false);
  }, [confirmNewPassword, newPassword, password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordMatch || !isStrong) return;
    setLoading(true);
    try {
      await updateUserPassword({ userId, currentPassword: password, newPassword });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className='mt-10 sm:mt-0'>
      <div className='lg:grid lg:grid-cols-3 lg:gap-6'>
        <div className='md:col-span-1'>
          <div className='px-2 sm:px-0'>
            <span className='text-lg font-medium leading-6 text-gray-900'>Change Account Password</span>
            <span className='mt-1 text-xs sm:text-sm text-gray-600 block'>Ensure your new password is secure.</span>
          </div>
        </div>
        <div className='mt-4 md:col-span-2 lg:mt-0'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className=''>
              <div className='rounded-t-2xl border-x-2 border-t-2 bg-white px-4 py-5 sm:p-6'>
                <div className='col-span-6 sm:col-span-3'>
                  <div className='flex items-center w-full justify-between mb-5'>
                    <label
                      htmlFor='change-password'
                      className={
                        !isStrong && isStrong != null ? 'hidden' : ' w-max block text-base font-medium text-gray-700'
                      }>
                      Change Password
                    </label>
                    <span
                      className={
                        !isStrong && isStrong != null
                          ? 'text-center bg-red-100 text-red-700 rounded-xl text-sm p-2'
                          : 'hidden'
                      }>
                      Password should be have at least <span className='text-blue-500'>8</span> characters, with{' '}
                      <span className='text-blue-500'>1</span> lowercase, and <span className='text-blue-500'>1</span>{' '}
                      number
                    </span>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex items-center relative mb-3'>
                      <input
                        maxLength={100}
                        value={password || ''}
                        onChange={(e) => setPassword(e.target.value)}
                        type={isToggled.password ? 'text' : 'password'}
                        name='change-password'
                        id='change-password'
                        placeholder='Current Password'
                        autoComplete='current-password'
                        className={
                          password != ''
                            ? 'h-max text-gray-700 block w-full rounded-2xl border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm max-sm:py-1'
                            : 'h-max italic text-gray-700 block w-full rounded-2xl border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm max-sm:py-1 '
                        }
                      />
                      <button
                        type='button'
                        onClick={() =>
                          setIsToggled((prev) => {
                            return { ...prev, password: !prev.password };
                          })
                        }
                        className='focus:ring-2 focus:ring-gray-700 right-5 flex items-center justify-center absolute bg-gray-300 hover:bg-gray-600 h-7 w-7 rounded-lg group'>
                        {isToggled.password ? (
                          <HiEye size={20} className=' text-gray-600 group-hover:text-gray-200' />
                        ) : (
                          <HiEyeSlash size={20} className=' text-gray-600 group-hover:text-gray-200  ' />
                        )}
                      </button>
                    </div>

                    <div className='flex items-center relative mb-3'>
                      <input
                        maxLength={100}
                        value={newPassword || ''}
                        onChange={(e) => setNewPassword(e.target.value)}
                        type={isToggled.newPassword ? 'text' : 'password'}
                        name='new-password'
                        id='new-password'
                        placeholder='New Password'
                        autoComplete='new-password'
                        className={
                          newPassword != ''
                            ? passwordMatch && isStrong
                              ? 'bg-green-200 h-max text-green-700 block w-full rounded-2xl border-2 border-green-300 focus:ring-0 focus:border-green-300 sm:text-sm max-sm:py-1'
                              : 'h-max text-gray-700 block w-full rounded-2xl border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm max-sm:py-1'
                            : 'italic text-gray-700 block w-full rounded-2xl border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm max-sm:py-1'
                        }
                      />
                      <button
                        type='button'
                        onClick={() =>
                          setIsToggled((prev) => {
                            return { ...prev, newPassword: !prev.newPassword };
                          })
                        }
                        className={
                          isStrong && passwordMatch
                            ? 'focus:ring-2 focus:ring-green-700 right-5 flex items-center justify-center absolute bg-green-300  h-7 w-7 rounded-lg group hover:border border-green-600'
                            : 'focus:ring-2 focus:ring-gray-700 right-5 flex items-center justify-center absolute bg-gray-300 hover:bg-gray-600 h-7 w-7 rounded-lg group'
                        }>
                        {isToggled.newPassword ? (
                          <HiEye
                            size={20}
                            className={
                              passwordMatch && isStrong
                                ? ' text-green-600 group-hover:text-green-600'
                                : ' text-gray-600 group-hover:text-gray-200'
                            }
                          />
                        ) : (
                          <HiEyeSlash
                            size={20}
                            className={
                              passwordMatch && isStrong
                                ? ' text-green-600 group-hover:text-green-600  '
                                : ' text-gray-600 group-hover:text-gray-200  '
                            }
                          />
                        )}
                      </button>
                    </div>

                    <div className='flex items-center relative mb-3'>
                      <input
                        maxLength={100}
                        value={confirmNewPassword || ''}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        type={isToggled.confirmPassword ? 'text' : 'password'}
                        name='confirm-new-password'
                        id='confirm-new-password'
                        placeholder='Retype New Password'
                        autoComplete='new-password'
                        className={
                          confirmNewPassword != ''
                            ? passwordMatch && isStrong
                              ? 'bg-green-200 h-max text-green-700 block w-full rounded-2xl border-2 border-green-300 focus:ring-0 focus:border-green-300 sm:text-sm max-sm:py-1'
                              : 'h-max text-gray-700 block w-full rounded-2xl border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm max-sm:py-1'
                            : 'italic text-gray-700 block w-full rounded-2xl border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm max-sm:py-1'
                        }
                      />
                      <button
                        type='button'
                        onClick={() =>
                          setIsToggled((prev) => {
                            return { ...prev, confirmPassword: !prev.confirmPassword };
                          })
                        }
                        className={
                          isStrong && passwordMatch
                            ? 'focus:ring-2 focus:ring-green-700 right-5 flex items-center justify-center absolute bg-green-300  h-7 w-7 rounded-lg group hover:border border-green-600'
                            : 'focus:ring-2 focus:ring-gray-700 right-5 flex items-center justify-center absolute bg-gray-300 hover:bg-gray-600 h-7 w-7 rounded-lg group'
                        }>
                        {isToggled.newPassword ? (
                          <HiEye
                            size={20}
                            className={
                              passwordMatch && isStrong
                                ? ' text-green-600 group-hover:text-green-600'
                                : ' text-gray-600 group-hover:text-gray-200'
                            }
                          />
                        ) : (
                          <HiEyeSlash
                            size={20}
                            className={
                              passwordMatch && isStrong
                                ? ' text-green-600 group-hover:text-green-600  '
                                : ' text-gray-600 group-hover:text-gray-200  '
                            }
                          />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=' rounded-b-2xl border-x-2 border-b-2 bg-gray-200 px-4 py-3 text-right sm:px-6'>
              <button
                type='submit'
                disabled={passwordMatch == false || isStrong == false}
                className={
                  passwordMatch && isStrong
                    ? 'inline-flex justify-center rounded-2xl border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                    : 'inline-flex justify-center rounded-2xl border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white cursor-default'
                }>
                <CgSpinnerTwo className={`${loading ? 'animate-spin block' : 'hidden'}  h-5 w-5 mr-3  `} />
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
