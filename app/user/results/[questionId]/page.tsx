import QuestionViewer from '@/containers/QuestionViewer';
import { getQuestion } from '@/sanity/sanity-utils';
import shuffle from 'lodash/shuffle';

const ViewQuestion = async ({ params }: { params: { questionId: string; selectedOption?: string } }) => {
  const question = await getQuestion(params.questionId);

  return (
    <QuestionViewer
      selectedOption={params.selectedOption}
      correctAnswer={question.answer}
      question={question.question}
      shuffledAnswerChoices={shuffle([...question.options, question.answer])}
      solution={question.solution}
    />
  );
};

export default ViewQuestion;
