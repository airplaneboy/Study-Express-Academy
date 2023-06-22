const Button = ({ value, classValue }: { value: any; classValue: string }) => {
  let classes = 'register_button';
  if (classValue) {
    classes = classValue + ' register_button';
  }

  return (
    <div className=''>
      <button type='submit' className={classes}>
        {value}
      </button>
    </div>
  );
};

export default Button;
