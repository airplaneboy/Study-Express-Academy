'use client';
import TestimonialSection from '@/containers/Landing Page/TestimonialSection';

const OverflowCheckComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-[200vh]'>
      <div className='min-h-screen min-w-full bg-red-500'></div>
      <TestimonialSection />
      <div className='min-h-screen min-w-full bg-red-500'></div>
    </div>
  );
};

export default OverflowCheckComponent;
