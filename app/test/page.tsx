'use client';
import ParallaxSection from '@/components/ParallaxSection';
import ScrollPlane from '@/components/Plane';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const OverflowCheckComponent = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();

  // useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  //   console.log('Page scroll: ', latest);
  // });

  return (
    <div className='h-[200vh]'>
      <ParallaxSection />
      {/* <ScrollPlane /> */}
    </div>
  );
};

export default OverflowCheckComponent;
