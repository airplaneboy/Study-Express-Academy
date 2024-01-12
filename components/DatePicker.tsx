import Datepicker from 'react-tailwindcss-datepicker';

const DatePicker = ({ value, setValue }: { value: any; setValue: any }) => {
  return (
    <Datepicker
      inputId='datepicker'
      inputClassName='!h-auto !mt-1 !py-1 sm:!py-2 focus:!ring-blue-500 !border-2 focus:!border-blue-500 !block !w-full sm:!text-sm !text-gray-700 !border-gray-300 !rounded-2xl'
      toggleClassName='text-gray-400 px-3 h-full right-0 absolute top-0'
      useRange={false}
      asSingle={true}
      value={value}
      onChange={(value) => {
        setValue(value);
      }}
    />
  );
};
export default DatePicker;
