import Lenis from '@/components/Lenis';
import ParallaxSection from '@/components/ParallaxSection';
import FeatureSection from '@/containers/Landing Page/FeatureSection';
import HeroSection from '@/containers/Landing Page/HeroSection';

export default function Home() {
  return (
    <Lenis>
      <main className='overflow-x-hidden'>
        <HeroSection />
        <ParallaxSection />
        <FeatureSection />
        <section className={'flex flex-row justify-between items-center h-screen px-24 bg-red-500'} />
      </main>
    </Lenis>
  );
}
