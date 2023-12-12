'use client';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// import ReactPlayer from 'react-player/youtube';
const DynamicReactPlayer = dynamic(() => import('./ReactPlayerLazyLoader'), {
  ssr: false, // This ensures the component is only rendered on the client side
});

function VideoPlayer({
  url,
  updateUserVideo,
  lastSecond,
}: {
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
}) {
  const [flag, setFlag] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [lastSecondWatched, setLastSecondWatched] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [watchTime, setWatchTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [paused, setPaused] = useState(0);

  const [time, setTime] = useState(1);

  const intervalId = useRef<NodeJS.Timer>();
  const isCounting = useRef(false);
  const count = useRef(0);
  const player = useRef<any>();

  useEffect(() => {
    if (!flag) return setFlag(true);

    updateUserVideo({ videoDuration: videoDuration, watchTime: (endTime - startTime) / 1000, lastSecondWatched });
    setTime((prev) => prev + 1);
    setStartTime(Date.now());
    setWatchTime((endTime - startTime) / 1000);

    console.log(`Effect was called ${time} times\nTime: ${(endTime - startTime) / 1000}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endTime, paused]);

  const startCount = () => {
    if (!isCounting.current) {
      intervalId.current = setInterval(() => {
        count.current = count.current + 0.5;
        if (count.current >= 30) {
          setLastSecondWatched(+player.current!.getCurrentTime());
          setEndTime(Date.now());

          count.current = 0;
        }
      }, 500);
      isCounting.current = true;
    }
  };

  const seek = () => {
    console.log(count.current);
  };

  const seekToLastSecond = () => player.current?.seekTo(lastSecond);

  const stopCount = () => {
    clearInterval(intervalId.current);
    isCounting.current = false;
  };

  //#region Track user's progress on a video
  // const [progress, setProgress] = useState('not-started');
  // const [progressValue, setProgressValue] = useState(0);
  // const captureUserProgress = (e: OnProgressProps) => {
  //   const progress = e.played;
  //   setProgressValue(progress);
  //   switch (true) {
  //     case progress < 0.25:
  //       setProgress('beginning');

  //       break;
  //     case progress < 0.5:
  //       setProgress('first-quarter');

  //       break;
  //     case progress < 0.75:
  //       setProgress('second-quarter');

  //       break;
  //     case progress < 0.9:
  //       setProgress('ending');

  //       break;
  //     case progress >= 0.9:
  //       setProgress('completed');

  //       break;

  //     default:
  //       "custom: couldn't get user's progress";
  //       break;
  //   }
  // };

  // useEffect(() => {
  //   console.log(progress);
  //   console.log(progressValue);
  // }, [progress]);
  //#endregion

  return (
    <>
      <span>{watchTime}</span>
      <button onClick={() => seek()}>Seek</button>
      <div
        className={
          playerReady
            ? 'aspect-video rounded-lg overflow-hidden'
            : 'aspect-video duration-75 animate-pulse bg-gray-200 rounded-lg overflow-hidden'
        }>
        <DynamicReactPlayer
          // fallback={<div className='aspect-video animate-pulse bg-gray-300 duration-150' />}
          onStart={() => console.log('on start was called')}
          playing={isCounting.current}
          playerRef={player}
          onReady={() => setPlayerReady(true)}
          onPlay={() => {
            if (toggle) {
              console.log('dont call PLAY');
              setVideoDuration(+player.current!.getDuration());
              setToggle(false);
            }

            setStartTime(Date.now());
            startCount();
          }}
          onPause={() => {
            stopCount();
            setPaused((prev) => prev + 1);
          }}
          className=' aspect-video !w-auto !h-auto'
          url={url}
          controls={true}
          onEnded={() => stopCount()}
        />
      </div>
    </>
  );
}

export default VideoPlayer;
