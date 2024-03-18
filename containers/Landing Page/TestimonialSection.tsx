'use client';
import { RiDoubleQuotesR } from 'react-icons/ri';
import Image from 'next/image';
import Profile1 from '@/public/assets/profile-3.jpg';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { cormorantUpright } from '@/app/font';

const TestimonialSection = () => {
  useGSAP(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#testimonial-section', {
      scrollTrigger: {
        trigger: '#testimonial-section',
        // markers: true,
        pin: true,
        start: 'top top',
        end: 'bottom top',
        pinSpacing: true,
      },
    });
    gsap.from('#profile-1-image', {
      x: -1000,
      opacity: 0,
      scale: 0,
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
          'It’s been such a game changer for me! I&apos;ve learned a ton in such a short amount of time. The courses are top-notch quality, and the teachers are so engaging, approachable, and incredibly knowledgeable. Their passion for teaching has really sparked my love for learning even more, and I would definitely recommend this experience to anyone wanting to grow their knowledge and skills.',
        type: 'diff',
        speed: 2,
        // delimiter: ' ',
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
      className='max-w-7xl mx-auto flex flex-row justify-between items-center min-h-screen px-32 gap-10 py-32'>
      <Image
        id='profile-1-image'
        priority
        quality={100}
        className='saturate-150 object-contain z-[1] rounded-r-2xl shadow-lg shadow-gray-700 pointer-events-none absolute -left-16 w-fit h-[80vh] bg-blue-500'
        src={Profile1}
        alt='smiling man portrait with blurred background'
      />
      <div
        className={`${cormorantUpright.className} rounded-2xl border-y relative left-20 shadow-inner shadow-blue-500 bg-white py-10 px-10 pl-24 w-full flex flex-col justify-center gap-5`}>
        <p
          className={
            'relative z-[1] min-h-[250px] min-w-[60vw] leading-snug tracking text-4xl word-spacing-1 font-semibold text-gray-700 select-none'
          }>
          <span id='typewriter' className='absolute text-black/20'>
            It’s been such a game changer for me! I&apos;ve learned a ton in such a short amount of time. The courses
            are top-notch quality, and the teachers are so engaging, approachable, and incredibly knowledgeable. Their
            passion for teaching has really sparked my love for learning even more, and I would definitely recommend
            this experience to anyone wanting to grow their knowledge and skills.
          </span>
          <span id='typewriter' className={'z-50 text-gray-600'} />
          <span id='cursor' className='text-5xl absolute text-blue-500'>
            |
          </span>
        </p>

        <div className='flex flex-col gap-2 w-full items-end z-[1] select-none'>
          <span className='text-xl text-blue-700 font-bold'>Micheal D.</span>
          <span className='text-md text-gray-600 font-bold'>Grade 9 Student</span>
        </div>
        <RiDoubleQuotesR size={250} className='rotate-12 quote absolute right-0 bottom-0 text-blue-200' />
      </div>
    </section>
  );
};

export default TestimonialSection;
