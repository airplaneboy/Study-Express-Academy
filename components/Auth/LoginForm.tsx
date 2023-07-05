'use client';
import { useRef, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Input from '@/components/Auth/Input';
import Button from '@/components/Auth/Button';
import RememberMe from '@/components/Auth/RememberMe';
import Link from 'next/link';
import Error from './Error';

const LoginForm = () => {
  const router = useRouter();
  const [result, setResult] = useState<any>('initial');

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signInUser = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/',
    });

    setResult(res);

    if (!res?.error) router.back();
  };

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signInUser();
  }

  return (
    <>
      {result?.error && <Error content='Incorrect username and password'></Error>}

      <form onSubmit={submitHandler} className=' max-md:px-4 '>
        <div className='space-y-3'>
          <Input
            autoComplete='username'
            id='email'
            label='Email Address or Username'
            name='email'
            placeholder='Email Address or Username'
            type='email'
            inputRef={emailRef}
          />
          <Input
            autoComplete='current-password'
            id='password'
            label='Password'
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
