import FeatureSection2 from '@/containers/Landing Page/FeatureSection2';
import FeatureSection3 from '@/containers/Landing Page/FeatureSection3';
import BenefitSection from '@/containers/Landing Page/BenefitsSection';
import CTASection from '@/containers/Landing Page/CTASection';
import TestimonialSection from '@/containers/Landing Page/TestimonialSection';
import ParallaxSection from '@/components/ParallaxSection';
import IntersectionVideo from '@/containers/Landing Page/IntersectionVideoComponent';
import HeroSection from '@/containers/Landing Page/HeroSection';
import FeatureSection from '@/containers/Landing Page/FeatureSection';
import FooterSection from '@/containers/Landing Page/FooterSection';
// import dynamic from 'next/dynamic';
// const TestimonialSection = dynamic(() => import('@/containers/Landing Page/TestimonialSection'), { ssr: false });
const Test = async () => {
  return (
    <div className='h-[200vh] pt-[100vh] w-full'>
      {/* <BenefitSection /> */}
      {/* <CTASection /> */}
      {/* <TestimonialSection /> */}
      {/* <ParallaxSection /> */}
      {/* <IntersectionVideo src='/parallax/video.webm' /> */}
      <HeroSection />
      {/* <FeatureSection /> */}
      {/* <FeatureSection2 /> */}
      {/* <FooterSection /> */}
    </div>
  );
};

export default Test;
