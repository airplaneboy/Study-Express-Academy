import Image from 'next/image';
import Link from 'next/link';
import SignIn from '@/components/Auth/SignIn';
import { FcGoogle } from 'react-icons/fc';
import RegisterForm from '@/components/Auth/RegisterForm';
import { RiAppleFill } from 'react-icons/ri';
import SignInOptions from '@/components/Auth/SignInOptions';

export default function Register() {
  return (
    <>
      <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 '>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <Image className='h-6 w-auto mb-10' src='/assets/logo.svg' alt='Workflow' width={183} height={24} />
            <span className='mt-6 text-4xl font-extrabold text-gray-900 font-inter'>Create Account</span>
            <span className='mt-2 text-sm text-gray-600'>
              {' '}
              or <br />
              <Link href='/auth/login' className='font-medium text-blue-600 hover:text-blue-500'>
                Login if you already have an existing account
              </Link>
            </span>
          </div>

          <div className='mt-3'>
            <SignInOptions />
          </div>
          <div className='mt-2'>
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
}
