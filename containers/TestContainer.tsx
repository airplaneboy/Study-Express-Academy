import { getCurrentUser, updateCurrentUser } from '@/lib/data/user';
import { getTest } from '@/sanity/sanity-utils';
import { fetchGET } from '@/utils/fetchOption';
import shuffle from 'lodash/shuffle';
import sampleSize from 'lodash/samplesize';
import sample from 'lodash/sample';
import remove from 'lodash/remove';
import DisplayQuestions from './DisplayQuestions';

//#region Types
export type UserTests = UserTest[];

export type UserTest = {
  id: string;
  numberOfTimesPassed: number;
  numberOfTimesTaken: number;
  scores: Scores[];
  results: Results[];
  numberOfQuestions: number;
  isCompleted?: boolean;
  currentTest: { selectedQuestions: any[]; shuffledChoices: any[]; currentTestResult: any };
};

export type Test = { _id: string; questions: any[]; title: string };

export type Scores = {
  date?: string;
  numberOfCorrectAnswers: number;
  numberOfQuestion: number;
  average: number;
};

export type UserQuestions = {
  id: string;
  numberOfTimesCorrect: number;
  numberOfTimesTaken: number;
  timeline: { date: string; isCorrect: boolean }[];
}[];

export type Results = { isCorrect: boolean; questionId: number; date?: string }[];
//#endregion

const createTestQuestions = (test: Test) => {
  const selectedQuestions = sampleSize(shuffle(test?.questions), 5);
  return {
    selectedQuestions,
    shuffledChoices: selectedQuestions.map(
      (question: any) => (question.options = shuffle([...question.options, question.answer]))
    ),
    currentTestResult: [],
  };
};
const TestContainer = async ({ params }: { params: { content: string } }) => {
  const test: Test = await getTest(params.content);

  if (!test || !test.questions)
    return (
      <span className='italic text-gray-500 px-4 py-2 w-full h-full flex items-center justify-center text-center'>
        An error occurred displaying questions. Please contact support to resolve issue.
      </span>
    );
  const user = await getCurrentUser();

  const foundTest = user?.contentProgress?.tests?.find((item: any) => item.id == test._id);

  let selectedQuestions = foundTest.currentTest?.selectedQuestions;
  let shuffledChoices = foundTest.currentTest?.shuffledChoices;
  let currentTestProgress = foundTest.currentTest?.currentTestResult;

  if (!selectedQuestions || !shuffledChoices) {
    const createdQuestions = createTestQuestions(test);

    selectedQuestions = createdQuestions.selectedQuestions;
    shuffledChoices = createdQuestions.shuffledChoices;
  }

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
      const currentQuestionProgress: UserQuestions = user?.contentProgress?.questions;

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

    //Add date to score
    scores.date = new Date(Date.now()).toISOString();
    const currentTestProgress: UserTests = user?.contentProgress.tests;
    const testFound = remove(currentTestProgress, (item) => item.id == test._id)[0];

    //Add id to test

    //Check if test exists
    if (testFound) {
      testFound.currentTest.currentTestResult = results;

      //If test is completed, update all test information
      if (testCompleted) {
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
        testFound.currentTest = createTestQuestions(test);
      }
      currentTestProgress.push(testFound);
      await updateCurrentUser({
        data: { contentProgress: { tests: currentTestProgress } },
      });
    } else {
      currentTestProgress.push({
        id: test._id,
        currentTest: { currentTestResult: results, selectedQuestions, shuffledChoices },
      });

      if (testCompleted) {
        //Check if passed
        const isPassedNumber = scores.average >= 0.5 ? 1 : 0;

        currentTestProgress.push({
          numberOfTimesPassed: isPassedNumber,
          numberOfTimesTaken: 1,
          id: test._id,
          results: [results],
          scores: [scores],
          numberOfQuestions: test.questions.length,
          currentTest: createTestQuestions(test),
        });
      }

      await updateCurrentUser({
        data: { contentProgress: { tests: currentTestProgress } },
      });
    }

     if (updatedQuestionsProgress) {
       //Update Question
       const currentQuestionProgress: UserQuestions = user?.contentProgress?.questions;

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
  };

  return (
    <>
      <div className='px-2 sm:px-0 md:px-10 py-6 max-sm:mb-12 relative h-full'>
        <div className='max-w-2xl mx-auto'>
          <header className='text-left md:text-center text-base md:text-2xl mt-8 md:mt-4 mb-3 md:mb-12 text-gray-800 font-extrabold'>
            {test.title}
          </header>
          <DisplayQuestions
            currentTestProgress={currentTestProgress}
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
