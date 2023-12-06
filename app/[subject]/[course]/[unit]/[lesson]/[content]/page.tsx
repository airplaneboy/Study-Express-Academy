import VideoPlayer from '@/components/VideoPlayer';
import { getArticle, getTest, getVideo } from '@/sanity/sanity-utils';
import CustomPortableText from '@/components/CustomPortableText';
import shuffle from 'lodash.shuffle';
import sampleSize from 'lodash.samplesize';
import DisplayQuestions from '@/containers/DisplayQuestions';

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
    return (
      <div className='overflow-y-auto flex flex-col w-full h-full md:px-4 py-2 lg:px-10 pb-10'>
        <header className='text-base tracking-wide font-extrabold py-4  text-gray-800'>{video.title}</header>
        <VideoPlayer url={url} />
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
  }

  if (params.content.endsWith('article')) {
    const article = await getArticle(params.content);
    return (
      <div className='px-10 py-6 '>
        <div className='max-w-2xl mx-auto'>
          <header className='text-center text-3xl mb-12 text-gray-700  font-extrabold'>{article.title}</header>
          <CustomPortableText value={article.content} />
        </div>
      </div>
    );
  }

  if (params.content.endsWith('test')) {
    const test = await getTest(params.content);
    const questions = test?.questions;
    const shuffledQuestions = shuffle(questions);
    const selectedQuestions = sampleSize(shuffledQuestions, 5);
    const shuffledChoices = selectedQuestions.map(
      (question) => (question.options = shuffle([...question.options, question.answer]))
    );

    return (
      <>
        <div className='px-10 py-6 relative h-full'>
          <div className='max-w-2xl mx-auto'>
            <header className='text-center text-2xl mb-12 text-gray-800 font-extrabold'>{test.title}</header>
            <DisplayQuestions shuffledChoices={shuffledChoices} selectedQuestions={selectedQuestions} />{' '}
          </div>
        </div>
      </>
    );
  }
};

export default Content;
