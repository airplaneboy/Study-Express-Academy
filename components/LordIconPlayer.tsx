'use client';
import { Player } from '@lordicon/react';
import { useRef } from 'react';

const LordIconPlayer = ({
  src,
  size = 96,
  className,
}: {
  src: string;
  size?: number;
  className?: string | undefined;
}) => {
  const playerRef = useRef<Player>(null);

  const onHover = () => playerRef.current?.play();

  return (
    <>
      <div className={className + ' w-max h-max '}>
        <Player onComplete={() => playerRef.current?.goToFirstFrame()} size={size} ref={playerRef} icon={src} />
      </div>
      <div
        onMouseOver={onHover}
        onClick={() => playerRef.current?.isPlaying || playerRef.current?.play()}
        className='absolute w-full h-full inset-0 text-transparent z-[10]'>
        wrapper
      </div>
    </>
  );
};

export default LordIconPlayer;
