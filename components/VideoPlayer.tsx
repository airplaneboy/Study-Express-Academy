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

const VideoPlayer = ({ url, updateUserVideo, lastSecond }: VideoPlayerProps) => {
  const [flag, setFlag] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [watchTime, setWatchTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [lastSecondWatched, setLastSecondWatched] = useState<number | any>(0);
  const [trigger, setTrigger] = useState(false);

  const counter = useRef(0);
  const player = useRef<ReactPlayer>();
  const intervalId = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (!flag) return setFlag(true);
    updateUserVideo({ videoDuration: duration, lastSecondWatched, watchTime });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  useEffect(() => {
    if (isPlaying) intervalId.current = setInterval(onInterval, 100);
    else clearInterval(intervalId.current);
    return () => clearInterval(intervalId.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  const onInterval = () => {
    counter.current = counter.current + 0.1;
    if (counter.current >= 30) {
      counter.current = 0;
      setWatchTime(30);
      setLastSecondWatched(player.current?.getCurrentTime());
      setTrigger((prev) => !prev);
    }
  };

  const onPlay = () => {
    setIsPlaying(true);
    setDuration(player.current!.getDuration());
  };

  const seekToLastSecond = () => lastSecond != undefined && player.current?.seekTo(lastSecond);

  const onPause = () => {
    setIsPlaying(false);
    setWatchTime(counter.current);
    setLastSecondWatched(player.current?.getCurrentTime());
    setTrigger((prev) => !prev);
    counter.current = 0.1;
  };

  const onEnded = () => {
    setIsPlaying(false);
    setWatchTime(counter.current);
    setLastSecondWatched(player.current?.getCurrentTime());
    counter.current = 0.1;
    setTrigger((prev) => !prev);
  };
  return (
    <div
      className={
        playerReady
          ? 'aspect-video rounded-lg overflow-hidden'
          : 'aspect-video duration-75 animate-pulse bg-gray-200 rounded-lg overflow-hidden'
      }>
      <DynamicReactPlayer
        className=' aspect-video !w-auto !h-auto'
        url={url}
        controls={true}
        playerRef={player}
        onPlay={() => onPlay()}
        onPause={() => onPause()}
        onEnded={() => onEnded()}
        onReady={() => setPlayerReady(true)}
        onStart={() => seekToLastSecond()}
      />
    </div>
  );
};

export default VideoPlayer;
