'use client';
import { Player } from '@lordicon/react';
import { useRef, useState, useEffect } from 'react';

export type LordIconPlayer = {
  src: string;
  size?: number;
  xsSize?: number;
  smSize?: number;
  mdSize?: number;
  lgSize?: number;
  xlSize?: number;
  xl2Size?: number;
  className?: string | undefined;
};

const LordIconPlayer = ({
  src,
  size = 96,
  xsSize,
  smSize,
  mdSize,
  lgSize,
  xlSize,
  xl2Size,
  className,
}: LordIconPlayer) => {
  const [width, setWidth] = useState(1200);
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    return () => window.removeEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  if (width >= 1536) size = xlSize || size;
  else if (width >= 1280) size = xlSize || size;
  else if (width >= 1024) size = lgSize || 0.95 * size;
  else if (width >= 769) size = mdSize || 0.9 * size;
  else if (width >= 480) size = smSize || 0.85 * size;
  else size = xsSize || 0.4 * size;

  const onHover = () => playerRef.current?.play();

  return (
    <>
      <div className={className + ' w-max h-max '}>
        <Player onComplete={() => playerRef.current?.goToFirstFrame()} size={size} ref={playerRef} icon={src} />
      </div>
      <div
        onMouseOver={onHover}
        onClick={() => playerRef.current?.isPlaying || playerRef.current?.play()}
        className='absolute w-full h-full inset-0 text-transparent z-[10] select-none text-[1px]'>
        wrapper
      </div>
    </>
  );
};

export default LordIconPlayer;
