'use client';
import { useRef, useState } from 'react';
import isStrongPassword from 'validator/lib/isStrongPassword';
import trim from 'validator/lib/trim';
import Input from '@/components/Auth/Input';
import Button from '@/components/Auth/Button';
// import RememberMe from '@/components/Auth/RememberMe';
// import Link from 'next/link';
import registerUser from '../../utils/RegisterUser';
import toast from 'react-hot-toast';
import { HiEye, HiEyeSlash } from 'react-icons/hi2';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const passwordColors = () => {
    if (passwordMatch === null) return { validColor: '', invalidColor: '' };

    return {
      validColor: ' focus:ring-0 focus:border-green-500 border-green-500 border-2  input_password',
      invalidColor: ' focus:ring-0 focus:border-red-500  border-red-500 border-2 input_password',
    };
  };

  const isPasswordMatch = () => {
    if (confirmPasswordRef.current?.value != '') {
      if (passwordRef.current?.value !== confirmPasswordRef.current?.value) return setPasswordMatch(false);
      return setPasswordMatch(true);
    }
  };

  const isPasswordValid = () => {
    if (passwordRef.current?.value) {
      try {
        const password = trim(passwordRef.current?.value!);
        return isStrongPassword(password, {
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
    setLoading(true);

    if (!passwordMatch) return toast.error("Passwords don't match") && setLoading(false);
    if (!isPasswordValid())
      return (
        toast.error('Password must be at least 8 characters long, and must contain a lowercase and a number') &&
        setLoading(false)
      );

    const userData = {
      firstName: firstNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      email: emailRef.current?.value,
      password: trim(passwordRef.current?.value!),
    };

    try {
      await toast.promise(
        registerUser(userData),
        {
          error: 'An error occurred. Try again',
          loading: 'Signing you up...',
          success: 'Sign up successful. Welcome!',
        },
        { error: { duration: 1 } }
      );
      router.push('/auth/login');
      toast.loading('Please login to continue!');
    } catch (error: any) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      {/* {loading && <div className='min-w-full h-full bg-gray-700 opacity-30 absolute top-0 left-0 z-50' />} */}
      <form onSubmit={submitHandler} className='max-md:px-4 '>
        {loading && <div className='min-w-full h-full bg-gray-700 opacity-30 fixed top-0 left-0 z-50' />}

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

          <div className='w-full flex items-center mt-2 relative'>
            <Input
              autoComplete='off'
              id='password'
              inputRef={passwordRef}
              name='password'
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
              className={passwordMatch ? passwordColors().validColor : passwordColors().invalidColor}
              onChange={isPasswordMatch}
            />
            <button
              type='button'
              className=' right-5 flex items-center justify-center absolute'
              onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (
                <HiEyeSlash size={20} className='text-gray-700' />
              ) : (
                <HiEye size={20} className='text-gray-700' />
              )}
            </button>
          </div>

          <div className='w-full flex items-center mt-2 relative'>
            <Input
              autoComplete='off'
              id='confirm-password'
              inputRef={confirmPasswordRef}
              name='confirm-password'
              placeholder='Confirm Password'
              type={showConfirmPassword ? 'text' : 'password'}
              className={passwordMatch ? passwordColors().validColor : passwordColors().invalidColor}
              onChange={isPasswordMatch}
            />
            <button
              type='button'
              className=' right-5 flex items-center justify-center absolute'
              onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? (
                <HiEyeSlash size={20} className='text-gray-700' />
              ) : (
                <HiEye size={20} className='text-gray-700' />
              )}
            </button>
          </div>
        </div>

        <div className='space-y-3 mt-10'>
          {/* <div className='flex items-center justify-between  max-sm:flex-col gap-3'>
            <RememberMe />

            <div className='text-sm'>
              <Link href='/login' className='font-medium text-blue-600 hover:text-blue-500'>
                already have an account?
              </Link>
            </div>
          </div> */}
          <Button value='Create Account' />
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
