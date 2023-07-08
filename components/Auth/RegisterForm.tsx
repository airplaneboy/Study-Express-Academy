'use client';
import { useRef, useState } from 'react';
import isStrongPassword from 'validator/lib/isStrongPassword';
import trim from 'validator/lib/trim';
import Input from '@/components/Auth/Input';
import Button from '@/components/Auth/Button';
import RememberMe from '@/components/Auth/RememberMe';
import Link from 'next/link';
import registerUser from '../../utils/RegisterUser';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null);
  const router = useRouter();

  const passwordColors = () => {
    if (passwordMatch === null) return { validColor: '', invalidColor: '' };

    return {
      validColor: ' focus:ring-green-500 focus:border-green-500 border-green-500',
      invalidColor: ' focus:ring-red-500 focus:border-red-500  border-red-500',
    };
  };

  const isPasswordMatch = () => {
    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) return setPasswordMatch(false);
    return setPasswordMatch(true);
  };

  const isPasswordValid = () => {
    if (passwordRef.current?.value) {
      try {
        const password = trim(passwordRef.current?.value!);
        return isStrongPassword(password, {
          //TODO: Don't forget to uncomment this out
          // minLength: 5,
          // minLowercase: 0,
          // minUppercase: 0,
          // minSymbols: 0,
          // minNumbers: 0,
          minLength: 8,
          minLowercase: 1,
          minNumbers: 1,
          minUppercase: 0,
          minSymbols: 0,
        });
      } catch (error: any) {
        console.log(error?.message);
      }
    }
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!passwordMatch) return toast.error("Passwords don't match");
    if (!isPasswordValid())
      return toast.error('Password must be at least 8 characters long, and must contain a lowercase and a number');

    const userData = {
      firstName: firstNameRef.current?.value,
      lastName: firstNameRef.current?.value,
      email: emailRef.current?.value,
      password: trim(passwordRef.current?.value!),
    };

    await toast.promise(registerUser(userData), {
      error: 'An error occurred. Try again',
      loading: 'Signing you up...',
      success: 'Sign up successful. Welcome!',
    });

    router.push('/');
  };

  return (
    <>
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
            className={passwordMatch ? passwordColors().validColor : passwordColors().invalidColor}
            onChange={isPasswordMatch}
          />

          <Input
            autoComplete='off'
            id='confirm-password'
            inputRef={confirmPasswordRef}
            name='password'
            placeholder='Confirm Password'
            type='password'
            className={passwordMatch ? passwordColors().validColor : passwordColors().invalidColor}
            onChange={isPasswordMatch}
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
    </>
  );
};

export default RegisterForm;
