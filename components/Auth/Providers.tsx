'use client';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useState } from 'react';
interface IProvidersOptions {
  option?: string;
  providerName: string;
  providerImage: any;
}

const Providers = ({ option = '#', providerImage, providerName }: IProvidersOptions) => {
  const [loading, setLoading] = useState(false);

  const googleSignIn = async () => {
    setLoading(true);
    await toast.promise(signIn('google', { callbackUrl: '/', redirect: false }), {
      error: 'An error occurred',
      loading: 'Authenticating with google...',
      success: 'Redirecting to google...',
    });
  };

  const facebookSignIn = async () => {
    setLoading(true);
    await toast.promise(signIn('facebook', { callbackUrl: '/', redirect: false }), {
      error: 'An error occurred',
      loading: 'Authenticating with facebook...',
      success: 'Redirecting to facebook...',
    });
  };

  const appleSignIn = async () => {
    setLoading(true);
    await toast.promise(signIn('apple', { callbackUrl: '/', redirect: false }), {
      error: 'An error occurred',
      loading: 'Authenticating with apple...',
      success: 'Redirecting to apple...',
    });
  };

  const githubSignIn = async () => {
    setLoading(true);
    await toast.promise(signIn('github', { callbackUrl: '/', redirect: false }), {
      error: 'An error occurred',
      loading: 'Authenticating with github...',
      success: 'Redirecting to github...',
    });
    setLoading(false);
  };

  const signInOptions: any = {
    google: googleSignIn,
    facebook: facebookSignIn,
    apple: appleSignIn,
    github: githubSignIn,
  };
  return (
    <>
      {loading && <div className='min-w-full h-full bg-gray-700 opacity-30 absolute top-0 left-0 z-50' />}

      <button
        onClick={signInOptions[option]}
        className=' w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
      >
        {providerImage}
        <span className='sr-only'>{providerName}</span>
      </button>
    </>
  );
};

export default Providers;
