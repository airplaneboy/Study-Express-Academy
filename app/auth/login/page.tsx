import LoginForm from '@/components/Auth/LoginForm';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { RiAppleFill } from 'react-icons/ri';
import Providers from '@/components/Auth/Providers';

export default function Login() {
  return (
    <>
      <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 '>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <Image className='h-12 w-auto' src='/assets/logo.svg' alt='Workflow' width={53} height={48} />
            <h2 className='mt-6 text-4xl font-extrabold text-gray-900 font-inter '>Sign in to your account</h2>
            <p className='mt-2 text-sm text-gray-600'>
              Or{' '}
              <Link href='/auth/register' className='font-medium text-indigo-600 hover:text-indigo-500'>
                create a new account
              </Link>
            </p>
          </div>

          <div className='mt-8'>
            <div>
              <div>
                <p className='text-sm font-medium text-gray-700'>Sign in with</p>

                <div className='mt-1 grid grid-cols-3 gap-3'>
                  <Providers
                    providerImage={
                      <svg className='w-5 h-5' aria-hidden='true' fill='#0269e3' viewBox='0 0 20 20'>
                        <path
                          fillRule='evenodd'
                          d='M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z'
                          clipRule='evenodd'
                        />
                      </svg>
                    }
                    option='#'
                    providerName='Sign in with Facebook '
                  />
                  <Providers
                    providerImage={
                      // <svg className='w-5 h-5' aria-hidden='true' fill='#1b9aef' viewBox='0 0 20 20'>
                      //   <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                      // </svg>
                      <RiAppleFill size='1.25rem' title='apple-icon' />
                    }
                    providerName='Sign in with Apple'
                    option='#'
                  />

                  <Providers
                    providerImage={<FcGoogle size='1.25rem' title='google-icon' />}
                    providerName='Sign in with Google'
                    option='google'
                  />
                </div>
              </div>

              <div className='mt-6 relative'>
                <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-2 bg-white text-gray-500'>Or continue with</span>
                </div>
              </div>
            </div>

            <div className='mt-6'>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
