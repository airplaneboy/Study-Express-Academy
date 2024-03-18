//@ts-ignore
import cx from 'clsx/lite';
import { HiChevronRight } from 'react-icons/hi2';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { Button } from '@/components/ui/moving-border';

const CTASection = () => {
  const ctaButton =
    'z-10 capitalize border border-white/30 px-8 py-4 rounded-2xl items-center justify-center font-bold pointer-events-auto';

  return (
    <BackgroundGradientAnimation containerClassName='max-h-screen'>
      <section className='pointer-events-none z-10 absolute max-w-7xl mx-auto flex flex-row justify-center items-center min-h-screen px-24 '>
        {/* <div className='inset-0 absolute w-full h-full bg-[linear-gradient(0deg,_rgba(52,50,44,0.7539390756302521)_0%,_rgba(46,100,97,0)_30%,_rgba(34,193,195,0)_100%)]' /> */}
        <div className='w-full h-full flex flex-col items-center justify-center gap-10 text-center bg-clip-text text-transparent bg-gradient-to-b from-white/80 to-white/20'>
          <h1 className='text-[80px] leading-[1] font-extrabold'>Start Your Learning Adventure Today</h1>
          {/* <p className='leading-8 text-lg font-medium text-gray-600'> */}
          <p className='leading-8 text-lg font-medium text-gray-200/70'>
            Whether you&apos;re a math enthusiast, a science fanatic, or an avid reader eager to explore the worlds of
            literature and the arts, our courses are here to support you on an exciting learning journey. Take the first
            step toward mastering new skills and shaping your intellectual adventure!
          </p>
          <div className='flex w-full gap-5 items-center justify-center '>
            {/* <button
              className={cx(
                ctaButton,
                'bg-black/50 text-white/80 group flex gap-10 align-baseline hover:border-gray-500 hover:text-gray-500 hover:bg-gray-50/80 transition-all hover:shadow-lg hover:shadow-gray-300'
              )}>
              Start Learning Now
            </button>
            <button
              className={cx(
                ctaButton,
                'text-white group flex gap-10 align-baseline hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50/80 transition-all hover:shadow-lg hover:shadow-blue-300'
              )}>
              Explore Your Courses <HiChevronRight className='group-hover:text-blue-500 text-white' size={18} />
            </button> */}

            <Button
              as='button'
              containerClassName='w-full max-w-xs h-auto'
              className={cx(
                ctaButton,
                'bg-black/50 text-white group flex gap-10 align-baseline hover:text-blue-500 transition-colors '
              )}>
              Start Learning Now
            </Button>

            <Button
              as='button'
              containerClassName='w-full  max-w-xs h-auto'
              className={cx(
                ctaButton,
                'text-white group flex gap-10 align-baseline hover:text-blue-500 transition-colors '
              )}>
              Explore Your Courses <HiChevronRight className='group-hover:text-blue-500 text-white' size={18} />
            </Button>
          </div>
        </div>
      </section>
    </BackgroundGradientAnimation>
  );
};

export default CTASection;
