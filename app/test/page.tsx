import FeatureSection2 from '@/containers/Landing Page/FeatureSection2';
import FeatureSection3 from '@/containers/Landing Page/FeatureSection3';
import BenefitSection from '@/containers/Landing Page/BenefitsSection';
import CTASection from '@/containers/Landing Page/CTASection';
import TestimonialSection from '@/containers/Landing Page/TestimonialSection';
import ParallaxSection from '@/components/ParallaxSection';
import IntersectionVideo from '@/containers/Landing Page/IntersectionVideoComponent';
import HeroSection from '@/containers/Landing Page/HeroSection';
const Test = async () => {
  return (
    <div className='h-[300vh] w-full'>
      {/* <BenefitSection /> */}
      {/* <CTASection /> */}
      {/* <TestimonialSection /> */}
      <ParallaxSection />
      {/* <IntersectionVideo src='/parallax/video.webm' /> */}
      {/* <HeroSection /> */}
    </div>
  );
};

export default Test;
