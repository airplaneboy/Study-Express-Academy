interface Button {
  value: string | number | boolean;
}

const Button = ({ value }: Button) => {
  return (
    <button type='submit' className='register_button'>
      {value}
    </button>
  );
};

export default Button;
