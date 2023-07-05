interface Input {
  placeholder: string | undefined;
  id: string | undefined;
  name: string | undefined;
  type: string | undefined;
  autoComplete: string | undefined;
  inputRef: any;
}

const Input = ({ placeholder, id, name, type, autoComplete, inputRef }: Input) => {
  return (
    <div className='flex flex-col '>
      {/* TODO: Decide on leaving label or not */}
      {/* <label htmlFor={id} className='label'>{placeholder}</label> */}

      <div className='mt-2'>
        <input
          ref={inputRef}
          autoCapitalize='off'
          autoCorrect='off'
          // onChange={(e) => (inputRef.current = e.target.value)}
          placeholder={placeholder}
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required
          className='input'
        />
      </div>
    </div>
  );
};

export default Input;
