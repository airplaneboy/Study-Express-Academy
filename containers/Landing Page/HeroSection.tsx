//@ts-ignore
import cx from 'clsx/lite';
import { HiChevronRight } from 'react-icons/hi2';
import { WavyBackground } from '@/components/ui/wavy-background';
import HeadingTypewritter from '@/components/gsap/heading-typewritter';
import Link from 'next/link';
// import dynamic from 'next/dynamic';
import IntersectionVideo from './IntersectionVideoComponent';
import IntersectionComponent from '@/components/IntersectionComponent';
// const IntersectionVideo = dynamic(() => import('./IntersectionVideoComponent'), { ssr: false });

const HeroSection = () => {
  const sectionContentStyle = 'w-full h-full flex flex-col items-center justify-center gap-10 z-[1]';
  const ctaButton = 'capitalize border px-8 py-4 rounded-2xl items-center justify-center font-bold block';

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
                'group flex gap-10 align-baseline hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 transition-colors text-blue-500 duration-100 bg-white'
              )}>
              Explore Your Courses <HiChevronRight className='group-hover:text-blue-500 text-blue-500' size={18} />
            </Link>
          </div>
        </div>

        <div className='pointer-events-none w-full h-full flex items-center justify-center z-10'>
          {/* <video playsInline style={{ scale: 2 }} loop autoPlay muted width='720' height='720' preload='auto'>
            <source src='/parallax/video.webm' type='video/webm' />
            Your browser does not support the video tag.
          </video> */}

          <IntersectionComponent>
            <video
              src='/parallax/video.webm'
              playsInline
              style={{ scale: 2 }}
              loop
              autoPlay
              muted
              width='720'
              height='720'
              preload='auto'
            />
          </IntersectionComponent>
        </div>
      </section>
    </WavyBackground>
  );
};

export default HeroSection;
