import FeatureSection2 from '@/containers/Landing Page/FeatureSection2';
import FeatureSection3 from '@/containers/Landing Page/FeatureSection3';
import BenefitSection from '@/containers/Landing Page/BenefitsSection';
import CTASection from '@/containers/Landing Page/CTASection';
import TestimonialSection from '@/containers/Landing Page/TestimonialSection';
import ParallaxSection from '@/components/ParallaxSection';
const Test = async () => {
  return (
    <div className='h-[300vh] flex flex-col gap-1 items-center justify-center'>
      {/* <BenefitSection /> */}
      {/* <CTASection /> */}
      <TestimonialSection />
      {/* <ParallaxSection /> */}
    </div>
  );
};

export default Test;
