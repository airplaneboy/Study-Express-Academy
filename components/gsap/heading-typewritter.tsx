'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/gsap-core';
import { TextPlugin } from 'gsap/TextPlugin';

const HeadingTypewritter = ({ words }: { words: any[] }) => {
  useGSAP(() => {
    gsap.registerPlugin(TextPlugin);

    let mainTimeline = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      let textTimeline = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });

      textTimeline.to('#typewritter', {
        opacity: 1,
        text: { value: word, speed: 0.5, type: 'diff' },
        duration: word == '.' ? 5 : 0.8,
        onUpdate: () => {
          cursorTimeline.restart();
        },
        onComplete: () => {
          cursorTimeline.play();
        },
      });

      mainTimeline.add(textTimeline);
    });

    //Cursor
    let cursorTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
    cursorTimeline.to('#cursor', { opacity: 1, duration: 0 }).to('#cursor', { opacity: 0, duration: 0, delay: 0.8 });
  });

  return (
    <>
      <span id='typewritter' className=' text-blue-600 whitespace-nowrap overflow-hidden' />
      <span id='cursor' className='text-[52px] lg:text-[84px] absolute text-blue-600'>
        |
      </span>
    </>
  );
};

export default HeadingTypewritter;
