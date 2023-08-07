const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <div className='aspect-w-16 aspect-h-9'>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title='YouTube video player'
        // frameBorder='0'
        style={{ border: 0 }}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        className='w-full h-full rounded-lg'></iframe>
    </div>
  );
};

export default YouTubeEmbed;
