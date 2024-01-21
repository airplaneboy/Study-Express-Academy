'use client';
import { useRef, useEffect, useState } from 'react';
import Marquee from './Marquee';

const OverflowControl = ({ children }: { children: React.ReactNode }) => {
  const textRef = useRef<HTMLDivElement>(null);

  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (textRef.current!.scrollWidth > textRef.current!.clientWidth) setIsOverflowing(true);
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
      {/* <div className='w-full pb-2 group-hover:hidden'>{children}</div> */}
    </>
  );
};

export default OverflowControl;
