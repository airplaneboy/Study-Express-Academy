'use client';
import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import ReactPlayer from 'react-player';
const ReactPlayerLazyLoader = dynamic(() => import('@/components/ReactPlayerLazyLoader'), { ssr: false });

export default function Home() {
  const playerRef = useRef<ReactPlayer>();
  const [value, setValue] = useState(0);

  const logMessage = () =>
    console.log(`Duration: ${playerRef.current?.getDuration()}\nCurrent Time: ${playerRef.current?.getCurrentTime()}`);

  const seek = (whereTo: any) => playerRef.current?.seekTo(whereTo);
  return (
    <>
      <input type='number' value={value} onChange={(e) => setValue(+e.target.value)} />
      <button onClick={logMessage}>Log</button>
      <button onClick={() => seek(value)}>Seek</button>
      <ReactPlayerLazyLoader url='https://www.youtube.com/watch?v=LXb3EKWsInQ' playerRef={playerRef} />;
    </>
  );
}
