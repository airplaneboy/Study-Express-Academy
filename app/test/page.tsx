'use client';
import CTASection from '@/containers/Landing Page/CTASection';
import FooterSection from '@/containers/Landing Page/FooterSection';
import HeroSection from '@/containers/Landing Page/HeroSection';
import TestimonialSection from '@/containers/Landing Page/TestimonialSection';

const OverflowCheckComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-[200vh]'>
      <div className='min-h-screen min-w-full bg-red-500'></div>
      {/* <TestimonialSection /> */}
      {/* <CTASection /> */}
      {/* <FooterSection /> */}
      <HeroSection />
      <div className='min-h-screen min-w-full bg-red-500'>CFH</div>
    </div>
  );
};

export default OverflowCheckComponent;
