import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, useTransform, cubicBezier } from 'framer-motion';

import Image from 'next/image';
import Plane from '../public/assets/plane.svg';

export default function ScrollPlane() {
  const { scrollYProgress } = useScroll();
  const [scrollValue, setScrollValue] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => setScrollValue(latest));

  const planePathOffset = useTransform(scrollYProgress, [0, 1], [5, 100]);
  const scrollPathOffset = useTransform(scrollYProgress, [0, 0.2, 0.6, 0.8, 1], [0, 0.075, 0.35, 0.65, 0.98]);
  const scrollPathOffsetTop = useTransform(scrollYProgress, [0, 0.2, 0.6, 0.9, 1], [0, 0.1, 0.3, 0.65, 0.98]);
  const scrollPathOffsetBottom = useTransform(scrollYProgress, [0, 0.2, 0.6, 0.9, 1], [0, 0.12, 0.42, 0.7, 0.98]);

  const scrollPathLength = useTransform(scrollYProgress, [0, 0.2, 0.6, 0.8, 1], [0.05, 0.1, 0.2, 0.15, 0], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });
  const scrollPathLengthTop = useTransform(scrollYProgress, [0, 0.2, 0.6, 0.9, 1], [0.05, 0.08, 0.1, 0.15, 0], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });
  const scrollPathLengthBottom = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 0.8, 0.9, 1],
    [0.05, 0.05, 0.15, 0.1, 0.2, 0],
    { ease: cubicBezier(0.33, 1, 0.68, 1) }
  );
  const zIndex = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, 999]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [2.5, 2.5, 5]);
  return (
    <motion.div
      className='pointer-events-none overflow-visible fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'
      initial={{ zIndex: '0' }}
      animate={{ zIndex: zIndex.get() }}>
      {/* Core Line */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='997'
        height='822'
        style={{ position: 'absolute', background: 'transparent' }}>
        <motion.path
          initial={{ pathLength: 0.05, pathOffset: 0 }}
          animate={{
            pathLength: scrollPathLength.get(),
            pathOffset: scrollPathOffset.get(),
          }}
          transition={{
            ease: cubicBezier(0.33, 1, 0.68, 1),
            duration: 0,
          }}
          fill='transparent'
          stroke='url(#paint0_linear_2272_56524)'
          strokeLinecap='round'
          strokeMiterlimit='10'
          strokeWidth='4'
          d='M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819'></motion.path>
        <defs>
          <linearGradient
            id='paint0_linear_2272_56524'
            x1='722.156'
            x2='92.39'
            y1='-228.339'
            y2='704.889'
            gradientUnits='userSpaceOnUse'>
            <stop offset='.144' stopColor='#FFE9FE'></stop>
            <stop offset='1' stopColor='#FF96F9'></stop>
          </linearGradient>
        </defs>
      </svg>
      {/* Second Line */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='997'
        height='822'
        style={{
          position: 'absolute',
          background: 'transparent',
          left: '.5125rem',
          top: '-.5125rem',
        }}>
        <motion.path
          initial={{ pathLength: 0.05, pathOffset: 0 }}
          animate={{
            pathLength: scrollPathLengthTop.get(),
            pathOffset: scrollPathOffsetTop.get(),
          }}
          transition={{
            ease: cubicBezier(0.33, 1, 0.68, 1),
            duration: 0,
          }}
          fill='transparent'
          stroke='url(#paint0_linear_2272_56524)'
          strokeLinecap='round'
          strokeMiterlimit='10'
          strokeWidth='2'
          d='M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819'></motion.path>
        <defs>
          <linearGradient
            id='paint0_linear_2272_56524'
            x1='722.156'
            x2='92.39'
            y1='-228.339'
            y2='704.889'
            gradientUnits='userSpaceOnUse'>
            <stop offset='.144' stopColor='#FFE9FE'></stop>
            <stop offset='1' stopColor='#FF96F9'></stop>
          </linearGradient>
        </defs>
      </svg>
      {/* Third Line */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='997'
        height='822'
        style={{
          position: 'absolute',
          background: 'transparent',
          left: '-.5125rem',
          top: '.5125rem',
        }}>
        <motion.path
          initial={{ pathLength: 0.05, pathOffset: 0 }}
          animate={{
            pathLength: scrollPathLengthBottom.get(),
            pathOffset: scrollPathOffsetBottom.get(),
          }}
          transition={{
            ease: cubicBezier(0.33, 1, 0.68, 1),
            duration: 0,
          }}
          fill='transparent'
          stroke='url(#paint0_linear_2272_56524)'
          strokeLinecap='round'
          strokeMiterlimit='10'
          strokeWidth='2'
          d='M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819'></motion.path>
        <defs>
          <linearGradient
            id='paint0_linear_2272_56524'
            x1='722.156'
            x2='92.39'
            y1='-228.339'
            y2='704.889'
            gradientUnits='userSpaceOnUse'>
            <stop offset='.144' stopColor='#FFE9FE'></stop>
            <stop offset='1' stopColor='#FF96F9'></stop>
          </linearGradient>
        </defs>
      </svg>

      {/* <Image src={Plane} width={500} height={500} alt='ka' /> */}

      <motion.div
        className='flex items-center justify-center absolute bg-transparent [offset-path:path("M-92_17.713c154.32_237.253_348.7_486.913_585.407_466.93_137.542-17.257_247.733-123.595_279.259-239.307_27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268_98.897-231.122_199.803-34.673_151.333_12.324_312.301_125.096_429.074C639.395_749.225_815.268_819.528_995_819")]'
        initial={{ offsetDistance: '5%', scale: 2.5 }}
        animate={{
          offsetDistance: `${planePathOffset.get()}%`,
          scale: scale.get(),
        }}
        transition={{
          duration: 0,
          delay: 0,
          ease: cubicBezier(0.33, 1, 0.68, 1),
        }}>
        <Image src={Plane} width={50} height={50} alt='paper plane animated on scroll with trails' />
      </motion.div>
    </motion.div>
  );
}
