import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getCurrentUser } from '@/lib/data/user';
import { UserQuestions } from '@/containers/TestContainer';
import { formatDistanceToNowStrict, formatRelative } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { HiCheck, HiX } from 'react-icons/hi';
//@ts-ignore
import cx from 'clsx/lite';

const Results = async () => {
  const user = await getCurrentUser();
  const questions: UserQuestions = user.contentProgress.questions;
  // console.log(questions);

  return (
    <div>
      <Accordion type='single' collapsible>
        {user.contentProgress.tests.map((test: any, index: number) => {
          return (
            <AccordionItem
              className={
                'data-[state="open"]:shadow-inner transition-shadow shadow-gray-300 px-4 data-[state="open"]:rounded-2xl data-[state="open"]:bg-gray-50 data-[state="open"]:text-gray-400 text-gray-800'
              }
              key={test._id}
              value={`item ${index + 1}`}>
              <AccordionTrigger className='hover:no-underline' value={test._id}>
                {test.testTitle}
              </AccordionTrigger>
              <AccordionContent>
                <Accordion
                  className={'mt-5 bg-white rounded-2xl overflow-hidden text-gray-700 '}
                  type='single'
                  collapsible>
                  {test.results.map((result: any, index: number) => {
                    const average = test.scores[index].average;
                    return (
                      <AccordionItem
                        className={cx(
                          average >= 0.8
                            ? 'bg-green-50 text-green-800 border-green-300'
                            : average <= 0.5
                            ? 'bg-red-50 text-red-800 border-red-300'
                            : '',
                          'px-4'
                        )}
                        key={index}
                        value={`test ${index + 1}`}>
                        <AccordionTrigger className='hover:no-underline' key={index}>
                          <div className='flex justify-between px-10 w-full'>
                            <span>{average * 100}%</span>
                            <span>
                              {test.scores[index].numberOfCorrectAnswers}/{test.numberOfQuestions}
                            </span>
                            <span className='min-w-[300px] flex gap-3 items-center justify-between flex-row-reverse'>
                              {formatRelative(test.scores[index].date, new Date(), {
                                locale: {
                                  ...enUS,
                                  formatRelative: (token) => {
                                    return {
                                      lastWeek: "'last' eeee 'at' p",
                                      yesterday: "'yesterday at' p",
                                      today: "'today at' p",
                                      tomorrow: "'tomorrow at' p",
                                      nextWeek: "eeee 'at' p",
                                      other: `PP ' at ' p '|' '${formatDistanceToNowStrict(test.scores[index].date, {
                                        addSuffix: true,
                                      })}'`,
                                    }[token];
                                  },
                                },
                              })
                                .split('|')
                                .map((item: string, index) => {
                                  if (index != 0)
                                    return (
                                      <span className='text-xs text-gray-500' key={index}>
                                        {item}
                                      </span>
                                    );
                                  else return <span key={index}>{item}</span>;
                                })}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <Accordion className='mt-5 rounded-2xl overflow-hidden' type='single' collapsible>
                            {result.map((question: any, index: number) => {
                              const foundQuestion = questions.find((item) => item.id == question.questionId);
                              const correct = question.isCorrect;
                              return (
                                <AccordionItem
                                  className={cx(
                                    correct >= 0.8
                                      ? 'bg-green-100 text-green-800 border-green-300'
                                      : correct <= 0.5
                                      ? 'bg-red-100 text-red-800 border-red-300'
                                      : '',
                                    'px-12'
                                  )}
                                  key={index}
                                  value={`question ${index + 1}`}>
                                  <AccordionTrigger key={index} className=''>
                                    <span className='truncate max-w-2xl'>{foundQuestion?.questionTitle}</span>
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <div className='flex justify-between gap-5 items-center mt-5 px-5'>
                                      <span>{correct ? <HiCheck size={20} /> : <HiX size={20} />}</span>
                                      <span>Times attempted: {foundQuestion?.numberOfTimesTaken}</span>
                                      <span>Times attempted: {foundQuestion?.numberOfTimesTaken}</span>
                                      <span>Times answered correctly: {foundQuestion?.numberOfTimesCorrect}</span>
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              );
                            })}
                          </Accordion>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Results;
function isSameUTCWeek(date: any, baseDate: any, options: any) {
  throw new Error('Function not implemented.');
}

function thisWeek(day: any) {
  throw new Error('Function not implemented.');
}

function nextWeek(day: any) {
  throw new Error('Function not implemented.');
}
