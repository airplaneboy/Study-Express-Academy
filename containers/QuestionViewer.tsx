import CustomPortableText from '@/components/CustomPortableText';
//@ts-ignore
import cx from 'clsx/lite';

const QuestionViewer = ({
  question,
  shuffledAnswerChoices,
  correctAnswer,
  selectedOption,
  solution,
}: {
  question: string;
  shuffledAnswerChoices: any[];
  correctAnswer: string;
  selectedOption?: string;
  solution: any;
}) => {
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
      <div className='leading-8'>
        <span className='text-gray-700  text-lg'>{question}</span>
        <fieldset className='flex flex-col gap-2 mt-6'>
          <legend className='w-[1px] h-[1px] overflow-hidden m-[-1px] p-0 absolute border-0 text-[0px] clip'>
            Pick your answer
          </legend>

          <ul className=' divide-y-2'>
            {shuffledAnswerChoices.map((answerChoice: any, index: any) => {
              return (
                <li key={index}>
                  <label
                    className={cx(
                      correctAnswer == answerChoice
                        ? 'border-2 border-green-600 bg-green-100'
                        : selectedOption === answerChoice
                        ? 'border-red-600 bg-red-100'
                        : `border-transparent`,
                      'py-3 px-3 sm:px-6 block relative border-2'
                    )}>
                    <span className='z-10 h-7 absolute block top-1/2 -translate-y-1/2'>
                      <input
                        disabled={true}
                        className='appearance-none w-[1px] h-[1px] overflow-hidden absolute z-10 inline-block clip'
                        type='radio'
                        value={answerChoice}
                        name='option'
                        checked={selectedOption === answerChoice}
                      />
                      <div className='inline-block relative'>
                        <div
                          className={cx(
                            correctAnswer == answerChoice
                              ? 'border-green-600'
                              : selectedOption == answerChoice
                              ? 'border-red-600'
                              : 'border-blue-600',
                            'block h-7 w-7 border-2 rounded-full'
                          )}></div>
                        <div
                          className={cx(
                            correctAnswer == answerChoice
                              ? ' bg-green-600 text-white rounded-full'
                              : selectedOption == answerChoice
                              ? 'bg-red-600 text-white rounded-full'
                              : 'text-blue-600',
                            'absolute w-7 h-7 border-2 border-transparent flex items-center justify-center top-[0px] text-sm'
                          )}>
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

        <div className='border-2 bg-gray-100 rounded-2xl px-4 sm:px-8 py-4 sm:py-8 mt-10 mb-5 text-gray-700 '>
          <span className='font-bold text-bg'>Explanation: </span>
          <br />
          <br />
          <CustomPortableText className='text-base sm:text-xl' value={solution} />
        </div>
      </div>
    </>
  );
};

export default QuestionViewer;
