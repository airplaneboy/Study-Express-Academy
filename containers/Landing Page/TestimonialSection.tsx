'use client';
import { RiDoubleQuotesR } from 'react-icons/ri';
import Image from 'next/image';
import Profile1 from '@/public/assets/profile-3 shadow.webp';
import { useGSAP } from '@gsap/react';
// import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { cormorantUpright } from '@/app/font';

const TestimonialSection = () => {
  //@ts-ignore
  let gsap: any;
  import('gsap').then((mod) => (gsap = mod.gsap));
  useGSAP(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#testimonial-section', {
      scrollTrigger: {
        anticipatePin: 1,
        trigger: '#testimonial-section',
        // markers: true,
        pin: true,
        start: 'top top',
        end: 'bottom top',
        pinSpacing: true,
      },
    });
    gsap.from('#profile-1-image', {
      x: -100,
      opacity: 0.8,
      scale: 0.9,
      ease: 'none',
      duration: 2,
      scrollTrigger: {
        trigger: '#testimonial-section',
        scrub: true,
        end: 'center center',
        start: 'top bottom',
        // markers: true,
      },
    });

    gsap.to('.quote', {
      repeat: -1,
      yoyo: true,
      yoyoEase: 'none',
      duration: 1,
      scale: 1.05,
      // rotation: 10,
      scrollTrigger: { trigger: '#testimonial-section', start: 'top top', end: 'bottom center' },
    });

    gsap.to('#typewriter', {
      ease: 'sine.out',
      scrollTrigger: {
        trigger: '#testimonial-section',
        start: 'top center',
        end: 'bottom top',
        scrub: false,
        toggleActions: 'play pause resume reset',
      },
      text: {
        value:
          'I&apos;ve learned a ton in such a short amount of time. The courses are top-notch quality, and I would definitely recommend this experience to anyone wanting to grow their knowledge and skills.',
        type: 'diff',
        speed: 2,
        // delimiter: ' ',
        // oldClass: '!text-right block',
        // rtl: true,
        // newClass: 'text-blue-300 z-50',
      },
      onUpdate: () => {
        cursorTimeline.restart();
        // cursorTimeline.pause();
      },
      onComplete: () => {
        cursorTimeline.play();
      },
      duration: 30,
    });

    let cursorTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
    cursorTimeline.to('#cursor', { opacity: 1, duration: 0 }).to('#cursor', { opacity: 0, duration: 0, delay: 0.8 });
  });

  return (
    <section
      id='testimonial-section'
      className='relative max-w-7xl mx-auto bg-dot-gray-400 flex flex-col lg:flex-row justify-between items-center lg:min-h-screen px-6 md:px-12 lg:px-32 gap-10 py-12 lg:py-32 bg-white'>
      <div className='h-full w-full min-w-screen z-0 absolute pointer-events-none left-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />

      <Image
        id='profile-1-image'
        priority
        quality={100}
        className='bg-transparent saturate-150 object-contain z-[1] rounded-r-2xl shadow-lg shadow-gray-300 overflow-hidden pointer-events-none absolute -left-20 sm:-left-36 lg:-left-32 top-1/2 !-translate-y-1/2 w-[50vw] lg:w-fit lg:h-[80vh]'
        src={Profile1}
        alt='smiling man portrait with blurred background'
      />

      <div
        className={`bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 overflow-hidden p-[2px] relative ${cormorantUpright.className} rounded-2xl relative lg:left-20 w-full flex flex-col justify-center gap-5`}>
        <div className=' h-full w-full min-w-screen absolute pointer-events-none inset-0 dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] !bg-white bg-gradient-to-r from-green-50 via-blue-50 to-purple-50' />
        <div className='rounded-2xl shadow-inner shadow-purple-500 px-4 sm:px-10 md:px-20 py-10 bg-white'>
          <p
            className={
              'relative z-[1] min-h-[12rem] lg:min-h-[16rem] min-w-[60vw] tracking-tight leading-tight text-xl sm:text-3xl lg:text-5xl word-spacing-1 font-semibold text-gray-700 select-none pl-10'
            }>
            <span id='typewriter' className='absolute text-black/20'>
              I&apos;ve learned a ton in such a short amount of time. The courses are top-notch quality, and I would
              definitely recommend this experience to anyone wanting to grow their knowledge and skills.
            </span>
            <span
              id='typewriter'
              className={
                'z-50 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-fuchsia-500 to-rose-400'
              }
            />
            <span id='cursor' className='text-2xl md:text-4xl lg:text-6xl absolute text-blue-500'>
              |
            </span>
          </p>

          <div className='flex flex-col gap-2 w-full items-end z-[1] select-none'>
            <span className='text-xl text-blue-700 font-bold z-10'>Micheal D.</span>
            <span className='text-md text-gray-600 font-bold'>Grade 9 Student</span>
          </div>
          <RiDoubleQuotesR size={250} className='rotate-12 quote absolute right-0 bottom-0 text-blue-200 opacity-50' />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
