import ArticleContainer from '@/containers/ArticleContainer';
import VideoContainer from '@/containers/VideoContainer';
import TestContainer from '@/containers/TestContainer';

// export async function generateStaticParams() {
//   // const content = await getContentsSlug();
//   // return lessons.map((lesson: { slug: string }) => ({
//   //   lesson: lesson.slug,
//   // }));
// }

const Content = async ({ params }: { params: { content: string } }) => {
  if (params.content.endsWith('video')) {
    return <VideoContainer params={params} />;
  }

  if (params.content.endsWith('article')) {
    return <ArticleContainer params={params} />;
  }

  if (params.content.endsWith('test')) {
    return <TestContainer params={params} />;
  }
};
export default Content;
