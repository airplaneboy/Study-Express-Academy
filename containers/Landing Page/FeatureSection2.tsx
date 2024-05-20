import { cn } from '@/lib/utils';
import IntersectionVideo from './IntersectionVideoComponent';

const FeatureSection2 = () => {
  const items: string | undefined =
    'text-center lg:text-left flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-20';
  return (
    <>
      <div className='border-t-2 border-gray-300 border-dashed absolute w-full' />
      <section className=' py-32 w-full flex flex-col items-center justify-between gap-40 lg:gap-52 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto'>
        <div className={items}>
          {/* <video
            playsInline
            className='shadow-lg border-t shadow-gray-400 rounded-2xl w-full mr-[2px] border-0 overflow-hidden'
            loop
            autoPlay
            muted
            preload='auto'>
            <source src='/assets/Streamlined-Test-Prep.webm' type='video/webm' />
            Your browser does not support the video tag.
          </video> */}
          <IntersectionVideo
            src='/assets/Streamlined-Test-Prep.webm'
            playsInline
            className='shadow-lg border-t shadow-gray-400 rounded-2xl w-full mr-[2px] border-0 overflow-hidden'
            loop
            autoPlay
            muted
            preload='auto'
          />
          <div className='w-full flex flex-col justify-center gap-5'>
            <h2 className='text-2xl leading-[1] font-extrabold text-gray-600 tracking-tight'>
              Streamlined Test Preparation
            </h2>
            <p className='leading-6 text-base font-medium text-gray-500 tracking-wide sm:tracking-normal'>
              With our straightforward resources, designed to adapt your level of understanding. You&apos;ll gain access
              to practice tests, question banks, video tutorials, and exam strategies to help you prepare for test day.
            </p>
          </div>
        </div>

        <div className={cn(items, 'max-lg:!flex-col')}>
          <div className='w-full flex flex-col justify-center gap-5'>
            <h1 className='text-2xl leading-[1] font-extrabold text-gray-600 tracking-tight'>
              Personalized Dashboard and Progress Tracking
            </h1>
            <p className='leading-6 text-base font-medium text-gray-500 tracking-wide sm:tracking-normal'>
              It&apos;s easy for you to keep track of how you&apos;re across your courses. Our dashboard keeps you
              organized and motivated, allowing you to see where you need to focus and tweak your study plan to nail
              them.
            </p>
          </div>
          {/* <video
            playsInline
            className='shadow-lg border-t shadow-gray-400 rounded-2xl w-full mr-[2px] border-0 overflow-hidden'
            loop
            autoPlay
            muted
            preload='auto'>
            <source src='/assets/Personalized-Dashboard.webm' type='video/webm' />
            Your browser does not support the video tag.
          </video> */}
          <IntersectionVideo
            src='/assets/Personalized-Dashboard.webm'
            playsInline
            className='shadow-lg border-t shadow-gray-400 rounded-2xl w-full mr-[2px] border-0 overflow-hidden'
            loop
            autoPlay
            muted
            preload='auto'
          />
        </div>

        <div className={items}>
          {/* <video
            playsInline
            className='shadow-lg border-t shadow-gray-400 rounded-2xl w-full mr-[2px] border-0 overflow-hidden'
            loop
            autoPlay
            muted
            preload='auto'>
            <source src='/assets/Analytics.webm' type='video/webm' />
            Your browser does not support the video tag.
          </video> */}
          <IntersectionVideo
            src='/assets/Analytics.webm'
            playsInline
            className='shadow-lg border-t shadow-gray-400 rounded-2xl w-full mr-[2px] border-0 overflow-hidden'
            loop
            autoPlay
            muted
            preload='auto'
          />
          <div className='w-full flex flex-col justify-center gap-5'>
            <h1 className='text-2xl leading-[1] font-extrabold text-gray-600 tracking-tight'>
              Comprehensive Test Analysis
            </h1>
            <p className='leading-6 text-base font-medium text-gray-500 tracking-wide sm:tracking-normal'>
              Our test overview and results analysis break down your performance so you can see your performance. Our
              graphs make it easy to spot trends and figure out where to focus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection2;
