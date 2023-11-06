'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
// import ReactPlayer from 'react-player/youtube';
// import { OnProgressProps } from 'react-player/base';

const DynamicReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: false, // This ensures the component is only rendered on the client side
});

function VideoPlayer({ url }: { url: string }) {
  const [playerReady, setPlayerReady] = useState(false);

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
  //#endregion

  // useEffect(() => {
  //   setPlayerReady(true); // Mark the player as ready once the component mounts on the client
  // }, []);

  return (
    <div
      className={
        playerReady
          ? 'aspect-video rounded-lg overflow-hidden'
          : 'aspect-video duration-75 animate-pulse bg-gray-200 rounded-lg overflow-hidden'
      }>
      <DynamicReactPlayer
        onReady={() => setPlayerReady(true)}
        // fallback={<div className='aspect-video animate-pulse bg-gray-300 duration-150' />}
        // onProgress={(e) => captureUserProgress(e)}
        className=' aspect-video !w-auto !h-auto'
        url={url}
        controls={true}
      />
    </div>
  );
}

export default VideoPlayer;
