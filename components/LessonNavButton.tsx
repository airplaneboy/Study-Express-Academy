import { HiArrowRight, HiChevronRight } from 'react-icons/hi';
//@ts-ignore
import cx from 'clsx/lite';

export const SummaryButton = ({ children, onClick }: { children: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={
        'border-blue-600 border-2 hover:bg-blue-700 hover:text-white text-blue-600 px-4 py-[6px] rounded-2xl flex items-center justify-center gap-2 ml-auto w-fit max-md:mr-auto max-md:w-[80%]'
      }>
      <span className='font-medium'>{children}</span>
      <HiArrowRight className='top-[1px] relative' />
    </button>
  );
};

const LessonNavButton = ({
  children,
  onClick,
  selectedOption,
}: {
  children: string;
  onClick: () => void;
  selectedOption?: string;
}) => {
  return (
    <button
      disabled={selectedOption == '' && true}
      onClick={onClick}
      className={cx(
        selectedOption == '' ? 'bg-gray-400 ' : 'bg-blue-600 hover:bg-blue-700 ',
        'rounded-2xl flex items-center justify-center sm:gap-2 lg:ml-auto w-fit text-white px-4 py-1 sm:py-2 overflow-hidden'
      )}>
      <span className='truncate'>{children}</span>
      <HiChevronRight className='top-[1px] relative min-w-[16px] min-h-[16px]' />
    </button>
  );
};

export default LessonNavButton;
