'use client';
import { useRef, useEffect, useState } from 'react';
import Marquee from './Marquee';

const OverflowControl = ({ children }: { children: React.ReactNode }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    setIsOverflowing(textRef.current!.scrollWidth > textRef.current!.clientWidth);
  }, []);

  return (
    <>
      <div className='w-full group-hover:block hidden' ref={textRef}>
        {isOverflowing ? <Marquee>{children}</Marquee> : children}
      </div>
      <div className='w-full pb-2 group-hover:hidden' ref={textRef}>
        {children}
      </div>
    </>
  );
};

export default OverflowControl;
