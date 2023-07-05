import React from 'react';
import Link from 'next/link';

interface IProvidersOptions {
  href?: string;
  providerName: string;
  providerImage: any;
}
const Providers = ({ href = '#', providerImage, providerName }: IProvidersOptions) => {
  return (
    <Link
      href={href}
      className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
    >
      {providerImage}
      <span className='sr-only'>{providerName}</span>
    </Link>
  );
};

export default Providers;
