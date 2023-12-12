'use client';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import ReactPlayer from 'react-player';
const DynamicReactPlayer = dynamic(() => import('./ReactPlayerLazyLoader'), {
  ssr: false, // This ensures the component is only rendered on the client side
});

type VideoPlayerProps = {
  lastSecond: number;
  url: string;
  updateUserVideo: ({
    videoDuration,
    watchTime,
    lastSecondWatched,
  }: {
    lastSecondWatched: number;
    videoDuration: number;
    watchTime: number;
  }) => void;
};

const VideoPlayer2 = ({ url, updateUserVideo, lastSecond }: VideoPlayerProps) => {
  const [playerReady, setPlayerReady] = useState(false);
  const [watchTime, setWatchTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [time, setTime] = useState(-1);
  // const [startWatchTime, setStartWatchTime] = useState(0);

  const counter = useRef(0);
  const player = useRef<ReactPlayer>();
  const intervalId = useRef<NodeJS.Timer>();

  useEffect(() => {
    console.log(`Effect was called ${time} times\nTime: ${watchTime}`);

    return setTime((prev) => prev + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchTime]);

  useEffect(() => {
    if (isPlaying) intervalId.current = setInterval(onInterval, 100);
    else clearInterval(intervalId.current);
    return () => clearInterval(intervalId.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  const onInterval = () => {
    counter.current = counter.current + 0.1;
    if (counter.current >= 30) {
      // setWatchTime((prev) => prev + 30);
      setWatchTime((prev) => prev + 30);
      counter.current = 0.1;
    }
  };

  const onPlay = () => {
    console.log('was played');
    setIsPlaying(true);
  };

  const onPause = () => {
    setIsPlaying(false);
    setWatchTime(watchTime + counter.current);
    counter.current = 0;
  };

  const seekToLastSecond = () => player.current?.seekTo(lastSecond);

  const onEnded = () => {
    setIsPlaying(false);
    setWatchTime((prev) => prev + counter.current);
  };
  return (
    <>
      <span>{watchTime}</span>
      <button onClick={() => console.log(`Counter: ${counter.current}\nWatch Time: ${watchTime}`)}>Data</button>
      <div
        className={
          playerReady
            ? 'aspect-video rounded-lg overflow-hidden'
            : 'aspect-video duration-75 animate-pulse bg-gray-200 rounded-lg overflow-hidden'
        }>
        <DynamicReactPlayer
          className=' aspect-video !w-auto !h-auto'
          onReady={() => setPlayerReady(true)}
          onStart={() => console.log('Starting...')}
          playerRef={player}
          onPlay={() => onPlay()}
          onPause={() => onPause()}
          url={url}
          controls={true}
          onEnded={() => onEnded()}
        />
      </div>
    </>
  );
};

export default VideoPlayer2;
