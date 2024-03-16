'use client';
//@ts-ignore
import cx from 'clsx/lite';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BenefitSection = () => {
  const ctaButton = 'capitalize border px-4 py-4 rounded-2xl items-center justify-center text-sm';

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();

    tl.to('.benefit-section', {
      scrollTrigger: {
        toggleClass: { targets: '.pin-spacer', className: '!flex-1' },
        trigger: '.benefit-section',
        endTrigger: '#item-4',
        pin: true, // pin the trigger element while active
        pinSpacing: false,
        start: 'center center',
        end: 'bottom top',
        scrub: 1,
        snap: 1,
        markers: false,
      },
    });

    tl.to('#item-1', {
      scrollTrigger: {
        toggleClass: { targets: '.pin-spacer', className: '!flex-auto' },
        trigger: '#item-1',
        scrub: true,
        markers: false,
        pin: true,
      },
    });

    tl.to('#item-2', {
      scrollTrigger: {
        toggleClass: { targets: '.pin-spacer', className: '!flex-auto' },
        trigger: '#item-2',
        scrub: true,
        markers: false,
        pin: true,
      },
    });

    tl.to('#item-3', {
      scrollTrigger: {
        toggleClass: { targets: '.pin-spacer', className: '!flex-auto' },
        trigger: '#item-3',
        scrub: true,
        markers: false,
        pin: true,
      },
    });

    tl.to('#item-4', {
      scrollTrigger: {
        toggleClass: { targets: '.pin-spacer', className: '!flex-auto' },
        trigger: '#item-4',
        scrub: true,
        markers: false,
        pin: true,
        pinSpacing: true,
      },
    });
  });

  return (
    <section
      className={
        'min-h-screen border-t-8 max-w-7xl mx-auto flex flex-row justify-between items-start py-32 px-24 gap-20'
      }>
      <div className='!flex-1 benefit-section w-full h-full flex flex-col items-center justify-center gap-10'>
        <h1 className='text-5xl leading-[1] font-extrabold'>Unlock Your Amazing Potential with Us</h1>
        <p className='leading-8 text-lg font-medium text-gray-800'>
          At Study Express Academy, we&apos;re passionate about making education accessible to everyone, so they can
          reach their fullest potential. Discover the key benefits that set us apart!
        </p>
        <div className='flex w-full gap-5'>
          <button
            className={cx(
              ctaButton,
              'bg-black text-white group flex gap-10 align-baseline hover:border-gray-500 hover:text-gray-500 hover:bg-gray-50 transition-all hover:shadow-lg hover:shadow-gray-300'
            )}>
            Start Your Learning Adventure
          </button>
          <button
            className={cx(
              ctaButton,
              'group flex gap-10 align-baseline hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 transition-all hover:shadow-lg hover:shadow-blue-300'
            )}>
            Unlock Personalized Learning
          </button>
        </div>
      </div>

      <div className='!flex-1 w-full flex flex-col items-center gap-[100vh]'>
        <div id='item-1' className=' z-[4] min-h-screen flex flex-col gap-5 items-center justify-center'>
          <div className='w-full h-32 bg-blue-500 left-2/3 -top-1/4' />
          <div className='flex flex-col gap-3'>
            <span className=' font-bold text-xl tracking-wide'>Free Access to Quality Education</span>
            <p className='text-sm  leading-6'>
              We are excited to help you break down financial barriers. Enjoy free access to a wealth of educational
              resources designed to fuel your intellectual growth.
            </p>
          </div>
        </div>

        <div id='item-2' className='min-h-screen flex flex-col gap-5 items-center justify-center'>
          <div className='w-full h-32 bg-red-500' />
          <div className='flex flex-col gap-3'>
            <span className=' font-bold text-xl tracking-wide'>Diverse Range of Subjects</span>
            <p className='text-sm leading-6'>
              Discover a wide variety of subjects designed to cater to your learning interests. Whether you love
              science, humanities, or technology, we offer a broad selection of courses to spark your curiosity.
            </p>
          </div>
        </div>

        <div id='item-3' className='min-h-screen flex flex-col gap-5 items-center justify-center'>
          <div className='w-full h-32 bg-blue-500' />
          <div className='flex flex-col gap-3'>
            <span className=' font-bold text-xl tracking-wide'>Interactive Learning Experience</span>
            <p className='text-sm leading-6'>
              Discover engaging and interactive learning materials that bring subjects to life! Our platform goes beyond
              traditional teaching methods to create an immersive and enjoyable learning experience for you.
            </p>
          </div>
        </div>

        <div id='item-4' className='min-h-screen flex flex-col gap-5 items-center justify-center'>
          <div className='w-full h-32 bg-red-500' />
          <div className='flex flex-col gap-3'>
            <span className=' font-bold text-xl tracking-wide'>Learn at Your Own Pace</span>
            <p className='text-sm leading-6'>
              Take your time with our lessons at Study Express Academy! We want you to have the flexibility to learn at
              your own pace. Customize your study schedule to suit your lifestyle, and make education seamlessly fit
              into your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
