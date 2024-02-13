'use client';
import { useRef, useEffect, useState } from 'react';
import Marquee from './Marquee';

const OverflowControl = ({ children }: { children: React.ReactNode }) => {
  const textRef = useRef<HTMLDivElement>(null);

  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const element = textRef.current;
    setIsOverflowing(element!.scrollWidth > element!.clientWidth);

    window.addEventListener('resize', () => setIsOverflowing(element!.scrollWidth > element!.clientWidth));
    return () =>
      window.removeEventListener('resize', () => setIsOverflowing(element!.scrollWidth > element!.clientWidth));
  }, []);

  return (
    <>
      <div ref={textRef}>
        {isOverflowing ? (
          <>
            <Marquee hidden={true}>{children}</Marquee>
            <div className='w-full group-hover:hidden [mask-image:_linear-gradient(to_right,transparent_0%,_black_20%,_black,_transparent_100%)]'>
              {children}
            </div>
          </>
        ) : (
          children
        )}
      </div>
    </>
  );
};

export default OverflowControl;
