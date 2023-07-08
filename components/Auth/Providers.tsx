'use client';
import { signIn } from 'next-auth/react';
interface IProvidersOptions {
  option?: string;
  providerName: string;
  providerImage: any;
}

const googleSignIn = async () => {
  console.log('sign in was called');

  const res = await signIn('google', { callbackUrl: '/', redirect: true });
  console.log(res);
};
const facebookSignIn = async () => {
  console.log('sign in was called');

  const res = await signIn('facebook', { callbackUrl: '/', redirect: false });
  console.log(res);
};
const appleSignIn = async () => {
  console.log('sign in was called');

  const res = await signIn('apple', { callbackUrl: '/', redirect: false });
  console.log(res);
};

const signInOptions: any = {
  google: googleSignIn,
  facebook: facebookSignIn,
  apple: appleSignIn,
};

const Providers = ({ option = '#', providerImage, providerName }: IProvidersOptions) => {
  return (
    <button
      onClick={signInOptions[option]}
      className=' w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
    >
      {providerImage}
      <span className='sr-only'>{providerName}</span>
    </button>
  );
};

export default Providers;
