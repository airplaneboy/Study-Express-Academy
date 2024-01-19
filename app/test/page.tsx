'use client';

const Page = () => {
  return (
    <div className='w-full relative'>
      <div className='w-[200vw] inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] [--duration:2s]'>
        <ul className='flex items-center justify-evenly [&_li]:mx-8 w-screen animate-marquee'>
          <li>
            <span>Samsung</span>
          </li>
          <li>
            <span>lg</span>
          </li>
          <li>
            <span>toyota</span>
          </li>
          <li>
            <span>mclaren</span>
          </li>
          <li>
            <span>typescript</span>
          </li>
          <li>
            <span>react</span>
          </li>
          <li>
            <span>nest</span>
          </li>
          <li>
            <span>NodeJS</span>
          </li>
        </ul>

        <ul className='flex items-center justify-evenly [&_li]:mx-8 w-screen animate-marquee aria-hidden="true"'>
          <li>
            <span>Samsung</span>
          </li>
          <li>
            <span>lg</span>
          </li>
          <li>
            <span>toyota</span>
          </li>
          <li>
            <span>mclaren</span>
          </li>
          <li>
            <span>typescript</span>
          </li>
          <li>
            <span>react</span>
          </li>
          <li>
            <span>nest</span>
          </li>
          <li>
            <span>NodeJS</span>
          </li>
        </ul>
      </div>
      {/* <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-transparent to-transparent dark:from-background' />
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-transparent to-transparent dark:from-background' /> */}
    </div>
  );
};

export default Page;

//Make separate component
