'use client';
import { useRef, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Input from '@/components/Auth/Input';
import Button from '@/components/Auth/Button';
import RememberMe from '@/components/Auth/RememberMe';
import Link from 'next/link';
import ShowError from './Error';
import trim from 'validator/lib/trim';
import toast, { Toaster } from 'react-hot-toast';

const LoginForm = () => {
  const router = useRouter();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const emailOrUsernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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

    if (res?.error) return setContent("Username or Email, and password don't match");

    // if (document.referrer == 'http://localhost:3000/') return router.back();

    return router.push('/');
  };

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();

    setContent('');
    await signInUser();
    setLoading(false);
  }
  return (
    <>
      {content && <ShowError content={content}></ShowError>}
      <form onSubmit={submitHandler} className=' max-md:px-4 '>
        {loading && <div className='min-w-full h-full bg-gray-700 opacity-30 absolute top-0 left-0'></div>}

        <div className='space-y-3'>
          <Input
            autoComplete='username'
            id='username'
            // label='Email Address or Username'
            name='username'
            placeholder='Email Address or Username'
            type='username'
            inputRef={emailOrUsernameRef}
          />
          <Input
            autoComplete='current-password'
            id='password'
            // label='Password'
            name='password'
            placeholder='Password'
            type='password'
            inputRef={passwordRef}
          />
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
