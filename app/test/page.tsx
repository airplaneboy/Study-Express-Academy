'use client';
import 'react-phone-number-input/style.css';
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
  isPossiblePhoneNumber,
  parsePhoneNumber,
} from 'react-phone-number-input';
import { useState } from 'react';
import PhoneNumberInput from '@/components/PhoneInput';

export default function Example() {
  const [value, setValue] = useState<any>();
  const [parsedNumber, setParsedNumber] = useState();

  return (
    <div className='flex items-center justify-center flex-col'>
      <PhoneNumberInput></PhoneNumberInput>
      <PhoneInput
        containerComponent='div'
        inputComponent='input'
        autoComplete='tel'
        numberInputProps={{}}
        limitMaxLength={true}
        defaultCountry='NG'
        international
        countryCallingCodeEditable={false}
        placeholder='Enter phone number'
        value={value}
        className='!w-full  !rounded-2xl relative'
        onChange={(E164) => setValue(E164)}
      />

      <h1>{value}</h1>
      <br />
      <h1>National: {value && formatPhoneNumber(value)}</h1>
      <h1>International: {value && formatPhoneNumberIntl(value)}</h1>
      <br />
      <h1>Valid Number: {value && isValidPhoneNumber(value).toString()}</h1>
      <h1>Possible Number: {value && isPossiblePhoneNumber(value).toString()}</h1>
    </div>
  );
}
