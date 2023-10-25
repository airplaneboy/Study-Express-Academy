'use client';
import { useState } from 'react';
import shuffle from 'lodash.shuffle';

const DisplayQuestions = ({ selectedQuestions }: { selectedQuestions: any[] }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const correctAnswer = selectedQuestions[currentIndex]?.answer;
  const answerChoices = [...selectedQuestions[currentIndex]?.options, correctAnswer];
  const shuffledAnswerChoices = shuffle(answerChoices);

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
  // var alphabet = [];
  // for (var i = 65; i <= 90; i++) {
  //   alphabet.push(String.fromCharCode(i));
  // }

  return (
    <div>
      <span className='text-gray-700 font-plusJakartaSans text-lg'>{selectedQuestions[currentIndex].question}</span>
      <fieldset className='flex flex-col gap-2 mt-6'>
        <legend className='w-[1px] h-[1px] overflow-hidden m-[-1px] p-0 absolute border-0 text-[0px] clip'>
          Pick your answer
        </legend>

        <ul className=' divide-y-2'>
          {answerChoices.map((answerChoice, index) => {
            return (
              <li key={answerChoice}>
                <label
                  className={
                    selectedOption === answerChoice
                      ? 'border-2 border-blue-600 bg-blue-100 py-3 px-6 block relative'
                      : `py-3 px-6 block relative border-2 border-transparent`
                  }>
                  <span className='z-10 h-7 absolute block top-1/2 -translate-y-1/2'>
                    <input
                      className='appearance-none w-[1px] h-[1px] overflow-hidden absolute z-10 inline-block clip'
                      type='radio'
                      value={answerChoice}
                      name='option'
                      onChange={(e) => setSelectedOption(e.target.value)}
                      checked={selectedOption === answerChoice}
                    />
                    <div className='inline-block relative'>
                      <div className='block h-7 w-7 border-2 border-blue-600 rounded-full'></div>
                      <div
                        className={
                          selectedOption == answerChoice
                            ? 'absolute w-7 h-7 border-2 border-transparent flex items-center justify-center top-[1px] text-sm bg-blue-600 text-white rounded-full'
                            : 'absolute w-7 h-7 border-2 border-transparent flex items-center justify-center top-[1px] text-blue-600 text-sm'
                        }>
                        {choiceLetters[index]}
                      </div>
                    </div>
                  </span>
                  <span className='ml-11'>{answerChoice}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>
    </div>
  );
};

export default DisplayQuestions;
