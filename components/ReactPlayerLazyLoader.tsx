import ReactPlayer from 'react-player/lazy';

export default function ReactPlayerLazyLoader({
  playerRef: ref1,
  url,
  onPlay,
  onPause,
  onReady,
  className,
  controls = true,
  onEnded,
  onError,
  playing,
  stopOnUnmount,
  onStart,
  onSeek,
}: {
  playerRef: React.MutableRefObject<ReactPlayer | any>;
  url: string;
  onPlay?: (() => void) | undefined;
  onPause?: (() => void) | undefined;
  onReady?: ((player: ReactPlayer) => void) | undefined;
  className?: string | undefined;
  controls?: boolean | undefined;
  onEnded?: (() => void) | undefined;
  onError?: ((error: any, data?: any, hlsInstance?: any, hlsGlobal?: any) => void) | undefined;
  playing?: boolean | undefined;
  stopOnUnmount?: boolean | undefined;
  onStart?: (() => void) | undefined;
  onSeek?: ((seconds: number) => void) | undefined;
}) {
  return (
    <ReactPlayer
      playing={playing}
      className={className}
      onStart={onStart}
      onPlay={onPlay}
      onPause={onPause}
      onReady={onReady}
      url={url}
      ref={ref1}
      controls={controls}
      onEnded={onEnded}
      onError={onError}
      onSeek={onSeek}
      stopOnUnmount={stopOnUnmount}
    />
  );
}
