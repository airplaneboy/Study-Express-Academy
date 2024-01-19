import React from 'react';

const Marquee = ({ duration, children }: { duration: string; children: React.ReactNode }) => {
  return (
    <div className='w-full relative'>
      <div
        className={`w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] [--duration:${duration}]`}>
        <ul className='flex items-center justify-evenly [&_li]:mx-8 w-screen animate-marquee'>{children}</ul>

        <ul className='flex items-center justify-evenly [&_li]:mx-8 w-screen animate-marquee aria-hidden="true"'>
          {children}
        </ul>
      </div>
    </div>
  );
};

export default Marquee;

export const BlurSides = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative w-full'>
      {children}
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-transparent to-transparent dark:from-background' />
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-transparent to-transparent dark:from-background' />
    </div>
  );
};

//Make separate component
