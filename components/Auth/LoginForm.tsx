'use client';
import { useRef, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Input from '@/components/Auth/Input';
import Button from '@/components/Auth/Button';
import RememberMe from '@/components/Auth/RememberMe';
import Link from 'next/link';
import { HiEye, HiEyeSlash } from 'react-icons/hi2';
// import ShowError from './Error';
import trim from 'validator/lib/trim';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const router = useRouter();
  // const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const emailOrUsernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const signInUser = async () => {
    const emailOrUsername = emailOrUsernameRef.current?.value;
    const password = trim(passwordRef.current?.value!);

    const res = await signIn('credentials', {
      email: emailOrUsername,
      username: emailOrUsername,
      password,
      redirect: false,
      callbackUrl: '/',
    });

    if (res?.error) return toast.error("Username or Email, and password don't match");

    // if (document.referrer == 'http://localhost:3000/') return router.back();
    toast.success('Login successful', { duration: 3000 });
    return router.push('/');
  };

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();

    // setContent('');

    await toast.promise(
      signInUser(),
      {
        success: null,
        loading: 'Verifying credentials...',
        error: 'An Error occurred!',
      },
      { success: { duration: 50 } }
    );
    setLoading(false);
  }

  return (
    <>
      {/* {content && <ShowError content={content}></ShowError>} */}
      <form onSubmit={submitHandler} className=' max-md:px-4 '>
        {loading && <div className='min-w-full h-full bg-gray-700 opacity-30 absolute top-0 left-0' />}

        <div className='space-y-3'>
          <Input
            autoComplete='username'
            id='username'
            // label='Email Address or Username'
            name='username'
            placeholder='Email Address or Username'
            type='text'
            inputRef={emailOrUsernameRef}
          />
          <div className='w-full flex items-center mt-2 relative'>
            <Input
              autoComplete='current-password'
              id='password'
              // label='Password'
              name='password'
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
              inputRef={passwordRef}
              className=' input_password border-transparent focus:ring-indigo-500 focus:border-indigo-500 '
            />
            <button
              className=' right-5 flex items-center justify-center absolute'
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <HiEyeSlash size={20} className='text-gray-700 bg-gray-200' />
              ) : (
                <HiEye size={20} className='text-gray-700 bg-gray-200' />
              )}
            </button>
          </div>
        </div>

        <div className='space-y-3 mt-10'>
          <div className='flex items-center justify-between max-sm:flex-col gap-3'>
            <RememberMe />

            <div className='text-sm'>
              <Link href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                Forgot your password?
              </Link>
            </div>
          </div>

          <Button value='Sign In' />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
