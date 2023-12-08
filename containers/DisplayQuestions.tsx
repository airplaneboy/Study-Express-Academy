'use client';
import { useState, useEffect } from 'react';
import { HiCheck, HiX } from 'react-icons/hi';
import LessonNavButton, { SummaryButton } from '@/components/LessonNavButton';
import CustomPortableText from '@/components/CustomPortableText';
import Confetti, { fireWorks, realisticConfetti } from '@/components/Confetti';
import Quotes from '@/components/Quotes';
import { Scores, Results } from '@/app/[subject]/[course]/[unit]/[lesson]/[content]/page';

const DisplayQuestions = ({
  selectedQuestions,
  shuffledChoices,
  quote,
  updateUser,
}: {
  quote: any;
  shuffledChoices: any[];
  selectedQuestions: any[];
  updateUser: (
    questionProgress: { id: string; isCorrect: boolean },
    testCompleted: boolean,
    scores: Scores,
    results: Results
  ) => void;
}) => {
  const [flag, setFlag] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(selectedQuestions[currentIndex]?.answer);
  const [shuffledAnswerChoices, setShuffledAnswerChoices] = useState<any[]>(shuffledChoices[currentIndex]);
  const [showSummary, setShowSummary] = useState(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [result, setResult] = useState<Results>([]);
  const [currentResult, setCurrentResult] = useState<any>({});
  const [average, setAverage] = useState<number>(0);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState<number>(0);

  useEffect(() => {
    setShuffledAnswerChoices(shuffledChoices[currentIndex]);
    setCorrectAnswer(selectedQuestions[currentIndex]?.answer);

    return () => {};
  }, [shuffledChoices, currentIndex, selectedQuestions]);

  useEffect(() => {
    //Flag to prevent execution on first load
    if (!flag) return setFlag(true);

    updateUser(
      currentResult,
      testCompleted,
      { numberOfCorrectAnswers, numberOfQuestion: result?.length, average },
      result
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testCompleted, currentResult]);

  const handleNextQuestion = () => {
    if (currentIndex < selectedQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption('');
    }
    // if (currentIndex >= selectedQuestions.length - 1) setTestCompleted(true);
    return setShowExplanation(false);
  };

  const check = () => {
    const id = selectedQuestions[currentIndex]?._id;

    if (correctAnswer == selectedOption) {
      setNumberOfCorrectAnswers((prev) => prev + 1);
      setResult((prev) => [...prev, { questionId: id, isCorrect: true }]);
      setCurrentResult({ id, isCorrect: true });
      Confetti();
    } else {
      setResult((prev) => [...prev, { questionId: id, isCorrect: false }]);
      setCurrentResult({ id, isCorrect: false });
    }

    setShowExplanation(true);
    if (currentIndex >= selectedQuestions.length - 1) {
      setAverage(+(numberOfCorrectAnswers / result.length).toFixed(2));
      setTestCompleted(true);
    }
  };

  const ShowSummary = () => {
    return (
      <div className='absolute inset-x-0 bottom-0 top-[20%] flex flex-col items-center justify-center gap-5'>
        <Quotes author={quote?.a} quote={quote?.q} />
        <span className='text-lg font-extrabold text-gray-800'>
          {result.filter((item) => item.isCorrect == true).length}/{result.length} correct!
        </span>
      </div>
    );
  };

  const Explanation = () => {
    return (
      <div className='border-2 bg-gray-100 rounded-2xl px-8 py-8 mt-10 mb-5 text-gray-700 '>
        <span className='font-bold text-bg'>Explanation: </span>
        <br />
        <br />
        <CustomPortableText value={selectedQuestions[currentIndex]?.solution} />
      </div>
    );
  };

  const choiceLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  return (
    <>
      {showSummary ? (
        <ShowSummary></ShowSummary>
      ) : (
        <div>
          <span className='text-gray-700  text-lg'>{selectedQuestions[currentIndex].question}</span>
          <fieldset className='flex flex-col gap-2 mt-6'>
            <legend className='w-[1px] h-[1px] overflow-hidden m-[-1px] p-0 absolute border-0 text-[0px] clip'>
              Pick your answer
            </legend>

            <ul className=' divide-y-2'>
              {shuffledAnswerChoices.map((answerChoice: any, index: any) => {
                return (
                  <li key={index}>
                    <label
                      className={
                        correctAnswer == answerChoice && showExplanation
                          ? 'border-2 border-green-600 bg-green-100 py-3 px-6 block relative'
                          : selectedOption === answerChoice
                          ? showExplanation
                            ? result[currentIndex]?.isCorrect
                              ? ''
                              : 'border-2 border-red-600 bg-red-100 py-3 px-6 block relative'
                            : 'border-2 border-blue-600 bg-blue-100 py-3 px-6 block relative'
                          : `py-3 px-6 block relative border-2 border-transparent`
                      }>
                      <span className='z-10 h-7 absolute block top-1/2 -translate-y-1/2'>
                        <input
                          disabled={showExplanation}
                          className='appearance-none w-[1px] h-[1px] overflow-hidden absolute z-10 inline-block clip'
                          type='radio'
                          value={answerChoice}
                          name='option'
                          onChange={(e) => setSelectedOption(e.target.value)}
                          checked={selectedOption === answerChoice}
                        />
                        <div className='inline-block relative'>
                          <div
                            className={
                              correctAnswer == answerChoice && showExplanation
                                ? 'block h-7 w-7 border-2 border-green-600 rounded-full'
                                : showExplanation && selectedOption == answerChoice
                                ? result[currentIndex]?.isCorrect
                                  ? ''
                                  : 'block h-7 w-7 border-2 border-red-600 rounded-full'
                                : 'block h-7 w-7 border-2 border-blue-600 rounded-full'
                            }></div>
                          <div
                            className={
                              correctAnswer == answerChoice && showExplanation
                                ? 'absolute w-7 h-7 border-2 border-transparent flex items-center justify-center top-[0px] text-sm bg-green-600 text-white rounded-full'
                                : selectedOption == answerChoice
                                ? showExplanation
                                  ? result[currentIndex]?.isCorrect
                                    ? ''
                                    : 'absolute w-7 h-7 border-2 border-transparent flex items-center justify-center top-[0px] text-sm bg-red-600 text-white rounded-full'
                                  : 'absolute w-7 h-7 border-2 border-transparent flex items-center justify-center top-[0px] text-sm bg-blue-600 text-white rounded-full'
                                : 'absolute w-7 h-7 border-2 border-transparent flex items-center justify-center top-[0px] text-blue-600 text-sm'
                            }>
                            {choiceLetters[index]}
                          </div>
                        </div>
                      </span>
                      <span className='ml-11 text-gray-700 '>{answerChoice}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>
          {showExplanation && <Explanation />}

          <div
            className={
              'bg-white border-gray-300 border-t-2 fixed bottom-0 left-0 right-0 px-4 py-2 max-md:absolute max-md:bottom-0 max-md:w-[90%] max-md:-translate-x-1/2 max-md:left-1/2'
            }>
            <div className='flex items-center max-w-fit ml-auto gap-8'>
              <div className='flex items-center gap-2'>
                <span className='font-bold text-gray-700 mr-2'>
                  Question {currentIndex + 1} of {selectedQuestions.length}
                </span>
                {selectedQuestions.map((question, index) => {
                  // return currentIndex > index || (currentIndex == index && testCompleted) ? (
                  return result[index]?.isCorrect != null || (currentIndex == index && testCompleted) ? (
                    result[index]?.isCorrect ? (
                      <HiCheck key={index} size='20px' className='text-green-700' />
                    ) : (
                      <HiX key={index} size='20px' className='text-red-700' />
                    )
                  ) : (
                    <span
                      key={index}
                      className={
                        currentIndex == index
                          ? 'border-2 border-gray-700 w-3 h-3 rounded-full inline-block'
                          : 'border-2 border-gray-500 w-2 h-2 rounded-full inline-block'
                      }
                    />
                  );
                })}
              </div>
              {!showExplanation ? (
                <LessonNavButton
                  selectedOption={selectedOption}
                  onClick={() => {
                    check();
                  }}>
                  Check
                </LessonNavButton>
              ) : !testCompleted ? (
                <LessonNavButton selectedOption={selectedOption} onClick={() => handleNextQuestion()}>
                  Next Question
                </LessonNavButton>
              ) : (
                <SummaryButton
                  onClick={() => {
                    setShowSummary(true);
                    // const average = result.filter((item) => item.isCorrect == true).length / result.length;
                    // setScore(+average.toFixed(2));
                    if (average >= 0.5) {
                      realisticConfetti();
                      if (average >= 0.95) fireWorks({ durationValue: 2 });
                    }
                  }}>
                  Show Summary
                </SummaryButton>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayQuestions;
