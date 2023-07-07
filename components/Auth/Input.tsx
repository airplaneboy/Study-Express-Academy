import classNames from 'classnames';
interface Input {
  placeholder: string | undefined;
  id: string | undefined;
  name: string | undefined;
  type: string | undefined;
  autoComplete: string | undefined;
  inputRef: React.LegacyRef<HTMLInputElement> | undefined;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input = ({ placeholder, id, name, type, autoComplete, inputRef, className, onChange }: Input) => {
  const classes = className
    ? classNames('input', className)
    : 'input border-transparent focus:ring-indigo-500 focus:border-indigo-500 ';

  return (
    // <div className='flex flex-col '>
    //   {/* TODO: Decide on leaving label or not */}
    //   {/* <label htmlFor={id} className='label'>{placeholder}</label> */}

    <div className='mt-2'>
      <input
        ref={inputRef}
        autoCapitalize='off'
        autoCorrect='off'
        placeholder={placeholder}
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className={classes}
        onChange={onChange}
      />
    </div>
    /* <div className='relative'>
            <input
              type='text'
              id='floating_outlined'
              className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='floating_outlined'
              className='absolute text-sm text-gray-400 font-bold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-5 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
            >
              Floating outlined
            </label>
          </div> */
  );
};

export default Input;
