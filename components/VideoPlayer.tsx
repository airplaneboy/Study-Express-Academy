'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { OnProgressProps } from 'react-player/base';

const DynamicReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: true, // This ensures the component is only rendered on the client side
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

  useEffect(() => {
    setPlayerReady(true); // Mark the player as ready once the component mounts on the client
  }, []);

  return (
    <div className='w-full h-full rounded-lg overflow-hidden flex-1'>
      {playerReady && (
        <DynamicReactPlayer
          // onProgress={(e) => captureUserProgress(e)}
          className='w-full h-full rounded-lg'
          width='100%'
          height='100%'
          url={url}
          controls={true}
        />
      )}
    </div>
  );
}

export default VideoPlayer;
