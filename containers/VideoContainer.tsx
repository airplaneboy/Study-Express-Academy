import VideoPlayer from '@/components/VideoPlayer';
import { getVideo } from '@/sanity/sanity-utils';

const VideoContainer = async ({ params }: { params: { content: string } }) => {
  const video = await getVideo(params.content);

  return (
    <div className='overflow-y-auto flex flex-col w-full h-full md:px-4 py-2 lg:px-10 pb-10'>
      <header className='text-base tracking-wide font-extrabold py-4  text-gray-800'>{video.title}</header>
      <VideoPlayer url={video.url} />
      <div className='mt-10 md:max-w-[80%] max-md:mx-auto max-md:border-t-2 md:px-4 px-2 py-2'>
        <span className=' font-extrabold text-xl text-gray-800 block'>Description</span>

        {video?.description ? (
          <span className='text-gray-600 md:text-lg'>{video.description}</span>
        ) : (
          <span className='text-gray-500 text-base italic mt-3 inline-block'>No Description</span>
        )}
      </div>
    </div>
  );
};

export default VideoContainer;
