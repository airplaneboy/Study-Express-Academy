'use client';
import MoonLoader from 'react-spinners/MoonLoader';

export default function Loading({ size }: { size?: number }) {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <MoonLoader color='blue' size={size ? size : 200} />
    </div>
  );
}
