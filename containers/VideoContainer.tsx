import VideoPlayer from '@/components/VideoPlayer';
import VideoPlayer2 from '@/components/VideoPlayer2';
import { getCurrentUser, updateCurrentUser } from '@/lib/data/user';
import { getVideo } from '@/sanity/sanity-utils';
import remove from 'lodash/remove';

type Video = {
  id: number;
  numberOfTimesWatched: number;
  timeline: { date: string; watchTime: number }[];
  totalDurationWatched: number;
  lastUpdated: string;
  videoDuration: number;
  lastSecondWatched: number;
};

const VideoContainer = async ({ params }: { params: { content: string } }) => {
  const video = await getVideo(params.content);
  const user = await getCurrentUser();

  const updateUserVideo = async ({
    videoDuration,
    watchTime,
    lastSecondWatched,
  }: {
    lastSecondWatched: number;
    videoDuration: number;
    watchTime: number;
  }) => {
    'use server';
    const user = await getCurrentUser();
    const currentVideoProgress: Video[] = user?.contentProgress.videos;
    const videoFound: Video = remove(currentVideoProgress, (item: Video) => item.id == video._id)[0];

    if (videoFound) {
      const totalDurationWatched = videoFound.totalDurationWatched + watchTime;
      const date1: any = new Date(videoFound.lastUpdated);
      const date2: any = new Date(Date.now());

      const difference = Math.abs(date2 - date1);
      console.log(`Difference: ${difference}`);
      //If less than a day, update only watch time
      if (difference / (1000 * 60 * 60) < 24) {
        const lastIndex = videoFound.timeline.length - 1;
        videoFound.totalDurationWatched = totalDurationWatched;
        videoFound.timeline[lastIndex].watchTime = videoFound.timeline[lastIndex].watchTime + watchTime;
        videoFound.lastSecondWatched = lastSecondWatched;

        currentVideoProgress.push(videoFound);
        const updatedUser = await updateCurrentUser({ data: { contentProgress: { videos: currentVideoProgress } } });
        return console.log(
          `\n\n\t\t=============Updated Video Before a day: \n${JSON.stringify(
            updatedUser.contentProgress.videos,
            null,
            2
          )}\n\n`
        );
      }

      videoFound.totalDurationWatched = totalDurationWatched;
      videoFound.timeline.push({ date: new Date(Date.now()).toISOString(), watchTime });
      videoFound.numberOfTimesWatched++;
      videoFound.lastUpdated = new Date(Date.now()).toISOString();
      videoFound.lastSecondWatched = lastSecondWatched;

      currentVideoProgress.push(videoFound);
      const updatedUser = await updateCurrentUser({ data: { contentProgress: { videos: currentVideoProgress } } });

      console.log(
        `\n\n\t\t=============Updated Video: \n${JSON.stringify(updatedUser.contentProgress.videos, null, 2)}\n\n`
      );
    } else {
      currentVideoProgress.push({
        id: video._id,
        numberOfTimesWatched: 1,
        timeline: [{ date: new Date(Date.now()).toISOString(), watchTime }],
        totalDurationWatched: watchTime,
        videoDuration,
        lastUpdated: new Date(Date.now()).toISOString(),
        lastSecondWatched,
      });

      const updatedUser = await updateCurrentUser({
        data: {
          contentProgress: {
            videos: currentVideoProgress,
          },
        },
      });

      console.log(
        `\n\n\t\t=============Created Video: \n${JSON.stringify(updatedUser.contentProgress.videos, null, 2)}\n\n`
      );
    }
  };

  return (
    <div className='overflow-y-auto flex flex-col w-full h-full md:px-4 py-2 lg:px-10 pb-10'>
      <header className='text-base tracking-wide font-extrabold py-4  text-gray-800'>{video.title}</header>
      <VideoPlayer2
        lastSecond={user?.contentProgress.videos.find((items: Video) => items.id == video._id)?.lastSecondWatched}
        updateUserVideo={updateUserVideo}
        url={video.url}
      />
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
