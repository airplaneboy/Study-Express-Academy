import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export default function PhoneNumberInput({
  value,
  setValue,
  className,
}: {
  value: any;
  setValue: any;
  className?: string;
}) {
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
      className={`!w-full !rounded-2xl relative !mt-1 z-0 ${className}`}
      onChange={(E164) => setValue(E164)}
    />
  );
}
