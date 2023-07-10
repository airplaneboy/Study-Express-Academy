interface Button {
  value: string | number | boolean;
  onClick?: any;
}

const Button = ({ value, onClick }: Button) => {
  return (
    <button type='submit' onClick={onClick} className='register_button'>
      {value}
    </button>
  );
};

export default Button;
