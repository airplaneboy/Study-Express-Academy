import VideoPlayer from '@/components/VideoPlayer';
import { getArticle, getTest, getVideo } from '@/sanity/sanity-utils';
import CustomPortableText from '@/components/CustomPortableText';
import shuffle from 'lodash.shuffle';
import sampleSize from 'lodash.samplesize';
import DisplayQuestions from '@/containers/DisplayQuestions';
import { fetchGET } from '@/utils/fetchOption';
import sample from 'lodash.sample';
import { getCurrentUser, updateCurrentUser } from '@/lib/data/user';

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
    const test: { _id: string; questions: any[]; title: string } = await getTest(params.content);
    const questions = test?.questions;
    const shuffledQuestions = shuffle(questions);
    const selectedQuestions = sampleSize(shuffledQuestions, 5);
    const shuffledChoices = selectedQuestions.map(
      (question) => (question.options = shuffle([...question.options, question.answer]))
    );

    const randomQuote = sample(await fetchGET({ path: 'https://zenquotes.io/api/quotes/', revalidate: 86400 }));

    const updateUserProgress = async (
      updatedQuestionsProgress: { id: string; isCorrect: boolean },
      testCompleted: boolean
    ) => {
      'use server';
      //Get Updated User
      const user = await getCurrentUser();
      //Update Question
      const currentQuestionProgress: {
        id: string;
        numberOfTimesCorrect: number;
        numberOfTimesTaken: number;
        timeline: { date: Date; isCorrect: boolean }[];
      }[] = user?.contentProgress.questions;

      if (updatedQuestionsProgress) {
        let updatedQuestion: any = {};
        const questionIndex = currentQuestionProgress.findIndex((item) => item.id == updatedQuestionsProgress.id);
        const questionFound = currentQuestionProgress[questionIndex];

        //Check if question exists
        if (questionIndex >= 0) {
          const isCorrectNumber = updatedQuestionsProgress.isCorrect
            ? questionFound.numberOfTimesCorrect + 1
            : questionFound.numberOfTimesCorrect;

          updatedQuestion = {
            ...questionFound,
            numberOfTimesTaken: questionFound.numberOfTimesTaken + 1,
            numberOfTimesCorrect: isCorrectNumber,
            timeline: [
              ...questionFound.timeline,
              { date: new Date(Date.now()).toISOString(), isCorrect: updatedQuestionsProgress.isCorrect },
            ],
          };
          currentQuestionProgress[questionIndex] = updatedQuestion;
          const data = { contentProgress: { ...user?.contentProgress, questions: currentQuestionProgress } };
          await updateCurrentUser({ data });
        }
        //If question does not exist, create a new one and add it
        else {
          const isCorrectNumber = updatedQuestionsProgress.isCorrect ? 1 : 0;
          updatedQuestion = {
            id: updatedQuestionsProgress.id,
            numberOfTimesTaken: 1,
            numberOfTimesCorrect: isCorrectNumber,
            timeline: [{ date: new Date(Date.now()).toISOString(), isCorrect: updatedQuestionsProgress.isCorrect }],
          };
          currentQuestionProgress.push(updatedQuestion);
          const data = { contentProgress: { ...user?.contentProgress, questions: currentQuestionProgress } };
          await updateCurrentUser({ data });
        }
      }
    };

    return (
      <>
        <div className='px-10 py-6 relative h-full'>
          <div className='max-w-2xl mx-auto'>
            <header className='text-center text-2xl mb-12 text-gray-800 font-extrabold'>{test.title}</header>
            <DisplayQuestions
              updateUser={updateUserProgress}
              quote={randomQuote}
              shuffledChoices={shuffledChoices}
              selectedQuestions={selectedQuestions}
            />
          </div>
        </div>
      </>
    );
  }
};

export default Content;
