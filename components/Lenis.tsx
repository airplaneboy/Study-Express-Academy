'use client';
import { ReactLenis } from '@studio-freight/react-lenis';
import { useEffect } from 'react';

const Lenis = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.documentElement.classList.add('[scrollbar-width:none]');
  }, []);

  return (
    <ReactLenis
      root
      options={{
        // duration: 1.5,
        duration: 1.25,
        lerp: 0,
        easing: (x) => {
          return 1 - Math.pow(1 - x, 3);
        },
      }}>
      {children}
    </ReactLenis>
  );
};

export default Lenis;
