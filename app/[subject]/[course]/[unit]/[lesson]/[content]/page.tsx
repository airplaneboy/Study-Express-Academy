import VideoPlayer from '@/components/VideoPlayer';
import { getArticle, getTest, getVideo } from '@/sanity/sanity-utils';
import CustomPortableText from '@/components/CustomPortableText';
import shuffle from 'lodash.shuffle';
import sampleSize from 'lodash.samplesize';
import DisplayQuestions from '@/containers/DisplayQuestions';
import { fetchGET } from '@/utils/fetchOption';
import sample from 'lodash.sample';
import { getCurrentUser, updateCurrentUser } from '@/lib/data/user';
import remove from 'lodash/remove';
import { HiCheck } from 'react-icons/hi2';
import confetti, { fireWorks } from '@/components/Confetti';
import MarkAsRead from '@/components/MarkAsRead';

// export async function generateStaticParams() {
//   // const content = await getContentsSlug();
//   // return lessons.map((lesson: { slug: string }) => ({
//   //   lesson: lesson.slug,
//   // }));
// }

export type UserTests = UserTest[];

export type UserTest = {
  id: string;
  numberOfTimesPassed: number;
  numberOfTimesTaken: number;
  scores: Scores[];
  results: Results[];
};

export type Test = { _id: string; questions: any[]; title: string };

export type Scores = {
  date?: string;
  numberOfQuestion: number;
  numberOfCorrectAnswers: number;
  average: number;
};

export type UserQuestions = {
  id: string;
  numberOfTimesCorrect: number;
  numberOfTimesTaken: number;
  timeline: { date: string; isCorrect: boolean }[];
}[];

export type Results = { isCorrect: boolean; questionId: number; date?: string }[];

type Article = { id: string; date: string };

const Content = async ({ params }: { params: { content: string } }) => {
  if (params.content.endsWith('video')) {
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
  }

  if (params.content.endsWith('article')) {
    let user = await getCurrentUser();
    const article = await getArticle(params.content);

    let read: boolean;
    if (user?.contentProgress.articles.some((item: Article) => item.id == article._id)) read = true;
    else read = false;

    const updateUserArticle = async () => {
      'use server';

      if (!read) {
        if ((await getCurrentUser())?.contentProgress.articles.some((item: Article) => item.id == article._id)) return;

        const addArticle = { id: article._id, date: new Date(Date.now()).toISOString() };

        await updateCurrentUser({ data: { contentProgress: { articles: addArticle } } });
      }
    };

    return (
      <div className='px-10 py-14 '>
        <div className='max-w-2xl mx-auto'>
          <header className='text-center text-3xl mb-12 text-gray-700  font-extrabold'>{article.title}</header>
          <CustomPortableText value={article.content} />

          {/* Read Button */}
          <MarkAsRead updateUserArticle={updateUserArticle} read={read} />
        </div>
      </div>
    );
  }

  if (params.content.endsWith('test')) {
    const test: Test = await getTest(params.content);
    const questions = test?.questions;
    const shuffledQuestions = shuffle(questions);
    const selectedQuestions = sampleSize(shuffledQuestions, 5);
    const shuffledChoices = selectedQuestions.map(
      (question) => (question.options = shuffle([...question.options, question.answer]))
    );

    const randomQuote = sample(await fetchGET({ path: 'https://zenquotes.io/api/quotes/', revalidate: 86400 }));

    const updateUserProgress = async (
      updatedQuestionsProgress: { id: string; isCorrect: boolean },
      testCompleted: boolean,
      scores: Scores,
      results: Results
    ) => {
      'use server';
      //Get Updated User
      const user = await getCurrentUser();

      if (updatedQuestionsProgress) {
        //Update Question
        const currentQuestionProgress: UserQuestions = user?.contentProgress.questions;

        let questionFound = remove(currentQuestionProgress, (item) => item.id == updatedQuestionsProgress.id)[0];

        //Check if question exists
        if (questionFound) {
          const isCorrectNumber = updatedQuestionsProgress.isCorrect
            ? questionFound.numberOfTimesCorrect + 1
            : questionFound.numberOfTimesCorrect;

          questionFound.numberOfTimesTaken = questionFound.numberOfTimesTaken + 1;
          questionFound.numberOfTimesCorrect = isCorrectNumber;
          questionFound.timeline.push({
            date: new Date(Date.now()).toISOString(),
            isCorrect: updatedQuestionsProgress.isCorrect,
          });

          currentQuestionProgress.push(questionFound);
          await updateCurrentUser({
            data: { contentProgress: { questions: currentQuestionProgress } },
          });
        }
        //If question does not exist, create a new one and add it
        else {
          const isCorrectNumber = updatedQuestionsProgress.isCorrect ? 1 : 0;

          currentQuestionProgress.push({
            id: updatedQuestionsProgress.id,
            numberOfTimesTaken: 1,
            numberOfTimesCorrect: isCorrectNumber,
            timeline: [{ date: new Date(Date.now()).toISOString(), isCorrect: updatedQuestionsProgress.isCorrect }],
          });

          await updateCurrentUser({
            data: { contentProgress: { questions: currentQuestionProgress } },
          });
        }
      }

      if (testCompleted) {
        //Add date to score
        scores.date = new Date(Date.now()).toISOString();
        const currentTestProgress: UserTests = user?.contentProgress.tests;
        const testFound = remove(currentTestProgress, (item) => item.id == test._id)[0];

        //Add id to test

        //Check if test exists
        if (testFound) {
          //Check if passed
          const isPassedNumber =
            scores.average >= 0.5 ? testFound.numberOfTimesPassed + 1 : testFound.numberOfTimesPassed;

          //Update Test
          testFound.numberOfTimesTaken = testFound.numberOfTimesTaken + 1;
          testFound.numberOfTimesPassed = isPassedNumber;
          testFound.scores.push(scores);
          testFound.results.push(results);

          currentTestProgress.push(testFound);
          const updatedUser = await updateCurrentUser({
            data: { contentProgress: { tests: currentTestProgress } },
          });
        }
        //If test does not exist
        else {
          //Check if passed
          const isPassedNumber = scores.average >= 0.5 ? 1 : 0;

          //Create Test
          currentTestProgress.push({
            numberOfTimesPassed: isPassedNumber,
            numberOfTimesTaken: 1,
            id: test._id,
            results: [results],
            scores: [scores],
          });
          const updatedUser = await updateCurrentUser({
            data: { contentProgress: { tests: currentTestProgress } },
          });
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
