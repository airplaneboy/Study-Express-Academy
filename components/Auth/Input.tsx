const Input = ({
  placeholder,
  id,
  name,
  type,
  autoComplete,
  label,
}: {
  placeholder: string | undefined;
  id: string | undefined;
  name: string | undefined;
  type: string | undefined;
  autoComplete: string | undefined;
  label: any;
}) => {
  return (
    <div className='flex flex-col '>
      {/* TODO: Decide on leaving label or not */}
      {/* <label htmlFor={id} className='label'>
        {label}
      </label> */}
      <div className='mt-2'>
        <input
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
