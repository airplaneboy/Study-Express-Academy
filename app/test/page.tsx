'use client';
import React, { Suspense, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

const Page = () => {
  const [load, setLoad] = useState(false);
  return (
    <div>
      <Suspense fallback={<span>loading...</span>}>
        <ReactPlayer onReady={() => setLoad(true)} url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
      </Suspense>
    </div>
  );
};

export default Page;
