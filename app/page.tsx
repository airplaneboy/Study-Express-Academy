import Lenis from '@/components/Lenis';
import HeroSection from '@/containers/Landing Page/HeroSection';

export default function Home() {
  return (
    <Lenis>
      <main className='overflow-x-hidden'>
        <HeroSection />
        <section className={'flex flex-row justify-between items-center h-screen px-24 bg-red-500'} />
      </main>
    </Lenis>
  );
}
