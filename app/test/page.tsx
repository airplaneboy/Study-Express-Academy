import { getQuestion } from '@/sanity/sanity-utils';
import TeX from '@/components/TeX';
import TeXExtractor from '@/containers/TeXExtractor';

const Test = async () => {
  const question: { options: any[] } = await getQuestion('b2e0b5fc-2b9e-4938-b815-61923dd740ac');
  question.options.push('3$', '3 $ 5\\$ $ ');

  return (
    <div className='h-[200vh] flex flex-col gap-1'>
      {question.options.map((option: string, index) => {
        return (
          <span key={index}>
            {/* {option
              .split(/\$\$(.*?)\$\$/g)
              .map((match, index) =>
                index % 2 === 0 ? (
                  match
                    .split(/\$ (.*?) \$/g)
                    .map((match, index) => (index % 2 === 0 ? match : <TeX key={index}>{match}</TeX>))
                ) : (
                  <TeX key={index}>{match}</TeX>
                )
              )} */}
            <TeXExtractor value={option} />
          </span>
        );
      })}
    </div>
  );
};

export default Test;
