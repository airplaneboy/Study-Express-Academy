import classNames from 'classnames';

interface IError {
  content: string;
  className?: string;
}

const Error = ({ content, className }: IError) => {
  const classes = classNames(
    className,
    'bg-red-100 px-4 py-2 my-4 rounded-2xl text-center border border-red-700 text-red-500 '
  );
  return <div className={classes}>{content}</div>;
};

export default Error;
