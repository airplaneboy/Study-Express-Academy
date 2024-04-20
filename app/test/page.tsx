import FeatureSection2 from '@/containers/Landing Page/FeatureSection2';
import FeatureSection3 from '@/containers/Landing Page/FeatureSection3';
import BenefitSection from '@/containers/Landing Page/BenefitsSection';
import CTASection from '@/containers/Landing Page/CTASection';
import TestimonialSection from '@/containers/Landing Page/TestimonialSection';
import ParallaxSection from '@/components/ParallaxSection';
import IntersectionVideo from '@/containers/Landing Page/IntersectionVideoComponent';
const Test = async () => {
  return (
    <div className='h-[300vh] flex flex-col gap-1 items-center justify-center'>
      {/* <BenefitSection /> */}
      {/* <CTASection /> */}
      {/* <TestimonialSection /> */}
      {/* <ParallaxSection /> */}
      <IntersectionVideo src='/parallax/video.webm' />
    </div>
  );
};

export default Test;
