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
            <Image className='h-12 w-auto' src='/assets/logo.svg' alt='Workflow' width={53} height={48} />
            <span className='mt-6 text-4xl font-extrabold text-gray-900 font-inter '>Sign in to your account</span>
            <span className='mt-2 text-sm text-gray-600'>
              Or{' '}
              <Link href='/auth/register' className='font-medium text-indigo-600 hover:text-indigo-500'>
                create a new account
              </Link>
            </span>
          </div>

          <div className='mt-8'>
            <SignInOptions />
          </div>
          <div className='mt-6'>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
