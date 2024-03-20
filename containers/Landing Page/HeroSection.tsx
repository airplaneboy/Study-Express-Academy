//@ts-ignore
import cx from 'clsx/lite';
import { HiChevronRight } from 'react-icons/hi2';
import { WavyBackground } from '@/components/ui/wavy-background';
import HeadingTypewritter from '@/components/gsap/heading-typewritter';

const HeroSection = () => {
  const sectionContentStyle = 'w-full h-full flex flex-col items-center justify-center gap-10 z-[1]';
  const ctaButton = 'capitalize border px-8 py-4 rounded-2xl items-center justify-center';

  const words = [' Now', ' Here', ' With Us', '...', '.'];

  return (
    <WavyBackground blur={0} containerClassName='relative' className='z-[0] static' backgroundFill='#fff'>
      <section className='w-full bg-dot-black/[0.2] max-w-7xl mx-auto flex flex-row justify-between items-center min-h-screen px-24'>
        {/* <div className='inset-0 absolute w-full h-full bg-[linear-gradient(0deg,_rgba(52,50,44,0.7539390756302521)_0%,_rgba(46,100,97,0)_30%,_rgba(34,193,195,0)_100%)]' /> */}
        <div className='h-full w-full min-w-screen z-0 absolute pointer-events-none left-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
        <div className={sectionContentStyle}>
          <h1 className='text-[80px] leading-[1] font-extrabold bg-gradient-to-r from-teal-500 via-purple-500 to-blue-600 bg-clip-text text-transparent pb-3 min-w-[580px]'>
            Your Learning Adventure Begins
            <HeadingTypewritter words={words} />
          </h1>
          <p className='leading-8 text-lg font-medium text-gray-600'>
            Revolutionize the way you learn with our interactive and adaptive platform. Elevate your skills, broaden
            your horizons, and embark on a lifelong journey of discovery.
          </p>
          <div className='flex w-full gap-5'>
            <button
              className={cx(
                ctaButton,
                'bg-black text-white group flex gap-10 align-baseline hover:border-gray-500 hover:text-gray-500 hover:bg-gray-50 transition-all hover:shadow-lg hover:shadow-gray-300'
              )}>
              Start Learning Now
            </button>
            <button
              className={cx(
                ctaButton,
                'bg-white group flex gap-10 align-baseline hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 transition-all hover:shadow-lg hover:shadow-blue-300'
              )}>
              Explore Your Courses <HiChevronRight className='group-hover:text-blue-500 text-black' size={18} />
            </button>
          </div>
        </div>

        <div className='pointer-events-none w-full h-full flex items-center justify-center z-10'>
          <video style={{ scale: 2 }} loop autoPlay muted width='720' height='720' preload='auto'>
            <source src='/parallax/video.webm' type='video/webm' />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </WavyBackground>
  );
};

export default HeroSection;
