'use client';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Plane from '@/components/Plane';

import CastleBackground from '../public/blue-parallax/castle-background.webp';
import CastleForeground from '../public/blue-parallax/castle-foreground.webp';
import RainbowBackground from '../public/blue-parallax/rainbow-background.webp';
import RainbowForeground from '../public/blue-parallax/rainbow-foreground.webp';
import Main from '../public/blue-parallax/main.webp';

// import CastleBackground from '../public/parallax/blurred_castle_background.webp';
// import CastleForeground from '../public/parallax/castle_foreground.webp';
// import RainbowBackground from '../public/parallax/blurred_rainbow_background.webp';
// import RainbowForeground from '../public/parallax/blurred_rainbow_foreground.webp';
// import Main from '../public/parallax/main.webp';

export default function ParallaxSection() {
  const [scrollValue, setScrollValue] = useState(0);

  // rest
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  useMotionValueEvent(scrollYProgress, 'change', (latest) => setScrollValue(latest));
  const CastleBackgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '95%']);
  const CastleForegroundY = useTransform(scrollYProgress, [0, 1], ['0%', '85%']);
  const RainbowBackgroundY = useTransform(scrollYProgress, [0, 1], ['-25%', '100%']);
  const RainbowForegroundY = useTransform(scrollYProgress, [0, 1], ['-25%', '80%']);
  const MainY = useTransform(scrollYProgress, [0, 1], ['15%', '90%']);

  return (
    <>
      {/* <motion.div ref={ref} className='z-[1] w-screen h-screen overflow-hidden relative grid place-items-center'> */}
      <motion.div
        ref={ref}
        className='z-[1] w-screen h-[calc(((5_/_9)_*_100vw)_+_80px)] pb-32 overflow-hidden relative grid place-items-center'>
        <div className='z-10 inset-0 absolute w-full h-full bg-[linear-gradient(0deg,_rgba(255,255,255,0)_0%,_rgba(52,50,44,0)_30%,_rgba(255,255,255,1)_100%)]' />

        <motion.div
          className='flex items-center justify-center w-full h-full absolute inset-0 object-cover'
          style={{ y: RainbowBackgroundY }}>
          <Image alt='colorful blurred rainbow background' src={RainbowBackground} />
        </motion.div>

        <motion.div
          style={{ y: RainbowForegroundY }}
          className='flex items-center justify-center w-full h-full absolute inset-0 object-cover'>
          <Image alt='colorful blurred candy stone background' src={RainbowForeground} />
        </motion.div>

        <motion.div
          style={{ y: CastleBackgroundY }}
          className='flex items-center justify-center w-full h-full absolute inset-0 object-cover'>
          <Image alt='colorful clouds, rainbows, and candies background' src={CastleBackground} />
        </motion.div>

        <motion.div
          style={{ y: CastleForegroundY }}
          className='flex items-center justify-center w-full h-full absolute inset-0 object-cover'>
          <Image alt='colorful castle and candy background' src={CastleForeground} />
        </motion.div>

        <motion.div
          style={{
            y: MainY,
          }}
          className='flex items-center justify-center w-full h-full absolute inset-0 object-contain z-[2]'>
          <Image alt='girl studying with laptop and books' src={Main} />
        </motion.div>
      </motion.div>

      {/* Plane */}

      <Plane />
    </>
  );
}
