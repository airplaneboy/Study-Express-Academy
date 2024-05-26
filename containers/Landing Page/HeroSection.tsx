//@ts-ignore
import cx from 'clsx/lite';
import { HiChevronRight } from 'react-icons/hi2';
import { WavyBackground } from '@/components/ui/wavy-background';
import HeadingTypewritter from '@/components/gsap/heading-typewritter';
import Link from 'next/link';
import HeroIntersectionVideo from './HeroIntersectionComponent';
// import IntersectionComponent from '@/components/IntersectionComponent';

const HeroSection = () => {
  const sectionContentStyle = 'w-full h-full flex flex-col items-center justify-center gap-10 z-[1] pt-24 lg:pt-12';
  const ctaButton =
    'capitalize border px-4 lg:px-8 py-2 lg:py-4 rounded-2xl items-center justify-center font-bold block text-xs lg:text-base max-lg:flex-1';

  const words = [' Now', ' Here', ' With Us', '...', '.'];

  return (
    <WavyBackground blur={0} containerClassName='relative' className='z-[0] static' backgroundFill='#fff'>
      <section className='w-full bg-dot-black/[0.3] max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center min-h-screen px-6 md:px-10 lg:px-24'>
        {/* <div className='inset-0 absolute w-full h-full bg-[linear-gradient(0deg,_rgba(52,50,44,0.7539390756302521)_0%,_rgba(46,100,97,0)_30%,_rgba(34,193,195,0)_100%)]' /> */}
        <div className='inset-0 h-full w-full min-w-screen z-0 absolute pointer-events-none left-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
        <div className={sectionContentStyle}>
          <h1 className='min-h-[8rem] text-center lg:text-left text-5xl lg:text-[80px] leading-[1] font-extrabold bg-gradient-to-r from-teal-500 via-purple-500 to-blue-600 bg-clip-text text-transparent pb-3 lg:min-w-[580px]'>
            Your Learning Adventure Begins
            <HeadingTypewritter words={words} />
          </h1>
          <p className='leading-8 lg:text-lg font-bold lg:font-medium text-gray-600 text-center lg:text-left'>
            Revolutionize the way you learn with our interactive and adaptive platform. Elevate your skills, broaden
            your horizons, and embark on a lifelong journey of discovery.
          </p>
          <div className='flex w-full gap-5'>
            <Link
              href='/auth/login'
              className={cx(
                ctaButton,
                'bg-blue-600 text-white hover:bg-gradient-to-r from-blue-400 via-fuchsia-500 to-orange-300 group flex gap-10 align-baseline transition-colors duration-100 border-none'
              )}>
              Start Learning Now
            </Link>
            <Link
              href='/auth/login'
              className={cx(
                ctaButton,
                'group flex gap-5 lg:gap-10 align-baseline hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 transition-colors text-blue-500 duration-100 bg-white'
              )}>
              Explore Your Courses{' '}
              <HiChevronRight className='group-hover:text-blue-500 text-blue-500 hidden lg:block' size={18} />
            </Link>
          </div>
        </div>

        <div className='pointer-events-none w-full h-full flex items-center justify-center z-10'>
          {/* <video playsInline style={{ scale: 2 }} loop autoPlay muted width='720' height='720' preload='auto'>
            <source src='/parallax/video.webm' type='video/webm' />
            Your browser does not support the video tag.
          </video> */}

          <HeroIntersectionVideo
            className='pb-24 lg:pb-0'
            src='/parallax/video.webm'
            playsInline
            style={{ scale: 2 }}
            loop
            autoPlay
            muted
            width='720'
            height='720'
            preload='auto'
            fallbackSrc='/parallax/video_fallback.webp'
          />
        </div>
      </section>
    </WavyBackground>
  );
  {
  }
};

export default HeroSection;
