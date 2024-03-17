'use client';
import TestimonialSection from '@/containers/Landing Page/TestimonialSection';

const OverflowCheckComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-[200vh]'>
      <TestimonialSection />
    </div>
  );
};

export default OverflowCheckComponent;
