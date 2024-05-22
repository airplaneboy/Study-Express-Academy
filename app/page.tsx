import dynamic from 'next/dynamic';
import Lenis from '@/components/Lenis';
// import ParallaxSection from '@/components/ParallaxSection';
import FeatureSection from '@/containers/Landing Page/FeatureSection';
import HeroSection from '@/containers/Landing Page/HeroSection';
import FeatureSection2 from '@/containers/Landing Page/FeatureSection2';
// import FeatureSection3 from '@/containers/Landing Page/FeatureSection3';
// import BenefitSection from '@/containers/Landing Page/BenefitsSection';
// import TestimonialSection from '@/containers/Landing Page/TestimonialSection';
// import CTASection from '@/containers/Landing Page/CTASection';
import FooterSection from '@/containers/Landing Page/FooterSection';
import Footer from '@/components/Footer';

const ParallaxSection = dynamic(() => import('@/components/ParallaxSection'));
const BenefitSection = dynamic(() => import('@/containers/Landing Page/BenefitsSection'));
const TestimonialSection = dynamic(() => import('@/containers/Landing Page/TestimonialSection'));
const CTASection = dynamic(() => import('@/containers/Landing Page/CTASection'));

export default function Home() {
  return (
    <Lenis>
      <main className='overflow-x-hidden'>
        {/* <HeroSection /> */}
        <ParallaxSection />
        <FeatureSection />
        <FeatureSection2 />
        {/* <FeatureSection3 /> */}
        <BenefitSection />
        <TestimonialSection />
        <CTASection />
        <FooterSection />
        <Footer />
        {/* <div className='flex flex-row justify-between items-center h-screen px-24 bg-red-500' /> */}
      </main>
    </Lenis>
  );
}
