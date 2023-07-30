import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
// import { useState } from 'react';

export default function PhoneNumberInput({ value, setValue }: { value: any; setValue: any }) {
  // const [value, setValue] = useState<any>();
  return (
    <PhoneInput
      containerComponent='div'
      inputComponent='input'
      autoComplete='tel'
      numberInputProps={{ id: 'telephone' }}
      limitMaxLength={true}
      defaultCountry='NG'
      international
      countryCallingCodeEditable={false}
      placeholder='Enter phone number'
      value={value}
      className='!w-full !rounded-2xl relative !mt-1 '
      onChange={(E164) => setValue(E164)}
    />
  );
}
