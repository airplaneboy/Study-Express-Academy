import LoginForm from '@/components/Auth/LoginForm';
import SignInOptions from '@/components/Auth/SignInOptions';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 '>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <Image className='h-6 w-auto' src='/assets/logo.svg' alt='logo' width={183} height={24} />
            <span className='mt-3 text-4xl font-black text-gray-900  block  capitalize'>Sign in to your account</span>
            <span className='mt-2 text-sm text-gray-600 block'>
              or{' '}
              <Link href='/auth/register' className='font-medium text-blue-600 hover:text-blue-500'>
                create a new account
              </Link>
            </span>
          </div>

          <div className='mt-3'>
            <SignInOptions />
          </div>
          <div className='mt-2'>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
