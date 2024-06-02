'use client';
import { useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const IntersectionVideo = ({
  src,
  playsInline,
  style,
  loop,
  autoPlay,
  muted,
  width,
  height,
  preload,
  controls,
  className,
}: {
  src: string;
  playsInline?: boolean | undefined;
  style?: React.CSSProperties | undefined;
  loop?: boolean | undefined;
  autoPlay?: boolean | undefined;
  muted?: boolean | undefined;
  width?: string | number | undefined;
  height?: string | number | undefined;
  preload?: string | undefined;
  controls?: boolean | undefined;
  className?: string | undefined;
}) => {
  const videoRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(videoRef);
  return (
    <AnimatePresence initial={false}>
      <div ref={videoRef} className='h-[calc((9_/_15.98)_*_100vw)] md:h-80'>
        {isInView && (
          <motion.video
            key='video'
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={className}
            playsInline={playsInline}
            style={style}
            loop={loop}
            autoPlay={autoPlay}
            muted={muted}
            width={width}
            height={height}
            preload={preload}
            src={src}
            controls={controls}></motion.video>
        )}
      </div>
    </AnimatePresence>
  );
};

export default IntersectionVideo;
