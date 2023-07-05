'use client';
import { useRef } from 'react';
import Input from '@/components/Auth/Input';
import Button from '@/components/Auth/Button';
import RememberMe from '@/components/Auth/RememberMe';
import Link from 'next/link';

const RegisterForm = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler} className='max-md:px-4 '>
      <div className='space-y-3 '>
        <div className='max-md:space-y-3 w-full md:flex  justify-between gap-5 md:items-center '>
          <Input
            autoComplete='given-name'
            id='first-name'
            inputRef={firstNameRef}
            name='first-name'
            placeholder='First Name'
            type='text'
          />

          <Input
            autoComplete='family-name'
            id='last-name'
            inputRef={lastNameRef}
            name='last-name'
            placeholder='Last Name'
            type='text'
          />
        </div>

        <Input
          autoComplete='email'
          id='email'
          inputRef={emailRef}
          name='email'
          placeholder='Email Address'
          type='email'
        />

        {/* TODO:Make final decision on using username */}
        {/* <Input autoComplete='username'id='username'  inputRef={} name='username' placeholder='Username' type='text'/> */}

        <Input
          autoComplete='off'
          id='password'
          inputRef={passwordRef}
          name='password'
          placeholder='Password'
          type='password'
        />

        <Input
          autoComplete='off'
          id='confirm-password'
          inputRef={confirmPasswordRef}
          name='password'
          placeholder='Confirm Password'
          type='password'
        />
      </div>

      <div className='space-y-3 mt-10'>
        <div className='flex items-center justify-between  max-sm:flex-col gap-3'>
          <RememberMe />

          <div className='text-sm'>
            <Link href='/login' className='font-medium text-indigo-600 hover:text-indigo-500'>
              already have an account?
            </Link>
          </div>
        </div>
        <Button value='Create Account' />
      </div>
    </form>
  );
};

export default RegisterForm;
