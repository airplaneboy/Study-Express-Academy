import { getCurrentUser, updateCurrentUser } from '@/lib/data/user';
import { getTest } from '@/sanity/sanity-utils';
import { fetchGET } from '@/utils/fetchOption';
import shuffle from 'lodash/shuffle';
import sampleSize from 'lodash/samplesize';
import sample from 'lodash/sample';
import remove from 'lodash/remove';
import DisplayQuestions from './DisplayQuestions';

export type UserTests = UserTest[];

export type UserTest = {
  id: string;
  numberOfTimesPassed: number;
  numberOfTimesTaken: number;
  scores: Scores[];
  results: Results[];
  numberOfQuestions: number;
  isCompleted?: boolean;
};

export type Test = { _id: string; questions: any[]; title: string };

export type Scores = {
  date?: string;
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

const TestContainer = async ({ params }: { params: { content: string } }) => {
  const test: Test = await getTest(params.content);
  const shuffledQuestions = shuffle(test?.questions);
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
        testFound.isCompleted = true;
        testFound.numberOfQuestions = test.questions.length;

        currentTestProgress.push(testFound);
        await updateCurrentUser({
          data: { contentProgress: { tests: currentTestProgress } },
        });
      }
      //If test does not exist
      else {
        //Create Test

        //Check if passed
        const isPassedNumber = scores.average >= 0.5 ? 1 : 0;

        currentTestProgress.push({
          numberOfTimesPassed: isPassedNumber,
          numberOfTimesTaken: 1,
          id: test._id,
          results: [results],
          scores: [scores],
          numberOfQuestions: test.questions.length,
        });
        await updateCurrentUser({
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
};

export default TestContainer;
