'use client';
import CTASection from '@/containers/Landing Page/CTASection';
import TestimonialSection from '@/containers/Landing Page/TestimonialSection';

const OverflowCheckComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-[200vh]'>
      <div className='min-h-screen min-w-full bg-red-500'></div>
      {/* <TestimonialSection /> */}
      <CTASection />
      <div className='min-h-screen min-w-full bg-red-500'>C</div>
    </div>
  );
};

export default OverflowCheckComponent;
