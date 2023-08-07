import VideoPlayer from '@/components/VideoPlayer';
import { getVideo } from '@/sanity/sanity-utils';

// export async function generateStaticParams() {
//   // const content = await getContentsSlug();
//   // return lessons.map((lesson: { slug: string }) => ({
//   //   lesson: lesson.slug,
//   // }));
// }

const Content = async ({ params }: { params: { content: string } }) => {
  let url: string = '';
  if (params.content.endsWith('video')) {
    const video = await getVideo(params.content);
    url = video.url;
  }

  // const content = getContent
  return (
    <div className='overflow-y-auto flex flex-col w-full h-full'>
      <VideoPlayer url={url} />
    </div>
  );
};

export default Content;
