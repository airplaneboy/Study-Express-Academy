import FeatureSection2 from '@/containers/Landing Page/FeatureSection2';
import FeatureSection3 from '@/containers/Landing Page/FeatureSection3';
import BenefitSection from '@/containers/Landing Page/BenefitsSection';
const Test = async () => {
  return (
    <div className='h-[200vh] flex flex-col gap-1'>
      <FeatureSection2 />
      <FeatureSection3 />
      <BenefitSection />
    </div>
  );
};

export default Test;
