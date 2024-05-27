'use client';
import { useRef, useEffect, useState } from 'react';

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const observer = useRef<IntersectionObserver>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          if (isVisible != true) {
            videoRef.current?.load();

            setIsVisible(true);
          }
        } else {
          videoRef.current?.pause();

          setIsVisible(false);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0,
      }
    );

    if (videoRef.current) observer.current.observe(videoRef.current);

    return () => {
      // videoRef.current?.pause();
      observer?.current?.disconnect();
    };
  }, [isVisible]);

  return (
    <video
      className={className}
      playsInline={playsInline}
      style={style}
      loop={loop}
      autoPlay={autoPlay}
      muted={muted}
      width={width}
      height={height}
      preload={preload}
      ref={videoRef}
      // src={isVisible ? src : ''}
      src={src}
      controls={controls}></video>
  );
};

export default IntersectionVideo;
