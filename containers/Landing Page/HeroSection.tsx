//@ts-ignore
import cx from 'clsx/lite';
import { HiChevronRight } from 'react-icons/hi2';

const HeroSection = () => {
  const sectionContentStyle = 'w-full h-full flex flex-col items-center justify-center gap-10';
  const ctaButton = 'capitalize border px-4 py-2 rounded-2xl items-center justify-center';
  return (
    <section className='flex flex-row justify-between items-center h-screen px-24'>
      <div className={sectionContentStyle}>
        <h1 className='text-[80px] leading-[1] font-extrabold'>Your Learning Adventure Begins Here</h1>
        <p className='text-lg font-medium text-gray-600'>
          Revolutionize the way you learn with our interactive and adaptive platform. Elevate your skills, broaden your
          horizons, and embark on a lifelong journey of discovery.
        </p>
        <div className='flex w-full gap-5'>
          <button className={cx(ctaButton, 'bg-black text-white')}>Start Learning Now</button>
          <button className={cx(ctaButton, 'flex gap-10 align-baseline')}>
            Explore Your Courses <HiChevronRight size={18} color='black' />
          </button>
        </div>
      </div>
      <div className='w-full h-full bg-green-500'>content image</div>
    </section>
  );
};

export default HeroSection;
